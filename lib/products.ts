export type Category =
  | "smartshop"
  | "headshop"
  | "healthshop"
  | "sexshop"
  | "herbshop"
  | "shroomshop"
  | "seedshop";

export interface ProductVariant {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  nameFull: string;
  category: Category;
  price: number;
  image: string;
  effects?: string[];
  brand?: string;
  inStock: boolean;
  description: string;
  descriptionFull?: string;
  isNew?: boolean;
  variants?: ProductVariant[];
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
    description: "Naturlijke kruiden, salvia en botanische supplementen.",
  },
  {
    id: "healthshop",
    label: "Healthshop",
    description: "Voedingssupplementen, afslankmiddelen en manitol.",
  },
  {
    id: "sexshop",
    label: "Sexshop",
    description: "Erotische stimulansmiddelen en partypills.",
  },
];

// Product catalogue imported from the Magic Dreams product feed (magicdreams.nl).
// Source data lives in ./products.json — regenerate it from the CSV export when
// the assortment changes. Keep this file for types, categories and helpers.
import productsData from "./products.json";

export const products: Product[] = productsData as Product[];

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
