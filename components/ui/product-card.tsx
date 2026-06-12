"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { type Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isSeed = product.category === "seedshop";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-[#0c1207] border border-[rgba(45,80,22,0.2)] hover:border-[rgba(212,175,55,0.3)] transition-colors duration-300 overflow-hidden flex flex-col"
    >
      <Link href={`/${product.category}/${product.slug}`} className="flex flex-col flex-1">
        {/* Image */}
        <div className={`relative overflow-hidden ${isSeed ? "aspect-[3/4] bg-[#edeae3]" : "aspect-square bg-[#f4f1e8]"}`}>
          <Image
            src={product.image}
            alt={product.nameFull}
            fill
            className={isSeed ? "object-contain p-3" : "object-contain p-3 group-hover:scale-105 transition-transform duration-700"}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          />

          {product.isNew && (
            <span className="absolute top-3 left-3 font-[family-name:var(--font-space)] text-[9px] tracking-[0.3em] uppercase text-[#0a0f0a] bg-[#d4af37] px-2 py-1">
              Nieuw
            </span>
          )}
          {!product.inStock && (
            <span className="absolute top-3 right-3 font-[family-name:var(--font-space)] text-[9px] tracking-[0.3em] uppercase text-[#8b8b7e] border border-[#8b8b7e] px-2 py-1 bg-[#0a0f0a]/70">
              Uitverkocht
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-3 md:p-4 flex flex-col flex-1">
          {product.brand && (
            <p className="font-[family-name:var(--font-space)] text-[9px] tracking-[0.3em] uppercase text-[#d4af37] mb-1">
              {product.brand}
            </p>
          )}
          <h3 className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl italic text-[#f4f1e8] leading-tight mb-2">
            {product.nameFull}
          </h3>
          <p className="font-[family-name:var(--font-space)] text-[11px] text-[#8b8b7e] leading-relaxed mb-4 line-clamp-2 hidden sm:block">
            {product.description}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <span className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-light text-[#f4f1e8]">
              €{product.price.toFixed(2).replace(".", ",")}
            </span>
            <span className="font-[family-name:var(--font-space)] text-[9px] tracking-[0.25em] uppercase text-[#0a0f0a] bg-[#f4f1e8] px-3 md:px-4 py-2 group-hover:bg-[#d4af37] transition-colors duration-300">
              Bekijk
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
