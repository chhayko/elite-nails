import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CITIES } from "@/lib/city-data";
import { CityLanding } from "@/components/city-landing";

const data = CITIES["roosdaal"];
const BASE_URL = "https://www.elitenails.biz";

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return [{ locale: "nl" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "nl") return {};
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
  const { locale } = await params;
  if (locale !== "nl") notFound();
  return <CityLanding data={data} />;
}
