import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { CustomCursor } from "@/components/custom-cursor";
import { CookieConsent } from "@/components/cookie-consent";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});

const BASE_URL = "https://www.elitenails.biz";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Elite Nails Lierde – Russian Manicure & Nail Salon Belgium",
    template: "%s | Elite Nails Lierde",
  },
  description:
    "Premium nail salon in Sint-Martens-Lierde, Belgium. Specializing in Russian manicure, BIAB, gel nails, pedicure, and lash & brow lamination. Clean & safe. Book via Instagram.",
  keywords: [
    "nail salon Sint-Martens-Lierde",
    "nagelsalon Lierde",
    "Russian manicure Belgium",
    "BIAB nails",
    "gel nails Lierde",
    "lash lamination",
    "brow lamination",
    "Elite Nails Lierde",
    "nagelsalon Oost-Vlaanderen",
    "pedicure Lierde",
  ],
  authors: [{ name: "Elite Nails Lierde" }],
  creator: "Elite Nails Lierde",
  verification: {
    google: "ZDlaElaoPHvz_bb5Z1e0oLbqLvvdh1-knT1otHdooMA",
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    alternateLocale: ["en_GB", "fr_BE", "ru_RU"],
    url: BASE_URL,
    siteName: "Elite Nails Lierde",
    title: "Elite Nails Lierde – Russian Manicure & Nail Salon Belgium",
    description:
      "Premium nail salon in Sint-Martens-Lierde, Belgium. Russian manicure, BIAB, gel nails & lash treatments. Clean & safe.",
    images: [
      {
        url: "/frames/frame-0001.jpg",
        width: 960,
        height: 653,
        alt: "Elite Nails Lierde – Nail Salon in Sint-Martens-Lierde, Belgium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Nails Lierde – Russian Manicure & Nail Salon Belgium",
    description:
      "Premium nail salon in Sint-Martens-Lierde, Belgium. Russian manicure, BIAB, gel nails & lash treatments.",
    images: ["/frames/frame-0001.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      en: `${BASE_URL}/en`,
      nl: `${BASE_URL}/nl`,
      fr: `${BASE_URL}/fr`,
      ru: `${BASE_URL}/ru`,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "Elite Nails Lierde",
  description:
    "Premium nail salon in Sint-Martens-Lierde, Belgium. Specializing in Russian manicure, BIAB, gel nails, pedicure, and lash & brow lamination.",
  url: BASE_URL,
  telephone: "+32494175267",
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
    latitude: 50.8108566,
    longitude: 3.796871,
  },
  availableLanguage: [
    { "@type": "Language", name: "Dutch" },
    { "@type": "Language", name: "English" },
    { "@type": "Language", name: "French" },
    { "@type": "Language", name: "Russian" },
  ],
  sameAs: ["https://www.instagram.com/elite_nails_lierde/"],
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "2",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nail & Beauty Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Russian Manicure" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "BIAB Nails" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Gel Nails" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Pedicure" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Lash Lamination" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Brow Lamination" },
      },
    ],
  },
};

const localeToHtmlLang: Record<string, string> = {
  en: "en",
  nl: "nl-BE",
  fr: "fr-BE",
  ru: "ru",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Explicitly seed the locale into next-intl's request context so that
  // getMessages() and useTranslations() always use the URL's locale,
  // regardless of what the proxy sets in the request headers.
  setRequestLocale(locale);

  const messages = await getMessages({ locale });
  const htmlLang = localeToHtmlLang[locale] ?? "en";

  return (
    <html lang={htmlLang} className="scroll-smooth">
      <head>
        <meta name="geo.region" content="BE-VOV" />
        <meta name="geo.placename" content="Sint-Martens-Lierde" />
        <meta name="geo.position" content="50.8108566;3.796871" />
        <meta name="ICBM" content="50.8108566, 3.796871" />

        {/*
          Google Consent Mode v2 — defaults set to DENIED before GA4 loads.
          GA4 (afterInteractive) will not collect any data until the user
          explicitly accepts cookies via the CookieConsent banner, at which
          point the banner calls gtag('consent', 'update', ...) with 'granted'.
          'wait_for_update' gives the banner 2 s to fire the update before
          GA4 proceeds in consent-pending mode (still no PII sent).
        */}
        <Script id="consent-mode-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 2000
            });
          `}
        </Script>
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased cursor-none`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <CustomCursor />
        <CookieConsent />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4HD9XQ9LV6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4HD9XQ9LV6');
          `}
        </Script>

        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
