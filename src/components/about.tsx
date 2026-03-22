"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative pt-24 pb-24 px-6 rounded-t-[2.5rem] bg-charcoal/20 backdrop-blur-md">
      <div className="mx-auto max-w-3xl text-center">
        <BlurFade delay={0.1} inView>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-mauve-light font-sans">
            {t("eyebrow")}
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h1 className="font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            {t("title")}
            <span className="block italic text-mauve-light">{t("titleItalic")}</span>
            <span className="sr-only"> — {t("titleSr")}</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <div className="mx-auto mt-8 h-px w-16 bg-rose/50" />
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <p className="mt-8 text-lg font-light leading-relaxed text-white/70 font-sans">
            {t("body")}
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
