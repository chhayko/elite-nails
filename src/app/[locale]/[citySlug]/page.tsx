import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CITIES } from "@/lib/city-data";
import { CityLanding } from "@/components/city-landing";
import { BASE_URL } from "@/lib/site";

// Single dynamic route for all /nl/nagelstudio-<city> landing pages —
// adding a city is now a one-file edit in lib/city-data.
// Only the params from generateStaticParams resolve; everything else 404s.
export const dynamicParams = false;

const PREFIX = "nagelstudio-";

type Props = { params: Promise<{ locale: string; citySlug: string }> };

function cityFromSlug(citySlug: string) {
  return citySlug.startsWith(PREFIX)
    ? CITIES[citySlug.slice(PREFIX.length)]
    : undefined;
}

export async function generateStaticParams() {
  return Object.keys(CITIES).map((key) => ({
    locale: "nl",
    citySlug: `${PREFIX}${key}`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, citySlug } = await params;
  const data = cityFromSlug(citySlug);
  if (locale !== "nl" || !data) return {};
  const canonical = `${BASE_URL}/nl/nagelstudio-${data.slug}`;
  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: canonical,
      siteName: "Elite Nails",
      images: [{ url: `${BASE_URL}/frames/frame-0001.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale, citySlug } = await params;
  const data = cityFromSlug(citySlug);
  if (locale !== "nl" || !data) notFound();
  return <CityLanding data={data} />;
}
