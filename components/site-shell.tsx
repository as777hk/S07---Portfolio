"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useScroll } from "motion/react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/security", label: "Cybersecurity" },
  { href: "/work", label: "Work" },
  { href: "/experiments", label: "Experiments" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" }
];

function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    const label = document.querySelector<HTMLElement>(".cursor-label");
    if (!dot || !ring || !label) return;
    document.body.classList.add("custom-cursor");
    let x = -100, y = -100, rx = x, ry = y, frame = 0;
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      dot.style.transform = "translate3d(" + x + "px," + y + "px,0)";
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      ring.classList.toggle("cursor-active", Boolean(target));
      label.textContent = target?.dataset.cursor || "";
    };
    const animate = () => {
      rx += (x - rx) * 0.17;
      ry += (y - ry) * 0.17;
      ring.style.transform = "translate3d(" + rx + "px," + ry + "px,0)";
      frame = requestAnimationFrame(animate);
    };
    window.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
      document.body.classList.remove("custom-cursor");
    };
  }, []);
  return <div className="cursor-layer" aria-hidden="true">
    <i className="cursor-dot" />
    <i className="cursor-ring"><span className="cursor-label" /></i>
  </div>;
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => setMenuOpen(false), [pathname]);

  return <>
    <motion.div className="progress-line" style={{ scaleX: scrollYProgress }} />
    <CustomCursor />
    <header className="header">
      <Link href="/" className="brand" data-cursor="Home" aria-label="Samiun Islam home">
        <span className="brand-icon">S</span>
        <span className="brand-word">SAMIUN<small>CYBERSECURITY & CREATIVE TECHNOLOGY</small></span>
      </Link>
      <nav className="nav" aria-label="Main navigation">
        {nav.map((item) => <Link key={item.href} href={item.href}
          className={(item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)) ? "nav-item active" : "nav-item"}
          data-cursor="Open page">{item.label}</Link>)}
      </nav>
      <Link href="/contact" className="nav-cta" data-cursor="Let's connect">Let&apos;s connect <ArrowUpRight size={14} /></Link>
      <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation">
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
    {menuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} aria-label="Mobile navigation">
      {nav.map((item, index) => <Link key={item.href} href={item.href}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={15} /></Link>)}
      <Link href="/contact" className="mobile-cta">Start a conversation <ArrowUpRight size={15} /></Link>
    </motion.nav>}
    <div className="ambient ambient-a" aria-hidden="true" />
    <div className="ambient ambient-b" aria-hidden="true" />
    <main id="main-content">
      <motion.div key={pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </motion.div>
    </main>
    <footer className="footer">
      <div className="footer-top">
        <Link href="/" className="brand">
          <span className="brand-icon">S</span>
          <span className="brand-word">SAMIUN<small>CYBERSECURITY & CREATIVE TECHNOLOGY</small></span>
        </Link>
        <p>Curious by nature. Intentional by design.</p>
        <Link href="#main-content" data-cursor="Back to top">Back to top ↑</Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SAMIUN ISLAM</span>
        <span className="live-status"><i /> PERSONAL WEBSITE</span>
        <a href="https://github.com/as777hk" target="_blank" rel="noreferrer">GITHUB ↗</a>
      </div>
    </footer>
  </>;
}