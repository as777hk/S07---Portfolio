"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; radius: number; phase: number };
type Packet = { x: number; y: number; vx: number; vy: number; life: number; size: number; angle: number };

export default function ThreatField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let width = 0;
    let height = 0;
    let ratio = 1;
    let frame = 0;
    let lastFrame = 0;
    let elapsed = 0;
    let visible = !document.hidden;
    let pointer = { x: -2000, y: -2000, tx: -2000, ty: -2000 };
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let seed = 713;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const makeNodes = () => {
      const isSmall = width < 700;
      const count = Math.max(isSmall ? 48 : 74, Math.min(isSmall ? 78 : 142, Math.round((width * height) / (isSmall ? 11800 : 10400))));
      nodes = Array.from({ length: count }, (_, index) => {
        const x = random() * width;
        const y = random() * height;
        const angle = random() * Math.PI * 2;
        const speed = 0.055 + random() * 0.13;
        return {
          x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
          radius: 0.55 + random() * 1.15, phase: random() * Math.PI * 2 + index * 0.03
        };
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      ratio = Math.min(window.devicePixelRatio || 1, 1.35);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      makeNodes();
    };

    const onMove = (event: PointerEvent) => {
      pointer.tx = event.clientX;
      pointer.ty = event.clientY;
      if (finePointer && packets.length < 75 && Math.random() > 0.62) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.22 + Math.random() * 0.9;
        packets.push({
          x: pointer.tx, y: pointer.ty,
          vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
          life: 1, size: 1.2 + Math.random() * 2.1, angle: angle
        });
      }
    };
    const onLeave = () => { pointer.tx = -2000; pointer.ty = -2000; };
    const onVisibility = () => { visible = !document.hidden; if (visible && !reducedMotion) frame = requestAnimationFrame(draw); };

    const drawPacket = (packet: Packet) => {
      const alpha = Math.max(0, packet.life) * 0.74;
      context.save();
      context.translate(packet.x, packet.y);
      context.rotate(packet.angle + elapsed * 0.15);
      context.fillStyle = "rgba(255, 87, 108, " + alpha + ")";
      context.beginPath();
      context.moveTo(0, -packet.size * 1.9);
      context.lineTo(packet.size, packet.size);
      context.lineTo(-packet.size * 0.85, packet.size * 0.55);
      context.closePath();
      context.fill();
      context.restore();
    };

    const draw = (timestamp: number) => {
      if (!visible) return;
      if (timestamp - lastFrame < 32 && !reducedMotion) {
        frame = requestAnimationFrame(draw);
        return;
      }
      const delta = Math.min(2, (timestamp - (lastFrame || timestamp)) / 16.67);
      lastFrame = timestamp;
      if (!reducedMotion) elapsed += Math.max(0.4, delta);
      pointer.x += (pointer.tx - pointer.x) * 0.075;
      pointer.y += (pointer.ty - pointer.y) * 0.075;

      context.clearRect(0, 0, width, height);
      const maxDistance = width < 700 ? 112 : 154;
      const influenceRadius = width < 700 ? 120 : 178;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!reducedMotion) {
          const dx = node.x - pointer.x;
          const dy = node.y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < influenceRadius && distance > 0.1) {
            const force = (1 - distance / influenceRadius) * 0.018;
            node.vx += (dx / distance) * force;
            node.vy += (dy / distance) * force;
          }
          node.vx += Math.sin(elapsed * 0.008 + node.phase) * 0.002;
          node.vy += Math.cos(elapsed * 0.007 + node.phase) * 0.002;
          node.vx *= 0.992;
          node.vy *= 0.992;
          const speed = Math.hypot(node.vx, node.vy);
          if (speed > 0.42) { node.vx *= 0.42 / speed; node.vy *= 0.42 / speed; }
          node.x += node.vx * delta;
          node.y += node.vy * delta;
          if (node.x < -8) node.x = width + 8;
          if (node.x > width + 8) node.x = -8;
          if (node.y < -8) node.y = height + 8;
          if (node.y > height + 8) node.y = -8;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.hypot(dx, dy);
          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.105;
            const warm = (i * 7 + j * 3) % 11 === 0;
            context.strokeStyle = warm
              ? "rgba(255, 83, 105, " + (alpha * 1.35) + ")"
              : "rgba(157, 186, 201, " + alpha + ")";
            context.lineWidth = warm ? 0.85 : 0.58;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        const pulse = reducedMotion ? 0.72 : 0.56 + Math.sin(elapsed * 0.022 + node.phase) * 0.2;
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fillStyle = node.phase % 3 > 1.8
          ? "rgba(255, 111, 126, " + (0.32 + pulse * 0.38) + ")"
          : "rgba(179, 211, 220, " + (0.2 + pulse * 0.3) + ")";
        context.fill();
      }

      if (finePointer) {
        const near = nodes.filter((node) => Math.hypot(node.x - pointer.x, node.y - pointer.y) < influenceRadius * 1.08);
        if (near.length) {
          context.beginPath();
          context.arc(pointer.x, pointer.y, 42 + Math.sin(elapsed * 0.03) * 4, 0, Math.PI * 2);
          context.strokeStyle = "rgba(255, 91, 110, .22)";
          context.lineWidth = 0.8;
          context.setLineDash([2, 7]);
          context.stroke();
          context.setLineDash([]);
          near.slice(0, 7).forEach((node) => {
            context.beginPath();
            context.moveTo(pointer.x, pointer.y);
            context.lineTo(node.x, node.y);
            context.strokeStyle = "rgba(255, 91, 110, .15)";
            context.lineWidth = 0.7;
            context.stroke();
          });
        }
      }

      packets = packets.filter((packet) => packet.life > 0.03);
      packets.forEach((packet) => {
        if (!reducedMotion) {
          packet.x += packet.vx * delta;
          packet.y += packet.vy * delta;
          packet.life -= 0.013 * delta;
        }
        drawPacket(packet);
      });

      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    draw(0);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="threat-field" aria-hidden="true" />;
}
