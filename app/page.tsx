import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Fingerprint, Network, ShieldCheck, Sparkles } from "lucide-react";
import SignalCore from "@/components/signal-core";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/content";

export default function HomePage() {
  return <>
    <section className="hero wrap">
      <div className="hero-copy">
        <Reveal><span className="eyebrow"><i /> PERSONAL WEBSITE / CYBERSECURITY & CREATIVE TECHNOLOGY</span></Reveal>
        <Reveal delay={0.07}><h1>CURIOUS ABOUT<br /><b>WHAT&apos;S UNDERNEATH.</b></h1></Reveal>
        <Reveal delay={0.14}><p>I&apos;m <strong>Samiun Islam.</strong> Cybersecurity is my main focus. I also explore software engineering, creative coding, interaction design, 3D and motion — bringing technical ideas to life with care.</p></Reveal>
        <Reveal delay={0.21} className="hero-actions">
          <Link href="/security" className="btn primary" data-cursor="Explore cybersecurity">Explore cybersecurity <ArrowUpRight size={16} /></Link>
          <Link href="/work" className="btn quiet" data-cursor="View selected work">View selected work <ArrowRight size={15} /></Link>
        </Reveal>
        <Reveal delay={0.28} className="hero-note"><span>01 / 06</span> SECURITY FIRST. CURIOSITY ALWAYS.</Reveal>
      </div>
      <Reveal delay={0.17} className="hero-art">
        <SignalCore />
        <div className="art-caption"><span>STUDY / 001</span><span>CONNECTED SYSTEMS</span></div>
      </Reveal>
      <Link href="#intro" className="scroll-cue" data-cursor="Scroll down"><ArrowDown size={14} /> SCROLL TO EXPLORE</Link>
      <span className="coordinates">SAMIUN ISLAM&nbsp; /&nbsp; PERSONAL ARCHIVE</span>
    </section>

    <section id="intro" className="wrap intro section">
      <span className="kicker"><i /> A WAY OF THINKING</span>
      <div>
        <p>Look closer. Ask better questions.</p>
        <h2>I want to understand how digital systems work, where they become vulnerable, and how thoughtful engineering can make them <b>more useful, expressive and secure.</b></h2>
        <Link href="/about" className="text-link" data-cursor="Read about me">More about me <ArrowUpRight size={15} /></Link>
      </div>
    </section>

    <section className="wrap section">
      <SectionTitle overline="01 / THE CORE FOCUS" title="Cybersecurity comes first." text="My central interest is understanding, testing and improving digital systems. I’m building this practice through structured learning, authorized environments and careful technical documentation." />
      <div className="focus-grid">
        {[
          { icon: ShieldCheck, title: "Application security", text: "Explore how web applications handle identity, data, trust boundaries and user input." },
          { icon: Network, title: "Networks & systems", text: "Understand how connected systems communicate, depend on one another and fail." },
          { icon: Fingerprint, title: "Research & secure coding", text: "Practice responsibly, document evidence and translate findings into safer implementation." }
        ].map((item, index) => {
          const Icon = item.icon;
          return <Reveal className="focus-card" key={item.title} delay={index * 0.07}>
            <div><Icon size={21} /><span>0{index + 1}</span></div>
            <h3>{item.title}</h3><p>{item.text}</p>
          </Reveal>;
        })}
      </div>
      <div className="right-link"><Link href="/security" className="text-link">Go to cybersecurity <ArrowUpRight size={15} /></Link></div>
    </section>

    <section className="wrap section">
      <SectionTitle overline="02 / SELECTED WORK" title="Things I&apos;m exploring and building." text="A growing set of technical and creative studies. Each project is labelled honestly so experiments are not mistaken for shipped products or client work." />
      <div className="project-grid home-projects">{projects.slice(0, 3).map((project, index) => <ProjectCard key={project.slug} item={project} index={index} />)}</div>
      <div className="right-link"><Link href="/work" className="btn outline" data-cursor="View all projects">All projects <ArrowUpRight size={15} /></Link></div>
    </section>

    <section className="wrap studio">
      <Reveal>
        <span className="kicker"><i /> THE CREATIVE PRACTICE</span>
        <h2>Engineering gives ideas structure.<br /><b>Creativity gives them character.</b></h2>
        <p>Outside security, I enjoy building thoughtful interfaces, creative code, motion systems, 3D studies and visual experiments.</p>
        <Link href="/experiments" className="text-link" data-cursor="Explore experiments">Explore the creative work <ArrowUpRight size={15} /></Link>
      </Reveal>
      <Reveal className="studio-symbol" delay={0.12}>
        <div><Sparkles size={25} /></div>
        <span>3D / MOTION / CREATIVE CODE</span>
      </Reveal>
    </section>

    <section className="wrap closing">
      <span className="kicker"><i /> OPEN TO INTERESTING IDEAS</span>
      <h2>Have something<br /><b>worth exploring?</b></h2>
      <Link href="/contact" className="btn primary" data-cursor="Contact Samiun">Get in touch <ArrowUpRight size={16} /></Link>
    </section>
  </>;
}