import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type Service = {
  slug: string;
  name: string;
  subtitle: string;
  longDescription: string;
  imageUrl: string;
  duration: string;
  price: string;
  steps: { title: string; description: string }[];
  metaDescription: string;
};

const services: Record<string, Service> = {
  "russische-manicure": {
    slug: "russische-manicure",
    name: "Russische Manicure",
    subtitle: "PRECISION CUTICLE CARE",
    longDescription:
      "De Russische manicure is een professionele techniek waarbij de nagels en nagelriemen met extreme precisie worden verzorgd. Met gespecialiseerde elektrische vijlen worden dode huidcellen verwijderd zonder gebruik van water, waardoor de lak- of gellaag veel langer hecht. Het resultaat: verzorgde, elegante nagels die weken mooi blijven.",
    imageUrl:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=1200&q=80&fit=crop",
    duration: "75\u201390 min",
    price: "vanaf \u20AC45",
    steps: [
      {
        title: "Voorbereiding",
        description: "De nagels worden gereinigd en de vorm wordt bepaald.",
      },
      {
        title: "Droge behandeling",
        description:
          "Zonder water worden nagelriemen en dode huid verwijderd.",
      },
      {
        title: "Vijlen & polijsten",
        description:
          "Elektrische vijlen zorgen voor een perfecte oppervlakte.",
      },
      {
        title: "Afwerking",
        description:
          "Kleur of versterking naar keuze voor een langdurig resultaat.",
      },
    ],
    metaDescription:
      "Russische manicure bij Elite Nails in Lierde \u2014 precisie nagelzorg zonder water voor langdurige resultaten. Boek via Instagram.",
  },
  biab: {
    slug: "biab",
    name: "BIAB",
    subtitle: "BUILDER IN A BOTTLE",
    longDescription:
      "BIAB (Builder In A Bottle) is een revolutionaire behandeling die je natuurlijke nagels versterkt met een dunne maar sterke gellaag. Anders dan kunstnagels beschadigt BIAB je eigen nagels niet \u2014 het beschermt ze juist en laat ze groeien. Ideaal voor wie brosse of afbrekende nagels heeft.",
    imageUrl:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=80&fit=crop",
    duration: "60\u201375 min",
    price: "vanaf \u20AC50",
    steps: [
      {
        title: "Nagelvoorbereiding",
        description: "Reiniging en lichte buffeuring van het nageloppervlak.",
      },
      {
        title: "Primer & base",
        description:
          "Hechting wordt geoptimaliseerd met een professionele primer.",
      },
      {
        title: "BIAB aanbrengen",
        description:
          "De builder gel wordt laag voor laag opgebouwd en uitgehard.",
      },
      {
        title: "Kleur & top coat",
        description:
          "Kleur of naturel finish naar wens, afgesloten met een duurzame topcoat.",
      },
    ],
    metaDescription:
      "BIAB nagels bij Elite Nails in Lierde \u2014 versterk je eigen nagels met Builder In A Bottle. Flexibel, beschermend en langdurig.",
  },
  gelnagels: {
    slug: "gelnagels",
    name: "Gelnagels",
    subtitle: "LONG-LASTING COLOR",
    longDescription:
      "Gelnagels zijn de perfecte keuze voor wie langdurig mooie, glanzende nagels wil. De gelpolish wordt onder een UV/LED-lamp uitgehard en gaat drie tot vier weken mee zonder af te bladderen of te schilferen. Beschikbaar in tientallen kleuren \u2014 van klassiek nude tot opvallende accenten.",
    imageUrl:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=1200&q=80&fit=crop",
    duration: "60 min",
    price: "vanaf \u20AC40",
    steps: [
      {
        title: "Reiniging & vorming",
        description:
          "Nagels worden gereinigd en in de gewenste vorm gevijld.",
      },
      {
        title: "Cuticle care",
        description: "Nagelriemen worden verzorgd voor een nette finish.",
      },
      {
        title: "Gel applicatie",
        description:
          "Kleur wordt laag voor laag aangebracht en uitgehard onder UV/LED.",
      },
      {
        title: "Afwerking",
        description:
          "Topcoat voor hoogglans en bescherming die weken meegaat.",
      },
    ],
    metaDescription:
      "Gelnagels bij Elite Nails in Lierde \u2014 langdurige glanzende kleur die 3\u20134 weken meegaat. Beschikbaar in vele kleuren.",
  },
  pedicure: {
    slug: "pedicure",
    name: "Pedicure",
    subtitle: "COMPLETE FOOT CARE",
    longDescription:
      "Een professionele pedicure bij Elite Nails omvat volledige verzorging van je voeten en teenagels. Van het verwijderen van eelt en droge huid tot het verzorgen van nagelriemen en het vijlen van teenagels. Optioneel met gelpolish voor de afwerking. Je voeten verdienen de beste zorg.",
    imageUrl: "/services/pedicure.png",
    duration: "60\u201375 min",
    price: "vanaf \u20AC40",
    steps: [
      {
        title: "Voetenbad",
        description: "Voeten worden geweekt in een verzorgend bad.",
      },
      {
        title: "Eelt & huidverzorging",
        description: "Eelt en droge huid worden voorzichtig verwijderd.",
      },
      {
        title: "Nagelverzorging",
        description: "Teenagels worden gevijld, nagelriemen verzorgd.",
      },
      {
        title: "Massage & afwerking",
        description:
          "Hydraterende massage en optioneel gelpolish op de teenagels.",
      },
    ],
    metaDescription:
      "Pedicure bij Elite Nails in Lierde \u2014 complete voet- en teenverzorging inclusief eeltverwijdering en optionele gelpolish.",
  },
  "wimper-wenkbrauw": {
    slug: "wimper-wenkbrauw",
    name: "Wimper & Wenkbrauw",
    subtitle: "LIFT, DEFINE & SHAPE",
    longDescription:
      "Onze wimper- en wenkbrauwbehandelingen geven je blik definitie en diepte. Wimperlifting tilt en krult je eigen wimpers voor een oogopslag die weken meegaat. Wenkbrauwlamination sust en fixeert de wenkbrauwhaartjes in een volle, verzorgde vorm. Beide behandelingen zijn zonder extensions \u2014 volledig met je eigen haar.",
    imageUrl: "/services/lash-lamination.jpg",
    duration: "45\u201360 min",
    price: "vanaf \u20AC35",
    steps: [
      {
        title: "Consultatie",
        description: "Gewenste vorm en lift worden besproken.",
      },
      {
        title: "Reiniging",
        description: "Wimpers en wenkbrauwen worden grondig gereinigd.",
      },
      {
        title: "Lifting & lamination",
        description: "Professionele producten tillen, krullen en fixeren.",
      },
      {
        title: "Kleuren & finishing",
        description: "Optionele tinten voor extra diepte en definitie.",
      },
    ],
    metaDescription:
      "Wimperlifting en wenkbrauwlamination bij Elite Nails in Lierde \u2014 definieer je blik zonder extensions. Resultaat dat weken meegaat.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  const BASE_URL = "https://www.elitenails.biz";
  const canonical = `${BASE_URL}/diensten/${slug}`;
  return {
    title: `${service.name} | Elite Nails Lierde`,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: `${service.name} | Elite Nails Lierde`,
      description: service.metaDescription,
      url: canonical,
      siteName: "Elite Nails",
      images: [
        {
          url: service.imageUrl.startsWith("http")
            ? service.imageUrl
            : `${BASE_URL}${service.imageUrl}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-charcoal/80 backdrop-blur-md border-b border-white/5">
        <Link
          href="/#services"
          className="text-cream/60 hover:text-cream text-xs tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-2"
        >
          <span>&#8592;</span>
          <span>Alle diensten</span>
        </Link>
        <Link
          href="/"
          className="text-cream font-serif text-lg font-light tracking-[0.15em] uppercase"
        >
          Elite Nails
        </Link>
        <a
          href="https://www.instagram.com/elitenagelstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cream/60 hover:text-mauve text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          Instagram
        </a>
      </nav>

      <main className="bg-charcoal min-h-screen text-cream">
        <section className="relative h-[70vh] min-h-[500px] flex items-end">
          <div className="absolute inset-0">
            <Image
              src={service.imageUrl}
              alt={service.name}
              fill
              className="object-cover"
              priority
              unoptimized={service.imageUrl.startsWith("http")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/10" />
          </div>
          <div className="relative z-10 px-6 md:px-16 pb-16 w-full">
            <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-4">
              {service.subtitle}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-cream leading-none">
              {service.name}
            </h1>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16 max-w-4xl">
          <p className="text-cream/80 text-lg md:text-xl font-light leading-relaxed mb-12">
            {service.longDescription}
          </p>
          <div className="flex flex-wrap gap-10 border-t border-white/10 pt-10">
            <div>
              <p className="text-mauve-light text-xs tracking-[0.3em] uppercase mb-1">
                Duur
              </p>
              <p className="text-cream font-serif text-xl font-light">
                {service.duration}
              </p>
            </div>
            <div>
              <p className="text-mauve-light text-xs tracking-[0.3em] uppercase mb-1">
                Prijs
              </p>
              <p className="text-cream font-serif text-xl font-light">
                {service.price}
              </p>
            </div>
            <div>
              <p className="text-mauve-light text-xs tracking-[0.3em] uppercase mb-1">
                Locatie
              </p>
              <p className="text-cream font-serif text-xl font-light">
                Lierde, Oost-Vlaanderen
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16 border-t border-white/10">
          <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-12">
            Werkwijze
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {service.steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <span className="font-serif text-5xl font-light text-white/10 leading-none select-none flex-shrink-0 w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-cream text-sm tracking-[0.15em] uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-16 py-20 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-cream mb-3">
              Klaar om te boeken?
            </h2>
            <p className="text-cream/60 text-sm font-light">
              Stuur ons een DM op Instagram voor beschikbaarheid en afspraken.
            </p>
          </div>
          <a
            href="https://www.instagram.com/elitenagelstudio/"
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
          &#169; {new Date().getFullYear()} Elite Nails &#183; Lierde
        </p>
        <Link
          href="/"
          className="text-cream/30 hover:text-cream/60 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          Terug naar home
        </Link>
      </footer>
    </>
  );
}
