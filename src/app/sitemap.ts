import { MetadataRoute } from "next";

const BASE_URL = "https://www.elitenails.biz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/diensten/russische-manicure`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/diensten/biab`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/diensten/gelnagels`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/diensten/pedicure`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/diensten/wimper-wenkbrauw`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
