"use client";

import { useEffect, useRef } from "react";

const CURSOR_COLOR = "#f4a7b9";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number; // 0 → 1
  color: string;
  size: number;
}

const PARTICLE_COLORS = [
  "#f4a7b9",
  "#f9c5d1",
  "#ffd700",
  "#ffb347",
  "#f7a8d8",
  "#ffe066",
];

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const visibleRef = useRef(true);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const canvas = canvasRef.current;
    if (!dot || !ring || !canvas) return;

    // Size canvas to viewport
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d")!;

    // ── Move ──────────────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!visibleRef.current) {
        visibleRef.current = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    // ── Click burst ───────────────────────────────────────────────────────
    const onDown = (e: MouseEvent) => {
      const count = 8 + Math.floor(Math.random() * 3); // 8–10
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
        const speed = 2.5 + Math.random() * 3;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
          size: 3 + Math.random() * 3,
        });
      }
    };

    // ── Hide/show on leave/enter ──────────────────────────────────────────
    const onLeave = () => {
      visibleRef.current = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => {
      visibleRef.current = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    // ── RAF loop ──────────────────────────────────────────────────────────
    const tick = () => {
      // Move dot instantly
      dot.style.transform = `translate(${posRef.current.x - 6}px, ${posRef.current.y - 6}px)`;

      // Ring lags behind
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.12;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.12;
      ring.style.transform = `translate(${ringPosRef.current.x - 12}px, ${ringPosRef.current.y - 12}px)`;

      // Draw particles
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current = particlesRef.current.filter((p) => {
        p.life += 0.028; // 0→1 over ~36 frames ≈ 600ms
        if (p.life >= 1) return false;

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.92;
        p.vy *= 0.92;

        const alpha = 1 - p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - p.life * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
        return true;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("resize", resize);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Particle canvas — sits above everything */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9998]"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Outer ring — lags */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          width: 24,
          height: 24,
          border: `1.5px solid ${CURSOR_COLOR}4D`, // 30% opacity
          backgroundColor: `${CURSOR_COLOR}1A`,   // 10% fill
          willChange: "transform",
          transition: "opacity 0.2s",
        }}
      />

      {/* Inner dot — instant */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          width: 12,
          height: 12,
          backgroundColor: CURSOR_COLOR,
          willChange: "transform",
          transition: "opacity 0.2s",
          boxShadow: `0 0 6px ${CURSOR_COLOR}80`,
        }}
      />
    </>
  );
}
