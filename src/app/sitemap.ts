import { MetadataRoute } from "next";

const BASE_URL = "https://www.elitenails.biz";
const locales = ["en", "nl", "fr", "ru"];
const serviceSlugs = [
  "russische-manicure",
  "biab",
  "gelnagels",
  "pedicure",
  "wimper-wenkbrauw",
];
const citySlugs = [
  "geraardsbergen",
  "ninove",
  "brakel",
  "ronse",
  "zottegem",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const localeRoutes = locales.map((locale) => ({
    url: BASE_URL + "/" + locale,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "nl" ? 1 : 0.9,
  }));

  const serviceRoutes = locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({
      url: BASE_URL + "/" + locale + "/diensten/" + slug,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === "nl" ? 0.9 : 0.7,
    }))
  );

  const cityRoutes = citySlugs.map((slug) => ({
    url: BASE_URL + "/nl/nagelstudio-" + slug,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
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
    ...cityRoutes,
  ];
}
