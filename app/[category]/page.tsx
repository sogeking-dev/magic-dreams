import { notFound } from "next/navigation";
import {
  categories,
  getProductsByCategory,
  type Category,
} from "@/lib/products";
import ProductCard from "@/components/ui/product-card";
import FadeIn from "@/components/ui/fade-in";
import SiteFooter from "@/components/ui/site-footer";
import Link from "next/link";

interface PageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category: slug } = await params;
  const cat = categories.find((c) => c.id === slug);
  if (!cat) return {};
  return {
    title: `${cat.label} | Magic Dreams Tilburg`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;

  const cat = categories.find((c) => c.id === slug);
  if (!cat) notFound();

  const products = getProductsByCategory(cat.id as Category);

  return (
    <main className="min-h-screen pt-14 bg-[#0a0f0a]">
      {/* Header */}
      <section className="px-6 md:px-16 pt-16 md:pt-20 pb-12 md:pb-16 border-b border-[rgba(212,175,55,0.1)]">
        <FadeIn>
          <Link
            href="/"
            className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.3em] uppercase text-[#8b8b7e] hover:text-[#d4af37] transition-colors mb-8 inline-block"
          >
            ← Terug
          </Link>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,10vw,8rem)] font-light italic text-[#f4f1e8] leading-none mb-4">
            {cat.label}
          </h1>
          <p className="font-[family-name:var(--font-space)] text-sm text-[#8b8b7e] max-w-xl">
            {cat.description}
          </p>
          <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase text-[#8b8b7e] mt-6">
            {products.length} producten
          </p>
        </FadeIn>
      </section>

      {/* Product grid */}
      <section className="px-4 md:px-16 py-10 md:py-16">
        {products.length === 0 ? (
          <div className="text-center py-32">
            <p className="font-[family-name:var(--font-cormorant)] text-3xl italic text-[#8b8b7e]">
              Kom binnenkort terug — nieuwe producten volgen.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
