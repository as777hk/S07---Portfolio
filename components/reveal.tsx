"use client";
import {motion,type HTMLMotionProps} from "motion/react";
import type {ReactNode} from "react";
type Props={children:ReactNode;className?:string;delay?:number}&Omit<HTMLMotionProps<"div">,"children">;
export default function Reveal({children,className="",delay=0,...props}:Props){return <motion.div className={className} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}} {...props}>{children}</motion.div>}
