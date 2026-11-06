"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useScroll } from "motion/react";
import ThreatField from "@/components/threat-field";

const nav = [
  { href: "/", label: "Home" },
  { href: "/security", label: "Focus" },
  { href: "/work", label: "Work" },
  { href: "/experiments", label: "Lab" },
  { href: "/notes", label: "Field notes" },
  { href: "/about", label: "About" }
];

function CursorTrail() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layer = layerRef.current;
    if (!layer) return;
    const echoes = Array.from(layer.querySelectorAll<HTMLElement>(".cursor-echo"));
    const pointer = layer.querySelector<HTMLElement>(".cursor-pointer");
    const halo = layer.querySelector<HTMLElement>(".cursor-halo");
    const label = layer.querySelector<HTMLElement>(".cursor-label");
    if (!pointer || !halo || !label || !echoes.length) return;

    const trail = echoes.map(() => ({ x: -100, y: -100 }));
    let x = -100;
    let y = -100;
    let previousX = -100;
    let previousY = -100;
    let angle = -45;
    let frame = 0;
    let visible = false;

    document.documentElement.classList.add("cursor-enabled");

    const move = (event: PointerEvent) => {
      previousX = x;
      previousY = y;
      x = event.clientX;
      y = event.clientY;
      const dx = x - previousX;
      const dy = y - previousY;
      if (Math.abs(dx) + Math.abs(dy) > 1) angle = Math.atan2(dy, dx) * (180 / Math.PI) + 42;
      visible = true;
      layer.classList.add("is-visible");

      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor], a, button");
      const context = target?.dataset.cursor || (target ? "OPEN" : "");
      label.textContent = context;
      halo.classList.toggle("is-active", Boolean(target));
      pointer.classList.toggle("is-active", Boolean(target));
    };

    const leave = () => {
      visible = false;
      layer.classList.remove("is-visible");
      halo.classList.remove("is-active");
      pointer.classList.remove("is-active");
      label.textContent = "";
    };

    const down = () => layer.classList.add("is-pressed");
    const up = () => layer.classList.remove("is-pressed");

    const animate = () => {
      let followX = x;
      let followY = y;
      echoes.forEach((echo, index) => {
        const point = trail[index];
        const ease = index === 0 ? 0.44 : 0.32;
        point.x += (followX - point.x) * ease;
        point.y += (followY - point.y) * ease;
        followX = point.x;
        followY = point.y;
        const scale = 1 - index * 0.075;
        const opacity = Math.max(0.06, 0.5 - index * 0.062);
        echo.style.transform =
          "translate3d(" + point.x + "px," + point.y + "px,0) rotate(" + angle + "deg) scale(" + scale + ")";
        echo.style.opacity = visible ? String(opacity) : "0";
      });

      pointer.style.transform = "translate3d(" + x + "px," + y + "px,0) rotate(" + angle + "deg)";
      halo.style.transform = "translate3d(" + x + "px," + y + "px,0)";
      label.style.transform = "translate3d(" + (x + 24) + "px," + (y + 20) + "px,0)";
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.classList.remove("cursor-enabled");
    };
  }, []);

  return (
    <div ref={layerRef} className="cursor-layer" aria-hidden="true">
      {Array.from({ length: 11 }, (_, index) => (
        <span className="cursor-echo" key={index}>
          <svg viewBox="0 0 24 30">
            <path d="M3 2.5 20.5 18 12.4 18.6 9.1 27.2Z" />
          </svg>
        </span>
      ))}
      <span className="cursor-halo"><i /></span>
      <span className="cursor-pointer">
        <svg viewBox="0 0 24 30">
          <path d="M3 2.5 20.5 18 12.4 18.6 9.1 27.2Z" />
        </svg>
      </span>
      <span className="cursor-label" />
    </div>
  );
}

function OpeningSequence() {
  const [active, setActive] = useState(false);
  const [stage, setStage] = useState(0);
  const stages = ["MAPPING THE DIGITAL SURFACE", "TRACING CONNECTIONS", "REVEALING THE INTERFACE"];

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem("samiun-opening-seen")) return;
      window.sessionStorage.setItem("samiun-opening-seen", "1");
      setActive(true);
      const timers = [
        window.setTimeout(() => setStage(1), 620),
        window.setTimeout(() => setStage(2), 1320),
        window.setTimeout(() => setActive(false), 2580)
      ];
      return () => timers.forEach(window.clearTimeout);
    } catch {
      return;
    }
  }, []);

  if (!active) return null;
  return (
    <div className="opening-sequence" aria-hidden="true">
      <div className="opening-mesh" />
      <div className="opening-scan" />
      <div className="opening-top">
        <span><i /> SAMIUN / PERSONAL PORTFOLIO</span>
        <span>CYBERSECURITY × CREATIVE TECHNOLOGY</span>
      </div>
      <div className="opening-center">
        <span className="opening-index">FIELD STUDY / 001</span>
        <strong>SAMIUN<span>.</span></strong>
        <div className="opening-status"><i /> {stages[stage]}</div>
        <div className="opening-track"><i /></div>
        <div className="opening-stages">
          <span className={stage >= 0 ? "done" : ""}>01 / MAP</span>
          <span className={stage >= 1 ? "done" : ""}>02 / TRACE</span>
          <span className={stage >= 2 ? "done" : ""}>03 / REVEAL</span>
        </div>
      </div>
      <div className="opening-bottom">
        <span>LOOK CLOSER</span>
        <span>QUESTION THE SYSTEM</span>
        <span>EST. 2026</span>
      </div>
    </div>
  );
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <ThreatField />
      <OpeningSequence />
      <CursorTrail />
      <motion.div className="progress-line" style={{ scaleX: scrollYProgress }} />
      <header className="header">
        <Link href="/" className="brand" data-cursor="HOME" aria-label="Samiun home">
          <span className="brand-icon">S</span>
          <span className="brand-word">SAMIUN<small>CYBERSECURITY / CREATIVE TECHNOLOGY</small></span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={(item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)) ? "nav-item active" : "nav-item"}
              data-cursor="NAVIGATE"
            >
              <span className="nav-number">0{index + 1}</span>{item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="nav-cta" data-cursor="START A CONVERSATION">
          Contact <ArrowUpRight size={14} />
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} aria-label="Mobile navigation">
          {nav.map((item, index) => (
            <Link key={item.href} href={item.href}>
              <span>0{index + 1}</span>{item.label}<ArrowUpRight size={15} />
            </Link>
          ))}
          <Link href="/contact" className="mobile-cta">Start a conversation <ArrowUpRight size={15} /></Link>
        </motion.nav>
      )}

      <main id="main-content">
        <motion.div key={pathname} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          {children}
        </motion.div>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <Link href="/" className="brand" data-cursor="BACK TO TOP">
            <span className="brand-icon">S</span>
            <span className="brand-word">SAMIUN<small>CYBERSECURITY / CREATIVE TECHNOLOGY</small></span>
          </Link>
          <p>Look closer. Build with intention.</p>
          <Link href="/contact" className="footer-link" data-cursor="CONTACT">Start a conversation <ArrowUpRight size={15} /></Link>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SAMIUN ISLAM</span>
          <span>SECURITY FIRST · CURIOSITY ALWAYS</span>
          <Link href="https://github.com/as777hk" target="_blank" rel="noreferrer" data-cursor="OPEN GITHUB">GITHUB <ArrowDownRight size={13} /></Link>
        </div>
      </footer>
    </>
  );
}
