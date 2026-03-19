"use client";

import { useEffect, useRef } from "react";

export function ScrollVideo() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const vh = window.innerHeight;
      const textOpacity = Math.max(1 - (scrollTop / vh) * 1.2, 0);
      const opacityStr = String(textOpacity);
      heroTextRef.current?.style.setProperty("opacity", opacityStr);
      scrollIndicatorRef.current?.style.setProperty("opacity", opacityStr);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Fixed video background — autoplays and loops, always smooth */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
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
