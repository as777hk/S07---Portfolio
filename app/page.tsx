import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Box,
  Braces,
  Fingerprint,
  Layers3,
  Network,
  ScanEye,
  ShieldCheck
} from "lucide-react";
import SignalCore from "@/components/signal-core";
import Reveal from "@/components/reveal";
import ProjectCard from "@/components/project-card";
import { projects, notes, focus } from "@/lib/content";

const creativeDirections = [
  { icon: Layers3, title: "Motion & interaction", text: "Interfaces that respond with purpose, rhythm and clarity." },
  { icon: Box, title: "3D / CGI exploration", text: "Spatial thinking, visual systems and rendered worlds." },
  { icon: Braces, title: "Creative code", text: "Small experiments where engineering becomes a visual material." }
];

const featuredProjects = [
  projects.find((project) => project.slug === "secure-surface")!,
  projects.find((project) => project.slug === "security-field-notes")!,
  projects.find((project) => project.slug === "network-study")!
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="wrap home-hero">
        <div className="home-hero-top">
          <span className="home-kicker"><i /> SAMIUN ISLAM / INDEPENDENT PRACTICE</span>
          <span className="home-edition">CYBERSECURITY <b>×</b> CREATIVE TECHNOLOGY</span>
        </div>

        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <Reveal>
              <p className="home-overline">I LOOK CLOSER. I QUESTION THE SYSTEM.</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="home-display">
                LOOK<br />
                <span>BEYOND</span><br />
                THE SURFACE<span className="home-period">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="home-intro">
                I&apos;m <strong>Samiun Islam.</strong> Cybersecurity is my main focus — understanding what happens beneath the interface, where systems become vulnerable, and how we can build with more intention.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="home-actions">
                <Link href="/work" className="home-button home-button-primary" data-cursor="EXPLORE SELECTED WORK">
                  Explore selected work <ArrowUpRight size={17} />
                </Link>
                <Link href="/security" className="home-button home-button-quiet" data-cursor="ENTER THE SECURITY PRACTICE">
                  My security focus <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="home-hero-visual">
            <div className="hero-visual-heading">
              <span>FIELD MAP / 001</span>
              <span className="live-indicator"><i /> INTERACTIVE STUDY</span>
            </div>
            <div className="hero-core" data-cursor="MOVE TO EXPLORE THE SYSTEM">
              <div className="hero-core-grid" />
              <SignalCore />
              <div className="core-crosshair core-crosshair-one" />
              <div className="core-crosshair core-crosshair-two" />
              <div className="core-readout readout-top"><small>STRUCTURE</small><b>CONNECTED</b></div>
              <div className="core-readout readout-side"><small>MODE</small><b>OBSERVE / MAP</b></div>
              <span className="core-coordinate">23.8103° N / 90.4125° E</span>
            </div>
            <div className="hero-visual-foot">
              <span>AN INTERACTIVE VISUAL METAPHOR</span>
              <span>NOT LIVE SECURITY TELEMETRY</span>
            </div>
          </Reveal>
        </div>

        <div className="home-hero-bottom">
          <span className="scroll-hint"><ArrowDown size={14} /> SCROLL TO EXPLORE</span>
          <div className="hero-bottom-signature"><b>01</b><span>SECURITY FIRST<br />CURIOSITY ALWAYS</span></div>
          <span className="hero-bottom-note">A PRACTICE IN PROGRESS / 2026—</span>
        </div>
        <div className="hero-watermark" aria-hidden="true">SAMIUN</div>
      </section>

      <section className="wrap home-manifesto">
        <div className="home-section-meta">
          <span>01 / POINT OF VIEW</span>
          <span>THE WORK IS BENEATH THE SURFACE</span>
        </div>
        <Reveal>
          <h2>
            SECURITY ISN&apos;T<br />
            A VISUAL STYLE.<br />
            <span>IT&apos;S A WAY OF THINKING.</span>
          </h2>
        </Reveal>
        <div className="manifesto-bottom">
          <p>Look beyond the interface. Understand the data, trust boundaries, hidden dependencies and decisions that shape a digital system.</p>
          <Link href="/about" className="home-inline-link" data-cursor="READ THE STORY">The thinking behind it <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="wrap home-focus">
        <div className="home-section-heading">
          <div>
            <span className="home-section-label"><i /> 02 / THE PRIMARY DISCIPLINE</span>
            <h2>SECURITY<br /><span>IN FOCUS.</span></h2>
          </div>
          <p>These are the areas I&apos;m building depth in through structured learning, authorized environments and careful technical documentation.</p>
        </div>

        <div className="focus-rows">
          {focus.map((item, index) => {
            const icons = [ShieldCheck, Network, ScanEye, Fingerprint];
            const Icon = icons[index];
            return (
              <Reveal key={item.n} delay={index * 0.045}>
                <Link href="/security" className="focus-row" data-cursor="EXPLORE SECURITY">
                  <span className="focus-row-number">{item.n}</span>
                  <Icon className="focus-row-icon" size={21} />
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                  <span className="focus-row-tag">{index === 0 ? "APPSEC" : index === 1 ? "NETWORKS" : index === 2 ? "RESEARCH" : "ENGINEERING"}</span>
                  <ArrowUpRight className="focus-row-arrow" size={18} />
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="focus-disclaimer">CURRENT PRACTICE / LEARNING, LAB WORK & DOCUMENTED STUDIES — NOT A CLAIM OF CERTIFICATION</div>
      </section>

      <section className="home-work-section">
        <div className="wrap home-work">
          <div className="home-section-meta">
            <span>03 / SELECTED WORK</span>
            <span>STUDIES · EXPERIMENTS · DOCUMENTATION</span>
          </div>
          <div className="home-work-heading">
            <h2>IDEAS INTO<br /><span>PROOF OF WORK.</span></h2>
            <p>A growing collection of projects at the intersection of cybersecurity, engineering and visual exploration. Every item is labelled honestly: concept, experiment or study.</p>
          </div>
          <div className="project-grid home-project-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} item={project} index={index} />
            ))}
          </div>
          <div className="home-work-footer">
            <span>MORE WORK / MORE QUESTIONS / MORE TO LEARN</span>
            <Link href="/work" className="home-button home-button-outline" data-cursor="VIEW THE PROJECT INDEX">View all work <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="wrap home-creative">
        <div className="home-section-meta">
          <span>04 / THE WIDER PRACTICE</span>
          <span>CREATIVE TECHNOLOGY</span>
        </div>
        <div className="home-creative-layout">
          <div className="creative-headline">
            <span className="home-section-label"><i /> THE COMPLEMENTARY DISCIPLINE</span>
            <h2>ENGINEERING<br />MEETS <span>IMAGINATION.</span></h2>
            <p>Alongside security, I explore creative technology — not as a separate identity, but as another way to understand, shape and communicate complex ideas.</p>
            <Link href="/experiments" className="home-inline-link" data-cursor="ENTER THE LAB">Enter the visual lab <ArrowUpRight size={15} /></Link>
          </div>
          <div className="creative-cards">
            {creativeDirections.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.07} className="creative-card">
                <div className="creative-card-top"><Icon size={22} /><span>0{index + 1}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="creative-card-line" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap home-notes">
        <div className="home-section-meta">
          <span>05 / FIELD NOTES</span>
          <span>THOUGHTS MADE TRACEABLE</span>
        </div>
        <div className="home-notes-layout">
          <div>
            <span className="home-section-label"><i /> THINKING IN PUBLIC</span>
            <h2>DOCUMENT<br /><span>THE DETAILS.</span></h2>
            <p>Notes make learning visible. They keep scope, evidence, uncertainty and remediation in the same place.</p>
            <Link href="/notes" className="home-inline-link" data-cursor="OPEN THE NOTEBOOK">Open the notebook <ArrowUpRight size={15} /></Link>
          </div>
          <div className="home-note-list">
            {notes.slice(0, 2).map((note) => (
              <Link key={note.slug} href={"/notes/" + note.slug} className="home-note-row" data-cursor="READ FIELD NOTE">
                <span>{note.number}</span>
                <div><small>{note.category}</small><h3>{note.title}</h3><p>{note.excerpt}</p></div>
                <ArrowUpRight size={17} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap home-contact">
        <div className="home-contact-panel">
          <div className="home-section-meta"><span>06 / NEXT CONNECTION</span><span>OPEN CHANNEL</span></div>
          <h2>LET&apos;S BUILD<br /><span>WITH INTENTION.</span></h2>
          <div className="home-contact-bottom">
            <p>For thoughtful conversations, collaborations and interesting technical questions.</p>
            <Link href="/contact" className="home-button home-button-primary" data-cursor="START A CONVERSATION">Get in touch <ArrowUpRight size={16} /></Link>
          </div>
          <div className="home-contact-stamp">S / 001</div>
        </div>
      </section>
    </div>
  );
}
