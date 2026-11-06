import Reveal from "@/components/reveal";
export default function SectionTitle({overline,title,text}:{overline:string;title:string;text?:string}){return <Reveal className="section-title"><span className="kicker"><i/>{overline}</span><h2>{title}</h2>{text?<p>{text}</p>:null}</Reveal>}
