"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import StickyScrollGallery from "@/components/ui/sticky-scroll";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-charcoal/20 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-mauve-light font-sans">
              Our Work
            </p>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="font-serif text-4xl font-light text-white md:text-5xl">
              Gallery
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="mx-auto mt-6 h-px w-16 bg-mauve/40" />
          </BlurFade>
        </div>
      </div>

      <StickyScrollGallery />

      <BlurFade delay={0.3} inView>
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/elite_nails_lierde/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-mauve-light transition-opacity hover:opacity-70 font-sans"
          >
            See more on Instagram
            <span className="text-lg">→</span>
          </a>
        </div>
      </BlurFade>
    </section>
  );
}
