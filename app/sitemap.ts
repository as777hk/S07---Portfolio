import type { MetadataRoute } from "next";
import { notes, projects } from "@/lib/content";
const base = "https://sam07.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/security", "/work", "/experiments", "/notes", "/about", "/contact"];
  return [
    ...routes.map((route) => ({ url: base + route, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...projects.map((project) => ({ url: base + "/work/" + project.slug, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
    ...notes.map((note) => ({ url: base + "/notes/" + note.slug, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 }))
  ];
}