import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
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
  sameAs: ["https://www.instagram.com/elite_nails_lierde/"],
  priceRange: "€€",
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
  const messages = await getMessages();
  const htmlLang = localeToHtmlLang[locale] ?? "en";

  return (
    <html lang={htmlLang} className="scroll-smooth">
      <head>
        <meta name="geo.region" content="BE-VOV" />
        <meta name="geo.placename" content="Sint-Martens-Lierde" />
        <meta name="geo.position" content="50.8167;3.8333" />
        <meta name="ICBM" content="50.8167, 3.8333" />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

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
