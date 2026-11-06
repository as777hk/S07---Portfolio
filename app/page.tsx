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
import CyberAtlas from "@/components/cyber-atlas";
import Reveal from "@/components/reveal";
import ProjectCard from "@/components/project-card";
import { projects, notes, focus } from "@/lib/content";

const creativeDirections = [
  { icon: Layers3, title: "Motion & interaction", text: "Interfaces that respond with purpose, rhythm and clarity." },
  { icon: Box, title: "3D / CGI exploration", text: "Spatial thinking, visual systems and rendered worlds." },
  { icon: Braces, title: "Creative code", text: "Experiments where engineering becomes a visual material." }
];

const featuredProjects = [
  projects.find((project) => project.slug === "secure-surface")!,
  projects.find((project) => project.slug === "security-field-notes")!,
  projects.find((project) => project.slug === "network-study")!
];

const method = [
  { n: "01", title: "Observe", text: "Start with the system, its purpose, assets and assumptions." },
  { n: "02", title: "Map", text: "Make data flows, dependencies and trust boundaries visible." },
  { n: "03", title: "Test responsibly", text: "Learn inside owned or explicitly authorised environments." },
  { n: "04", title: "Explain", text: "Document evidence, uncertainty and practical remediation." }
];

export default function HomePage() {
  return (
    <div className="home-page cinema-home">
      <section className="wrap cinema-hero">
        <div className="cinema-topline">
          <span><i /> SAMIUN ISLAM / PERSONAL PORTFOLIO</span>
          <span>CYBERSECURITY <b>×</b> CREATIVE TECHNOLOGY <em>2026—</em></span>
        </div>

        <div className="cinema-layout">
          <div className="cinema-copy">
            <Reveal>
              <p className="cinema-kicker">LOOK CLOSER. QUESTION THE SYSTEM.</p>
            </Reveal>
            <Reveal delay={0.07}>
              <h1 className="cinema-name">SAMIUN<span>.</span></h1>
            </Reveal>
            <Reveal delay={0.13}>
              <div className="cinema-role">
                <span>CYBERSECURITY</span>
                <b>+</b>
                <span>CREATIVE TECHNOLOGY</span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="cinema-intro">
                I&apos;m <strong>Samiun Islam.</strong> Cybersecurity is my primary pursuit — understanding how digital systems behave, where trust breaks down, and how technology can be made safer. I use creative code and visual experimentation to explore and communicate complex ideas.
              </p>
            </Reveal>
            <Reveal delay={0.27}>
              <div className="cinema-actions">
                <Link href="/security" className="cinema-button cinema-button-primary" data-cursor="EXPLORE CYBERSECURITY">
                  Explore my security focus <ArrowUpRight size={17} />
                </Link>
                <Link href="/work" className="cinema-button cinema-button-quiet" data-cursor="VIEW SELECTED WORK">
                  Selected work <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="cinema-visual">
            <div className="cinema-visual-head">
              <span>FIELD STUDY / 001</span>
              <span className="cinema-live"><i /> INTERACTIVE VISUAL</span>
            </div>
            <div className="cinema-visual-frame" data-cursor="EXPLORE THE SECURITY MAP">
              <div className="cinema-visual-grid" />
              <div className="cinema-visual-glow" />
              <CyberAtlas />
              <span className="visual-edge-label visual-edge-left">NODE / AUTH</span>
              <span className="visual-edge-label visual-edge-right">EDGE / TRUST</span>
              <span className="visual-coordinate">23° 48&apos; N / 90° 24&apos; E</span>
            </div>
            <div className="cinema-visual-foot">
              <span>AN ORIGINAL VISUAL METAPHOR</span>
              <span>NOT LIVE SECURITY TELEMETRY</span>
            </div>
          </Reveal>
        </div>

        <div className="cinema-bottomline">
          <span className="cinema-scroll"><ArrowDown size={14} /> SCROLL TO EXPLORE</span>
          <span className="cinema-principle"><b>01</b> SECURITY FIRST / CURIOSITY ALWAYS</span>
          <span className="cinema-status"><i /> OPEN TO THOUGHTFUL COLLABORATION</span>
        </div>
        <div className="cinema-watermark" aria-hidden="true">SAMIUN</div>
      </section>

      <section className="wrap home-manifesto cinema-manifesto">
        <div className="home-section-meta">
          <span>01 / POINT OF VIEW</span>
          <span>SECURITY IS A WAY OF THINKING</span>
        </div>
        <Reveal>
          <h2>LOOK BEYOND<br />THE INTERFACE.<br /><span>UNDERSTAND WHAT&apos;S BENEATH.</span></h2>
        </Reveal>
        <div className="manifesto-bottom">
          <p>Every product is a system of people, data, permissions and dependencies. I&apos;m interested in understanding those relationships — and making them easier to reason about.</p>
          <Link href="/about" className="home-inline-link" data-cursor="READ THE STORY">The thinking behind it <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="wrap home-focus cinema-focus">
        <div className="home-section-heading">
          <div>
            <span className="home-section-label"><i /> 02 / PRIMARY DISCIPLINE</span>
            <h2>THE SECURITY<br /><span>LANDSCAPE.</span></h2>
          </div>
          <p>These are the areas I&apos;m developing through structured learning, hands-on labs, responsible practice and technical documentation.</p>
        </div>
        <div className="focus-rows">
          {focus.map((item, index) => {
            const icons = [ShieldCheck, Network, ScanEye, Fingerprint];
            const Icon = icons[index];
            return (
              <Reveal key={item.n} delay={index * 0.055}>
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

      <section className="wrap cinema-method">
        <div className="home-section-meta">
          <span>03 / THE PROCESS</span>
          <span>FROM CURIOSITY TO CLARITY</span>
        </div>
        <div className="cinema-method-head">
          <h2>HOW I<br /><span>THINK.</span></h2>
          <p>Good security work starts before the tools. It starts with a clear question, a defined scope and the discipline to explain what the evidence actually shows.</p>
        </div>
        <div className="cinema-method-grid">
          {method.map((item, index) => (
            <Reveal className="cinema-method-card" key={item.n} delay={index * 0.07}>
              <span className="cinema-method-number">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="cinema-method-line" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-work-section cinema-work">
        <div className="wrap home-work">
          <div className="home-section-meta">
            <span>04 / SELECTED WORK</span>
            <span>STUDIES · EXPERIMENTS · DOCUMENTATION</span>
          </div>
          <div className="home-work-heading">
            <h2>IDEAS INTO<br /><span>PROOF OF WORK.</span></h2>
            <p>A growing collection at the intersection of cybersecurity, engineering and visual exploration. Each item is labelled honestly as a concept, experiment or study.</p>
          </div>
          <div className="project-grid home-project-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} item={project} index={index} />
            ))}
          </div>
          <div className="home-work-footer">
            <span>MORE WORK / MORE QUESTIONS / MORE TO LEARN</span>
            <Link href="/work" className="cinema-button cinema-button-outline" data-cursor="VIEW THE PROJECT INDEX">View all work <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="wrap home-creative cinema-creative">
        <div className="home-section-meta">
          <span>05 / THE WIDER PRACTICE</span>
          <span>CREATIVE TECHNOLOGY</span>
        </div>
        <div className="home-creative-layout">
          <div className="creative-headline">
            <span className="home-section-label"><i /> THE COMPLEMENTARY DISCIPLINE</span>
            <h2>ENGINEERING<br />MEETS <span>IMAGINATION.</span></h2>
            <p>Alongside security, I explore motion, 3D, interactive interfaces and creative code — ways to prototype ideas and make complex systems more tangible.</p>
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

      <section className="wrap home-notes cinema-notes">
        <div className="home-section-meta">
          <span>06 / FIELD NOTES</span>
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

      <section className="wrap home-contact cinema-contact">
        <div className="home-contact-panel">
          <div className="home-section-meta"><span>07 / NEXT CONNECTION</span><span>OPEN CHANNEL</span></div>
          <h2>LET&apos;S BUILD<br /><span>WITH INTENTION.</span></h2>
          <div className="home-contact-bottom">
            <p>For thoughtful conversations, collaborations and interesting technical questions.</p>
            <Link href="/contact" className="cinema-button cinema-button-primary" data-cursor="START A CONVERSATION">Get in touch <ArrowUpRight size={16} /></Link>
          </div>
          <div className="home-contact-stamp">S / 001</div>
        </div>
      </section>
    </div>
  );
}
