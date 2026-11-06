import type {MetadataRoute} from "next";
import {notes,projects} from "@/lib/content";
const base="https://s07-hk777.vercel.app";
export default function sitemap():MetadataRoute.Sitemap{const routes=["","/security","/work","/experiments","/notes","/about","/contact"];return [...routes.map(r=>({url:base+r,lastModified:new Date(),changeFrequency:"monthly" as const,priority:r===""?1:.7})),...projects.map(p=>({url:base+"/work/"+p.slug,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.6})),...notes.map(n=>({url:base+"/notes/"+n.slug,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.5}))]}
