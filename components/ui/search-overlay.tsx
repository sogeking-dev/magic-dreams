"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { categories } from "@/lib/products";
import searchIndex from "@/lib/data/search-index.json";

interface SearchItem {
  name: string;
  brand: string | null;
  slug: string;
  category: string;
  price: number;
  image: string;
}

const items = searchIndex as SearchItem[];
const catLabel = (id: string) =>
  categories.find((c) => c.id === id)?.label ?? id;

function normalize(s: string) {
  // strip diacritics so "creme" matches "crème"
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the field and lock body scroll while open
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];
    return items
      .filter((p) => {
        const hay = normalize(`${p.name} ${p.brand ?? ""} ${catLabel(p.category)}`);
        const haySquished = hay.replace(/\s+/g, "");
        return terms.every((t) => hay.includes(t) || haySquished.includes(t));
      })
      .slice(0, 40);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] bg-[#080c05] backdrop-blur-md"
          onClick={onClose}
        >
          <div
            className="mx-auto max-w-3xl px-6 pt-24 pb-10 h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input row */}
            <div className="flex items-center gap-3 border-b border-[rgba(212,175,55,0.3)] pb-4">
              <Search size={18} className="text-[#d4af37] shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek op product of merk…"
                className="flex-1 bg-transparent outline-none font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl italic text-[#f4f1e8] placeholder:text-[#5f6657]"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Sluiten"
                className="text-[#8b8b7e] hover:text-[#f4f1e8] transition-colors shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Results */}
            <div className="mt-4 overflow-y-auto no-scrollbar flex-1">
              {query.trim() === "" ? (
                <p className="font-[family-name:var(--font-space)] text-xs text-[#8b8b7e] tracking-wider mt-6">
                  Begin met typen om door {items.length} producten te zoeken.
                </p>
              ) : results.length === 0 ? (
                <p className="font-[family-name:var(--font-space)] text-xs text-[#8b8b7e] tracking-wider mt-6">
                  Geen resultaten voor “{query}”.
                </p>
              ) : (
                <>
                  <p className="font-[family-name:var(--font-space)] text-[10px] text-[#8b8b7e] tracking-[0.25em] uppercase mb-3">
                    {results.length} resultaten
                  </p>
                  <ul className="divide-y divide-[rgba(45,80,22,0.2)]">
                    {results.map((p) => (
                      <li key={`${p.category}/${p.slug}`}>
                        <Link
                          href={`/${p.category}/${p.slug}`}
                          onClick={onClose}
                          className="group flex items-center gap-4 py-3"
                        >
                          <div className="relative h-12 w-12 shrink-0 bg-[#f4f1e8] overflow-hidden">
                            <Image
                              src={p.image}
                              alt={p.name}
                              fill
                              className="object-contain p-1"
                              sizes="48px"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-[#f4f1e8] truncate group-hover:text-[#d4af37] transition-colors">
                              {p.name}
                            </p>
                            <p className="font-[family-name:var(--font-space)] text-[10px] tracking-wider uppercase text-[#8b8b7e]">
                              {p.brand ? `${p.brand} · ` : ""}
                              {catLabel(p.category)}
                            </p>
                          </div>
                          <span className="font-[family-name:var(--font-cormorant)] text-lg font-light text-[#f4f1e8] shrink-0">
                            €{p.price.toFixed(2).replace(".", ",")}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
