import type { MetadataRoute } from "next";
import { resume } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jubayer-ahmed.vercel.app";
  const now = new Date();

  return [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/work`, lastModified: now },
    { url: `${baseUrl}/projects`, lastModified: now },
    { url: `${baseUrl}/contact`, lastModified: now },
    ...resume.projects.map((p) => ({
      url: `${baseUrl}/projects/${p.slug}`,
      lastModified: now,
    })),
  ];
}

