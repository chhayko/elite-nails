 use client";

import { BlurFade } from "@/components/ui/blur-fade";

export function About() {
  return (
    <section id="about" className="relative pt-24 pb-24 px-6 rounded-t-[2.5rem] bg-charcoal/20 backdrop-blur-md">
      <div className="mx-auto max-w-3xl text-center">
        <BlurFade delay={0.1} inView>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-mauve-light font-sans">
            Welcome
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h2 className="font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Where Precision
          </h2>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <h2 className="font-serif text-4xl font-light italic text-mauve-light md:text-5xl lg:text-6xl">
            Meets Beauty
          </h2>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <div className="mx-auto mt-8 h-px w-16 bg-rose/50" />
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <p className="mt-8 text-lg font-light leading-relaxed text-white/70 font-sans">
            At Elite Nails, we believe in the art of detail. Our cozy studio in
            Sint-Martens-Lierde specializes in Russian manicure technique &mdash;
            delivering flawless, clean results with the highest standards of
            safety and hygiene. Every visit is crafted to make you feel pampered
            and beautiful.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
