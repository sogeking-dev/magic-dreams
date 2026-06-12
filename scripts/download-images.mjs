// Download alle productafbeeldingen van JouwWeb CDN naar public/products/
// Draaien vanuit de project root:  node scripts/download-images.mjs
// LET OP: doe dit ZOLANG JouwWeb nog actief is — daarna zijn de URLs dood.

import { readFile, mkdir, writeFile, access } from "node:fs/promises";
import { dirname } from "node:path";

const manifest = JSON.parse(
  await readFile(new URL("./image-manifest.json", import.meta.url), "utf8")
);

const CONCURRENCY = 8;
let done = 0, skipped = 0, failed = [];

async function download({ url, path }) {
  try {
    await access(path);
    skipped++;
    return; // bestaat al — script is veilig opnieuw te draaien
  } catch {}
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, buf);
    done++;
    process.stdout.write(`\r✓ ${done} gedownload, ${skipped} overgeslagen`);
  } catch (e) {
    failed.push({ url, path, error: e.message });
  }
}

// simpele concurrency pool
const queue = [...manifest];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) await download(queue.shift());
  })
);

console.log(`\n\nKlaar: ${done} gedownload, ${skipped} bestonden al, ${failed.length} mislukt`);
if (failed.length) {
  await writeFile(
    new URL("./failed-downloads.json", import.meta.url),
    JSON.stringify(failed, null, 2)
  );
  console.log("Mislukte downloads → scripts/failed-downloads.json (draai script opnieuw om te retryen)");
}
