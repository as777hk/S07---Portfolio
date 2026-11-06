"use client";
import {useMemo,useState} from "react";
import ProjectCard from "@/components/project-card";
import {projects} from "@/lib/content";
const filters=["ALL","CYBERSECURITY","ENGINEERING","VISUAL"];
export default function ProjectGrid(){const[filter,setFilter]=useState("ALL");const items=useMemo(()=>filter==="ALL"?projects:projects.filter(p=>p.category===filter),[filter]);return <><div className="filters">{filters.map(f=><button key={f} onClick={()=>setFilter(f)} className={filter===f?"selected":""}>{f}<span>{f==="ALL"?projects.length:projects.filter(p=>p.category===f).length}</span></button>)}</div><div className="project-grid">{items.map((p,i)=><ProjectCard key={p.slug} item={p} index={i}/>)}</div></>}
