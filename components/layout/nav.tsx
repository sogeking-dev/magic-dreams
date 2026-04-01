"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/products";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(13,0,15,0.92)] backdrop-blur-md border-b border-[rgba(124,58,237,0.2)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-14 gap-8">
          <Link
            href="/"
            className="font-[family-name:var(--font-space)] text-xs font-medium tracking-[0.3em] uppercase text-[#f0eaf8] shrink-0 hover:text-[#d4af37] transition-colors"
          >
            Magic Dreams
          </Link>

          <div className="w-px h-4 bg-[rgba(124,58,237,0.3)] shrink-0" />

          <div className="flex-1 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-6 min-w-max">
              {categories.map((cat) => {
                const active = pathname === `/${cat.id}`;
                return (
                  <Link
                    key={cat.id}
                    href={`/${cat.id}`}
                    className={`font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 ${
                      active ? "text-[#d4af37]" : "text-[#9b8fb0] hover:text-[#f0eaf8]"
                    }`}
                  >
                    {cat.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <a
            href="tel:0633897705"
            className="font-[family-name:var(--font-space)] text-[10px] tracking-widest text-[#d4af37] uppercase shrink-0 hidden md:block hover:opacity-70 transition-opacity"
          >
            06 338 977 05
          </a>
        </div>
      </div>
    </nav>
  );
}
