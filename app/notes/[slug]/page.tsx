import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowLeft} from "lucide-react";
import Reveal from "@/components/reveal";
import {notes} from "@/lib/content";
export function generateStaticParams(){return notes.map(n=>({slug:n.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params,n=notes.find(x=>x.slug===slug);return n?{title:n.title,description:n.excerpt}:{title:"Note not found"}}
export default async function NotePage({params}:{params:Promise<{slug:string}>}){const{slug}=await params,n=notes.find(x=>x.slug===slug);if(!n)notFound();return <article className="wrap inner article"><Link href="/notes" className="back-link"><ArrowLeft size={14}/> Back to notes</Link><Reveal><span className="eyebrow"><i/> {n.category} / FIELD NOTE</span><h1>{n.title}</h1><p className="lede">{n.intro}</p></Reveal><div className="article-body">{n.sections.map((s,i)=><Reveal key={s.heading}><span>0{i+1} / FIELD NOTE</span><h2>{s.heading}</h2><p>{s.body}</p></Reveal>)}</div></article>}
