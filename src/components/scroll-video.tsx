"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 122;

function getFrameSrc(index: number) {
  const n = String(index).padStart(4, "0");
  return `/frames/frame-${n}.jpg`;
}

export function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Preload all frames
    const frames: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        // Draw first frame as soon as it's ready
        if (i === 1) drawFrame(0);
      };
      frames.push(img);
    }
    framesRef.current = frames;

    const drawFrame = (index: number) => {
      const img = frames[index];
      if (!img?.complete || !img.naturalWidth) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Cover behavior
      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const x = (canvas.width - w) / 2;
      const y = (canvas.height - h) / 2;
      ctx.drawImage(img, x, y, w, h);
    };

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const vh = window.innerHeight;
      const fraction = Math.min(scrollTop / (vh * 2.5), 1);
      currentFrameRef.current = Math.round(fraction * (FRAME_COUNT - 1));

      // Opacity via DOM — no React re-render
      const opacity = Math.max(1 - (scrollTop / vh) * 1.2, 0);
      heroTextRef.current?.style.setProperty("opacity", String(opacity));
      scrollIndicatorRef.current?.style.setProperty("opacity", String(opacity));
    };

    const tick = () => {
      drawFrame(currentFrameRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => drawFrame(currentFrameRef.current));

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Fixed canvas background */}
      <div className="fixed inset-0 z-0 bg-black">
        <canvas ref={canvasRef} className="h-full w-full" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero text overlay */}
      <div
        ref={heroTextRef}
        className="fixed inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none"
      >
        <p className="mb-4 text-sm font-light uppercase tracking-[0.4em] text-white/80 font-sans">
          Sint-Martens-Lierde, Belgium
        </p>
        <h1 className="font-serif text-6xl font-light tracking-wide text-white md:text-8xl lg:text-9xl">
          Elite Nails
        </h1>
        <div className="mt-6 h-px w-24 bg-white/40" />
        <p className="mt-6 text-base font-light tracking-[0.2em] text-white/70 font-sans uppercase">
          Clean & Safe — Russian Manicure
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-sans">
          Scroll
        </p>
        <div className="h-10 w-px bg-white/40 animate-pulse" />
      </div>
    </>
  );
}
