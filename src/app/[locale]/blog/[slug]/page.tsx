import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const BASE_URL = "https://www.elitenails.biz";

type BlogPost = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  publishDate: string;
  relatedLinks?: { text: string; href: string }[];
};

const POSTS: Record<string, BlogPost> = {
  "russische-manicure-uitgelegd": {
    slug: "russische-manicure-uitgelegd",
    metaTitle: "Wat is een Russische Manicure? | Complete Gids | Elite Nails",
    metaDescription:
      "Alles over de Russische manicure — hoe werkt het, wat zijn de voordelen en waarom kiezen steeds meer mensen voor deze droge techniek? Lees meer.",
    h1: "Wat is een Russische Manicure? Complete Gids",
    intro:
      "De Russische manicure wint snel aan populariteit in België en Europa. Maar wat maakt deze techniek zo anders dan een gewone manicure? In deze gids leggen we alles uit — van de werkwijze tot de voordelen, en voor wie de behandeling het meest geschikt is.",
    publishDate: "2025-01-15",
    sections: [
      {
        heading: "Wat is de Russische manicure?",
        body: [
          "De Russische manicure — ook wel 'droge manicure' of 'e-file manicure' genoemd — is een professionele nagelbehandelingstechniek die oorspronkelijk uit Rusland en Oost-Europa stamt. Het grote verschil met een traditionele manicure: er wordt geen water gebruikt.",
          "In plaats van de nagels te weken, worden de cuticula en het nageloppervlak behandeld met kleine elektrische vijlen (ook wel 'e-file bits' of 'carbide bits' genoemd). Deze bits draaien op gecontroleerde snelheid en verwijderen dode huidcellen, overtollige cuticula en onregelmatigheden op het nageloppervlak — zonder de levende huid te beschadigen.",
        ],
      },
      {
        heading: "Hoe werkt een Russische manicure stap voor stap?",
        body: [
          "Een typische Russische manicure bij Elite Nails verloopt als volgt:",
          "1. Voorbereiding: de nagels worden gereinigd en de gewenste vorm wordt besproken en gevijld.",
          "2. Cuticula-behandeling: met een speciale e-file bit wordt de cuticula voorzichtig teruggewerkt en de losse huid verwijderd — volledig droog, zonder duwstokje.",
          "3. Nageloppervlak: het nageloppervlak wordt gepolijst voor een perfecte hechting van gel of lak.",
          "4. Gel of lak: naar keuze wordt BIAB, gelnagels of gelpolish aangebracht voor een langdurig resultaat.",
          "5. Afwerking: topcoat en finishing touch voor een perfecte, glanzende nagel.",
        ],
      },
      {
        heading: "Voordelen van de Russische manicure",
        body: [
          "De Russische manicure biedt een reeks voordelen ten opzichte van traditionele natte manicure:",
          "Langduriger resultaat: door de droge techniek hecht gel of lak significant beter op het nageloppervlak. Klanten rapporteren gemiddeld 3 tot 5 weken makeloos resultaat.",
          "Hygiënischer: geen waterbassin betekent minder risico op bacteriën of schimmelinfecties. Alle bits en gereedschappen worden gesteriliseerd tussen behandelingen.",
          "Nauwkeuriger: de elektrische vijlen laten een precisie toe die met handinstrumenten moeilijk te bereiken is. De cuticula-lijn is strakker, de nagel uniformer.",
          "Minder beschadigend: mits uitgevoerd door een gecertificeerde nagelstyliste beschadigt de Russische manicure de nagels niet. In tegenstelling tot natte manicure verzwakt het de nagelplaat niet door langdurig weken.",
        ],
      },
      {
        heading: "Russische manicure vs. traditionele manicure",
        body: [
          "Bij een traditionele manicure worden de nagels geweekt in warm water om de cuticula te verzachten. Dit maakt het makkelijker om de huid terug te duwen, maar heeft ook nadelen: de nagelplaat absorbeert water en zwelt op. Als er dan gel of lak op aangebracht wordt, krimpt de nagel bij het drogen — wat sneller leidt tot loslaten of afbladderen.",
          "De Russische manicure omzeilt dit probleem volledig. Geen water, geen zwelling, geen verlies van hechting. Het resultaat spreekt voor zich.",
        ],
      },
      {
        heading: "Voor wie is de Russische manicure geschikt?",
        body: [
          "De Russische manicure is geschikt voor vrijwel iedereen, maar is in het bijzonder populair bij:",
          "Mensen met snel afbladderend gel of gelnagels — de betere hechting lost dit probleem op.",
          "Mensen met overgroeid of problematisch cuticula — de nauwkeurige behandeling geeft de nagels een verzorgde, strakke look.",
          "Mensen die hygiëne hoog in het vaandel dragen — geen waterbassin en gesteriliseerde instrumenten geven extra gemoedsrust.",
          "Mensen met een drukke agenda — dankzij de langere houdbaarheid (3–5 weken) zijn er minder frequent behandelingen nodig.",
        ],
      },
      {
        heading: "Russische manicure bij Elite Nails in Sint-Martens-Lierde",
        body: [
          "Bij Elite Nails is de Russische manicure onze absolute specialiteit. Onze nagelstyliste werkt met gecertificeerd professioneel materiaal en volgt continu bijscholingen om op de hoogte te blijven van de nieuwste technieken.",
          "Ons studio in Sint-Martens-Lierde is bereikbaar vanuit Geraardsbergen (10 min), Brakel (10 min), Ninove (15 min), Zottegem (15 min) en Ronse (20 min). Boek je afspraak via Instagram @elite_nails_lierde.",
        ],
      },
    ],
  },

  "biab-nagels-alles-wat-je-moet-weten": {
    slug: "biab-nagels-alles-wat-je-moet-weten",
    metaTitle: "BIAB Nagels: Alles Wat Je Moet Weten | Elite Nails Lierde",
    metaDescription:
      "BIAB of builder gel: wat is het, hoe lang duurt het, en is het beter dan gelnagels? Alles wat je moet weten over BIAB in onze complete gids.",
    h1: "BIAB Nagels: Alles Wat Je Moet Weten",
    intro:
      "BIAB — Builder In A Bottle — is uitgegroeid tot een van de populairste nagelbehandelingen ter wereld. Maar wat is het precies, hoe verschilt het van gelnagels of acryl, en is het de juiste keuze voor jou? In deze complete gids beantwoorden we alle vragen.",
    publishDate: "2025-02-03",
    sections: [
      {
        heading: "Wat is BIAB?",
        body: [
          "BIAB staat voor Builder In A Bottle — een versterkende gelbehandeling die wordt aangebracht op de natuurlijke nagel. Het product werd in 2017 gelanceerd door het Britse merk The Gel Bottle Inc. en veroverde sindsdien de nagelwereld.",
          "BIAB is een zelfnivellerende builder gel in flesjesvorm. Het wordt net als gewone gelpolish met een penseel aangebracht, maar is dikker en versterkender. Het wordt uitgehard onder een UV/LED-lamp en vormt een beschermende laag over de natuurlijke nagel.",
        ],
      },
      {
        heading: "Wat maakt BIAB anders dan gelnagels en acryl?",
        body: [
          "Gelnagels (gelpolish) is een kleurlaag die het nageloppervlak bedekt maar weinig structurele versterking biedt. Acryl is een kunststofvulling die kunstmatig de lengte en vorm van de nagel vergroot. BIAB zit daar tussenin — het versterkt de eigen nagel zonder kunstnagels toe te voegen.",
          "BIAB verlengt de nagel niet (tenzij dat specifiek gewenst wordt). Het beschermt en versterkt de eigen nagelplaat, zodat die sterker, dikker en minder breukgevoelig wordt. Tegelijk kan BIAB gecombineerd worden met kleurgelpolish voor elke gewenste look.",
        ],
      },
      {
        heading: "Voordelen van BIAB",
        body: [
          "Versterkt de natuurlijke nagel: ideaal voor wie last heeft van brosse, dunne of snel afbrekende nagels.",
          "Geen kunstnagels: de eigen nagel blijft groeien onder de BIAB-laag. Bij correct aanbrengen en verwijderen is er geen schade.",
          "Langdurig resultaat: BIAB houdt gemiddeld 3 tot 4 weken, soms langer. De laag blijft intact zonder afbladderen of loslaten.",
          "Flexibel: BIAB is licht flexibel, waardoor het meebeweegt met de nagel in plaats van te breken bij stoten.",
          "Kleur naar keuze: BIAB is verkrijgbaar in tientallen kleuren, of kan als nude/clear base gebruikt worden onder kleurgelpolish.",
        ],
      },
      {
        heading: "Hoe wordt BIAB aangebracht?",
        body: [
          "De BIAB-behandeling bij Elite Nails verloopt als volgt:",
          "1. Nagelvoorbereiding: reiniging, licht buffeuren en een professionele primer voor optimale hechting.",
          "2. Base coat: een dunne laag BIAB als basis.",
          "3. Builder laag: een dikkere laag BIAB wordt aangebracht en zorgvuldig gemodelleerd voor de gewenste dikte en vorm.",
          "4. Uitharden: elke laag wordt uitgehard onder een UV/LED-lamp.",
          "5. Kleur (optioneel): kleurgelpolish naar wens.",
          "6. Topcoat: voor glans en extra bescherming.",
        ],
      },
      {
        heading: "Hoe lang duurt BIAB en hoe wordt het verwijderd?",
        body: [
          "Een BIAB-behandeling duurt bij Elite Nails gemiddeld 60 tot 75 minuten. Het resultaat houdt 3 tot 5 weken, afhankelijk van de nagelgroei en -kwaliteit.",
          "BIAB wordt verwijderd door de lagen licht te buffeuren en vervolgens te weken in acetone. Dit proces duurt 15 tot 20 minuten en wordt altijd professioneel uitgevoerd om schade aan de eigen nagel te voorkomen. Thuis verwijderen wordt afgeraden.",
        ],
      },
      {
        heading: "Is BIAB geschikt voor jou?",
        body: [
          "BIAB is ideaal als je last hebt van snel afbrekende of brosse nagels die moeilijk groeien. De gel beschermt de nagel en geeft hem de kans om onder de laag te groeien en sterker te worden.",
          "BIAB is ook populair bij mensen die genieten van het naturel-look maar toch wat meer bescherming en glans willen. En voor wie regelmatig gel gebruikt maar geen kunstnagels wil: BIAB is dé tussenvorm.",
        ],
      },
      {
        heading: "BIAB bij Elite Nails in Sint-Martens-Lierde",
        body: [
          "Bij Elite Nails combineren we de BIAB-behandeling vaak met de Russische manicure — voor een perfect voorbereide nagelplaat én een langdurig resultaat. Ons studio is bereikbaar vanuit Geraardsbergen (10 min), Brakel (10 min), Ninove (15 min), Zottegem (15 min) en Ronse (20 min).",
          "Boek je BIAB-behandeling via Instagram @elite_nails_lierde of stuur ons een e-mail via info@elitenails.biz.",
        ],
      },
    ],
  },
};

  "wat-is-een-russische-manicure": {
    slug: "wat-is-een-russische-manicure",
    metaTitle: "Russische Manicure: Voordelen & Nadelen | Elite Nails",
    metaDescription:
      "Wat is een russische manicure, wat zijn de voordelen en nadelen, en hoe verschilt het van een gewone manicure? Alles wat je moet weten.",
    h1: "Wat is een Russische Manicure? Alles wat je moet weten",
    intro:
      "De russische manicure is de voorbije jaren uitgegroeid tot een van de meest gevraagde nagelbehandelingen in België. Maar wat is het precies, wat zijn de voordelen en nadelen, en voor wie is het eigenlijk geschikt? In dit artikel leggen we alles eerlijk en helder uit — zodat jij een weloverwogen keuze kunt maken.",
    publishDate: "2026-04-12",
    relatedLinks: [
      {
        text: "Nagelstudio in de buurt van Zottegem — Elite Nails",
        href: "/nl/nagelstudio-zottegem",
      },
      {
        text: "Bekijk onze diensten: Russische Manicure, BIAB & meer",
        href: "/nl/diensten/russische-manicure",
      },
    ],
    sections: [
      {
        heading: "Wat maakt een Russische manicure anders?",
        body: [
          "De russische manicure — ook wel 'droge manicure' of 'e-file manicure' — verschilt op één fundamenteel punt van een klassieke manicure: er wordt geen water gebruikt.",
          "Bij een gewone manicure worden de nagels geweekt in warm water om de cuticula te verzachten. Dat klinkt onschuldig, maar water laat de nagelplaat opzwellen. Als er daarna gel of lak aangebracht wordt, krimpt de nagel bij het drogen weer terug — en dat is precies waarop gel of lak begint los te laten.",
          "De russische manicure werkt volledig droog. Met kleine elektrische vijlen — e-file bits — worden de cuticula en dode huid met extreme precisie verwijderd, zonder de levende huid te raken. Het nageloppervlak wordt daarna gladgepolijst voor een optimale hechting. Het verschil met een gewone manicure is direct zichtbaar: de nagelriemzone is strakker, de gel houdt aanzienlijk langer, en het resultaat ziet er professioneler uit.",
          "Een behandeling begint met het reinigen en vormgeven van de nagels. Daarna werkt de nagelstyliste met een speciale cuticula-bit de nagelriem voorzichtig terug en verwijdert ze de dode huidcellen rondom de nagel. Het geheel wordt afgewerkt met een polijstbit die het nageloppervlak vlak en glad maakt — klaar voor een perfecte hechting van gel of BIAB.",
        ],
      },
      {
        heading: "De voordelen van een Russische manicure",
        body: [
          "Er is een reden waarom steeds meer nagelstudio's overstappen naar de droge techniek. De russische manicure voordelen zijn concreet en meetbaar.",
          "Langer houdbaar resultaat: dankzij de droge voorbereiding hecht gel of BIAB gemiddeld 3 tot 5 weken zonder loslaten of afbladderen — aanzienlijk langer dan bij een natte manicure.",
          "Hygiënischer: er is geen waterbassin, een bekende bron van bacteriën en schimmelinfecties. Alle e-file bits worden na elke klant gesteriliseerd.",
          "Nauwkeuriger: elektrische vijlen laten een niveau van precisie toe dat met handinstrumenten simpelweg niet haalbaar is. De cuticula-lijn is strakker, elk detail nauwkeuriger afgewerkt.",
          "Minder beschadigend: mits uitgevoerd door een ervaren nagelstyliste beschadigt de techniek de nagels niet. De nagelplaat wordt niet verzwakt door langdurig weken.",
          "Vergeet ook niet dat de langere houdbaarheid op termijn kostenefficiënter is. Minder behandelingen per jaar betekent minder uitgaven — ook al lijkt de prijs per behandeling iets hoger dan bij een snelle gel-service.",
          "Wat zijn dan de russische manicure nadelen? Die zijn eerlijk gezegd beperkt. De behandeling duurt iets langer — gemiddeld 75 tot 90 minuten — en vereist een ervaren hand. Bij een onervaren styliste bestaat het risico op overmatig verwijderen van levende huid. Kies daarom altijd voor een gecertificeerde professional.",
        ],
      },
      {
        heading: "Is een Russische manicure geschikt voor jou?",
        body: [
          "De russische manicure is geschikt voor vrijwel iedereen, maar bijzonder populair bij mensen met snel afbladderend gel, problematische cuticula of een drukke agenda die liever om de vier à vijf weken een afspraak inplant dan om de twee.",
          "Heb je erg gevoelige nagelriemen? Dat is geen probleem, maar bespreek het vooraf. Een goede nagelstyliste past druk en snelheid aan op jouw huid. Bij je eerste behandeling is een kort gesprek vooraf altijd de moeite waard.",
          "Voor mensen die waarde hechten aan hygiëne — geen waterbassin, gesteriliseerd materiaal, geen gedeeld gereedschap — biedt de russische manicure ook op dat vlak een duidelijk voordeel.",
          "BIAB is trouwens een populaire combinatie met de russische techniek: de droge voorbereiding zorgt voor maximale hechting, en de builder gel beschermt en versterkt de nagel tegelijk. Voor wie brosse of dunne nagels heeft, is deze combinatie bijzonder aan te raden.",
        ],
      },
      {
        heading: "Wat kost een Russische manicure?",
        body: [
          "De prijs van een russische manicure hangt af van de afwerking die je kiest. De droge cuticula-behandeling wordt altijd gecombineerd met gel, BIAB of gelnagels.",
          "Bij Elite Nails hanteren we de volgende richtprijzen: russische manicure met gelpolish vanaf €35, met BIAB of gelnagels vanaf €45. Prijzen kunnen variëren op basis van nagellengte, nail art of extra's.",
          "Een correcte russische manicure vraagt meer tijd en vaardigheid dan een snelle gel-behandeling. Een opvallend lage prijs gaat vrijwel altijd gepaard met minder precisie of inferieur materiaal. Jouw nagels zijn de investering waard.",
        ],
      },
      {
        heading: "Russische manicure in de buurt van Zottegem",
        body: [
          "Ben je op zoek naar een russische manicure in de buurt van Zottegem? Elite Nails is gevestigd in Sint-Martens-Lierde, op slechts 15 minuten rijden via de N42. Klanten uit Zottegem, Herzele, Brakel, Geraardsbergen en de hele regio vinden hun weg naar ons kleine, gezellige en discrete studio.",
          "Onze nagelstyliste is gespecialiseerd in de russische manicure techniek en werkt uitsluitend met gecertificeerd professioneel materiaal. Afspraken worden gemaakt via Instagram — we begeleiden je graag bij de keuze van de juiste behandeling voor jouw nagels en wensen.",
        ],
      },
    ],
  },
};

const slugs = Object.keys(POSTS);

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return slugs.map((slug) => ({ locale: "nl", slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "nl") return {};
  const post = POSTS[slug];
  if (!post) return {};
  const canonical = `${BASE_URL}/nl/blog/${slug}`;
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonical,
      siteName: "Elite Nails",
      type: "article",
      publishedTime: post.publishDate,
      images: [{ url: `${BASE_URL}/frames/frame-0001.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "nl") notFound();
  const post = POSTS[slug];
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.h1,
    description: post.metaDescription,
    datePublished: post.publishDate,
    author: {
      "@type": "Organization",
      name: "Elite Nails Lierde",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Elite Nails Lierde",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/frames/frame-0001.jpg` },
    },
    url: `${BASE_URL}/nl/blog/${slug}`,
    image: `${BASE_URL}/frames/frame-0001.jpg`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/nl/blog/${slug}` },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.sections.slice(0, -1).map((s) => ({
      '@type': 'Question',
      name: s.heading,
      acceptedAnswer: {
        '@type': 'Answer',
        text: s.body.join(' '),
      },
    })),
  };

  return (
    <>
      <Script
        id={`json-ld-blog-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id={`json-ld-faq-${slug}`}
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

      <main className="bg-charcoal min-h-screen text-cream pt-24">
        {/* Hero */}
        <header className="px-6 md:px-16 py-16 max-w-3xl border-b border-white/10">
          <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-4">
            Blog — Elite Nails Lierde
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-cream leading-tight text-balance">
            {post.h1}
          </h1>
          <div className="mt-8 h-px w-24 bg-white/20" />
          <p className="mt-8 text-cream/70 text-lg font-light leading-relaxed">
            {post.intro}
          </p>
        </header>

        {/* Article body */}
        <article className="px-6 md:px-16 max-w-3xl">
          {post.sections.map((section, i) => (
            <section key={i} className="py-12 border-b border-white/10 last:border-0">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-cream mb-6 leading-snug">
                {section.heading}
              </h2>
              {section.body.map((paragraph, j) => (
                <p
                  key={j}
                  className="text-cream/70 text-base font-light leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>

        {/* Internal links */}
        {post.relatedLinks && post.relatedLinks.length > 0 && (
          <section className="px-6 md:px-16 py-12 border-t border-white/10 max-w-3xl">
            <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-6">Lees ook</p>
            <ul className="space-y-3">
              {post.relatedLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-cream text-sm font-light underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA */}
        <section className="px-6 md:px-16 py-20 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center gap-8 max-w-3xl">
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-cream mb-3">
              Klaar om te boeken?
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
        <Link
          href="/nl"
          className="text-cream/30 hover:text-cream/60 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          &#8592; Home
        </Link>
      </footer>
    </>
  );
}
