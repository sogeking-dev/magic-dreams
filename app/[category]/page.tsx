"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  categories,
  getProductsByCategory,
  type Category,
} from "@/lib/products";
import ProductCard from "@/components/ui/product-card";
import Link from "next/link";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;

  const cat = categories.find((c) => c.id === slug);
  if (!cat) notFound();

  const products = getProductsByCategory(cat.id as Category);

  return (
    <main className="min-h-screen pt-14 bg-[#0a0f0a]">
      {/* Header */}
      <section className="px-8 md:px-16 pt-20 pb-16 border-b border-[rgba(212,175,55,0.1)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            href="/"
            className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.3em] uppercase text-[#8b8b7e] hover:text-[#d4af37] transition-colors mb-8 inline-block"
          >
            ← Terug
          </Link>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,10vw,8rem)] font-light italic text-[#f4f1e8] leading-none mb-4">
            {cat.label}
          </h1>
          <p className="font-[family-name:var(--font-space)] text-sm text-[#8b8b7e] max-w-xl">
            {cat.description}
          </p>
        </motion.div>
      </section>

      {/* Product grid */}
      <section className="px-8 md:px-16 py-16">
        {products.length === 0 ? (
          <div className="text-center py-32">
            <p className="font-[family-name:var(--font-cormorant)] text-3xl italic text-[#8b8b7e]">
              Kom binnenkort terug — nieuwe producten volgen.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
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
