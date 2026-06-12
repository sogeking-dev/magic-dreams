import LegalLayout, { LegalHeading } from "@/components/ui/legal-layout";
import { store } from "@/lib/store";

export const metadata = {
  title: "Klachten | Magic Dreams Tilburg",
  description:
    "Klachtenprocedure van Magic Dreams Tilburg — wij lossen het graag persoonlijk op.",
};

export default function Page() {
  return (
    <LegalLayout title="Klachtenregeling" updated="12 juni 2026">
      <p className="text-[#8b8b7e] italic border-l border-[rgba(212,175,55,0.3)] pl-4">
        Conceptversie — pas de termijnen en contactgegevens aan naar wens.
      </p>

      <LegalHeading>1. Niet tevreden?</LegalHeading>
      <p>
        Bij {store.legalName} staan kwaliteit en persoonlijke aandacht voorop.
        Toch kan het gebeuren dat u ergens niet tevreden over bent. Laat het ons
        weten — wij lossen het graag samen met u op.
      </p>

      <LegalHeading>2. Een klacht indienen</LegalHeading>
      <p>
        Beschrijf uw klacht zo duidelijk mogelijk en stuur deze naar{" "}
        {store.email}, of bel ons op {store.phone}. Vermeld uw naam, een
        contactmogelijkheid en (indien van toepassing) de datum en het product
        waar het om gaat.
      </p>

      <LegalHeading>3. Behandeling</LegalHeading>
      <p>
        Wij bevestigen de ontvangst van uw klacht binnen enkele werkdagen en
        streven ernaar om deze binnen 14 dagen inhoudelijk af te handelen. Mocht
        een klacht meer tijd nodig hebben, dan laten wij u dat tijdig weten.
      </p>

      <LegalHeading>4. Geschillen</LegalHeading>
      <p>
        Komen wij er samen niet uit? Dan kunt u uw geschil voorleggen aan de
        bevoegde Nederlandse rechter. Wij vertrouwen er echter op dat we vrijwel
        elke kwestie in goed overleg kunnen oplossen.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>
        {store.legalName} · {store.street}, {store.postcode} {store.city}
        <br />
        {store.email} · {store.phone}
      </p>
    </LegalLayout>
  );
}
