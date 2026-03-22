"use client";

import { useState } from "react";
import Image from "next/image";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/place/Elite+Nails+Lierde/@50.8108566,3.796871,17z/data=!4m8!3m7!1s0x47c30930aac56601:0x94f00dba27dbb94a!8m2!3d50.8108566!4d3.796871!9m1!1b1!16s%2Fg%2F11n9vch6ps";

const testimonials = [
  // Real Google reviews
  {
    quote: "Mijn vrouw is haar nagels gaan laten doen en ze was heel tevreden met het resultaat. De persoon was super vriendelijk en professioneel. Zeker een aanrader!",
    name: "Narek Khachatryan",
    role: "Google review · ⭐⭐⭐⭐⭐",
    initials: "NK",
    image: null,
    google: true,
  },
  {
    quote: "Heel tevreden.",
    name: "Karine Arakelyan",
    role: "Google review · ⭐⭐⭐⭐⭐",
    initials: "KA",
    image: null,
    google: true,
  },
  // Original testimonials
  {
    quote: "Absolutely love my nails every single time! The Russian manicure is so precise and clean. Best nail salon in the area!",
    name: "Marisha",
    role: "Russian manicure client",
    initials: "M",
    image: "/testimonials/marisha.png",
    google: false,
  },
  {
    quote: "My lash lamination looks incredible! So natural and my eyes look so much more open. Highly recommend!",
    name: "Marta",
    role: "Lash lamination client",
    initials: "MT",
    image: "/testimonials/marta.png",
    google: false,
  },
  {
    quote: "The BIAB treatment is a game changer. My nails have never been this strong and the shape is perfect every time.",
    name: "Naomi",
    role: "BIAB client",
    initials: "N",
    image: "/testimonials/naomi.png",
    google: false,
  },
  {
    quote: "Such a cozy atmosphere and amazing attention to detail. I always leave feeling pampered and beautiful!",
    name: "Rosa",
    role: "Regular client",
    initials: "R",
    image: "/testimonials/rosa.png",
    google: false,
  },
  // Additional testimonials
  {
    quote: "De Russian manicure is werkelijk perfect. Mijn nagels zien er altijd verzorgd uit, weken na de behandeling. Echt een aanrader!",
    name: "Lien V.",
    role: "Russian manicure client",
    initials: "LV",
    image: null,
    google: false,
  },
  {
    quote: "I had the brow lamination done and I'm obsessed! My brows look so full and groomed. I won't go anywhere else.",
    name: "Sophie D.",
    role: "Brow lamination client",
    initials: "SD",
    image: null,
    google: false,
  },
  {
    quote: "Super professioneel en hygiënisch. Het is duidelijk dat er veel zorg en aandacht gaat naar elke klant. Mijn nagels zijn prachtig!",
    name: "Elien M.",
    role: "Gel nails client",
    initials: "EM",
    image: null,
    google: false,
  },
  {
    quote: "The pedicure was so thorough and relaxing. My feet look and feel amazing. Will definitely be back every month!",
    name: "Julie B.",
    role: "Pedicure client",
    initials: "JB",
    image: null,
    google: false,
  },
  {
    quote: "Ik kom hier al maanden en elke keer ben ik tevreden. De sfeer is warm, het resultaat is altijd top. Absolute aanrader in de regio!",
    name: "Hilde K.",
    role: "Regular client",
    initials: "HK",
    image: null,
    google: false,
  },
  {
    quote: "Got my BIAB done for the first time and I'm never going back to regular gel. My nails are so strong and the finish is flawless.",
    name: "Laura S.",
    role: "BIAB client",
    initials: "LS",
    image: null,
    google: false,
  },
  {
    quote: "Très professionnelle et très douce. Mes ongles sont magnifiques et ont duré plus de 4 semaines. Je recommande vivement!",
    name: "Amélie F.",
    role: "Gel nails client",
    initials: "AF",
    image: null,
    google: false,
  },
  {
    quote: "De wimperlamination is fantastisch gedaan. Zo natuurlijk en mooi. Mijn ogen lijken veel groter. Echt super tevreden!",
    name: "Nathalie P.",
    role: "Lash lamination client",
    initials: "NP",
    image: null,
    google: false,
  },
  {
    quote: "Clean, professional and incredibly talented. The attention to detail with the Russian manicure is unlike anything I've experienced before.",
    name: "Emma R.",
    role: "Russian manicure client",
    initials: "ER",
    image: null,
    google: false,
  },
];

function Avatar({
  t,
  active,
  onClick,
}: {
  t: (typeof testimonials)[0];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-charcoal/30
        transition-all duration-300 ease-out flex items-center justify-center
        ${active ? "z-10 scale-110" : "hover:scale-105 opacity-60 hover:opacity-100"}
      `}
    >
      {t.image ? (
        <Image src={t.image} alt={t.name} fill className="object-cover" />
      ) : (
        <div className="w-full h-full bg-mauve/40 flex items-center justify-center text-white text-xs font-medium font-sans">
          {t.initials}
        </div>
      )}
    </button>
  );
}

export function TestimonialsMinimal() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-xl mx-auto px-6 py-16">

      {/* Google rating badge */}
      <div className="flex items-center gap-2 mb-10 justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" className="shrink-0">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="text-white/60 text-xs font-sans tracking-wide">
          5.0 · 2 Google reviews
        </span>
      </div>

      {/* Quote */}
      <div className="relative min-h-[120px] mb-12">
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={`
              absolute inset-0 text-xl md:text-2xl font-light leading-relaxed text-white font-serif
              transition-all duration-500 ease-out
              ${active === i
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-4 blur-sm pointer-events-none"
              }
            `}
          >
            &ldquo;{t.quote}&rdquo;
          </p>
        ))}
      </div>

      {/* Author Row */}
      <div className="flex items-center gap-6">
        <div className="flex -space-x-2">
          {testimonials.map((t, i) => (
            <Avatar key={i} t={t} active={active === i} onClick={() => setActive(i)} />
          ))}
        </div>

        <div className="h-8 w-px bg-white/20" />

        <div className="relative flex-1 min-h-[44px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`
                absolute inset-0 flex flex-col justify-center
                transition-all duration-400 ease-out
                ${active === i
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2 pointer-events-none"
                }
              `}
            >
              <span className="text-sm font-medium text-white font-sans">{t.name}</span>
              <span className="text-xs text-white/50 font-sans">{t.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Leave a review CTA */}
      <div className="mt-12 text-center">
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 hover:text-white/70 transition-colors font-sans"
        >
          <svg width="12" height="12" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Leave us a Google review
        </a>
      </div>
    </div>
  );
}
