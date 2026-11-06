import type {Metadata} from "next";
import Link from "next/link";
import {ArrowUpRight,BookOpen} from "lucide-react";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";
import {notes} from "@/lib/content";
export const metadata:Metadata={title:"Notes & Research",description:"Technical notes on secure engineering, responsible research and creative technology."};
export default function NotesPage(){return <div className="wrap inner"><section className="page-hero"><Reveal><span className="eyebrow"><i/> NOTES / KNOWLEDGE BASE</span></Reveal><Reveal delay={.06}><h1>THINK IT<br/><b>THROUGH.</b></h1></Reveal><Reveal delay={.12}><p>A growing library of field notes, technical reflections and learning resources. Make ideas clearer by writing them down.</p></Reveal></section><section className="section"><SectionTitle overline="LATEST WRITING / 01" title="Notes from the process." text="Short, practical pieces about security, systems and the craft of building thoughtful digital experiences."/><div className="notes-list">{notes.map((n,i)=><Reveal key={n.slug} delay={i*.05}><Link href={"/notes/"+n.slug} className="note-row"><span>{n.number}</span><div><small>{n.category}</small><h3>{n.title}</h3><p>{n.excerpt}</p></div><ArrowUpRight/></Link></Reveal>)}</div></section><section className="callout"><div><BookOpen size={18}/> OPEN NOTEBOOK</div><h2>Learning becomes more useful when it is shared with care.</h2><p>Security content is educational and scoped to authorized environments.</p></section></div>}
