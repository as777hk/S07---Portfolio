import type {Metadata} from "next";
import Reveal from "@/components/reveal";
import SectionTitle from "@/components/section-title";
import ProjectGrid from "@/components/project-grid";
export const metadata:Metadata={title:"Selected Work",description:"Cybersecurity, engineering and visual studies by Samiun Islam."};
export default function WorkPage(){return <div className="wrap inner"><section className="page-hero"><Reveal><span className="eyebrow"><i/> WORK / PROJECT INDEX</span></Reveal><Reveal delay={.06}><h1>THOUGHTS INTO<br/><b>THINGS.</b></h1></Reveal><Reveal delay={.12}><p>A collection of studies and projects at the intersection of security, engineering and visual exploration. Work is labelled honestly as an experiment, concept or ongoing study.</p></Reveal></section><section className="section"><SectionTitle overline="THE PORTFOLIO / 01" title="Selected directions." text="Choose a discipline to explore the work. Open any card for its context, approach and tools."/><ProjectGrid/></section></div>}
