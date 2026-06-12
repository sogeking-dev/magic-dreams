"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { categories } from "@/lib/products";
import SearchOverlay from "@/components/ui/search-overlay";

export default function Nav() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(8,12,5,0.92)] backdrop-blur-md border-b border-[rgba(45,80,22,0.25)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-14 gap-8">
          <Link
            href="/"
            className="font-[family-name:var(--font-space)] text-xs font-medium tracking-[0.3em] uppercase text-[#f4efe6] shrink-0 hover:text-[#d4af37] transition-colors"
          >
            Magic Dreams
          </Link>

          <div className="w-px h-4 bg-[rgba(45,80,22,0.35)] shrink-0" />

          <div className="flex-1 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-6 min-w-max">
              {categories.map((cat) => {
                const active = pathname === `/${cat.id}`;
                return (
                  <Link
                    key={cat.id}
                    href={`/${cat.id}`}
                    className={`font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 ${
                      active ? "text-[#d4af37]" : "text-[#a09a8e] hover:text-[#f4efe6]"
                    }`}
                  >
                    {cat.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Zoeken"
            className="shrink-0 text-[#a09a8e] hover:text-[#d4af37] transition-colors"
          >
            <Search size={16} />
          </button>

          <a
            href="tel:0633897705"
            className="font-[family-name:var(--font-space)] text-[10px] tracking-widest text-[#d4af37] uppercase shrink-0 hidden md:block hover:opacity-70 transition-opacity"
          >
            06 338 977 05
          </a>
        </div>
      </div>
    </nav>

    <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
