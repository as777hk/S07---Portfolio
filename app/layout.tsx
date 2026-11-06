import type { Metadata,Viewport } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import SiteShell from "@/components/site-shell";
import "./globals.css";
const display=Space_Grotesk({variable:"--font-display",subsets:["latin"],display:"swap"});
const condensed=Barlow_Condensed({variable:"--font-condensed",subsets:["latin"],weight:["600","700","800","900"],display:"swap"});
const body=Inter({variable:"--font-body",subsets:["latin"],display:"swap"});
const mono=IBM_Plex_Mono({variable:"--font-mono",subsets:["latin"],weight:["400","500"],display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://sam07.vercel.app"),title:{default:"SAM — Cybersecurity & Creative Technology",template:"%s — SAM"},description:"SAM explores cybersecurity, digital systems and creative technology through security-focused experiments and interactive work.",applicationName:"SAM",openGraph:{title:"SAM — Cybersecurity & Creative Technology",description:"Cybersecurity first. Creative technology as a wider field of exploration.",siteName:"SAM",type:"website"},twitter:{card:"summary",title:"SAM — Cybersecurity & Creative Technology",description:"Cybersecurity, digital systems and creative exploration."},robots:{index:true,follow:true}};
export const viewport:Viewport={themeColor:"#03070d",colorScheme:"dark"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={display.variable+" "+condensed.variable+" "+body.variable+" "+mono.variable}><SiteShell>{children}</SiteShell></body></html>;}
