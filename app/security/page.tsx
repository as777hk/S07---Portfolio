import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Bug, Fingerprint, Network, ShieldCheck } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";
import { focus } from "@/lib/content";

export const metadata: Metadata = { title: "Cybersecurity", description: "Cybersecurity interests, learning areas and responsible lab practice." };
const icons = [ShieldCheck, Network, Bug, Fingerprint];

export default function SecurityPage() {
  return <div className="wrap inner">
    <section className="page-hero">
      <Reveal><span className="eyebrow"><i /> PRIMARY FOCUS / CYBERSECURITY</span></Reveal>
      <Reveal delay={0.06}><h1>UNDERSTAND THE<br /><b>SYSTEM.</b></h1></Reveal>
      <Reveal delay={0.12}><p>Cybersecurity is the foundation of my technical curiosity. I’m building a practical understanding of how systems behave, where risk appears and how thoughtful engineering can reduce it.</p></Reveal>
      <span className="page-meta">FOCUS / 001 <span>AUTHORIZED LEARNING · RESPONSIBLE PRACTICE</span></span>
    </section>
    <section className="section">
      <SectionTitle overline="AREAS OF FOCUS / 01" title="A security-first practice." text="These are areas I’m studying and developing through documentation, controlled exercises and deliberate practice — not a claim of certification or professional testing experience." />
      <div className="security-grid">
        {focus.map((item, index) => { const Icon = icons[index]; return <Reveal key={item.n} className="security-card" delay={index * 0.05}>
          <div><Icon size={21} /><span>{item.n}</span></div><h3>{item.title}</h3><p>{item.text}</p><small>LEARNING / PRACTICE AREA</small>
        </Reveal>; })}
      </div>
    </section>
    <section className="section split">
      <Reveal className="terminal">
        <div className="terminal-head"><i /><i /><i /><span>research_scope.log</span></div>
        <div><p><b>$</b> define_scope --authorized</p><strong>scope: explicitly_authorized</strong><p><b>$</b> observe --document --verify</p><span>evidence &gt; assumption</span><p><b>$</b> recommend --remediation</p><strong>output: actionable_guidance</strong></div>
      </Reveal>
      <Reveal>
        <span className="kicker"><i /> HOW I APPROACH IT</span><h2>Evidence over assumptions.</h2>
        <p>Good security work is scoped, authorized and reproducible. I want my notes to be clear about the environment, the method, what was observed and what can be done next.</p>
        <ul><li>Authorized environments only</li><li>Clear scope and reproducible notes</li><li>Practical mitigation, not just findings</li></ul>
        <Link href="/notes" className="text-link">Read research notes <ArrowUpRight size={15} /></Link>
      </Reveal>
    </section>
    <section className="section">
      <SectionTitle overline="A REPEATABLE METHOD / 02" title="Learn. Test. Understand. Improve." />
      <div className="method">{["Define scope", "Form a question", "Test responsibly", "Document evidence", "Improve the system"].map((step, index) => <Reveal key={step}><span>0{index + 1}</span><b>{step}</b></Reveal>)}</div>
    </section>
    <section className="callout"><div><BookOpen size={18} /> CONTINUOUS LEARNING</div><h2>Research becomes useful when it can be understood, repeated and improved.</h2><Link href="/notes" className="text-link">Explore the notes <ArrowUpRight size={15} /></Link></section>
  </div>;
}