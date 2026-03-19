"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ServicesAccordion } from "@/components/ui/services-accordion";

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 bg-charcoal/20 backdrop-blur-md">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <BlurFade delay={0.1} inView>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-mauve-light font-sans">
              What We Offer
            </p>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="font-serif text-4xl font-light text-white md:text-5xl">
              Our Services
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="mx-auto mt-6 h-px w-16 bg-rose/40" />
          </BlurFade>
        </div>

        <BlurFade delay={0.4} inView>
          <ServicesAccordion />
        </BlurFade>
      </div>
    </section>
  );
}
