import LegalLayout, { LegalHeading } from "@/components/ui/legal-layout";
import { store } from "@/lib/store";

export const metadata = {
  title: "Retourbeleid | Magic Dreams Tilburg",
  description:
    "Voorwaarden voor ruilen en retourneren bij Magic Dreams Tilburg.",
};

export default function Page() {
  return (
    <LegalLayout title="Retourbeleid" updated="12 juni 2026">
      <p className="text-[#8b8b7e] italic border-l border-[rgba(212,175,55,0.3)] pl-4">
        Conceptversie — controleer dit beleid en stem het af op de werkwijze van
        de winkel.
      </p>

      <LegalHeading>1. Aankoop in de winkel</LegalHeading>
      <p>
        Aankopen worden in de winkel gedaan en afgerekend. U kunt het product
        vóór aankoop bekijken en u laten adviseren. Vragen over een product?
        Bel ons gerust op {store.phone} of kom langs aan {store.street}.
      </p>

      <LegalHeading>2. Ruilen</LegalHeading>
      <p>
        Ongeopende, ongebruikte producten kunt u binnen 14 dagen na aankoop
        ruilen op vertoon van uw kassabon. Producten moeten in originele,
        onbeschadigde verpakking zijn.
      </p>

      <LegalHeading>3. Uitgesloten van ruiling</LegalHeading>
      <p>
        Om hygiënische redenen en vanwege de aard van het assortiment zijn
        bepaalde producten uitgesloten van ruiling of retour, waaronder geopende
        consumptieproducten, verse producten (zoals truffels), zaden waarvan de
        verpakking is geopend en artikelen uit de sexshop.
      </p>

      <LegalHeading>4. Beschadigde of verkeerde producten</LegalHeading>
      <p>
        Is een product bij aankoop beschadigd of heeft u het verkeerde artikel
        meegekregen? Neem dan binnen 48 uur contact met ons op via {store.email}{" "}
        of {store.phone}. Wij zorgen voor een passende oplossing.
      </p>

      <LegalHeading>5. Online reserveringen</LegalHeading>
      <p>
        Een reservering via de website verplicht u tot niets: u beslist pas in de
        winkel of u tot aankoop overgaat. Er vindt geen online betaling plaats.
      </p>
    </LegalLayout>
  );
}
