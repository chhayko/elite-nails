"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const vh = window.innerHeight;
      // Video scrubs over 2.5 viewport heights — more time for the video to play
      const scrollFraction = Math.min(scrollTop / (vh * 2.5), 1);

      if (video.duration) {
        video.currentTime = scrollFraction * video.duration;
      }

      // Text fades out over the first viewport height
      const textFade = Math.max(1 - (scrollTop / vh) * 1.2, 0);
      setOpacity(textFade);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Fixed video background */}
      <div className="fixed inset-0 z-0">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/15 to-charcoal/60" />
      </div>

      {/* Hero text overlay */}
      <div
        className="fixed inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none"
        style={{ opacity }}
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
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
        style={{ opacity }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-sans">
          Scroll
        </p>
        <div className="h-10 w-px bg-white/30 animate-pulse" />
      </div>
    </>
  );
}
