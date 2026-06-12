import productsData from "./data/products.json";

export type Category =
  | "smartshop"
  | "headshop"
  | "healthshop"
  | "sexshop"
  | "herbshop"
  | "shroomshop"
  | "seedshop";

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameFull: string;
  category: Category;
  price: number;
  image: string;
  imageExtra?: string | null;
  effects?: string[];
  brand?: string | null;
  inhoud?: string | null;
  soort?: string | null;
  inStock: boolean;
  /** Korte tekst voor product cards */
  description: string;
  /** Volledige producttekst voor de detailpagina */
  descriptionFull: string;
  isNew?: boolean;
}

export const categories: { id: Category; label: string; description: string }[] = [
  {
    id: "smartshop",
    label: "Smartshop",
    description: "Magic truffels, kratom, salvia, partypills en drugstesten.",
  },
  {
    id: "shroomshop",
    label: "Shroomshop",
    description: "Magic mushroom growkits en alles voor de thuisteler.",
  },
  {
    id: "seedshop",
    label: "Seedshop",
    description: "Cannabiszaden van Keraseeds en andere betrouwbare merken.",
  },
  {
    id: "headshop",
    label: "Headshop",
    description: "Bongs, vaporizers en alle headshopbenodigdheden.",
  },
  {
    id: "herbshop",
    label: "Herbshop",
    description: "Natuurlijke kruiden, salvia en botanische supplementen.",
  },
  {
    id: "healthshop",
    label: "Healthshop",
    description: "CBD, voedingssupplementen, afslankmiddelen en manitol.",
  },
  {
    id: "sexshop",
    label: "Sexshop",
    description: "Erotische stimulansmiddelen en partypills.",
  },
];

interface RawProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  imageExtra: string | null;
  brand: string | null;
  inhoud: string | null;
  soort: string | null;
  inStock: boolean;
  shortDescription: string;
  description: string;
  vatRate: number;
}

export const products: Product[] = (productsData as RawProduct[]).map((p) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  nameFull: p.name,
  category: p.category as Category,
  price: p.price,
  image: p.image,
  imageExtra: p.imageExtra,
  brand: p.brand,
  inhoud: p.inhoud,
  soort: p.soort,
  inStock: p.inStock,
  description: p.shortDescription,
  descriptionFull: p.description,
}));

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
