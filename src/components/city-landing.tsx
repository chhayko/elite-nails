import Link from "next/link";
import Script from "next/script";
import { CityPage } from "@/lib/city-data";

const BASE_URL = "https://www.elitenails.biz";

type Props = {
  data: CityPage;
};

export function CityLanding({ data }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: "Elite Nails Lierde",
    description: data.metaDescription,
    url: `${BASE_URL}/nl/nagelstudio-${data.slug}`,
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
    areaServed: {
      "@type": "City",
      name: data.city,
    },
  };

  return (
    <>
      <Script
        id={`json-ld-city-${data.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              Nagelstudio in de buurt van {data.city}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-tight text-balance">
              {data.h1}
            </h1>
            <div className="mt-8 h-px w-24 bg-white/20" />
          </div>
        </section>

        {/* Intro */}
        <section className="px-6 md:px-16 py-16 max-w-3xl">
          {data.intro.map((paragraph, i) => (
            <p
              key={i}
              className="text-cream/75 text-lg md:text-xl font-light leading-relaxed mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Services list */}
        <section className="px-6 md:px-16 py-16 border-t border-white/10">
          <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-10">
            Ons aanbod
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {data.services.map((service, i) => (
              <li
                key={i}
                className="flex items-start gap-4 text-cream/80 text-sm font-light"
              >
                <span className="mt-1 flex-shrink-0 w-4 h-px bg-mauve/60 inline-block" />
                {service}
              </li>
            ))}
          </ul>
        </section>

        {/* Content sections */}
        {data.sections.map((section, i) => (
          <section
            key={i}
            className="px-6 md:px-16 py-16 border-t border-white/10 max-w-3xl"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-light text-cream mb-6 leading-snug">
              {section.heading}
            </h2>
            <p className="text-cream/70 text-base font-light leading-relaxed">
              {section.text}
            </p>
          </section>
        ))}

        {/* Directions & contact */}
        <section className="px-6 md:px-16 py-16 border-t border-white/10 max-w-3xl">
          <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-6">
            Route & contact
          </p>
          <p className="text-cream/80 text-base font-light mb-4">{data.directions}</p>
          <p className="text-cream/50 text-sm font-light font-sans">{data.contactLine}</p>
        </section>

        {/* CTA */}
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
