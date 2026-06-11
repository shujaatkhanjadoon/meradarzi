import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";

const BASE_URL = "https://www.meradarzi.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/cities`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/refund-policy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/terms-and-conditions`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const cityPages = CITIES.map((city) => ({
    url: `${BASE_URL}/cities/${city.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...cityPages];
}
