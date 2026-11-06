import type { Metadata } from "next";
import { Compass, Eye, Shield, Workflow } from "lucide-react";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";

export const metadata: Metadata = { title: "About Samiun", description: "About Samiun Islam and the intersection of cybersecurity, creative engineering and visual exploration." };

const disciplines = [
  { title: "Cybersecurity", text: "My main focus: understanding how systems work, where trust can break and how digital products can be made safer.", Icon: Shield },
  { title: "Creative engineering", text: "Building interfaces and applications where strong technical foundations support meaningful experiences.", Icon: Workflow },
  { title: "Visual exploration", text: "Using motion, 3D, CGI and creative code to communicate ideas in a more immersive way.", Icon: Eye },
  { title: "Curiosity", text: "Following questions across disciplines, documenting what I learn and improving through deliberate practice.", Icon: Compass }
];

export default function AboutPage() {
  return <div className="wrap inner">
    <section className="page-hero">
      <Reveal><span className="eyebrow"><i /> ABOUT / SAMIUN ISLAM</span></Reveal>
      <Reveal delay={0.06}><h1>CURIOUS BY<br /><b>DESIGN.</b></h1></Reveal>
      <Reveal delay={0.12}><p>I’m Samiun Islam. Cybersecurity is my main passion. Around that, I’m developing a creative technology practice that brings together engineering, design, motion and visual experimentation.</p></Reveal>
    </section>
    <section className="section about-intro">
      <Reveal><span className="kicker"><i /> THE SHORT VERSION</span><h2>I want to understand what is beneath the interface — then create something considered, useful and secure on top of it.</h2></Reveal>
      <Reveal><span className="mono">MY PRINCIPLE</span><p>Security is the foundation. Creativity is how I explore. Engineering is how I bring ideas into the world.</p></Reveal>
    </section>
    <section className="section">
      <SectionTitle overline="THE PRACTICE / 01" title="One curiosity. Different expressions." text="These disciplines connect through a shared interest in systems, detail and the way people experience technology." />
      <div className="about-grid">
        {disciplines.map(({ title, text, Icon }, index) => <Reveal className="about-card" key={title}>
          <Icon /><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
        </Reveal>)}
      </div>
    </section>
    <section className="section journey">
      <SectionTitle overline="A WORK IN PROGRESS / 02" title="Build the practice, one deliberate step at a time." />
      <div className="journey-list">
        <div><span>01</span><p><strong>Learn deeply</strong><br />Study fundamentals, build repeatable habits and ask better technical questions.</p></div>
        <div><span>02</span><p><strong>Practice responsibly</strong><br />Work in owned or authorized environments and keep a clear record of what was learned.</p></div>
        <div><span>03</span><p><strong>Create and share</strong><br />Turn experiments into documented projects, useful interfaces and visual explorations.</p></div>
      </div>
    </section>
  </div>;
}