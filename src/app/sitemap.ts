import { MetadataRoute } from "next";
import { CITIES } from "@/lib/city-data";
import { POSTS } from "@/lib/blog-data";
import { SERVICE_SLUGS } from "@/lib/service-slugs";

const BASE_URL = "https://www.elitenails.biz";
const locales = ["en", "nl", "fr", "ru"];

// Update when page content meaningfully changes — a fake "always new"
// new Date() here destroys Google's freshness signals.
const HOME_LAST_MODIFIED = "2026-06-10";
const SERVICES_LAST_MODIFIED = "2026-04-17";
const CITIES_LAST_MODIFIED = "2026-04-12";

export default function sitemap(): MetadataRoute.Sitemap {
  const localeRoutes = locales.map((locale) => ({
    url: BASE_URL + "/" + locale,
    lastModified: HOME_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: locale === "nl" ? 1 : 0.9,
  }));

  const serviceRoutes = locales.flatMap((locale) =>
    SERVICE_SLUGS.map((slug) => ({
      url: BASE_URL + "/" + locale + "/diensten/" + slug,
      lastModified: SERVICES_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: locale === "nl" ? 0.9 : 0.7,
    }))
  );

  // Derived from the data module so the sitemap can never advertise a city
  // page that doesn't build (or miss one that does).
  const cityRoutes = Object.keys(CITIES).map((slug) => ({
    url: BASE_URL + "/nl/nagelstudio-" + slug,
    lastModified: CITIES_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const serviceLocalRoutes = [
    {
      url: BASE_URL + "/nl/lash-laminatie-zottegem",
      lastModified: CITIES_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
  ];

  const blogRoutes = Object.values(POSTS).map((post) => ({
    url: BASE_URL + "/nl/blog/" + post.slug,
    lastModified: post.publishDate,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL + "/nl/blog",
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: BASE_URL + "/nl/privacybeleid",
      lastModified: CITIES_LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    ...localeRoutes,
    ...serviceRoutes,
    ...cityRoutes,
    ...serviceLocalRoutes,
    ...blogRoutes,
  ];
}
