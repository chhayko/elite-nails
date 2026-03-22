import { MetadataRoute } from "next";

const BASE_URL = "https://www.elitenails.biz";
const locales = ["en", "nl", "fr", "ru"];
const slugs = [
  "russische-manicure",
  "biab",
  "gelnagels",
  "pedicure",
  "wimper-wenkbrauw",
];

const gemeenten = [
  "sint-martens-lierde",
  "sint-maria-lierde",
  "deftinge",
  "hemelveerdegem",
  "brakel",
  "nederbrakel",
  "parike",
  "sint-maria-oudenhove",
  "zottegem",
  "elene",
  "erwetegem",
  "grotenberge",
  "strijpen",
  "velzeke-ruddershove",
  "herzele",
  "borsbeke",
  "ressegem",
  "sint-lievens-esse",
  "geraardsbergen",
  "viane",
  "moerbeke",
  "ronse",
  "oudenaarde",
  "gavere",
  "nazareth",
  "maarkedal",
  "kluisbergen",
  "nukerke",
  "horebeke",
  "zwalm",
  "munkzwalm",
  "rozebeke",
  "nederzwalm",
  "ninove",
  "denderleeuw",
  "aalst",
  "roosdaal",
  "wortegem-petegem",
  "anzegem",
  "kruishoutem",
  "lessines",
  "enghien",
];

const blogSlugs = [
  "russische-manicure-uitgelegd",
  "biab-nagels-alles-wat-je-moet-weten",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const localeRoutes = locales.map((locale) => ({
    url: BASE_URL + "/" + locale,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "nl" ? 1 : 0.9,
  }));

  const serviceRoutes = locales.flatMap((locale) =>
    slugs.map((slug) => ({
      url: BASE_URL + "/" + locale + "/diensten/" + slug,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === "nl" ? 0.9 : 0.7,
    }))
  );

  const locatieRoutes = gemeenten.map((gemeente) => ({
    url: BASE_URL + "/nl/locaties/" + gemeente,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = blogSlugs.map((slug) => ({
    url: BASE_URL + "/nl/blog/" + slug,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
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
    ...locatieRoutes,
    ...blogRoutes,
  ];
}
