import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowLeft,ArrowUpRight,Check} from "lucide-react";
import Reveal from "@/components/reveal";
import {projects} from "@/lib/content";
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params,p=projects.find(x=>x.slug===slug);return p?{title:p.title,description:p.description}:{title:"Project not found"}}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const{slug}=await params,p=projects.find(x=>x.slug===slug);if(!p)notFound();return <div className="wrap inner detail"><Link href="/work" className="back-link"><ArrowLeft size={14}/> Back to project index</Link><Reveal><span className="eyebrow"><i/> {p.category} / {p.kind}</span><h1>{p.title.toUpperCase()}<b>.</b></h1><p className="lede">{p.description}</p></Reveal><Reveal className={"detail-art art-"+p.visual}><span>{p.label}</span><div className="art-shape"><i/><i/><i/></div></Reveal><div className="detail-grid"><Reveal><span className="kicker"><i/> OVERVIEW</span><h2>What this study explores.</h2><p>{p.overview}</p></Reveal><Reveal><span className="kicker"><i/> APPROACH</span>{p.approach.map((a,i)=><div className="approach-row" key={a}><span>0{i+1}</span><p>{a}</p></div>)}</Reveal></div><Reveal className="stack"><span className="kicker"><i/> TOOLS & IDEAS</span><div>{p.stack.map(s=><span key={s}><Check size={12}/>{s}</span>)}</div></Reveal><Link href="/work" className="text-link">Back to all work <ArrowUpRight size={15}/></Link></div>}
