import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacybeleid | Elite Nails Lierde",
  description:
    "Lees hoe Elite Nails Lierde uw persoonsgegevens verwerkt, welke cookies wij gebruiken en wat uw rechten zijn onder de AVG/GDPR.",
  robots: { index: false, follow: false },
};

export default function PrivacyBeleidPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-cream text-charcoal pt-32 pb-24 px-6">
        <article className="mx-auto max-w-2xl">

          {/* Back link */}
          <Link
            href="/"
            className="inline-block mb-10 text-xs uppercase tracking-[0.15em] text-mauve hover:opacity-70 transition-opacity font-sans"
          >
            ← Terug naar home
          </Link>

          <header className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-mauve font-sans mb-3">
              Juridisch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
              Privacybeleid
            </h1>
            <p className="mt-4 text-sm text-charcoal-muted font-sans">
              Elite Nails Lierde &mdash; Steenweg 234b, 9572 Sint-Martens-Lierde, België
              <br />
              E-mail:{" "}
              <a
                href="mailto:info@elitenails.biz"
                className="text-mauve hover:opacity-70 transition-opacity"
              >
                info@elitenails.biz
              </a>
              <br />
              Laatste update: april 2026
            </p>
          </header>

          <div className="prose-policy space-y-10 font-sans text-sm leading-relaxed text-charcoal/80">

            <section>
              <h2 className="font-serif text-xl text-charcoal mb-3">1. Wie zijn wij?</h2>
              <p>
                Elite Nails Lierde, gevestigd aan Steenweg 234b, 9572 Sint-Martens-Lierde, is de
                verwerkingsverantwoordelijke voor de persoonsgegevens die via deze website worden
                verzameld. U kunt ons bereiken via{" "}
                <a href="mailto:info@elitenails.biz" className="text-mauve hover:opacity-70 transition-opacity">
                  info@elitenails.biz
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-charcoal mb-3">2. Welke persoonsgegevens verzamelen wij?</h2>
              <p className="mb-3">
                Wij verzamelen persoonsgegevens in de volgende situaties:
              </p>
              <div className="space-y-4 pl-4 border-l border-mauve/20">
                <div>
                  <p className="font-medium text-charcoal mb-1">a) Contactverzoeken</p>
                  <p>
                    Wanneer u ons een e-mail stuurt naar info@elitenails.biz, verzamelen wij de
                    gegevens die u zelf verstrekt: uw naam, e-mailadres en de inhoud van uw
                    bericht. Deze gegevens worden uitsluitend gebruikt om uw vraag te beantwoorden.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-1">b) Afspraken en reserveringen</p>
                  <p>
                    Indien u een afspraak maakt — telefonisch, per e-mail of via Instagram — verwerken
                    wij uw naam, contactgegevens en de datum/tijd van uw afspraak. Deze gegevens zijn
                    noodzakelijk voor het uitvoeren van onze dienstverlening.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-1">c) Website-analytics (Google Analytics 4)</p>
                  <p>
                    Met uw toestemming maakt onze website gebruik van Google Analytics 4 (GA4), een
                    dienst van Google LLC. GA4 plaatst cookies en verzamelt geanonimiseerde of
                    gepseudonimiseerde gegevens over uw websitebezoek, zoals bezochte pagina&apos;s,
                    duur van het bezoek, apparaattype en (bij benadering) geografische locatie.
                    De gegevens worden uitsluitend verzameld nadat u uw toestemming heeft gegeven
                    via onze cookiebanner.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl text-charcoal mb-3">3. Rechtsgronden voor verwerking</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-mauve/20">
                      <th className="text-left py-2 pr-4 font-medium text-charcoal">Verwerking</th>
                      <th className="text-left py-2 font-medium text-charcoal">Rechtsgrond</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mauve/10">
                    <tr>
                      <td className="py-2 pr-4">Beantwoorden van contactverzoeken</td>
                      <td className="py-2">Gerechtvaardigd belang (art. 6 lid 1 sub f AVG)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Afspraken en reserveringen</td>
                      <td className="py-2">Uitvoering van een overeenkomst (art. 6 lid 1 sub b AVG)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Google Analytics 4 (cookies)</td>
                      <td className="py-2">Toestemming (art. 6 lid 1 sub a AVG)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl text-charcoal mb-3">4. Bewaartermijnen</h2>
              <ul className="space-y-2 pl-4 border-l border-mauve/20">
                <li><span className="font-medium text-charcoal">Contacte-mails:</span> maximaal 12 maanden na afhandeling van uw vraag</li>
                <li><span className="font-medium text-charcoal">Afspraakinformatie:</span> maximaal 24 maanden</li>
                <li><span className="font-medium text-charcoal">GA4-analysegegevens:</span> maximaal 14 maanden (ingesteld in Google Analytics)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-charcoal mb-3">5. Uw rechten als betrokkene</h2>
              <p className="mb-4">
                U heeft de volgende rechten op grond van de AVG. Stuur uw verzoek naar{" "}
                <a href="mailto:info@elitenails.biz" className="text-mauve hover:opacity-70 transition-opacity">
                  info@elitenails.biz
                </a>{" "}
                — wij reageren binnen 30 kalenderdagen.
              </p>
              <div className="space-y-3 pl-4 border-l border-mauve/20">
                <p><span className="font-medium text-charcoal">Recht op inzage (art. 15 AVG)</span> — u kunt opvragen welke gegevens wij van u bewaren.</p>
                <p><span className="font-medium text-charcoal">Recht op rectificatie (art. 16 AVG)</span> — onjuiste gegevens laten corrigeren.</p>
                <p><span className="font-medium text-charcoal">Recht op verwijdering (art. 17 AVG)</span> — uw gegevens laten wissen (&ldquo;recht om vergeten te worden&rdquo;), tenzij wettelijke bewaartermijnen dit verhinderen.</p>
                <p><span className="font-medium text-charcoal">Recht op beperking van verwerking (art. 18 AVG)</span> — verwerking tijdelijk laten beperken.</p>
                <p><span className="font-medium text-charcoal">Recht op gegevensoverdraagbaarheid (art. 20 AVG)</span> — uw gegevens in een gangbaar formaat ontvangen.</p>
                <p><span className="font-medium text-charcoal">Recht van bezwaar (art. 21 AVG)</span> — bezwaar maken tegen verwerking op basis van gerechtvaardigd belang.</p>
                <p><span className="font-medium text-charcoal">Toestemming intrekken</span> — uw GA4-toestemming kunt u te allen tijde intrekken via de knop &ldquo;Cookievoorkeuren&rdquo; onderaan elke pagina.</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl text-charcoal mb-3">6. Delen van gegevens met derden</h2>
              <p>
                Wij verkopen uw gegevens niet aan derden. Wij delen uitsluitend met Google LLC als
                aanbieder van GA4, op basis van een gegevensverwerkingsovereenkomst en het EU-VS
                Data Privacy Framework, en — indien van toepassing — met het platform waarmee u
                een afspraak maakt.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-charcoal mb-3">7. Cookies</h2>
              <div className="space-y-3 pl-4 border-l border-mauve/20">
                <p>
                  <span className="font-medium text-charcoal">Strikt noodzakelijke cookies</span> worden
                  geplaatst zonder toestemming — zij zijn vereist voor het functioneren van de website.
                </p>
                <p>
                  <span className="font-medium text-charcoal">Analytische cookies (Google Analytics 4)</span> worden
                  uitsluitend geplaatst na uw uitdrukkelijke toestemming. U kunt uw voorkeuren op elk
                  moment aanpassen via de knop &ldquo;Cookievoorkeuren&rdquo; onderaan de pagina.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl text-charcoal mb-3">8. Beveiliging</h2>
              <p>
                Wij treffen passende technische en organisatorische maatregelen om uw gegevens te
                beschermen tegen ongeoorloofde toegang, verlies of misbruik. Onze website maakt
                gebruik van een beveiligde HTTPS-verbinding.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-charcoal mb-3">9. Klachten</h2>
              <p className="mb-2">
                U kunt een klacht indienen bij de Belgische toezichthoudende autoriteit:
              </p>
              <address className="not-italic pl-4 border-l border-mauve/20 text-charcoal/70">
                <p className="font-medium text-charcoal">Gegevensbeschermingsautoriteit (GBA)</p>
                <p>Drukpersstraat 35, 1000 Brussel</p>
                <p>
                  <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer" className="text-mauve hover:opacity-70 transition-opacity">
                    www.gegevensbeschermingsautoriteit.be
                  </a>
                </p>
                <p>
                  <a href="mailto:contact@apd-gba.be" className="text-mauve hover:opacity-70 transition-opacity">
                    contact@apd-gba.be
                  </a>
                </p>
              </address>
            </section>

            <section>
              <h2 className="font-serif text-xl text-charcoal mb-3">10. Wijzigingen</h2>
              <p>
                Wij behouden ons het recht voor dit privacybeleid te wijzigen. De meest actuele
                versie is steeds raadpleegbaar op deze pagina.
              </p>
            </section>

          </div>

          <div className="mt-16 pt-8 border-t border-mauve/20">
            <p className="text-xs text-charcoal-muted font-sans">
              Elite Nails Lierde &mdash; Steenweg 234b, 9572 Sint-Martens-Lierde &mdash;{" "}
              <a href="mailto:info@elitenails.biz" className="text-mauve hover:opacity-70 transition-opacity">
                info@elitenails.biz
              </a>
            </p>
          </div>

        </article>
      </main>

      <Footer />
    </>
  );
}
