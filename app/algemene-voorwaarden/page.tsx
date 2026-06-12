import LegalLayout, { LegalHeading } from "@/components/ui/legal-layout";
import { store } from "@/lib/store";

export const metadata = {
  title: "Algemene voorwaarden | Magic Dreams Tilburg",
  description:
    "De algemene voorwaarden van Magic Dreams Tilburg voor reserveringen en aankopen in de winkel.",
};

export default function Page() {
  return (
    <LegalLayout title="Algemene voorwaarden" updated="12 juni 2026">
      <p className="text-[#8b8b7e] italic border-l border-[rgba(212,175,55,0.3)] pl-4">
        Conceptversie — vervang deze tekst door de juridisch gecontroleerde
        voorwaarden van {store.legalName}. Vul KvK- en btw-nummer aan in{" "}
        <code>lib/store.ts</code>.
      </p>

      <LegalHeading>1. Bedrijfsgegevens</LegalHeading>
      <p>
        {store.legalName}
        <br />
        {store.street}, {store.postcode} {store.city}, {store.country}
        <br />
        Telefoon: {store.phone} · E-mail: {store.email}
        <br />
        KvK-nummer: {store.kvk} · Btw-nummer: {store.btw}
      </p>

      <LegalHeading>2. Toepasselijkheid</LegalHeading>
      <p>
        Deze algemene voorwaarden zijn van toepassing op elk aanbod van{" "}
        {store.name} en op elke tot stand gekomen reservering of overeenkomst
        tussen {store.name} en de klant. De website dient als digitale etalage:
        producten worden telefonisch of in de winkel gereserveerd en afgerekend.
      </p>

      <LegalHeading>3. Leeftijdsgrens</LegalHeading>
      <p>
        Een deel van het assortiment is uitsluitend bestemd voor personen van 18
        jaar en ouder. {store.name} verkoopt deze producten niet aan
        minderjarigen en kan bij twijfel om een geldig legitimatiebewijs vragen.
      </p>

      <LegalHeading>4. Aanbod en prijzen</LegalHeading>
      <p>
        Alle prijzen zijn in euro&apos;s en inclusief btw. Kennelijke
        vergissingen of fouten in het aanbod binden {store.name} niet.{" "}
        {store.name} kan het assortiment en de prijzen op elk moment wijzigen.
        Afbeeldingen zijn een indicatie; het werkelijke product kan afwijken.
      </p>

      <LegalHeading>5. Reservering en betaling</LegalHeading>
      <p>
        Een reservering via de website of telefoon is een verzoek om een product
        in de winkel klaar te leggen. Betaling vindt plaats in de winkel bij het
        ophalen. Gereserveerde producten worden maximaal enkele dagen vastgehouden,
        tenzij anders afgesproken.
      </p>

      <LegalHeading>6. Gebruik van producten</LegalHeading>
      <p>
        Producten worden geleverd met informatie over verantwoord gebruik.
        {" "}{store.name} geeft eerlijke voorlichting maar is niet aansprakelijk
        voor onjuist of onverantwoord gebruik. Volg altijd de aanbevolen dosering
        en raadpleeg bij twijfel een arts.
      </p>

      <LegalHeading>7. Aansprakelijkheid</LegalHeading>
      <p>
        De aansprakelijkheid van {store.name} is beperkt tot het bedrag van de
        betreffende aankoop. {store.name} is niet aansprakelijk voor indirecte
        schade of gevolgschade.
      </p>

      <LegalHeading>8. Toepasselijk recht</LegalHeading>
      <p>
        Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing.
        Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement
        waar {store.name} is gevestigd.
      </p>
    </LegalLayout>
  );
}
