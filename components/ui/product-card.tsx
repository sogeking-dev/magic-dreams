"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-[#120018] border border-[rgba(124,58,237,0.12)] hover:border-[rgba(212,175,55,0.3)] transition-colors duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.nameFull}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

        {product.isNew && (
          <span className="absolute top-3 left-3 font-[family-name:var(--font-space)] text-[9px] tracking-[0.3em] uppercase text-[#0a0f0a] bg-[#d4af37] px-2 py-1">
            Nieuw
          </span>
        )}

        {!product.inStock && (
          <span className="absolute top-3 right-3 font-[family-name:var(--font-space)] text-[9px] tracking-[0.3em] uppercase text-[#8b8b7e] border border-[#8b8b7e] px-2 py-1">
            Uitverkocht
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        {product.brand && (
          <p className="font-[family-name:var(--font-space)] text-[9px] tracking-[0.3em] uppercase text-[#d4af37] mb-1">
            {product.brand}
          </p>
        )}
        <h3 className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#f4f1e8] leading-tight mb-2">
          {product.nameFull}
        </h3>
        <p className="font-[family-name:var(--font-space)] text-[11px] text-[#8b8b7e] leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Effects */}
        {product.effects && product.effects.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.effects.map((effect) => (
              <span
                key={effect}
                className="font-[family-name:var(--font-space)] text-[9px] tracking-wider uppercase text-[#8b8b7e] border border-[rgba(139,139,126,0.3)] px-2 py-0.5"
              >
                {effect}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#f4f1e8]">
            €{product.price.toFixed(2).replace(".", ",")}
          </span>
          <button
            disabled={!product.inStock}
            className="font-[family-name:var(--font-space)] text-[9px] tracking-[0.25em] uppercase text-[#0a0f0a] bg-[#f4f1e8] px-4 py-2 hover:bg-[#d4af37] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Reserveer
          </button>
        </div>
      </div>
    </motion.div>
  );
}
