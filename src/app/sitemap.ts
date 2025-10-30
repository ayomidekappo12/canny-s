// app/sitemap.ts
import { MetadataRoute } from "next";

export const dynamic = "force-static"; 

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cannyscleaning.com";

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/cleaning/about",
    "/cleaning/service",
    "/cleaning/contact",
    "/cleaning/booking",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  return staticPages;
}
