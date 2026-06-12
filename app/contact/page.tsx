import Link from "next/link";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { store, openingHours } from "@/lib/store";
import SiteFooter from "@/components/ui/site-footer";

export const metadata = {
  title: "Contact | Magic Dreams Tilburg",
  description:
    "Bezoek Magic Dreams aan de Piusstraat 146 in Tilburg, of bel ons. Openingstijden, adres en contactgegevens.",
};

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Magic+Dreams+Piusstraat+146+Tilburg";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-14 bg-[#0a0f0a]">
      <section className="px-6 md:px-16 pt-16 md:pt-20 pb-16 max-w-5xl mx-auto">
        <Link
          href="/"
          className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.3em] uppercase text-[#8b8b7e] hover:text-[#d4af37] transition-colors mb-8 inline-block"
        >
          ← Terug naar home
        </Link>

        <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,8vw,5rem)] font-light italic text-[#f4f1e8] leading-tight mb-4">
          Bezoek ons
        </h1>
        <p className="font-[family-name:var(--font-space)] text-sm text-[#a09a8e] max-w-xl mb-14 leading-relaxed">
          Magic Dreams is gevestigd in het hart van Tilburg. Loop binnen voor
          persoonlijk advies, of neem telefonisch contact op om een product te
          reserveren.
        </p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact details */}
          <div>
            <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-6">
              Contactgegevens
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#4a7a28] shrink-0 mt-1" />
                <span className="font-[family-name:var(--font-space)] text-sm text-[#a09a8e] leading-relaxed">
                  {store.street}
                  <br />
                  {store.postcode} {store.city}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#4a7a28] shrink-0" />
                <a
                  href={store.phoneHref}
                  className="font-[family-name:var(--font-space)] text-sm text-[#a09a8e] hover:text-[#d4af37] transition-colors"
                >
                  {store.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#4a7a28] shrink-0" />
                <a
                  href={`mailto:${store.email}`}
                  className="font-[family-name:var(--font-space)] text-sm text-[#a09a8e] hover:text-[#d4af37] transition-colors"
                >
                  {store.email}
                </a>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.25em] uppercase text-[#0a0f0a] bg-[#f4f1e8] px-8 py-4 mt-10 inline-block hover:bg-[#d4af37] transition-colors duration-300"
            >
              Route via Google Maps
            </a>
          </div>

          {/* Opening hours */}
          <div>
            <p className="font-[family-name:var(--font-space)] text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-6">
              Openingstijden
            </p>
            <div className="space-y-3">
              {openingHours.map((h) => (
                <div
                  key={h.day}
                  className={`flex justify-between items-center pb-3 border-b border-[rgba(45,80,22,0.1)] ${
                    h.closed ? "opacity-40" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {h.special && <Clock size={10} className="text-[#d4af37]" />}
                    <span className="font-[family-name:var(--font-space)] text-xs text-[#f4f1e8]">
                      {h.day}
                    </span>
                  </div>
                  <span
                    className={`font-[family-name:var(--font-space)] text-xs ${
                      h.special ? "text-[#d4af37]" : "text-[#a09a8e]"
                    }`}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
