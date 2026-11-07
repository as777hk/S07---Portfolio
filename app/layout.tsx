import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sam07.vercel.app"),
  title: {
    default: "SAM | Cybersecurity & Penetration Tester — 20-Agent Live Builder",
    template: "%s — SAM"
  },
  description: "Explore SAM's cybersecurity portfolio through a cinematic, interactive 20-agent live website build, security labs, and technical explorations.",
  applicationName: "SAM",
  icons: {
    icon: [{ url: "/sam-mark.svg?v=3", type: "image/svg+xml" }],
    shortcut: [{ url: "/sam-mark.svg?v=3", type: "image/svg+xml" }],
    apple: [{ url: "/sam-mark.svg?v=3", type: "image/svg+xml" }]
  },
  openGraph: {
    title: "SAM | Cybersecurity & Penetration Tester — 20-Agent Live Builder",
    description: "A cybersecurity portfolio presented through an interactive 20-agent website build.",
    siteName: "SAM",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "SAM | Cybersecurity & Penetration Tester — 20-Agent Live Builder",
    description: "A cybersecurity portfolio presented through an interactive 20-agent website build."
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#06070b",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
