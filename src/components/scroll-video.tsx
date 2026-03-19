"use client";

import { useEffect, useRef } from "react";

export function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const targetTimeRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const vh = window.innerHeight;
      const scrollFraction = Math.min(scrollTop / (vh * 2.5), 1);

      if (video.duration) {
        targetTimeRef.current = scrollFraction * video.duration;
      }

      // Update opacity via DOM directly — no React re-render
      const textOpacity = Math.max(1 - (scrollTop / vh) * 1.2, 0);
      const opacityStr = String(textOpacity);
      heroTextRef.current?.style.setProperty("opacity", opacityStr);
      scrollIndicatorRef.current?.style.setProperty("opacity", opacityStr);
    };

    // RAF loop: smoothly lerp currentTime toward target
    const tick = () => {
      if (video.duration) {
        const current = video.currentTime;
        const target = targetTimeRef.current;
        const diff = target - current;

        // Only seek if meaningfully different (avoids unnecessary seeks)
        if (Math.abs(diff) > 0.01) {
          video.currentTime = current + diff * 0.15;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Fixed video background */}
      <div className="fixed inset-0 z-0">
        <video
          ref={videoRef}
          poster="/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/15 to-charcoal/60" />
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
        <div className="h-10 w-px bg-white/30 animate-pulse" />
      </div>
    </>
  );
}
