"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Activity, ArrowUpRight, Bot, Braces, Check, CirclePause, CirclePlay, Code2, Cpu, Eye, Fingerprint, Gauge, Layers3, MousePointer2, Network, Paintbrush, ScanSearch, ShieldCheck, Sparkles, Terminal, Workflow, Zap } from "lucide-react";

const agents = [
  ["01", "ORCHESTRATOR", "COORDINATING TASKS", "#65e7ff"],
  ["02", "RECON AGENT", "MAPPING STRUCTURE", "#a4f17b"],
  ["03", "UX ANALYST", "READING USER FLOWS", "#ffc56c"],
  ["04", "DESIGN SYSTEM", "DEFINING TOKENS", "#d6a8ff"],
  ["05", "LAYOUT AGENT", "COMPOSING GRID", "#ff8fa8"],
  ["06", "COMPONENT AGENT", "BUILDING MODULES", "#71b7ff"],
  ["07", "TYPE AGENT", "TUNING HIERARCHY", "#ffe17a"],
  ["08", "INTERACTION", "WIRING STATES", "#77f0c4"],
  ["09", "ACCESSIBILITY", "CHECKING CONTRAST", "#bba4ff"],
  ["10", "RESPONSIVE QA", "TESTING BREAKPOINTS", "#ffae7b"],
  ["11", "MOTION AGENT", "MAPPING TRANSITIONS", "#83d9ff"],
  ["12", "CONTENT AGENT", "REFINING COPY", "#d3f27c"],
  ["13", "ROUTING AGENT", "CHECKING PATHS", "#ffa4d0"],
  ["14", "PERFORMANCE", "TRIMMING WEIGHT", "#90a9ff"],
  ["15", "SECURITY AGENT", "REVIEWING INPUTS", "#f17e7e"],
  ["16", "TEST AGENT", "RUNNING CHECKS", "#7de6dc"],
  ["17", "VISUAL QA", "COMPARING FRAMES", "#dfb1ff"],
  ["18", "REFACTOR AGENT", "CLEANING LOGIC", "#f7d27d"],
  ["19", "INTEGRATION", "CONNECTING PARTS", "#8dc6ff"],
  ["20", "RELEASE AGENT", "VERIFYING BUILD", "#a4ed9a"]
] as const;

const tasks = [
  "Inspecting page structure and component boundaries",
  "Mapping shared layout and responsive constraints",
  "Synchronising design tokens across the canvas",
  "Reviewing interaction states and keyboard paths",
  "Checking visual consistency across breakpoints",
  "Validating integration and build readiness"
];
const positions = [[13,22],[30,37],[52,19],[72,30],[89,22],[19,58],[39,66],[60,54],[81,67],[93,48],[8,76],[27,84],[46,81],[67,82],[87,84],[15,41],[36,46],[57,37],[75,49],[96,72]];
const icons = [Bot, ScanSearch, Eye, Layers3, Paintbrush, Braces, Sparkles, Workflow, Fingerprint, Gauge, Zap, Code2, Network, Cpu, ShieldCheck, Check, Activity, Terminal, ArrowUpRight, MousePointer2];

export default function SwarmRebuild() {
  const [playing, setPlaying] = useState(true);
  const [tick, setTick] = useState(0);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (!playing || reducedMotion) return;
    const timer = window.setInterval(() => setTick(value => value + 1), 2200);
    return () => window.clearInterval(timer);
  }, [playing, reducedMotion]);
  const active = tick % agents.length;
  const progress = Math.min(96, 74 + ((tick * 3) % 23));

  return <>
    <a className="swarm-floating-dock" href="#swarm-rebuild" aria-label="Jump to the public Swarm Rebuild showcase">
      <span className="swarm-dock-orb"><Network size={15}/></span>
      <span className="swarm-dock-copy"><b>SWARM REBUILD</b><small><i/> 20 AGENTS · PUBLIC VIEW</small></span>
      <ArrowUpRight size={15}/>
    </a>
    <section className="section swarm-section" id="swarm-rebuild">
      <div className="wrap">
        <div className="section-meta"><span>03 / MULTI-AGENT SYSTEM</span><span>ONE CANVAS / MANY PERSPECTIVES</span></div>
        <div className="swarm-heading-row">
          <div><p className="eyebrow"><i/> THE BUILD, IN MOTION</p><h2>SWARM <span>REBUILD.</span></h2></div>
          <p className="swarm-intro">A shared visual workspace where specialised agents map, design, build and review one interface together.</p>
        </div>
        <div className="swarm-console">
          <div className="swarm-console-top">
            <div className="swarm-console-brand"><span className="swarm-brand-mark"><Network size={16}/></span><span><b>SWARM / REBUILD</b><small>COLLABORATIVE INTERFACE WORKSPACE</small></span></div>
            <div className="swarm-top-status"><span><i/> PUBLIC SHOWCASE</span><span className="swarm-live-count">20 / 20 AGENTS</span></div>
          </div>
          <div className="swarm-workspace">
            <div className="swarm-canvas-column">
              <div className="swarm-canvas-toolbar"><span><i/> CANVAS / 01</span><span>DESKTOP PREVIEW <b>1440 × 900</b></span><span className="swarm-toolbar-right">SYNCED <i/></span></div>
              <div className="swarm-canvas">
                <div className="swarm-canvas-grid"/>
                <div className="swarm-preview-window">
                  <div className="swarm-preview-nav"><span className="swarm-preview-logo"><i/> NEXUS<span>_</span></span><div><i/><i/><i/></div><b>GET STARTED ↗</b></div>
                  <div className="swarm-preview-content">
                    <div className="swarm-preview-copy"><small>BUILD / OBSERVE / IMPROVE</small><h3>Ideas become<br/><em>interfaces.</em></h3><p>A shared canvas for thoughtful digital experiences, shaped by many specialised perspectives.</p><div className="swarm-preview-actions"><b>EXPLORE THE SYSTEM <ArrowUpRight size={11}/></b><span>01 — 04</span></div></div>
                    <div className="swarm-preview-art"><div className="swarm-art-orbit orbit-one"/><div className="swarm-art-orbit orbit-two"/><div className="swarm-art-core"><Network size={36}/></div><span className="swarm-art-tag tag-one">STRUCTURE / 92%</span><span className="swarm-art-tag tag-two">SIGNAL / ACTIVE</span></div>
                  </div>
                  <div className="swarm-preview-foot"><span>DESIGN SYSTEM / V.04</span><span>BUILT IN PARALLEL <i/></span></div>
                </div>
                {agents.map((agent, index) => {
                  const [x, y] = positions[index];
                  const Icon = icons[index];
                  return <motion.div key={agent[0]} className={`swarm-agent-cursor cursor-${index + 1}`} style={{left:`${x}%`,top:`${y}%`,"--agent-color":agent[3]} as React.CSSProperties} animate={reducedMotion ? undefined : {x:[0,index%2?14:-12,index%3?-8:11,0],y:[0,index%3?-12:10,index%2?8:-7,0]}} transition={{duration:8+(index%5),repeat:Infinity,ease:"easeInOut",delay:index*.12}}>
                    <span className="swarm-cursor-pointer"><Icon size={12}/></span><span className="swarm-cursor-label">{agent[0]} / {agent[1]}</span>
                  </motion.div>;
                })}
                <div className="swarm-canvas-corner corner-a">X: {124 + tick * 3} / Y: 084</div><div className="swarm-canvas-corner corner-b">20 PRESENCES <i/></div>
              </div>
              <div className="swarm-canvas-footer"><span><i className="swarm-green-dot"/> SHARED CANVAS ACTIVE</span><span>CURSORS / PRESENCE / TASK STREAM</span></div>
            </div>
            <aside className="swarm-agent-rail">
              <div className="swarm-rail-head"><span>AGENT ROSTER</span><b>20 ONLINE <i/></b></div>
              <div className="swarm-agent-list">
                {agents.map((agent,index) => {
                  const Icon = icons[index];
                  const working = index===active || index===(active+1)%20 || index===(active+7)%20;
                  return <div key={agent[0]} className={`swarm-agent-row ${working?"is-working":""}`}>
                    <span className="swarm-agent-icon" style={{"--agent-color":agent[3]} as React.CSSProperties}><Icon size={13}/></span>
                    <span className="swarm-agent-info"><b>{agent[1]}</b><small>{working?"WORKING / SYNCED":agent[2]}</small></span><i className={working?"agent-state active":"agent-state"}/>
                  </div>;
                })}
              </div>
              <div className="swarm-rail-foot"><span>ORCHESTRATION HEALTH</span><b>OPTIMAL <i/></b></div>
            </aside>
          </div>
          <div className="swarm-bottom-grid">
            <div className="swarm-progress-panel"><div className="swarm-panel-head"><span>REBUILD SEQUENCE</span><b>{progress}%</b></div><div className="swarm-progress-track"><i style={{width:`${progress}%`}}/></div><div className="swarm-progress-stages"><span className="done">01 / DISCOVER <Check size={10}/></span><span className="done">02 / DESIGN <Check size={10}/></span><span className="current">03 / BUILD <i/></span><span>04 / VERIFY</span></div></div>
            <div className="swarm-activity-panel"><div className="swarm-panel-head"><span><Terminal size={12}/> ACTIVITY STREAM</span><button type="button" onClick={()=>setPlaying(value=>!value)} aria-label={playing?"Pause visual replay":"Play visual replay"}>{playing?<CirclePause size={16}/>:<CirclePlay size={16}/>} {playing?"PAUSE":"PLAY"}</button></div><div className="swarm-log-line"><span>08:{String(12+tick%47).padStart(2,"0")}:4{tick%10}</span><b>{agents[active][1]}</b><em>{tasks[tick%tasks.length]}</em></div><div className="swarm-log-line secondary"><span>SYS / OK</span><b>ORCHESTRATOR</b><em>Shared state updated · all agents in sync</em></div></div>
          </div>
          <div className="swarm-console-foot"><span><i/> VISUAL REPLAY / INTERACTIVE SHOWCASE</span><span>NO EXTENSION REQUIRED <b>·</b> RUNS ON THIS WEBSITE</span></div>
        </div>
        <p className="swarm-disclosure">PUBLIC VISUAL DEMO — Cursor movement, agent statuses and activity logs are simulated for this showcase. They do not represent live AI model execution or a real code rebuild.</p>
      </div>
    </section>
  </>;
}
