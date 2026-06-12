# Magic Dreams — Integratie & Resterende Taken

Context: 354 echte producten uit de JouwWeb-feed zijn geconverteerd naar `lib/data/products.json`.
De datalaag, categoriepagina's, product cards en productdetailpagina's zijn herschreven.
Dit bestand is de takenlijst voor Claude Code om het af te maken.

## Wat al gedaan is (niet opnieuw doen)
- `lib/products.ts` — laadt nu echte data uit `lib/data/products.json`, zelfde API als voorheen (`categories`, `getProductsByCategory`) plus nieuw: `getProductBySlug`, velden `slug`, `imageExtra`, `inhoud`, `soort`, `descriptionFull`
- `app/[category]/page.tsx` — herschreven als server component (was kapot: "use client" + async), metadata, generateStaticParams, mobiel 2-koloms grid
- `app/[category]/[slug]/page.tsx` — NIEUW: productdetailpagina met specs, volledige beschrijving, gerelateerde producten
- `components/ui/product-card.tsx` — linkt nu naar detailpagina, mobile sizing, object-contain (productfoto's hebben witte achtergrond)
- `components/ui/fade-in.tsx` — NIEUW: client animatie-wrapper
- `scripts/download-images.mjs` + `scripts/image-manifest.json` — download script voor 417 afbeeldingen

## STAP 1 — DIRECT DOEN (tijdgevoelig!)
```bash
node scripts/download-images.mjs
```
Downloadt alle 417 productafbeeldingen van de JouwWeb CDN naar `public/products/`.
⚠️ Deze URLs sterven zodra Louis JouwWeb opzegt. Eerst draaien, dan pas verder.
Controleer daarna: `ls public/products | wc -l` moet 417 zijn. Mislukte downloads staan in `scripts/failed-downloads.json` — script opnieuw draaien retried alleen die.

## STAP 2 — Verifiëren
```bash
npm run dev
```
- Check `/seedshop` (164 producten — grootste categorie), `/shroomshop`, klik producten aan
- Check dat alle 7 categorieën producten tonen
- `npm run build` moet slagen

## STAP 3 — Homepage updaten
`app/page.tsx` gebruikt mogelijk nog de oude demo-producten of hardcoded verwijzingen.
- Controleer of "uitgelichte producten" secties echte producten uit `lib/products.ts` tonen
- De oude demo had `effects` en `isNew` velden; echte data heeft die niet — check op lege secties

## STAP 4 — Mobiel testen & fixen
- Test op 375px breedte (iPhone SE) en 390px: nav, homepage hero (scroll-expansion-hero.tsx!), age-gate, productgrids, detailpagina
- De GSAP/Lenis scroll-effecten op de homepage zijn verdacht op mobiel — test scroll-jank
- Hamburger/scrollbare nav: nav.tsx scrollt horizontaal, check of dat prettig werkt met 7 categorieën op klein scherm

## STAP 5 — Juridische pagina's (WebwinkelKeur-verplicht)
Maak statische pagina's met platte tekst (content bestaat al als PDF bij de eigenaar):
- `/algemene-voorwaarden`
- `/privacyverklaring`
- `/retourbeleid`
- `/klachten`
Voeg footer-links toe naar alle vier. Zonder deze pagina's vervalt de certificering.

## STAP 6 — Zoeken (nice-to-have vannacht, must-have voor launch)
354 producten zonder zoekfunctie is onbruikbaar. Simpele client-side fuzzy search over `name` + `brand` volstaat (data zit al in de bundle). Zoekbalk in nav of op categoriepagina's.

## NIET vannacht (bewust uitgesteld — beslissing eigenaar nodig)
- Checkout/betalingen (Mollie + achteraf betalen is WebwinkelKeur-eis als er online verkocht wordt; nu is alles "Reserveer — bel de winkel" wat legitiem is voor een fysieke smartshop)
- Voorraadbeheer (feed heeft geen voorraadaantallen)
- `lib/products-old.ts.bak` kan weg na verificatie

## Bekende datakwesties
- 30 producten hadden geen categorie in de feed → automatisch ingedeeld (CBD→healthshop, kratom→smartshop, weegschalen/trays/pijpen→headshop). Steekproef nemen.
- Hybride categorieën ("SEEDSHOP / Home" etc.) → eerste categorie aangehouden
- Slechts 63 producten hebben een tweede afbeelding (`imageExtra`)
- Beschrijvingen bevatten veel herhaalde boilerplate ("Algemene Informatie", "Gebruik") — detailpagina rendert dit als secties, maar inkorten kan later
