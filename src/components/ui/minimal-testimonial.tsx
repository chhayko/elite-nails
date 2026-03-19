"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Absolutely love my nails every single time! The Russian manicure is so precise and clean. Best nail salon in the area!",
    name: "Marisha",
    role: "Regular client",
    image: "/testimonials/marisha.png",
  },
  {
    quote:
      "My lash lamination looks incredible! So natural and my eyes look so much more open. Highly recommend!",
    name: "Marta",
    role: "Lash lamination client",
    image: "/testimonials/marta.png",
  },
  {
    quote:
      "The BIAB treatment is a game changer. My nails have never been this strong and the shape is perfect every time.",
    name: "Naomi",
    role: "BIAB client",
    image: "/testimonials/naomi.png",
  },
  {
    quote:
      "Such a cozy atmosphere and amazing attention to detail. I always leave feeling pampered and beautiful!",
    name: "Rosa",
    role: "Regular client",
    image: "/testimonials/rosa.png",
  },
];

export function TestimonialsMinimal() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-xl mx-auto px-6 py-16">
      {/* Quote */}
      <div className="relative min-h-[100px] mb-12">
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={`
              absolute inset-0 text-xl md:text-2xl font-light leading-relaxed text-white font-serif
              transition-all duration-500 ease-out
              ${
                active === i
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
        {/* Avatars */}
        <div className="flex -space-x-2">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-charcoal/30
                transition-all duration-300 ease-out
                ${
                  active === i
                    ? "z-10 scale-110"
                    : "grayscale hover:grayscale-0 hover:scale-105"
                }
              `}
            >
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-white/20" />

        {/* Active Author Info */}
        <div className="relative flex-1 min-h-[44px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`
                absolute inset-0 flex flex-col justify-center
                transition-all duration-400 ease-out
                ${
                  active === i
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2 pointer-events-none"
                }
              `}
            >
              <span className="text-sm font-medium text-white font-sans">
                {t.name}
              </span>
              <span className="text-xs text-white/50 font-sans">
                {t.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
