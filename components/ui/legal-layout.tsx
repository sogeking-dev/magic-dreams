import Link from "next/link";
import { type ReactNode } from "react";
import SiteFooter from "@/components/ui/site-footer";

interface LegalLayoutProps {
  title: string;
  updated?: string;
  children: ReactNode;
}

export default function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen pt-14 bg-[#0a0f0a]">
      <section className="px-6 md:px-16 pt-16 md:pt-20 pb-16 max-w-3xl mx-auto">
        <Link
          href="/"
          className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.3em] uppercase text-[#8b8b7e] hover:text-[#d4af37] transition-colors mb-8 inline-block"
        >
          ← Terug naar home
        </Link>

        <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.25rem,7vw,4rem)] font-light italic text-[#f4f1e8] leading-tight mb-4">
          {title}
        </h1>
        {updated && (
          <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase text-[#8b8b7e] mb-12">
            Laatst bijgewerkt: {updated}
          </p>
        )}

        <div className="legal-prose space-y-5 font-[family-name:var(--font-space)] text-[13px] leading-relaxed text-[#b8b4a6]">
          {children}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

/** Sectiekop binnen een juridische pagina. */
export function LegalHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-space)] text-[11px] tracking-[0.25em] uppercase text-[#d4af37] pt-6">
      {children}
    </h2>
  );
}
