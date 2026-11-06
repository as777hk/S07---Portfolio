"use client";
import { useEffect,useRef } from "react";
type Pt={x:number;y:number};
type Trace={points:Pt[];offset:number;speed:number};
const rand=(a:number,b:number)=>a+Math.random()*(b-a);
function createTrace(w:number,h:number):Trace {
  const step=76;let x=Math.round(rand(0,w)/step)*step,y=Math.round(rand(0,h)/step)*step;const points=[{x,y}];let horizontal=Math.random()>.5;
  for(let i=0;i<7;i++){const d=(1+Math.floor(Math.random()*4))*step*(Math.random()>.5?1:-1);if(horizontal)x=Math.max(0,Math.min(w,x+d));else y=Math.max(0,Math.min(h,y+d));points.push({x,y});horizontal=!horizontal;}
  return {points,offset:Math.random(),speed:rand(.018,.052)};
}
export default function CyberAtmosphere(){
  const ref=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const canvas=ref.current,ctx=canvas?.getContext("2d");if(!canvas||!ctx)return;
    const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,fine=matchMedia("(pointer:fine)").matches;
    let w=innerWidth,h=innerHeight,dpr=1,raf=0,running=true;let traces:Trace[]=[];
    const pointer={x:w/2,y:h/2,active:false};
    const resize=()=>{w=innerWidth;h=innerHeight;dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+"px";canvas.style.height=h+"px";ctx.setTransform(dpr,0,0,dpr,0,0);traces=Array.from({length:Math.max(28,Math.min(64,Math.round(w/20)))},()=>createTrace(w,h));};
    const move=(e:PointerEvent)=>{pointer.x=e.clientX;pointer.y=e.clientY;pointer.active=true;};
    const leave=()=>pointer.active=false;
    const draw=(time:number)=>{
      if(!running)return;ctx.clearRect(0,0,w,h);
      const base=ctx.createRadialGradient(w*.52,h*.35,0,w*.52,h*.35,Math.max(w,h)*.8);base.addColorStop(0,"rgba(5,52,78,.22)");base.addColorStop(1,"rgba(0,0,0,0)");ctx.fillStyle=base;ctx.fillRect(0,0,w,h);
      if(pointer.active&&fine){const g=ctx.createRadialGradient(pointer.x,pointer.y,0,pointer.x,pointer.y,220);g.addColorStop(0,"rgba(0,197,255,.11)");g.addColorStop(1,"rgba(0,0,0,0)");ctx.fillStyle=g;ctx.fillRect(pointer.x-220,pointer.y-220,440,440);}
      traces.forEach(t=>{
        const p=t.points;ctx.beginPath();ctx.moveTo(p[0].x,p[0].y);p.slice(1).forEach(q=>ctx.lineTo(q.x,q.y));ctx.strokeStyle="rgba(23,164,218,.18)";ctx.lineWidth=1;ctx.shadowBlur=7;ctx.shadowColor="rgba(0,185,255,.18)";ctx.stroke();ctx.shadowBlur=0;
        const lens=[];let total=0;for(let i=1;i<p.length;i++){const l=Math.hypot(p[i].x-p[i-1].x,p[i].y-p[i-1].y);lens.push(l);total+=l;}
        let pos=((time*t.speed/1000+t.offset)%1)*total,at=p[0];for(let i=0;i<lens.length;i++){if(pos<=lens[i]){const a=p[i],b=p[i+1],v=pos/lens[i];at={x:a.x+(b.x-a.x)*v,y:a.y+(b.y-a.y)*v};break;}pos-=lens[i];}
        ctx.beginPath();ctx.arc(at.x,at.y,2,0,Math.PI*2);ctx.fillStyle="#7beeff";ctx.shadowBlur=15;ctx.shadowColor="#00c9ff";ctx.fill();ctx.shadowBlur=0;
        if(pointer.active&&fine){const hit=p.find(q=>Math.hypot(q.x-pointer.x,q.y-pointer.y)<115);if(hit){ctx.beginPath();ctx.arc(hit.x,hit.y,3,0,Math.PI*2);ctx.fillStyle="#f13f5d";ctx.shadowBlur=15;ctx.shadowColor="#f13f5d";ctx.fill();ctx.shadowBlur=0;}}
      });
      for(let i=0;i<36;i++){const x=(i*179+time*(i%4+1)*.008)%w,y=(i*97+Math.sin(time*.0004+i)*18)%h;ctx.fillStyle=i%9===0?"rgba(241,63,93,.42)":"rgba(72,205,244,.3)";ctx.fillRect(x,y,i%7===0?2:1, i%7===0?2:1);}
      if(!reduced)raf=requestAnimationFrame(draw);
    };
    resize();const observer=new ResizeObserver(resize);observer.observe(document.documentElement);
    if(fine&&!reduced){addEventListener("pointermove",move,{passive:true});addEventListener("pointerleave",leave);}
    draw(0);if(!reduced)raf=requestAnimationFrame(draw);
    return()=>{running=false;cancelAnimationFrame(raf);observer.disconnect();removeEventListener("pointermove",move);removeEventListener("pointerleave",leave);};
  },[]);
  return <canvas ref={ref} className="cyber-atmosphere" aria-hidden="true"/>;
}
