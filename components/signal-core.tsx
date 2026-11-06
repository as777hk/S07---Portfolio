"use client";
import { useEffect, useRef } from "react";

export default function SignalCore() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let stopped = false, frame = 0;
    let renderer: import("three").WebGLRenderer | undefined;
    let dispose = () => {};
    const init = async () => {
      const THREE = await import("three");
      if (stopped || !ref.current) return;
      const canvas = ref.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
      camera.position.z = 5;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
      } catch {
        canvas.dataset.fallback = "true";
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
      const group = new THREE.Group();
      scene.add(group);

      const count = 460;
      const positions = new Float32Array(count * 3);
      const points: import("three").Vector3[] = [];
      const golden = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const angle = golden * i;
        const point = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius).multiplyScalar(1.32);
        points.push(point);
        positions.set([point.x, point.y, point.z], i * 3);
      }

      const pointGeometry = new THREE.BufferGeometry();
      pointGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const pointMaterial = new THREE.PointsMaterial({ color: 0x79eaf5, size: 0.022, transparent: true, opacity: 0.88, sizeAttenuation: true });
      group.add(new THREE.Points(pointGeometry, pointMaterial));

      const edgePositions: number[] = [];
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          if (points[i].distanceTo(points[j]) < 0.38 && (i * 11 + j * 5) % 5 === 0) {
            edgePositions.push(points[i].x, points[i].y, points[i].z, points[j].x, points[j].y, points[j].z);
          }
        }
      }
      const edgeGeometry = new THREE.BufferGeometry();
      edgeGeometry.setAttribute("position", new THREE.Float32BufferAttribute(edgePositions, 3));
      const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x438b9a, transparent: true, opacity: 0.22 });
      group.add(new THREE.LineSegments(edgeGeometry, edgeMaterial));

      const shell = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.78, 1),
        new THREE.MeshBasicMaterial({ color: 0xc0f5fa, wireframe: true, transparent: true, opacity: 0.16 })
      );
      group.add(shell);
      const inner = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.24, 2),
        new THREE.MeshBasicMaterial({ color: 0x79eaf5, wireframe: true, transparent: true, opacity: 0.48 })
      );
      group.add(inner);
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.67, 0.003, 5, 180),
        new THREE.MeshBasicMaterial({ color: 0x79eaf5, transparent: true, opacity: 0.33 })
      );
      ring.rotation.x = 1.08;
      group.add(ring);

      const nodes: import("three").Mesh[] = [];
      for (let i = 0; i < 7; i++) {
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(0.025, 10, 10),
          new THREE.MeshBasicMaterial({ color: i % 2 ? 0xb6f178 : 0x79eaf5 })
        );
        const phi = i * 2.399;
        const yy = (i / 6) * 1.5 - 0.75;
        const rr = Math.sqrt(1 - yy * yy);
        node.position.set(Math.cos(phi) * rr * 1.42, yy * 1.42, Math.sin(phi) * rr * 1.42);
        group.add(node);
        nodes.push(node);
      }

      let targetX = 0, targetY = 0, pointerX = 0, pointerY = 0;
      const onPointer = (event: PointerEvent) => {
        const bounds = canvas.getBoundingClientRect();
        targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.45;
        targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.35;
      };
      canvas.addEventListener("pointermove", onPointer, { passive: true });
      const resize = () => {
        const bounds = canvas.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;
        renderer?.setSize(bounds.width, bounds.height, false);
        camera.aspect = bounds.width / bounds.height;
        camera.updateProjectionMatrix();
      };
      const observer = new ResizeObserver(resize);
      observer.observe(canvas);
      resize();

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const clock = new THREE.Clock();
      const draw = () => {
        frame = requestAnimationFrame(draw);
        pointerX += (targetX - pointerX) * 0.035;
        pointerY += (targetY - pointerY) * 0.035;
        const time = clock.getElapsedTime();
        if (!reducedMotion) {
          group.rotation.y = time * 0.065 + pointerX;
          group.rotation.x = Math.sin(time * 0.14) * 0.07 + pointerY;
          shell.rotation.y = -time * 0.1;
          inner.rotation.x = time * 0.18;
          inner.rotation.y = -time * 0.14;
          ring.rotation.z = time * 0.035;
          nodes.forEach((node, index) => { node.scale.setScalar(0.8 + Math.sin(time * 1.3 + index) * 0.2); });
        }
        renderer?.render(scene, camera);
      };
      draw();
      dispose = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        canvas.removeEventListener("pointermove", onPointer);
        pointGeometry.dispose(); pointMaterial.dispose();
        edgeGeometry.dispose(); edgeMaterial.dispose();
        renderer?.dispose();
      };
    };
    init();
    return () => { stopped = true; dispose(); cancelAnimationFrame(frame); renderer?.dispose(); };
  }, []);

  return <div className="core-wrap" data-cursor="Move to explore">
    <div className="core-orbit one" />
    <div className="core-orbit two" />
    <canvas ref={ref} className="core-canvas" aria-label="Interactive 3D connected systems visualization" />
    <span className="core-tag top"><i /> SYSTEM MAP / 001</span>
    <span className="core-tag bottom">INTERACTIVE 3D STUDY</span>
    <i className="crosshair c1" /><i className="crosshair c2" />
  </div>;
}