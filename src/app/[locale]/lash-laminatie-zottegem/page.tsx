import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const BASE_URL = "https://www.elitenails.biz";
const CANONICAL = `${BASE_URL}/nl/lash-laminatie-zottegem`;

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return [{ locale: "nl" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "nl") return {};
  return {
    title: {
      absolute: "Lash Laminatie Zottegem | Wimpers Lamineren | Elite Nails",
    },
    description:
      "Lash laminatie dicht bij Zottegem? Elite Nails in Sint-Martens-Lierde, op 15 min. Professioneel wimpers lamineren voor een volle, gebogen look. Boek nu!",
    alternates: { canonical: CANONICAL },
    openGraph: {
      title: "Lash Laminatie Zottegem | Wimpers Lamineren | Elite Nails",
      description:
        "Lash laminatie dicht bij Zottegem? Elite Nails in Sint-Martens-Lierde, op 15 min. Professioneel wimpers lamineren voor een volle, gebogen look. Boek nu!",
      url: CANONICAL,
      siteName: "Elite Nails",
      images: [
        { url: `${BASE_URL}/frames/frame-0001.jpg`, width: 1200, height: 630 },
      ],
    },
  };
}

const faq = [
  {
    question: "Hoelang duurt een lash laminatie behandeling?",
    answer:
      "Een lash laminatie bij Elite Nails duurt gemiddeld 45 tot 60 minuten. We nemen de tijd om jouw wimpers zorgvuldig te behandelen voor een mooi, egaal resultaat.",
  },
  {
    question: "Hoe lang blijft het resultaat van lash laminatie?",
    answer:
      "Het resultaat houdt gemiddeld 6 tot 8 weken, afhankelijk van de wimpertextuur en de aftercare. Met de juiste thuisverzorging — geen stoom, geen vettige crèmes rondom de ogen — haal je het beste uit de behandeling.",
  },
  {
    question: "Is lash laminatie geschikt voor iedereen?",
    answer:
      "Lash laminatie is geschikt voor de meeste mensen met eigen wimpers. Heb je bijzonder dunne, korte of kwetsbare wimpers, dan bespreken we op voorhand wat het meest geschikte resultaat is. De behandeling is niet aanbevolen tijdens zwangerschap of bij gekende allergieën voor oogproducten.",
  },
];

export default async function LashLaminatieZottegem({ params }: Props) {
  const { locale } = await params;
  if (locale !== "nl") notFound();

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: "Elite Nails Lierde",
    description:
      "Professionele lash laminatie dicht bij Zottegem. Elite Nails in Sint-Martens-Lierde biedt wimpers lamineren, Russische manicure, BIAB en gelnagels.",
    url: CANONICAL,
    image: `${BASE_URL}/frames/frame-0001.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Steenweg 234b",
      postalCode: "9572",
      addressLocality: "Sint-Martens-Lierde",
      addressRegion: "Oost-Vlaanderen",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.8167,
      longitude: 3.8333,
    },
    telephone: "+32494175267",
    email: "info@elitenails.biz",
    sameAs: ["https://www.instagram.com/elite_nails_lierde/"],
    areaServed: { "@type": "City", name: "Zottegem" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <Script
        id="json-ld-lash-laminatie-zottegem"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Script
        id="json-ld-faq-lash-laminatie-zottegem"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-charcoal/90 backdrop-blur-md border-b border-white/5">
        <Link
          href="/nl"
          className="text-cream/60 hover:text-cream text-xs tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-2"
        >
          <span>&#8592;</span>
          <span>Home</span>
        </Link>
        <Link
          href="/nl"
          className="text-cream font-serif text-lg font-light tracking-[0.15em] uppercase"
        >
          Elite Nails
        </Link>
        <a
          href="https://www.instagram.com/elite_nails_lierde/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-cream/60 hover:text-mauve text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          Instagram
        </a>
      </nav>

      <main className="bg-charcoal min-h-screen text-cream">
        {/* Hero */}
        <section className="relative flex items-end min-h-[55vh] pt-24 pb-16 px-6 md:px-16 border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal" />
          <div className="relative z-10 max-w-4xl">
            <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-4">
              Wimpers lamineren — Elite Nails Lierde
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-tight text-balance">
              Lash Laminatie in de Regio Zottegem
            </h1>
            <div className="mt-8 h-px w-24 bg-white/20" />
          </div>
        </section>

        {/* Intro */}
        <section className="px-6 md:px-16 py-16 max-w-3xl">
          <p className="text-cream/75 text-lg md:text-xl font-light leading-relaxed mb-6">
            Ben je op zoek naar professionele lash laminatie in de regio Zottegem? Elite Nails in Sint-Martens-Lierde is op circa 15 minuten bereikbaar en biedt wimpers lamineren als een van haar specialiteiten. Met de juiste techniek en verzorgingsproducten haal je het maximum uit jouw eigen wimpers — geen extensions, geen ochtendstress.
          </p>
          <p className="text-cream/75 text-lg md:text-xl font-light leading-relaxed">
            Lash laminatie zottegem — klanten uit Zottegem, Sint-Lievens-Houtem, Herzele en de omliggende gemeenten vinden hun weg naar ons studio voor een behandeling die weken meegaat. Niet toevallig: kwaliteit, hygiëne en persoonlijke aandacht staan bij Elite Nails altijd centraal.
          </p>
        </section>

        {/* Section 1 */}
        <section className="px-6 md:px-16 py-16 border-t border-white/10 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-cream mb-6 leading-snug">
            Wat is lash laminatie?
          </h2>
          <p className="text-cream/70 text-base font-light leading-relaxed">
            Lash laminatie is een behandeling waarbij je eigen wimpers worden gebogen, gevuld en gefixeerd met een voedend lamineringssysteem. Het resultaat is een open, heldere blik die lijkt op mascara die nooit afloopt — maar dan zes tot acht weken lang. Er worden geen extensions of kunstwimpers gebruikt: jouw eigen wimpers worden naar boven gericht en behouden die vorm dankzij de laminering. De behandeling is veilig, niet-invasief en geeft een verrassend zichtbaar effect — zelfs als je van nature dunne wimpers hebt.
          </p>
        </section>

        {/* Section 2 */}
        <section className="px-6 md:px-16 py-16 border-t border-white/10 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-cream mb-6 leading-snug">
            Lash laminatie bij Elite Nails
          </h2>
          <p className="text-cream/70 text-base font-light leading-relaxed">
            Bij Elite Nails werken we met professionele lamineerproducten die de wimper niet beschadigen maar wel optimaal vormgeven. Elke behandeling wordt afgestemd op de structuur van jouw wimpers en het gewenste resultaat — subtiel of uitgesproken, alles is bespreekbaar. Na afloop krijg je concrete aftercare-tips mee zodat je zo lang mogelijk van het resultaat kan genieten. Ons studio in Sint-Martens-Lierde is op circa 15 minuten rijden van Zottegem, met gratis parkeerruimte ter plaatse. Klanten die kiezen voor lash laminatie zottegem bij Elite Nails weten: hier wordt de tijd genomen die het verdient.
          </p>
        </section>

        {/* Section 3 */}
        <section className="px-6 md:px-16 py-16 border-t border-white/10 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-cream mb-6 leading-snug">
            Resultaten en verzorging
          </h2>
          <p className="text-cream/70 text-base font-light leading-relaxed mb-4">
            Het resultaat van lash laminatie is meteen zichtbaar en houdbaar tot zes à acht weken. De eerste 24 tot 48 uur vermijd je best contact met water, stoom en vettige producten rondom de ogen — zo laat je de laminering goed uitharden. Daarna is er nauwelijks onderhoud nodig.
          </p>
          <p className="text-cream/70 text-base font-light leading-relaxed">
            Gebruik geen waterproof mascara en wrijf niet in de ogen. Met een goede aftercare geniet je wekenlang van volle, gebogen wimpers die je blik openen zonder extra inspanning. Klanten die kiezen voor lash laminatie bij Elite Nails zijn elke keer verrast hoe lang het resultaat aanhoudt — en hoe weinig moeite het nadien kost.
          </p>
        </section>

        {/* FAQ */}
        <section className="px-6 md:px-16 py-16 border-t border-white/10 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-cream mb-10 leading-snug">
            Veelgestelde vragen over lash laminatie
          </h2>
          <dl className="space-y-0">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group border-t border-white/10 py-5 last:border-b"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none text-cream/90 text-sm font-light tracking-wide hover:text-cream transition-colors duration-200">
                  <dt className="font-medium">{item.question}</dt>
                  <span className="flex-shrink-0 mt-0.5 text-mauve/60 group-open:rotate-45 transition-transform duration-200 text-lg leading-none">
                    +
                  </span>
                </summary>
                <dd className="mt-4 text-cream/60 text-sm font-light leading-relaxed pr-8">
                  {item.answer}
                </dd>
              </details>
            ))}
          </dl>
        </section>

        {/* Directions */}
        <section className="px-6 md:px-16 py-16 border-t border-white/10 max-w-3xl">
          <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-6">
            Route & contact
          </p>
          <p className="text-cream/80 text-base font-light mb-4">
            Volg de N42 richting Lierde — na 15 minuten sta je bij ons. Gratis parkeren ter plaatse.
          </p>
          <p className="text-cream/50 text-sm font-light font-sans">
            Steenweg 234b, 9572 Sint-Martens-Lierde | info@elitenails.biz | @elite_nails_lierde
          </p>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-16 py-20 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-cream mb-3">
              Klaar voor mooiere wimpers?
            </h2>
            <p className="text-cream/60 text-sm font-light">
              Stuur ons een DM op Instagram voor beschikbaarheid en afspraken.
            </p>
          </div>
          <a
            href="https://www.instagram.com/elite_nails_lierde/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-mauve text-cream text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-mauve/20 transition-colors duration-300"
          >
            Boek via Instagram
          </a>
        </section>
      </main>

      <footer className="bg-charcoal border-t border-white/10 px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-cream/30 text-xs tracking-[0.2em] uppercase">
          &#169; {new Date().getFullYear()} Elite Nails &#183; Sint-Martens-Lierde
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/nl/blog"
            className="text-cream/30 hover:text-cream/60 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="/nl"
            className="text-cream/30 hover:text-cream/60 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
          >
            &#8592; Home
          </Link>
        </div>
      </footer>
    </>
  );
}
