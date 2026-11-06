"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useScroll } from "motion/react";
import CyberAtmosphere from "@/components/cyber-atmosphere";

const nav = [["/#security","SECURITY"],["/#work","SELECTED WORK"],["/#field-notes","FIELD NOTES"],["/#about","ABOUT"]];
function CursorTrail() {
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(!matchMedia("(pointer:fine)").matches||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const root=ref.current;if(!root)return;
    const shards=Array.from(root.querySelectorAll<HTMLElement>(".cursor-shard"));
    const dot=root.querySelector<HTMLElement>(".cursor-core");
    const halo=root.querySelector<HTMLElement>(".cursor-halo");
    if(!dot||!halo)return;
    const trail=shards.map(()=>({x:-100,y:-100}));let x=-100,y=-100,angle=0,raf=0,visible=false;
    const move=(e:PointerEvent)=>{const dx=e.clientX-x,dy=e.clientY-y;x=e.clientX;y=e.clientY;if(Math.abs(dx)+Math.abs(dy)>1)angle=Math.atan2(dy,dx)*180/Math.PI;visible=true;root.classList.add("is-visible");root.classList.toggle("is-hovering",Boolean((e.target as HTMLElement).closest("a,button,[data-cursor]")));};
    const leave=()=>{visible=false;root.classList.remove("is-visible","is-hovering");};
    const tick=()=>{dot.style.transform="translate3d("+x+"px,"+y+"px,0)";halo.style.transform="translate3d("+x+"px,"+y+"px,0)";trail.forEach((p,i)=>{const t=i===0?{x,y}:trail[i-1];p.x+=(t.x-p.x)*.19;p.y+=(t.y-p.y)*.19;shards[i].style.transform="translate3d("+p.x+"px,"+p.y+"px,0) rotate("+(angle+i*19)+"deg)";shards[i].style.opacity=visible?String(.45-i*.038):"0";});raf=requestAnimationFrame(tick);};
    document.documentElement.classList.add("cursor-ready");addEventListener("pointermove",move,{passive:true});addEventListener("pointerleave",leave);raf=requestAnimationFrame(tick);
    return()=>{cancelAnimationFrame(raf);removeEventListener("pointermove",move);removeEventListener("pointerleave",leave);document.documentElement.classList.remove("cursor-ready");};
  },[]);
  return <div className="cursor-trail" ref={ref} aria-hidden="true"><span className="cursor-halo"/>{Array.from({length:10},(_,i)=><i className="cursor-shard" key={i}/>)}<span className="cursor-core"/></div>;
}
export default function SiteShell({children}:{children:ReactNode}) {
  const path=usePathname();const [open,setOpen]=useState(false);const {scrollYProgress}=useScroll();
  useEffect(()=>setOpen(false),[path]);
  return <div className="site-shell"><CyberAtmosphere/><div className="site-vignette"/><motion.div className="scroll-progress" style={{scaleX:scrollYProgress}}/>
    <header className="site-header"><div className="header-inner"><Link href="/" className="brand" aria-label="SAM home"><span className="brand-mark"><i/></span><b>SAM</b></Link><nav className={open?"main-nav is-open":"main-nav"}>{nav.map(([href,label])=><Link key={href} href={href} className="nav-link" onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-mobile-cta" href="/#contact" onClick={()=>setOpen(false)}>LET'S CONNECT <ArrowUpRight size={14}/></Link></nav><Link href="/#contact" className="header-cta">LET'S CONNECT <ArrowUpRight size={14}/></Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"} aria-expanded={open}>{open?<X size={19}/>:<Menu size={19}/>}</button></div></header>
    <main>{children}</main><footer className="site-footer"><div className="footer-inner"><Link href="/" className="footer-brand">SAM</Link><p>CURIOUS BY NATURE. SECURITY BY DESIGN.</p><span>© {new Date().getFullYear()} SAM</span></div></footer><CursorTrail/>
  </div>;
}
