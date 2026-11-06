import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import SiteShell from "@/components/site-shell";
import "./globals.css";

const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"], display: "swap" });
const body = Inter({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sam07.vercel.app"),
  title: { default: "Samiun Islam — Cybersecurity & Creative Technology", template: "%s — Samiun Islam" },
  description: "Samiun Islam's personal website: cybersecurity, creative engineering, interactive web experiences, 3D, motion and visual experiments.",
  applicationName: "Samiun Islam",
  openGraph: {
    title: "Samiun Islam — Cybersecurity & Creative Technology",
    description: "Cybersecurity is the focus. Creative technology is the wider field.",
    siteName: "Samiun Islam",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Samiun Islam — Cybersecurity & Creative Technology",
    description: "Cybersecurity, engineering and creative exploration."
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = { themeColor: "#080c13", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <body className={display.variable + " " + body.variable + " " + mono.variable}>
      <SiteShell>{children}</SiteShell>
    </body>
  </html>;
}