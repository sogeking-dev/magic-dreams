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
  name: string;
  nameFull: string;
  category: Category;
  price: number;
  image: string;
  effects?: string[];
  brand?: string;
  inStock: boolean;
  description: string;
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

export const products: Product[] = [
  // Smartshop
  {
    id: "truffle-mexicana",
    name: "Mexicana",
    nameFull: "Magic Truffles Mexicana",
    category: "smartshop",
    price: 14.95,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    effects: ["Visueel", "Creatief", "Mild"],
    brand: "FreshBox",
    inStock: true,
    description: "Milde, visuele ervaring. Ideaal voor beginners.",
    isNew: false,
  },
  {
    id: "truffle-atlantis",
    name: "Atlantis",
    nameFull: "Magic Truffles Atlantis",
    category: "smartshop",
    price: 16.95,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    effects: ["Euforisch", "Creatief", "Medium"],
    brand: "FreshBox",
    inStock: true,
    description: "Balans tussen milde en sterke tripping. Populaire keuze.",
  },
  {
    id: "truffle-hollandia",
    name: "Hollandia",
    nameFull: "Magic Truffles Hollandia",
    category: "smartshop",
    price: 22.50,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    effects: ["Intens", "Spiritueel", "Sterk"],
    brand: "FreshBox",
    inStock: true,
    description: "Een van de sterkste magic truffels. Voor gevorderden.",
    isNew: true,
  },
  {
    id: "kratom-bali",
    name: "Bali Red",
    nameFull: "Kratom Bali Red",
    category: "smartshop",
    price: 14.95,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80",
    effects: ["Ontspannend", "Pijnstillend"],
    brand: "Herbs of the Gods",
    inStock: true,
    description: "Populaire rode kratom voor ontspanning en pijnverlichting.",
  },
  // Shroomshop
  {
    id: "growkit-golden-teacher",
    name: "Golden Teacher",
    nameFull: "Growkit Golden Teacher",
    category: "shroomshop",
    price: 49.95,
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80",
    effects: ["Spiritueel", "Euforisch"],
    brand: "MushMagic",
    inStock: true,
    description: "Klassiek en betrouwbaar. Perfecte starter growkit.",
    isNew: false,
  },
  {
    id: "growkit-mexican",
    name: "Mexican",
    nameFull: "Growkit Mexican",
    category: "shroomshop",
    price: 44.95,
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80",
    effects: ["Energiek", "Creatief"],
    brand: "MushMagic",
    inStock: true,
    description: "Snelle groei, levendige visuele ervaring.",
  },
  {
    id: "growkit-b-plus",
    name: "B+",
    nameFull: "Growkit B+",
    category: "shroomshop",
    price: 44.95,
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80",
    effects: ["Warm", "Sociaal"],
    brand: "MushMagic",
    inStock: true,
    description: "Grote opbrengst, aangenaam en sociaal.",
    isNew: true,
  },
  // Seedshop — Keraseeds (real product photos in /public/seeds/)
  {
    id: "seeds-pineapple-sativa",
    name: "Pineapple Sativa",
    nameFull: "Pineapple Sativa High",
    category: "seedshop",
    price: 32.00,
    image: "/seeds/pineapple-sativa-high.webp",
    brand: "Keraseeds",
    inStock: true,
    description: "Frisse sativa met tropisch aroma. Energiek en creatief.",
  },
  {
    id: "seeds-keramatic-auto",
    name: "Keramatic Auto",
    nameFull: "Keramatic Autoflower",
    category: "seedshop",
    price: 28.00,
    image: "/seeds/keramatic-auto-high.webp",
    brand: "Keraseeds",
    inStock: true,
    description: "Snelle autoflower, compact en betrouwbaar.",
    isNew: true,
  },
  {
    id: "seeds-empire-sun",
    name: "Empire of the Sun",
    nameFull: "Empire of the Sun Fem",
    category: "seedshop",
    price: 36.00,
    image: "/seeds/empire-of-the-sun-fem-high.webp",
    brand: "Keraseeds",
    inStock: true,
    description: "Krachtige feminized met rijke terpenprofiel.",
  },
  {
    id: "seeds-american-stafford",
    name: "American Stafford",
    nameFull: "American Stafford High",
    category: "seedshop",
    price: 34.00,
    image: "/seeds/american-stafford-high.webp",
    brand: "Keraseeds",
    inStock: true,
    description: "Stevige indica-dominante hybride. Diepe ontspanning.",
  },
  // Headshop
  {
    id: "vaporizer-mighty",
    name: "Mighty+",
    nameFull: "Mighty+ Vaporizer",
    category: "headshop",
    price: 349.00,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    brand: "Storz & Bickel",
    inStock: true,
    description: "Medische kwaliteit. Precieze temperatuurcontrole.",
    isNew: false,
  },
  {
    id: "bong-glass",
    name: "Glass Bong 40cm",
    nameFull: "Glazen Bong 40cm",
    category: "headshop",
    price: 39.95,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    inStock: true,
    description: "Handgeblazen glas, ice notches, 14.5mm verbinding.",
  },
  // Herbshop
  {
    id: "salvia-10x",
    name: "Salvia 10x",
    nameFull: "Salvia Divinorum 10x Extract",
    category: "herbshop",
    price: 19.95,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&q=80",
    effects: ["Intens", "Kort"],
    brand: "Herbs of the Gods",
    inStock: true,
    description: "Krachtig extract. Korte maar intense ervaring.",
  },
  // Healthshop
  {
    id: "supplement-manitol",
    name: "Manitol",
    nameFull: "Manitol 100g",
    category: "healthshop",
    price: 9.95,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
    inStock: true,
    description: "Zuiver voedingssupplement, fijn poeder.",
  },
];

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}
