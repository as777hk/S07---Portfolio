import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import Reveal from "@/components/reveal";
import type {Project} from "@/lib/content";
export default function ProjectCard({item,index=0}:{item:Project;index?:number}){return <Reveal delay={index*.06}><Link href={"/work/"+item.slug} className="project-card" data-cursor="Explore project"><div className={"project-art art-"+item.visual}><span className="art-number">{item.number}</span><div className="art-shape"><i/><i/><i/></div><span className="art-label">{item.label}</span><span className="art-open"><ArrowUpRight size={19}/></span></div><div className="project-info"><div><span className="mono cyan">{item.category} / {item.kind}</span><h3>{item.title}</h3><p>{item.description}</p></div><ArrowUpRight className="project-arrow"/></div></Link></Reveal>}
