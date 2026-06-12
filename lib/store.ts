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
  { href: "/algemene-voorwaarden", label: "Algemene voorwaarden" },
  { href: "/privacyverklaring", label: "Privacyverklaring" },
  { href: "/retourbeleid", label: "Retourbeleid" },
  { href: "/klachten", label: "Klachten" },
];
