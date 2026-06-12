import LegalLayout, { LegalHeading } from "@/components/ui/legal-layout";
import { store } from "@/lib/store";

export const metadata = {
  title: "Privacyverklaring | Magic Dreams Tilburg",
  description:
    "Hoe Magic Dreams Tilburg omgaat met persoonsgegevens conform de AVG.",
};

export default function Page() {
  return (
    <LegalLayout title="Privacyverklaring" updated="12 juni 2026">
      <p className="text-[#8b8b7e] italic border-l border-[rgba(212,175,55,0.3)] pl-4">
        Conceptversie — laat dit door {store.legalName} controleren en aanvullen
        met de daadwerkelijk gebruikte diensten (bijv. analytics, hosting,
        nieuwsbrief).
      </p>

      <LegalHeading>1. Verwerkingsverantwoordelijke</LegalHeading>
      <p>
        {store.legalName}, {store.street}, {store.postcode} {store.city}, is
        verantwoordelijk voor de verwerking van persoonsgegevens zoals
        beschreven in deze verklaring. Contact: {store.email} · {store.phone}.
      </p>

      <LegalHeading>2. Welke gegevens wij verwerken</LegalHeading>
      <p>
        Wij verwerken alleen gegevens die u zelf aan ons verstrekt, bijvoorbeeld
        wanneer u telefonisch of via e-mail een product reserveert of een vraag
        stelt: uw naam, telefoonnummer en/of e-mailadres en de inhoud van uw
        bericht.
      </p>

      <LegalHeading>3. Waarvoor wij gegevens gebruiken</LegalHeading>
      <p>
        Uw gegevens worden uitsluitend gebruikt om uw reservering of vraag af te
        handelen en om contact met u op te nemen. Wij verkopen uw gegevens nooit
        aan derden.
      </p>

      <LegalHeading>4. Bewaartermijn</LegalHeading>
      <p>
        Wij bewaren uw gegevens niet langer dan noodzakelijk voor de hierboven
        genoemde doelen of zolang de wet ons verplicht (bijvoorbeeld voor de
        belastingadministratie).
      </p>

      <LegalHeading>5. Cookies</LegalHeading>
      <p>
        Deze website plaatst functionele cookies die nodig zijn om de site te
        laten werken. Indien er analytische of tracking-cookies worden gebruikt,
        wordt hiervoor vooraf toestemming gevraagd.
      </p>

      <LegalHeading>6. Uw rechten</LegalHeading>
      <p>
        U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te
        laten verwijderen. Ook kunt u bezwaar maken tegen de verwerking. Stuur
        hiervoor een verzoek naar {store.email}. U kunt daarnaast een klacht
        indienen bij de Autoriteit Persoonsgegevens.
      </p>

      <LegalHeading>7. Beveiliging</LegalHeading>
      <p>
        Wij nemen passende maatregelen om misbruik, verlies en onbevoegde toegang
        tot uw gegevens tegen te gaan. Heeft u de indruk dat uw gegevens niet
        goed beveiligd zijn? Neem dan contact op via {store.email}.
      </p>
    </LegalLayout>
  );
}
