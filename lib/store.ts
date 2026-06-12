// Bedrijfsgegevens — pas KvK en btw-nummer aan met de echte waarden van Louis.
export const store = {
  name: "Magic Dreams",
  legalName: "Magic Dreams Tilburg",
  street: "Piusstraat 146",
  postcode: "5021 JD",
  city: "Tilburg",
  country: "Nederland",
  phone: "06 338 977 05",
  phoneHref: "tel:0633897705",
  email: "info@magicdreams.nl",
  since: 1998,
  // TODO: vul de echte registratiegegevens in
  kvk: "—",
  btw: "—",
};

// Juridische pagina's — gebruikt in de footer en sitemap.
export const legalLinks: { href: string; label: string }[] = [
  { href: "/contact", label: "Contact" },
  { href: "/algemene-voorwaarden", label: "Algemene voorwaarden" },
  { href: "/privacyverklaring", label: "Privacyverklaring" },
  { href: "/retourbeleid", label: "Retourbeleid" },
  { href: "/klachten", label: "Klachten" },
];

// Openingstijden — pas aan indien gewijzigd.
export const openingHours: { day: string; time: string; closed?: boolean; special?: boolean }[] = [
  { day: "Maandag", time: "Gesloten", closed: true },
  { day: "Dinsdag", time: "12:30 – 19:00" },
  { day: "Woensdag", time: "12:30 – 19:00" },
  { day: "Donderdag", time: "12:30 – 21:00", special: true },
  { day: "Vrijdag", time: "12:30 – 19:00" },
  { day: "Zaterdag", time: "12:30 – 17:00" },
  { day: "Zondag", time: "12:30 – 17:00" },
];

// Productie-URL. Vercel vult VERCEL_PROJECT_PRODUCTION_URL automatisch in;
// stel NEXT_PUBLIC_SITE_URL in zodra het eigen domein live staat.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://www.magicdreams.nl");
