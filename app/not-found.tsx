import Link from "next/link";
export default function NotFound() {
  return <div className="wrap inner not-found">
    <span className="eyebrow"><i /> PAGE NOT FOUND / 404</span>
    <h1>THIS PAGE<br /><b>DOESN&apos;T EXIST.</b></h1>
    <p>The address may have changed. Head back to the homepage and keep exploring.</p>
    <Link href="/" className="btn primary">Return home ↗</Link>
  </div>;
}