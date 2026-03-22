"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function BookingButtonAnimated() {
  const t = useTranslations("booking");

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as const },
        opacity: { duration: 0.5 },
      },
    },
  } as const;

  return (
    <a
      href="https://www.instagram.com/elite_nails_lierde/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block group cursor-pointer"
    >
      <div className="relative w-full max-w-4xl mx-auto py-24">
        <div className="absolute inset-0">
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-full"
          >
            <title>{t("cta")}</title>
            <motion.path
              d="M 950 90 C 1250 300, 1050 480, 600 520 C 250 520, 150 480, 150 300 C 150 120, 350 80, 600 80 C 850 80, 950 180, 950 180"
              fill="none"
              strokeWidth="12"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={draw}
              className="text-mauve-light/60 group-hover:text-mauve-light transition-colors duration-300"
            />
          </motion.svg>
        </div>
        <div className="relative text-center z-10 flex flex-col items-center justify-center">
          <motion.h3
            className="font-serif text-2xl md:text-4xl text-white group-hover:text-mauve-light transition-colors duration-300 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t("cta")}
          </motion.h3>
          <motion.p
            className="text-sm text-white/50 font-sans font-light mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {t("ctaSub")}
          </motion.p>
        </div>
      </div>
    </a>
  );
}

export function Booking() {
  const t = useTranslations("booking");

  return (
    <section
      id="booking"
      className="relative overflow-hidden py-24 px-6 bg-charcoal/20 backdrop-blur-md"
    >
      <div className="relative mx-auto max-w-2xl text-center">
        <BlurFade delay={0.1} inView>
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-mauve-light font-sans">
            {t("eyebrow")}
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h2 className="mt-6 font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <h2 className="font-serif text-4xl font-light italic text-mauve-light md:text-5xl lg:text-6xl">
            {t("titleItalic")}
          </h2>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <p className="mt-8 text-base font-light leading-relaxed text-white/60 font-sans">
            {t("body")}
          </p>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <BookingButtonAnimated />
        </BlurFade>
      </div>
    </section>
  );
}
