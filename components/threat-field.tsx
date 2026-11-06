"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

export default function ThreatField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let raf = 0;
    let lastFrame = 0;
    let time = 0;
    let pointer: Point = { x: -1000, y: -1000 };
    let target: Point = { x: -1000, y: -1000 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const pointerMove = (event: PointerEvent) => {
      target = { x: event.clientX, y: event.clientY };
    };
    const pointerLeave = () => {
      target = { x: -1000, y: -1000 };
    };

    const drawContour = (
      centerX: number,
      centerY: number,
      radiusX: number,
      radiusY: number,
      layer: number,
      phase: number,
      opacity: number
    ) => {
      const points: Point[] = [];
      const steps = 148;
      const scale = 0.17 + (layer / 21) * 0.86;

      for (let i = 0; i <= steps; i++) {
        const angle = (i / steps) * Math.PI * 2;
        const ripple =
          1 +
          Math.sin(angle * 4 + layer * 0.23 + phase) * 0.052 +
          Math.cos(angle * 7 - layer * 0.17 + phase * 0.7) * 0.027 +
          Math.sin(angle * 13 + phase * 0.42) * 0.014;
        let x = centerX + Math.cos(angle) * radiusX * scale * ripple;
        let y = centerY + Math.sin(angle) * radiusY * scale * ripple;

        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.exp(-(distance * distance) / 36000) * 0.075;
        x += dx * influence;
        y += dy * influence;
        points.push({ x, y });
      }

      ctx.beginPath();
      points.forEach((point, index) => {
        if (index === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
      });
      ctx.closePath();
      const accent = layer % 7 === 0;
      const secondary = layer % 5 === 0;
      ctx.strokeStyle = accent
        ? "rgba(255, 91, 68, " + opacity * 1.55 + ")"
        : secondary
          ? "rgba(184, 224, 194, " + opacity * 1.15 + ")"
          : "rgba(147, 173, 167, " + opacity + ")";
      ctx.lineWidth = accent ? 1.05 : 0.72;
      ctx.stroke();

      if (layer % 4 === 0) {
        const angle = phase * 0.34 + layer * 0.83;
        const pulseIndex = Math.floor((((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2) * steps);
        const pulse = points[pulseIndex];
        if (pulse) {
          ctx.beginPath();
          ctx.arc(pulse.x, pulse.y, accent ? 1.9 : 1.35, 0, Math.PI * 2);
          ctx.fillStyle = accent ? "rgba(255, 118, 91, .72)" : "rgba(205, 235, 208, .55)";
          ctx.fill();
        }
      }
    };

    const draw = (timestamp: number) => {
      if (timestamp - lastFrame < 32 && !reducedMotion) {
        raf = requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;
      time = reducedMotion ? 0 : timestamp * 0.00028;
      pointer.x += (target.x - pointer.x) * 0.075;
      pointer.y += (target.y - pointer.y) * 0.075;

      ctx.clearRect(0, 0, width, height);

      const mainRadius = Math.max(width * 0.36, height * 0.56);
      for (let layer = 0; layer < 22; layer++) {
        drawContour(
          width * 0.76,
          height * 0.43,
          mainRadius,
          mainRadius * 0.68,
          layer,
          time + layer * 0.025,
          0.085
        );
      }

      const secondaryRadius = Math.max(width * 0.17, height * 0.27);
      for (let layer = 0; layer < 13; layer++) {
        drawContour(
          width * 0.06,
          height * 0.84,
          secondaryRadius,
          secondaryRadius * 0.78,
          layer,
          -time * 0.7 + layer * 0.05,
          0.052
        );
      }

      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.setLineDash([2, 11]);
      ctx.lineWidth = 0.7;
      ctx.strokeStyle = "rgba(185, 209, 195, .35)";
      ctx.beginPath();
      ctx.moveTo(width * 0.04, height * 0.18);
      ctx.bezierCurveTo(width * 0.28, height * 0.1, width * 0.48, height * 0.33, width * 0.72, height * 0.15);
      ctx.bezierCurveTo(width * 0.84, height * 0.07, width * 0.91, height * 0.13, width * 1.04, height * 0.06);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width * -0.04, height * 0.66);
      ctx.bezierCurveTo(width * 0.22, height * 0.55, width * 0.35, height * 0.82, width * 0.58, height * 0.68);
      ctx.bezierCurveTo(width * 0.78, height * 0.56, width * 0.87, height * 0.76, width * 1.04, height * 0.61);
      ctx.stroke();
      ctx.restore();

      if (!reducedMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", pointerMove, { passive: true });
    window.addEventListener("pointerleave", pointerLeave);
    draw(0);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerleave", pointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="threat-field" aria-hidden="true" />;
}
