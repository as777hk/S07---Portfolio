import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github, MessageCircle } from "lucide-react";
import Reveal from "@/components/reveal";

export const metadata: Metadata = { title: "Contact", description: "Connect with Samiun Islam about cybersecurity, engineering and creative technology." };

export default function ContactPage() {
  return <div className="wrap inner contact">
    <section><Reveal>
      <span className="eyebrow"><i /> CONTACT / OPEN CHANNEL</span>
      <h1>LET&apos;S MAKE<br /><b>IT MEANINGFUL.</b></h1>
      <p>Have a thoughtful idea, an interesting technical problem or a project at the intersection of security and creativity? I’d be glad to hear about it.</p>
      <div>
        <a href="https://github.com/as777hk" target="_blank" rel="noreferrer" className="btn primary">Connect on GitHub <ArrowUpRight size={16} /></a>
        <Link href="/work" className="btn quiet">Explore my work <ArrowUpRight size={15} /></Link>
      </div>
    </Reveal></section>
    <Reveal className="contact-card">
      <MessageCircle />
      <div><small>PUBLIC CHANNEL</small><h2>Start with a conversation.</h2><p>My public GitHub profile is the verified public link currently connected to this website. Additional professional links can be added when confirmed.</p></div>
      <a href="https://github.com/as777hk" target="_blank" rel="noreferrer" aria-label="Open GitHub"><Github /><ArrowUpRight size={14} /></a>
    </Reveal>
  </div>;
}