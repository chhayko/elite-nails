import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SERVICE_SLUGS } from "@/lib/service-slugs";
import { serviceData, imageMap, nlSeoMeta } from "@/lib/service-data";
import { BASE_URL } from "@/lib/site";

const locales = ["en", "nl", "fr", "ru"];
const slugs: string[] = [...SERVICE_SLUGS];

// Navigation labels per locale (matches serviceData names)
function getServiceName(locale: string, slug: string): string {
  const localeData = serviceData[locale] ?? serviceData["en"];
  return localeData?.[slug]?.name ?? slug;
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const localeData = serviceData[locale] ?? serviceData["en"];
  const service = localeData?.[slug];
  if (!service) return {};


  const canonical = `${BASE_URL}/${locale}/diensten/${slug}`;
  const imageUrl = imageMap[slug] ?? "/services/russian-manicure.jpg";

  // Use SEO-optimised meta for NL; fall back to service data for other locales
  const nlOverride = locale === "nl" ? nlSeoMeta[slug] : undefined;
  const metaTitle = nlOverride
    ? nlOverride.title
    : `${service.name} | Elite Nails Lierde`;
  const metaDescription = nlOverride ? nlOverride.description : service.description;

  return {
    title: nlOverride ? { absolute: nlOverride.title } : service.name,
    description: metaDescription,
    alternates: {
      canonical,
      languages: {
        nl: `${BASE_URL}/nl/diensten/${slug}`,
        en: `${BASE_URL}/en/diensten/${slug}`,
        fr: `${BASE_URL}/fr/diensten/${slug}`,
        ru: `${BASE_URL}/ru/diensten/${slug}`,
        "x-default": `${BASE_URL}/nl/diensten/${slug}`,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: "Elite Nails",
      images: [
        {
          url: `${BASE_URL}${imageUrl}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const localeData = serviceData[locale] ?? serviceData["en"];
  const service = localeData?.[slug];
  if (!service) notFound();

  const t = await getTranslations({ locale, namespace: "servicePage" });

  const imageUrl = imageMap[slug] ?? "/services/russian-manicure.jpg";

  // Prev / Next navigation
  const slugIndex = slugs.indexOf(slug);
  const prevSlug = slugIndex > 0 ? slugs[slugIndex - 1] : null;
  const nextSlug = slugIndex < slugs.length - 1 ? slugs[slugIndex + 1] : null;
  const prevName = prevSlug ? getServiceName(locale, prevSlug) : null;
  const nextName = nextSlug ? getServiceName(locale, nextSlug) : null;



  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${BASE_URL}/${locale}/diensten/${slug}`,
    provider: {
      "@type": "HealthAndBeautyBusiness",
      name: "Elite Nails",
      url: BASE_URL,
      telephone: "+32494175267",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Steenweg 234b",
        addressLocality: "Sint-Martens-Lierde",
        postalCode: "9572",
        addressCountry: "BE",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "15",
        bestRating: "5",
        worstRating: "1",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: service.price.replace(/[^0-9]/g, ""),
      availability: "https://schema.org/InStock",
    },
    areaServed: {
      "@type": "City",
      name: "Sint-Martens-Lierde",
    },
  };

  const faqJsonLd = service.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Floating prev / next service arrows */}
      {prevSlug && (
        <Link
          href={`/${locale}/diensten/${prevSlug}`}
          className="fixed left-3 top-1/2 -translate-y-1/2 z-50 group flex items-center gap-2"
          aria-label={`Previous: ${prevName}`}
        >
          <div className="flex items-center gap-2 rounded-full bg-charcoal/80 border border-white/10 backdrop-blur-sm px-3 py-2.5 transition-all duration-300 group-hover:border-mauve/40 group-hover:bg-mauve/10">
            <span className="text-white/60 group-hover:text-white text-base leading-none transition-colors">&#8592;</span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs text-white/0 group-hover:max-w-[120px] group-hover:text-white/80 transition-all duration-300 font-sans tracking-wide">
              {prevName}
            </span>
          </div>
        </Link>
      )}
      {nextSlug && (
        <Link
          href={`/${locale}/diensten/${nextSlug}`}
          className="fixed right-3 top-1/2 -translate-y-1/2 z-50 group flex items-center gap-2"
          aria-label={`Next: ${nextName}`}
        >
          <div className="flex items-center gap-2 rounded-full bg-charcoal/80 border border-white/10 backdrop-blur-sm px-3 py-2.5 transition-all duration-300 group-hover:border-mauve/40 group-hover:bg-mauve/10">
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs text-white/0 group-hover:max-w-[120px] group-hover:text-white/80 transition-all duration-300 font-sans tracking-wide text-right">
              {nextName}
            </span>
            <span className="text-white/60 group-hover:text-white text-base leading-none transition-colors">&#8594;</span>
          </div>
        </Link>
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-charcoal/80 backdrop-blur-md border-b border-white/5">
        <Link
          href={`/${locale}/#services`}
          className="text-cream/60 hover:text-cream text-xs tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-2"
        >
          <span>&#8592;</span>
          <span>{t("backLink")}</span>
        </Link>
        <Link
          href={`/${locale}`}
          className="text-cream font-serif text-lg font-light tracking-[0.15em] uppercase"
        >
          Elite Nails
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="https://www.instagram.com/elite_nails_lierde/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-cream/60 hover:text-mauve text-xs tracking-[0.2em] uppercase transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      </nav>

      <main className="bg-charcoal min-h-screen text-cream">
        <section className="relative h-[70vh] min-h-[500px] flex items-end">
          <div className="absolute inset-0">
            <Image
              src={imageUrl}
              alt={service.name}
              fill
              className="object-cover"
              priority
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
            {service.description}
          </p>
          <div className="flex flex-wrap gap-10 border-t border-white/10 pt-10">
            <div>
              <p className="text-mauve-light text-xs tracking-[0.3em] uppercase mb-1">
                {t("durationLabel")}
              </p>
              <p className="text-cream font-serif text-xl font-light">
                {service.duration}
              </p>
            </div>
            <div>
              <p className="text-mauve-light text-xs tracking-[0.3em] uppercase mb-1">
                {t("priceLabel")}
              </p>
              <p className="text-cream font-serif text-xl font-light">
                {service.price}
              </p>
            </div>
            <div>
              <p className="text-mauve-light text-xs tracking-[0.3em] uppercase mb-1">
                {t("locationLabel")}
              </p>
              <p className="text-cream font-serif text-xl font-light">
                {t("locationValue")}
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16 border-t border-white/10">
          <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-12">
            {t("processLabel")}
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
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Extended body copy */}
        {service.body && service.body.length > 0 && (
          <section className="px-6 md:px-16 py-16 border-t border-white/10 max-w-4xl">
            <div className="space-y-6">
              {service.body.map((paragraph, i) => (
                <p key={i} className="text-cream/70 text-base leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* FAQ section */}
        {service.faq && service.faq.length > 0 && (
          <section className="px-6 md:px-16 py-16 border-t border-white/10">
            <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-12">
              Veelgestelde vragen
            </p>
            <div className="max-w-3xl space-y-10">
              {service.faq.map((item, i) => (
                <div key={i}>
                  <h3 className="text-cream text-base font-serif font-light mb-3 leading-snug">
                    {item.q}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed font-light">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Aftercare section */}
        {service.aftercare && service.aftercare.length > 0 && (
          <section className="px-6 md:px-16 py-16 border-t border-white/10">
            <p className="text-mauve-light text-xs tracking-[0.35em] uppercase mb-12">
              Nabehandeling & tips
            </p>
            <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {service.aftercare.map((tip, i) => (
                <div key={i} className="flex gap-4">
                  <span className="font-serif text-3xl font-light text-white/10 leading-none select-none flex-shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-cream/60 text-sm leading-relaxed font-light">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="px-6 md:px-16 py-20 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-cream mb-3">
              {t("bookingHeading")}
            </h2>
            <p className="text-cream/60 text-sm font-light">
              {t("bookingBody")}
            </p>
          </div>
          <a
            href="https://www.instagram.com/elite_nails_lierde/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-mauve text-cream text-xs tracking-[0.25em] uppercase px-10 py-4 hover:bg-mauve/20 transition-colors duration-300"
          >
            {t("bookingCta")}
          </a>
        </section>
      </main>

      <footer className="bg-charcoal border-t border-white/10 px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-cream/30 text-xs tracking-[0.2em] uppercase">
          &#169; {new Date().getFullYear()} Elite Nails &#183; Lierde
        </p>
        <Link
          href={`/${locale}`}
          className="text-cream/30 hover:text-cream/60 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          &#8592; {t("backLink")}
        </Link>
      </footer>
    </>
  );
}
