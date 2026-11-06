import type { Metadata, Viewport } from "next";
import SiteShell from "@/components/site-shell";
import "./globals.css";
export const metadata: Metadata = { metadataBase:new URL("https://s07-hk777.vercel.app"), title:{default:"Samiun Islam — Cybersecurity × Creative Technology",template:"%s — Samiun Islam"}, description:"The personal portfolio of Samiun Islam: cybersecurity-first thinking, creative engineering, interactive web experiences, 3D, motion and visual experimentation.", applicationName:"SAMIUN / SIGNAL", openGraph:{title:"Samiun Islam — Secure Systems. Thoughtful Experiences.",description:"Cybersecurity × Creative Technology.",siteName:"SAMIUN / SIGNAL",type:"website"}, robots:{index:true,follow:true} };
export const viewport: Viewport = {themeColor:"#080c13",colorScheme:"dark"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;}