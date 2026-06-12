import Link from "next/link";
import { store, legalLinks } from "@/lib/store";

export default function SiteFooter() {
  return (
    <footer className="px-6 md:px-16 py-12 border-t border-[rgba(212,175,55,0.1)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Legal + contact links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase text-[#8b8b7e] hover:text-[#d4af37] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={store.phoneHref}
              className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase text-[#8b8b7e] hover:text-[#d4af37] transition-colors"
            >
              {store.phone}
            </a>
            <a
              href={`mailto:${store.email}`}
              className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase text-[#8b8b7e] hover:text-[#d4af37] transition-colors"
            >
              {store.email}
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row justify-between gap-4 border-t border-[rgba(45,80,22,0.15)] pt-6">
          <span className="font-[family-name:var(--font-space)] text-[10px] text-[#8b8b7e] tracking-widest uppercase">
            © {new Date().getFullYear()} {store.legalName} — sinds {store.since}
          </span>
          <span className="font-[family-name:var(--font-space)] text-[10px] text-[#8b8b7e] tracking-widest uppercase">
            {store.street} · {store.city}
          </span>
        </div>
      </div>
    </footer>
  );
}
