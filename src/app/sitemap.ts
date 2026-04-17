import { MetadataRoute } from "next";

const BASE_URL = "https://www.elitenails.biz";
const locales = ["en", "nl", "fr", "ru"];
const serviceSlugs = [
  "russische-manicure",
  "biab",
  "gelnagels",
  "pedicure",
  "wimpers-lamineren",
  "wenkbrauw-laminatie",
];
const citySlugs = [
  // ~3–5 km
  "hemelveerdegem",
  "deftinge",
  "sint-maria-lierde",
  // ~5–10 km
  "horebeke",
  "geraardsbergen",
  "brakel",
  "parike",
  "moerbeke",
  "grotenberge",
  "elene",
  "erwetegem",
  "strijpen",
  "nederzwalm",
  // ~10–12 km
  "herzele",
  "zwalm",
  "maarkedal",
  "bever",
  "ninove",
  "kluisbergen",
  "galmaarden",
  "zottegem",
  "sint-lievens-houtem",
  "nederbrakel",
  "sint-lievens-esse",
  "sint-maria-oudenhove",
  "velzeke-ruddershove",
  "borsbeke",
  "ressegem",
  "munkzwalm",
  "rozebeke",
  "nukerke",
  "viane",
  // ~15–20 km
  "wortegem-petegem",
  "ronse",
  "oudenaarde",
  "roosdaal",
  "gavere",
  "anzegem",
  "kruishoutem",
  // ~25–30 km
  "nazareth",
  "denderleeuw",
  "aalst",
];
const blogSlugs = [
  "russische-manicure-uitgelegd",
  "biab-nagels-alles-wat-je-moet-weten",
  "wat-is-een-russische-manicure",
  "biab-vs-gelnagels",
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

  const serviceLocalRoutes = [
    {
      url: BASE_URL + "/nl/lash-laminatie-zottegem",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: BASE_URL + "/nl/blog/" + slug,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: BASE_URL + "/nl/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...localeRoutes,
    ...serviceRoutes,
    ...cityRoutes,
    ...serviceLocalRoutes,
    ...blogRoutes,
  ];
}
