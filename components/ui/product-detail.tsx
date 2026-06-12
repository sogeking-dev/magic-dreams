"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories, type Product } from "@/lib/products";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const isSeed = product.category === "seedshop";
  const variants = product.variants ?? [];
  const hasSelectable = variants.length > 0 && !isSeed;
  const showFrom = variants.length > 0 && isSeed;
  const [selected, setSelected] = useState(0);
  const price = hasSelectable ? variants[selected].price : product.price;
  const cat = categories.find((c) => c.id === product.category);
  const description = product.descriptionFull || product.description;

  return (
    <main className="min-h-screen pt-14 bg-[#0a0f0a]">
      <section className="px-8 md:px-16 pt-16 pb-24">
        <Link
          href={`/${product.category}`}
          className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.3em] uppercase text-[#8b8b7e] hover:text-[#d4af37] transition-colors mb-10 inline-block"
        >
          ← {cat?.label ?? "Terug"}
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`relative overflow-hidden border border-[rgba(45,80,22,0.2)] ${
              isSeed ? "aspect-[3/4] bg-[#edeae3]" : "aspect-square bg-[#0c1207]"
            }`}
          >
            <Image
              src={product.image}
              alt={product.nameFull}
              fill
              className={isSeed ? "object-contain p-6" : "object-cover"}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {!product.inStock && (
              <span className="absolute top-4 right-4 font-[family-name:var(--font-space)] text-[10px] tracking-[0.3em] uppercase text-[#8b8b7e] border border-[#8b8b7e] bg-[#0a0f0a]/70 px-3 py-1.5">
                Uitverkocht
              </span>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {product.brand && (
              <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-3">
                {product.brand}
              </p>
            )}
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,5vw,3.75rem)] font-light italic text-[#f4f1e8] leading-[1.05] mb-6">
              {product.nameFull}
            </h1>

            <div className="flex items-baseline gap-3 mb-8">
              {showFrom && (
                <span className="font-[family-name:var(--font-space)] text-[11px] tracking-widest uppercase text-[#8b8b7e]">
                  vanaf
                </span>
              )}
              <span className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#f4f1e8]">
                €{price.toFixed(2).replace(".", ",")}
              </span>
            </div>

            {hasSelectable && (
              <div className="mb-8">
                <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.3em] uppercase text-[#8b8b7e] mb-3">
                  Variant
                </p>
                <div className="flex flex-wrap gap-2">
                  {variants.map((v, i) => (
                    <button
                      key={v.label}
                      type="button"
                      onClick={() => setSelected(i)}
                      className={`font-[family-name:var(--font-space)] text-[10px] tracking-wider uppercase px-3 py-2 border transition-colors duration-200 ${
                        i === selected
                          ? "border-[#d4af37] text-[#d4af37]"
                          : "border-[rgba(139,139,126,0.3)] text-[#8b8b7e] hover:border-[rgba(212,175,55,0.4)]"
                      }`}
                    >
                      {v.label} · €{v.price.toFixed(2).replace(".", ",")}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {description && (
              <div className="border-t border-[rgba(45,80,22,0.2)] pt-8 mb-10">
                <p className="font-[family-name:var(--font-space)] text-[13px] text-[#a09a8e] leading-[1.9] whitespace-pre-line max-w-prose">
                  {description}
                </p>
              </div>
            )}

            <div className="flex items-center gap-4">
              <a
                href="tel:0633897705"
                className={`font-[family-name:var(--font-space)] text-[11px] tracking-[0.25em] uppercase px-8 py-4 transition-colors duration-300 ${
                  product.inStock
                    ? "text-[#0a0f0a] bg-[#f4f1e8] hover:bg-[#d4af37]"
                    : "text-[#8b8b7e] border border-[#8b8b7e] pointer-events-none opacity-50"
                }`}
              >
                {product.inStock ? "Reserveer · bel ons" : "Uitverkocht"}
              </a>
              <span className="font-[family-name:var(--font-space)] text-[10px] text-[#8b8b7e]">
                Reserveer telefonisch of in de winkel
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="px-8 md:px-16 py-12 border-t border-[rgba(212,175,55,0.1)] flex flex-col md:flex-row justify-between gap-4">
        <span className="font-[family-name:var(--font-space)] text-[10px] text-[#8b8b7e] tracking-widest uppercase">
          © 2026 Magic Dreams Tilburg
        </span>
        <span className="font-[family-name:var(--font-space)] text-[10px] text-[#8b8b7e] tracking-widest uppercase">
          Piusstraat 146 · Tilburg
        </span>
      </footer>
    </main>
  );
}
