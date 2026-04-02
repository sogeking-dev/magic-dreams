"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { categories } from "@/lib/products";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Clock, MapPin, Phone, Mail } from "lucide-react";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

// ─── Replace with store walkthrough video ─────────────────────────────────────
// Drop .mp4 in /public/ → "/your-video.mp4"
// Or YouTube → "https://www.youtube.com/watch?v=YOUR_ID"
const STORE_VIDEO = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const BG = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&q=80";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=Magic+Dreams+Tilburg+reviews";

const reviews = [
  {
    name: "Jaycee",
    badge: "Local Guide",
    rating: 5,
    text: "Nice guy. Been going there for years, nothing wrong with the products or customer service. 5 stars +",
    date: "8 jaar geleden",
  },
  {
    name: "Jean Émarre",
    badge: "Local Guide",
    rating: 5,
    text: "Vriendelijke man achter de toonbank, top product, overall top smartshop.",
    date: "1 jaar geleden",
  },
  {
    name: "Bas Van der Ploeg",
    rating: 5,
    text: "De eigenaar was erg behulpzaam, hielp ons bij de keuze en legde alles heel goed (in het Engels) uit!",
    date: "4 jaar geleden",
  },
  {
    name: "Cankut Canturk",
    rating: 5,
    text: "Is the best shop in the Tilburg area.",
    date: "11 maanden geleden",
  },
  {
    name: "Ireneusz Wierzbicki",
    badge: "Local Guide",
    rating: 5,
    text: "Super service! Een bezoek is zeker de moeite waard.",
    date: "5 jaar geleden",
  },
  {
    name: "Ozgur Sener",
    rating: 5,
    text: "A great guy, very helpful.",
    date: "1 jaar geleden",
  },
];

const hours = [
  { day: "Maandag", time: "Gesloten", closed: true },
  { day: "Dinsdag", time: "12:30 – 19:00" },
  { day: "Woensdag", time: "12:30 – 19:00" },
  { day: "Donderdag", time: "12:30 – 21:00", special: true },
  { day: "Vrijdag", time: "12:30 – 19:00" },
  { day: "Zaterdag", time: "12:30 – 17:00" },
  { day: "Zondag", time: "12:30 – 17:00" },
];

export default function Home() {
  return (
    <div className="pt-14">

      {/* ── Under Construction Banner ──────────────────────────── */}
      <div className="bg-[rgba(124,58,237,0.15)] border-b border-[rgba(124,58,237,0.3)] px-6 py-3 text-center">
        <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase text-[#9b8fb0]">
          <span className="text-[#d4af37] mr-2">⚠</span>
          Webshop under construction — ons assortiment wordt iedere dag verder uitgebreid.
          Vragen?{" "}
          <a
            href="mailto:info@magicdreams.nl"
            className="text-[#d4af37] hover:opacity-70 transition-opacity"
          >
            info@magicdreams.nl
          </a>
        </p>
      </div>

      {/* ── Scroll Expansion Hero ──────────────────────────────── */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={STORE_VIDEO}
        bgImageSrc={BG}
        title="MAGIC DREAMS"
        date="Tilburg · Sinds 1998"
        scrollToExpand="Scroll om binnen te komen"
        textBlend
      >
        <div className="max-w-5xl mx-auto text-[#f0eaf8] space-y-28 pb-32">

          {/* ── Promo Banner ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden border border-[rgba(212,175,55,0.4)] bg-[#120018] p-8 md:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(124,58,237,0.2)] to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:text-left">
                <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-3">
                  Actie
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,5rem)] font-light italic text-[#f0eaf8] leading-none mb-2">
                  Truffel korting
                </h2>
                <p className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3.5rem)] italic text-[#d4af37]">
                  3 + 1 gratis
                </p>
                <p className="font-[family-name:var(--font-space)] text-xs text-[#9b8fb0] mt-4">
                  Truffle deal — buy 3, get 1 free. Alleen in de winkel.
                </p>
              </div>
              <div className="md:ml-auto shrink-0">
                <a
                  href="tel:0633897705"
                  className="font-[family-name:var(--font-space)] text-xs text-[#0d000f] bg-[#d4af37] px-10 py-4 tracking-[0.25em] uppercase hover:bg-[#f0eaf8] transition-colors duration-300 block text-center"
                >
                  Bestel nu
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── About ───────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-6">
              01 — Over ons
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,5vw,4rem)] font-light italic leading-[1.1] mb-6">
              Een zorgvuldig samengesteld assortiment
            </h2>
            <p className="font-[family-name:var(--font-space)] text-sm text-[#9b8fb0] leading-relaxed mb-8 max-w-2xl">
              Bij Magic Dreams Tilburg vindt u een breed assortiment van smartshop- en
              headshopproducten, zorgvuldig geselecteerd op kwaliteit en werking. Ons
              aanbod omvat onder andere:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                "Magic truffels en magic mushroom growkits",
                "Cannabiszaden van bekende en betrouwbare merken Keraseeds",
                "Kratom, salvia en diverse natuurlijke kruiden",
                "Erotische stimulansmiddelen en partypills",
                "Drugstesten en afslankmiddelen",
                "Voedingssupplementen zoals manitol, cafeïne en inositol",
                "Bongs, vaporizers en andere headshopbenodigdheden",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#7c3aed] mt-1 shrink-0">—</span>
                  <span className="font-[family-name:var(--font-space)] text-xs text-[#9b8fb0] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-[family-name:var(--font-space)] text-xs text-[#9b8fb0] leading-relaxed max-w-2xl">
              Wij vernieuwen ons assortiment continu om te blijven voldoen aan de wensen
              van zowel beginnende als ervaren gebruikers.
            </p>
          </motion.div>

          {/* ── Category grid ───────────────────────────────────── */}
          <div>
            <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-10">
              02 — Categorieën
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[rgba(124,58,237,0.1)]">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                >
                  <Link
                    href={`/${cat.id}`}
                    className="group block bg-[#0d000f] p-8 hover:bg-[#160020] transition-colors duration-300"
                  >
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl italic text-[#f0eaf8] group-hover:text-[#d4af37] transition-colors duration-300 mb-3">
                      {cat.label}
                    </h3>
                    <p className="font-[family-name:var(--font-space)] text-[11px] text-[#9b8fb0] leading-relaxed mb-6">
                      {cat.description}
                    </p>
                    <span className="font-[family-name:var(--font-space)] text-[9px] tracking-[0.3em] uppercase text-[#7c3aed] group-hover:text-[#d4af37] transition-colors">
                      Bekijken →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Kennis & Betrouwbaarheid ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16"
          >
            <div>
              <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-6">
                03 — Kennis & Betrouwbaarheid
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(1.8rem,4vw,3rem)] font-light italic leading-[1.1] mb-6">
                Kennis, ervaring en betrouwbaarheid
              </h2>
              <p className="font-[family-name:var(--font-space)] text-xs text-[#9b8fb0] leading-relaxed mb-4">
                Magic Dreams Tilburg staat sinds 1998 voor kwaliteit, deskundigheid en
                integriteit. Wij werken uitsluitend met producten van betrouwbare herkomst
                en geven eerlijke voorlichting over gebruik en effect. Op die manier willen
                wij bijdragen aan een veilige, bewuste en positieve ervaring met natuurlijke
                middelen.
              </p>
              <p className="font-[family-name:var(--font-space)] text-xs text-[#9b8fb0] leading-relaxed">
                Onze lange geschiedenis en trouwe klantenkring vormen het bewijs van het
                vertrouwen dat mensen in ons stellen – een vertrouwen dat wij elke dag
                opnieuw proberen te verdienen.
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-6">
                04 — Persoonlijk advies
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(1.8rem,4vw,3rem)] font-light italic leading-[1.1] mb-6">
                Persoonlijk advies en klantgerichtheid
              </h2>
              <p className="font-[family-name:var(--font-space)] text-xs text-[#9b8fb0] leading-relaxed mb-4">
                Bij Magic Dreams geloven wij dat goede service meer is dan alleen het
                verkopen van producten. Wij nemen de tijd om onze klanten persoonlijk te
                begeleiden en te adviseren. Of u nu vragen heeft over het gebruik van magic
                truffels, het kweken van paddo&apos;s, of de werking van natuurlijke
                supplementen – ons team staat altijd klaar met betrouwbare informatie en
                oprechte aandacht.
              </p>
              <div className="flex gap-6 mt-6">
                <div>
                  <p className="font-[family-name:var(--font-space)] text-[9px] tracking-widest uppercase text-[#9b8fb0] mb-1">
                    Premium reseller van
                  </p>
                  <div className="flex gap-4 font-[family-name:var(--font-space)] text-xs text-[#d4af37]">
                    <span>mcsmart.com</span>
                    <span>keraseeds.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Google Reviews ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-3">
                  05 — Reviews
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-light italic">
                  Wat onze klanten zeggen
                </h2>
              </div>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 font-[family-name:var(--font-space)] text-[9px] tracking-[0.25em] uppercase text-[#d4af37] border border-[rgba(212,175,55,0.3)] px-5 py-3 hover:bg-[rgba(212,175,55,0.08)] transition-colors"
              >
                Laat een review achter <ExternalLink size={10} />
              </a>
            </div>

            <StaggerTestimonials />

            {/* Review CTA */}
            <div className="bg-[#120018] border border-[rgba(212,175,55,0.2)] p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="font-[family-name:var(--font-cormorant)] text-2xl italic text-[#f0eaf8] mb-1">
                  Tevreden over uw bezoek?
                </p>
                <p className="font-[family-name:var(--font-space)] text-xs text-[#9b8fb0]">
                  Help anderen door uw ervaring te delen op Google. Het duurt minder dan een
                  minuut.
                </p>
              </div>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-space)] text-xs text-[#0d000f] bg-[#d4af37] px-8 py-3 tracking-[0.25em] uppercase hover:bg-[#f0eaf8] transition-colors duration-300 shrink-0 flex items-center gap-2"
              >
                Review schrijven <ExternalLink size={10} />
              </a>
            </div>
          </motion.div>

          {/* ── Visit + Hours ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 border-t border-[rgba(124,58,237,0.15)] pt-16"
          >
            {/* Contact */}
            <div>
              <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-6">
                06 — Bezoek ons
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,5vw,4rem)] font-light italic leading-none mb-8">
                Bezoek onze smartshop in Tilburg
              </h2>
              <p className="font-[family-name:var(--font-space)] text-xs text-[#9b8fb0] leading-relaxed mb-8 max-w-sm">
                Bent u op zoek naar een betrouwbare smartshop in Tilburg waar kwaliteit,
                kennis en persoonlijke aandacht centraal staan? Bezoek dan Magic Dreams,
                gevestigd aan de Piusstraat 146 in Tilburg.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "Piusstraat 146, 5021 JD Tilburg" },
                  { icon: Phone, text: "06 338 977 05", href: "tel:0633897705" },
                  {
                    icon: Mail,
                    text: "info@magicdreams.nl",
                    href: "mailto:info@magicdreams.nl",
                  },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon size={12} className="text-[#7c3aed] shrink-0" />
                    {href ? (
                      <a
                        href={href}
                        className="font-[family-name:var(--font-space)] text-xs text-[#9b8fb0] hover:text-[#d4af37] transition-colors"
                      >
                        {text}
                      </a>
                    ) : (
                      <span className="font-[family-name:var(--font-space)] text-xs text-[#9b8fb0]">
                        {text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Opening hours */}
            <div>
              <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-6">
                Openingstijden
              </p>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center pb-3 border-b border-[rgba(124,58,237,0.1)] ${
                      h.closed ? "opacity-40" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {h.special && (
                        <Clock size={10} className="text-[#d4af37]" />
                      )}
                      <span className="font-[family-name:var(--font-space)] text-xs text-[#f0eaf8]">
                        {h.day}
                      </span>
                    </div>
                    <span
                      className={`font-[family-name:var(--font-space)] text-xs ${
                        h.closed
                          ? "text-[#9b8fb0]"
                          : h.special
                          ? "text-[#d4af37]"
                          : "text-[#9b8fb0]"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer strip */}
          <div className="border-t border-[rgba(124,58,237,0.15)] pt-10 flex flex-col md:flex-row justify-between gap-4">
            <span className="font-[family-name:var(--font-space)] text-[10px] text-[#9b8fb0] tracking-widest uppercase">
              © 2026 Magic Dreams Tilburg
            </span>
            <span className="font-[family-name:var(--font-space)] text-[10px] text-[#9b8fb0] tracking-widest uppercase">
              Piusstraat 146 · Tilburg
            </span>
          </div>

        </div>
      </ScrollExpandMedia>
    </div>
  );
}
