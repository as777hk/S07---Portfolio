import Link from "next/link";
export default function NotFound(){return <div className="wrap inner not-found"><span className="eyebrow"><i/> SIGNAL LOST / 404</span><h1>NOT HERE.<br/><b>YET.</b></h1><p>The page may have moved, or the signal never existed.</p><Link href="/" className="btn primary">Return home ↗</Link></div>}
