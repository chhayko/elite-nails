import { MetadataRoute } from "next";

const BASE_URL = "https://www.elitenails.biz";
const locales = ["en", "nl", "fr", "ru"];

export default function sitemap(): MetadataRoute.Sitemap {
  const localeRoutes = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "nl" ? 1 : 0.9,
  }));

  const serviceRoutes = [
    "/diensten/russische-manicure",
    "/diensten/biab",
    "/diensten/gelnagels",
    "/diensten/pedicure",
    "/diensten/wimper-wenkbrauw",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...localeRoutes,
    ...serviceRoutes,
  ];
}
