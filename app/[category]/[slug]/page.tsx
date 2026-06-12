import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  categories,
  products,
  getProductBySlug,
  getProductsByCategory,
} from "@/lib/products";
import ProductCard from "@/components/ui/product-card";
import FadeIn from "@/components/ui/fade-in";
import SiteFooter from "@/components/ui/site-footer";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Magic Dreams Tilburg`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { category, slug } = await params;

  const product = getProductBySlug(slug);
  if (!product || product.category !== category) notFound();

  const cat = categories.find((c) => c.id === product.category);
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const paragraphs = product.descriptionFull
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  return (
    <main className="min-h-screen pt-14 bg-[#0a0f0a]">
      <section className="px-6 md:px-16 pt-12 md:pt-16 pb-16">
        <FadeIn>
          <nav className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase text-[#8b8b7e] mb-10 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-[#d4af37] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/${product.category}`}
              className="hover:text-[#d4af37] transition-colors"
            >
              {cat?.label}
            </Link>
            <span>/</span>
            <span className="text-[#f4f1e8]">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Images */}
            <div className="space-y-3">
              <div className="relative aspect-square bg-[#0c1207] border border-[rgba(45,80,22,0.2)] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {product.imageExtra && (
                <div className="relative aspect-square bg-[#0c1207] border border-[rgba(45,80,22,0.2)] overflow-hidden">
                  <Image
                    src={product.imageExtra}
                    alt={`${product.name} — extra afbeelding`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              {product.brand && (
                <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.3em] uppercase text-[#d4af37] mb-3">
                  {product.brand}
                </p>
              )}
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light italic text-[#f4f1e8] leading-tight mb-6">
                {product.name}
              </h1>

              <p className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#f4f1e8] mb-8">
                €{product.price.toFixed(2).replace(".", ",")}
                <span className="font-[family-name:var(--font-space)] text-[10px] tracking-widest uppercase text-[#8b8b7e] ml-3">
                  incl. btw
                </span>
              </p>

              {/* Specs */}
              {(product.inhoud || product.soort) && (
                <dl className="border-y border-[rgba(212,175,55,0.1)] divide-y divide-[rgba(212,175,55,0.06)] mb-8">
                  {product.inhoud && (
                    <div className="flex justify-between py-3">
                      <dt className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase text-[#8b8b7e]">
                        Inhoud
                      </dt>
                      <dd className="font-[family-name:var(--font-space)] text-xs text-[#f4f1e8]">
                        {product.inhoud}
                      </dd>
                    </div>
                  )}
                  {product.soort && (
                    <div className="flex justify-between py-3">
                      <dt className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase text-[#8b8b7e]">
                        Soort
                      </dt>
                      <dd className="font-[family-name:var(--font-space)] text-xs text-[#f4f1e8]">
                        {product.soort}
                      </dd>
                    </div>
                  )}
                </dl>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="tel:0633897705"
                  className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase text-[#0a0f0a] bg-[#f4f1e8] px-8 py-4 text-center hover:bg-[#d4af37] transition-colors duration-300"
                >
                  Reserveer — bel de winkel
                </a>
                <Link
                  href={`/${product.category}`}
                  className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase text-[#f4f1e8] border border-[rgba(212,175,55,0.3)] px-8 py-4 text-center hover:border-[#d4af37] transition-colors duration-300"
                >
                  Meer {cat?.label}
                </Link>
              </div>

              {/* Description */}
              <div className="space-y-4">
                {paragraphs.map((p, i) => {
                  const isHeading =
                    p.endsWith(":") || ["Productinformatie", "Gebruik:"].includes(p);
                  return isHeading ? (
                    <h2
                      key={i}
                      className="font-[family-name:var(--font-space)] text-[11px] tracking-[0.25em] uppercase text-[#d4af37] pt-4"
                    >
                      {p.replace(/:$/, "")}
                    </h2>
                  ) : (
                    <p
                      key={i}
                      className="font-[family-name:var(--font-space)] text-[13px] leading-relaxed text-[#b8b4a6]"
                    >
                      {p}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-4 md:px-16 py-12 border-t border-[rgba(212,175,55,0.1)]">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl italic font-light text-[#f4f1e8] mb-8 px-2 md:px-0">
            Ook interessant
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
