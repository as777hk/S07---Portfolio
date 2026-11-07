import Link from "next/link";
import { ArrowDown, ArrowUpRight, Fingerprint, Radar, Shield, ShieldAlert, Workflow, Binary, ScanSearch, AudioWaveform, GitBranch, Zap } from "lucide-react";
import Reveal from "@/components/reveal";
import SwarmRebuild from "@/components/swarm-rebuild";

const projects = [
  { id: "01", tag: "SECURITY STUDY / WEB", title: "ATTACK SURFACE", text: "A visual exploration of routes, inputs, assets and trust boundaries across a web application.", type: "surface", chips: ["WEB SECURITY", "RECON", "THREAT MAPPING"] },
  { id: "02", tag: "NETWORK / VISUAL EXPERIMENT", title: "PACKET ANATOMY", text: "A creative-code study turning abstract network movement into something observable and easier to reason about.", type: "packets", chips: ["NETWORKS", "DATA FLOW", "CREATIVE CODE"] },
  { id: "03", tag: "SECURE PRODUCT / CONCEPT", title: "TRUST BY DESIGN", text: "An interface concept exploring clear security states, permissions and sensitive user actions.", type: "trust", chips: ["SECURE UX", "PRIVACY", "INTERACTION"] }
];
const steps = [
  ["01", "OBSERVE", "Understand the environment before touching the system. Context comes first."],
  ["02", "MAP", "Trace entry points, relationships, dependencies and the boundaries that matter."],
  ["03", "TEST", "Explore carefully in owned or explicitly authorised environments. Keep evidence."],
  ["04", "EXPLAIN", "Turn findings into clear notes, practical fixes and something others can learn from."]
];

function Portrait() {
  return <div className="portrait-stage">
    <div className="portrait-frame">
      <div className="portrait-head"><span>IDENTITY SCAN / 001</span><b>ACTIVE</b></div>
      <svg viewBox="0 0 620 720" role="img" aria-label="Abstract holographic portrait silhouette" className="portrait-svg">
        <defs>
          <linearGradient id="silhouette" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#116c91" stopOpacity=".2"/><stop offset=".58" stopColor="#071b2c"/><stop offset="1" stopColor="#020812"/></linearGradient>
          <linearGradient id="edge" x1="0" x2="1"><stop stopColor="#9af5ff"/><stop offset=".65" stopColor="#21bfe9"/><stop offset="1" stopColor="#f13f5d"/></linearGradient>
          <pattern id="scanGrid" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M18 0H0V18" fill="none" stroke="#40dafa" strokeOpacity=".2"/><circle r="1" fill="#7beaff" fillOpacity=".5"/></pattern>
          <clipPath id="bodyClip"><path d="M310 48c-81 0-132 59-132 163 0 67 21 119 58 148l-8 53c-21 18-66 36-108 53-51 20-72 63-79 142l-8 116h554l-8-116c-7-79-28-122-79-142-42-17-87-35-108-53l-8-53c37-29 58-81 58-148C442 107 391 48 310 48Z"/></clipPath>
        </defs>
        <path d="M310 48c-81 0-132 59-132 163 0 67 21 119 58 148l-8 53c-21 18-66 36-108 53-51 20-72 63-79 142l-8 116h554l-8-116c-7-79-28-122-79-142-42-17-87-35-108-53l-8-53c37-29 58-81 58-148C442 107 391 48 310 48Z" fill="url(#silhouette)" stroke="url(#edge)" strokeWidth="2"/>
        <g clipPath="url(#bodyClip)">
          <rect x="30" y="35" width="560" height="695" fill="url(#scanGrid)"/>
          <path d="M178 196c-3-102 51-161 132-161 88 0 137 58 132 165-15-30-39-53-62-65-31 34-99 59-202 61Z" fill="#020912" stroke="#35d5f6" strokeOpacity=".7"/>
          <path d="M226 171c15-46 43-69 84-69 46 0 77 29 87 80 10 52 0 113-23 151-17 28-38 43-64 43s-49-15-66-43c-24-41-34-111-18-162Z" fill="#0a2a40" fillOpacity=".6" stroke="#5de6ff" strokeOpacity=".65"/>
          <path d="M249 240h39m44 0h39m-94 0 12 10m55-10-12 10m-40 46c14 8 32 8 46 0" fill="none" stroke="#a2f3ff" strokeOpacity=".7" strokeWidth="2"/>
          <path d="m247 348-15 89 78 84 78-84-15-89" fill="#071c2c" stroke="#37cce9" strokeOpacity=".7" strokeWidth="2"/>
          <path d="m112 470 120-49 78 55 78-55 120 49 50 270H62Z" fill="#061321" stroke="#2cc9f0" strokeOpacity=".7" strokeWidth="2"/>
          <path d="M310 456v284M232 421l-28 64 106 108 106-108-28-64M90 552h440M82 631h456" stroke="#37b8df" strokeOpacity=".42" fill="none" strokeWidth="2"/>
          <path d="M80 210h84l28 24h48m300-24h-84l-28 24h-48M70 610h115l32-31h93m240 31H435l-32-31h-93" fill="none" stroke="#f13f5d" strokeOpacity=".65" strokeWidth="2"/>
        </g>
        <path d="M36 574h78m392 0h78M310 18v40m0 620v35" stroke="#f13f5d" strokeWidth="2"/>
      </svg>
      <div className="portrait-foot"><span>HUMAN / NOT A MACHINE</span><span>01 — 04</span></div>
      <i className="portrait-scan"/>
    </div>
    <div className="portrait-orbit orbit-one"/><div className="portrait-orbit orbit-two"/>
    <div className="portrait-stamp">SAM <small>SECURITY MINDED</small></div>
  </div>;
}

function Visual({ type }: { type: string }) {
  if (type === "surface") return <div className="project-visual">
    <div className="radar"><i/><i/><i/><i/><b/></div>
    <div className="scan-window"><span>ATTACK SURFACE / MAP</span>{["PUBLIC ROUTE","AUTH FLOW","API EDGE","INPUT LAYER"].map(x=><div key={x}><b/><i/><em>{x}</em></div>)}</div>
  </div>;
  if (type === "packets") return <div className="project-visual packet-visual"><div className="packet-plane"/><div className="packet-path path-a"/><div className="packet-path path-b"/><div className="packet-core"><Binary size={44}/></div><span className="visual-readout">FLOW / TRACE<br/><b>0x7F-A9-2C</b></span></div>;
  return <div className="project-visual trust-visual"><div className="trust-ring ring-a"/><div className="trust-ring ring-b"/><div className="trust-ring ring-c"/><div className="trust-core"><Fingerprint size={54}/></div><span className="trust-chip chip-a">IDENTITY / VERIFIED</span><span className="trust-chip chip-b">PERMISSION / SCOPED</span><span className="trust-chip chip-c">DATA / PROTECTED</span></div>;
}

export default function HomePage() {
  return <div className="home-page">
    <section className="hero-section" id="top"><div className="wrap">
      <div className="hero-meta"><span><i className="status-dot"/> PERSONAL DIGITAL SPACE / 001</span><span>CYBERSECURITY <b>×</b> CREATIVE TECHNOLOGY <em>2026</em></span></div>
      <div className="hero-layout">
        <div className="hero-copy">
          <Reveal><p className="eyebrow"><i/> LOOK BENEATH THE SURFACE</p></Reveal>
          <Reveal delay={.08}><h1 className="hero-title"><span>SAM</span><i>SAM</i></h1></Reveal>
          <Reveal delay={.16}><p className="hero-lead">I explore the space where <b>cybersecurity</b>, systems thinking and creative technology meet.</p><p className="hero-description">Curious about how digital systems work, where they fail, and how thoughtful engineering can make them stronger.</p></Reveal>
          <Reveal delay={.24}><div className="hero-actions"><Link href="#work" className="primary-button">EXPLORE SELECTED WORK <ArrowUpRight size={16}/></Link><Link href="#about" className="text-button">A LITTLE ABOUT ME <ArrowDown size={14}/></Link></div></Reveal>
          <div className="hero-note"><span>01 / INTRODUCTION</span><span>SCROLL TO ENTER THE SYSTEM <i/></span></div>
        </div>
        <Reveal delay={.16}><Portrait/></Reveal>
      </div>
      <div className="hero-baseline"><span>SECURITY FIRST</span><i/><span>CREATIVE BY DESIGN</span></div>
    </div></section>

    <SwarmRebuild />

    <section className="section manifesto-section" id="security"><div className="wrap">
      <div className="section-meta"><span>02 / THE MINDSET</span><span>THINK LIKE AN ATTACKER. BUILD LIKE A DEFENDER.</span></div>
      <div className="manifesto-grid">
        <Reveal><p className="eyebrow"><i/> SECURITY IS A WAY OF THINKING</p><h2>EVERY SYSTEM<br/><span>LEAVES A</span><br/><em>TRACE.</em></h2></Reveal>
        <Reveal delay={.1} className="manifesto-copy"><h3>The interesting part is rarely what you can see at first glance.</h3><p>It is the hidden route, the overlooked permission, the connection no one mapped. Cybersecurity keeps me curious because every system has layers — and understanding those layers changes how we build, test and protect technology.</p><Link href="#field-notes" className="inline-link">FOLLOW THE THREAD <ArrowUpRight size={15}/></Link><div className="signal-row"><span className="signal-bars">{Array.from({length:14},(_,i)=><i key={i}/>)}</span><span>ANALYSIS IN PROGRESS</span><b>LIVE / 0x01</b></div></Reveal>
      </div>
      <div className="pillar-grid">
        {[
          [Radar,"01","RECONNAISSANCE","See the surface. Understand the environment. Ask better questions."],
          [ShieldAlert,"02","OFFENSIVE THINKING","Study how weaknesses emerge and how they can be responsibly explained."],
          [Shield,"03","DEFENSIVE DESIGN","Make security part of the system from the beginning."],
          [Workflow,"04","CREATIVE SYSTEMS","Use code and visual thinking to make complex ideas easier to explore."]
        ].map(([Icon,n,title,copy]: any,i)=><Reveal key={n} delay={i*.07} className="pillar"><span>{n}</span><Icon size={28}/><h3>{title}</h3><p>{copy}</p><small>DISCOVER / MAP</small></Reveal>)}
      </div>
    </div></section>

    <section className="section work-section" id="work"><div className="wrap">
      <div className="section-meta"><span>03 / SELECTED EXPLORATIONS</span><span>SMALL STUDIES. BIG QUESTIONS.</span></div>
      <div className="section-heading"><Reveal><p className="eyebrow"><i/> THE WORK</p><h2>CURIOSITY<br/><em>IN ACTION.</em></h2></Reveal><Reveal delay={.1}><p>A growing collection of security-focused concepts, technical experiments and visual studies. Each one is a way to investigate an idea more deeply.</p></Reveal></div>
      <div className="project-list">{projects.map((project,i)=><Reveal key={project.id} delay={i*.08} className="project-row">
        <div className="project-meta"><span>{project.id}</span><span>{project.tag}</span><ArrowUpRight size={17}/></div>
        <div className="project-grid"><Visual type={project.type}/><div className="project-copy"><h3>{project.title}</h3><p>{project.text}</p><div className="chip-row">{project.chips.map(x=><span key={x}>{x}</span>)}</div><small>CONCEPT / EXPLORATION</small></div></div>
      </Reveal>)}</div>
      <p className="work-disclaimer">NOTE / These are concept and learning studies, not client case studies or claims of completed security engagements.</p>
    </div></section>

    <section className="section method-section" id="field-notes"><div className="wrap">
      <div className="section-meta"><span>04 / FIELD NOTES</span><span>THE PROCESS MATTERS</span></div>
      <div className="section-heading method-heading"><Reveal><p className="eyebrow"><i/> HOW I APPROACH A PROBLEM</p><h2>FOLLOW<br/><em>THE EVIDENCE.</em></h2></Reveal><Reveal delay={.1}><p>Curiosity starts the investigation. A repeatable process keeps it useful. This is the loop I come back to when exploring a system or shaping a new idea.</p></Reveal></div>
      <div className="timeline">{steps.map(([n,title,body],i)=><Reveal key={n} delay={i*.07} className="timeline-row"><span>{n}</span><i/><div><h3>{title}</h3><p>{body}</p></div><ArrowUpRight size={16}/></Reveal>)}</div>
      <div className="permission-note"><span>PRINCIPLE / ALWAYS</span><b>ONLY TEST WHAT YOU OWN OR HAVE PERMISSION TO TEST.</b></div>
    </div></section>

    <section className="section creative-section" id="creative"><div className="wrap">
      <div className="section-meta"><span>05 / BEYOND THE TERMINAL</span><span>CREATIVE TECHNOLOGY</span></div>
      <div className="creative-grid"><Reveal><p className="eyebrow"><i/> THE OTHER SIDE OF THE SIGNAL</p><h2>CODE CAN<br/>BE A <em>MEDIUM.</em></h2><p>Cybersecurity is the focus. Creative technology is the playground around it — where code becomes motion, interfaces become experiences, and visual experiments make technical ideas tangible.</p><Link href="#contact" className="inline-link">LET'S MAKE SOMETHING <ArrowUpRight size={15}/></Link></Reveal>
        <Reveal delay={.12} className="creative-cards"><div><AudioWaveform/><small>01 / MOTION</small><h3>INTERACTION<br/>& MOTION</h3><p>Transitions and behaviours with intention.</p></div><div><GitBranch/><small>02 / SPATIAL</small><h3>3D / GENERATIVE<br/>EXPERIMENTS</h3><p>Digital spaces shaped through code.</p></div><div><Zap/><small>03 / ENGINEERING</small><h3>CREATIVE<br/>DEVELOPMENT</h3><p>Useful systems with a distinctive visual language.</p></div></Reveal>
      </div>
    </div></section>

    <section className="section about-section" id="about"><div className="wrap">
      <div className="section-meta"><span>06 / THE PERSON BEHIND THE PROCESS</span><span>ABOUT SAM</span></div>
      <div className="about-grid"><Reveal><p className="eyebrow"><i/> A LITTLE CONTEXT</p><h2>STAY<br/>CURIOUS.<br/><em>STAY SHARP.</em></h2></Reveal><Reveal delay={.1}><h3>I'm Sam — a curious builder with a strong pull toward cybersecurity and the systems that power our digital world.</h3><p>I enjoy exploring how websites and applications behave beneath the interface, learning how vulnerabilities happen, and understanding the engineering decisions that make products resilient. I also care about the experience around the technology: how it looks, moves and communicates.</p><div className="chip-row"><span>CYBERSECURITY</span><span>WEB TECHNOLOGY</span><span>CREATIVE CODE</span><span>VISUAL EXPERIMENTS</span></div><div className="about-status"><span><i/> CURRENTLY LEARNING & BUILDING</span><span>BASED IN BANGLADESH / UTC+6</span></div></Reveal></div>
    </div></section>

    <section className="section contact-section" id="contact"><div className="wrap">
      <div className="section-meta"><span>07 / OPEN CHANNEL</span><span>END OF TRANSMISSION</span></div>
      <div className="contact-panel"><Reveal><p className="eyebrow"><i/> HAVE SOMETHING INTERESTING?</p><h2>LET'S BUILD<br/><em>WHAT'S NEXT.</em></h2><p>Have a question, a collaboration in mind, or an interesting problem worth exploring? Start a conversation.</p><a className="primary-button" href="https://github.com/as777hk" target="_blank" rel="noreferrer">OPEN GITHUB PROFILE <ArrowUpRight size={16}/></a><small>PUBLIC CONTACT CHANNEL / GITHUB</small></Reveal><div className="contact-art"><div className="contact-orbit"><div><Fingerprint size={70}/></div></div><span>CHANNEL / OPEN<br/><b>ENCRYPTED BY INTENT</b><br/>CHANNEL READY</span></div></div>
    </div></section>
  </div>;
}
