"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

/*
 * Single realistic fingertip — viewBox "0 0 120 270"
 *
 * Layout:
 *   y  0–12   → top padding / nail tip area
 *   y 12–124  → nail plate (extends from tip down to cuticle)
 *   y 124–260 → finger body (cuticle to rounded pad)
 *
 * Finger: 48 px wide (x 36–84), centred at x = 60.
 * Cuticle / nail base sits at y ≈ 124.
 *
 * OVAL shape is derived from the reference illustration:
 *   straight parallel sides for most of the nail length,
 *   rounding smoothly into an oval free-edge at the top.
 */

type ShapeKey = "oval" | "almond" | "ballerina" | "square" | "stiletto";
const SHAPE_KEYS: ShapeKey[] = ["oval", "almond", "ballerina", "square", "stiletto"];
const SHAPE_LABELS: Record<ShapeKey, string> = {
  oval:      "Oval",
  almond:    "Almond",
  ballerina: "Ballerina",
  square:    "Square",
  stiletto:  "Stiletto",
};

interface ShapePaths { finger: string; nail: string; highlight: string }

/* ── Shared finger body ────────────────────────────────────────────────────
 * 48 px wide, straight sides, rounded pad at the bottom.
 * Same for all 5 shapes — only the nail plate changes. */
const FINGER =
  "M 36 128 Q 36 116 60 114 Q 84 116 84 128 " +
  "L 84 216 Q 84 260 60 264 Q 36 260 36 216 Z";

const SHAPES: Record<ShapeKey, ShapePaths> = {

  /* ── OVAL ────────────────────────────────────────────────────────────────
   * Adapted from the reference SVG (oval nail-svgfind-com.svg).
   * Straight parallel sides, smooth oval free-edge. */
  oval: {
    finger: FINGER,
    nail:
      "M 38 123 L 38 52 " +                     // left side — straight
      "C 38 28 48 14 60 12 " +                  // round to oval tip
      "C 72 14 82 28 82 52 " +                  // right curve to tip
      "L 82 123 " +                             // right side — straight
      "Q 60 112 38 123 Z",                      // cuticle arch
    highlight:
      "M 42 118 L 42 56 C 42 36 46 22 52 16 " +
      "C 46 26 40 42 40 58 L 40 118 Z",
  },

  /* ── ALMOND ─────────────────────────────────────────────────────────────
   * Sides taper gradually to a soft rounded point. */
  almond: {
    finger: FINGER,
    nail:
      "M 39 123 " +
      "C 39 95 42 62 52 38 " +
      "C 55 24 65 24 68 38 " +
      "C 78 62 81 95 81 123 " +
      "Q 60 112 39 123 Z",
    highlight:
      "M 43 118 C 43 92 46 64 53 42 " +
      "C 47 58 41 86 41 116 Z",
  },

  /* ── BALLERINA / COFFIN ─────────────────────────────────────────────────
   * Sides taper inward then continue straight to a flat top. */
  ballerina: {
    finger: FINGER,
    nail:
      "M 38 123 " +
      "C 38 103 42 82 46 62 " +
      "L 46 34 L 74 34 " +
      "L 74 62 " +
      "C 78 82 82 103 82 123 " +
      "Q 60 112 38 123 Z",
    highlight:
      "M 42 118 C 42 102 44 84 46 64 L 46 36 L 50 36 " +
      "L 50 64 C 44 84 40 102 40 118 Z",
  },

  /* ── SQUARE ─────────────────────────────────────────────────────────────
   * Straight sides, flat top, slightly rounded corners. */
  square: {
    finger: FINGER,
    nail:
      "M 38 123 L 38 34 Q 38 28 44 28 " +
      "L 76 28 Q 82 28 82 34 " +
      "L 82 123 Q 60 112 38 123 Z",
    highlight:
      "M 42 118 L 42 36 Q 42 30 46 30 L 52 30 L 52 118 Z",
  },

  /* ── STILETTO ────────────────────────────────────────────────────────────
   * Curves sharply from wide base to a very fine point. */
  stiletto: {
    finger: FINGER,
    nail:
      "M 40 123 " +
      "C 40 94 50 58 60 12 " +
      "C 70 58 80 94 80 123 " +
      "Q 60 112 40 123 Z",
    highlight:
      "M 44 118 C 44 92 50 62 56 26 " +
      "C 49 50 42 84 42 116 Z",
  },
};

/* ── Colours ────────────────────────────────────────────────────────────── */
const COLORS = [
  { id: "sheer-nude", hex: "#F5DDD0", label: "Sheer Nude",  metallic: false },
  { id: "warm-nude",  hex: "#E8C4A8", label: "Warm Nude",   metallic: false },
  { id: "baby-pink",  hex: "#F9C5D1", label: "Baby Pink",   metallic: false },
  { id: "dusty-rose", hex: "#D4A0B0", label: "Dusty Rose",  metallic: false },
  { id: "hot-pink",   hex: "#D64C72", label: "Hot Pink",    metallic: false },
  { id: "red",        hex: "#C82D48", label: "Red",         metallic: false },
  { id: "burgundy",   hex: "#7C1A3C", label: "Burgundy",    metallic: false },
  { id: "coral",      hex: "#F07060", label: "Coral",       metallic: false },
  { id: "white",      hex: "#F8F5F0", label: "White",       metallic: false },
  { id: "black",      hex: "#1A1010", label: "Black",       metallic: false },
  { id: "gold",       hex: "#D4AF37", label: "Gold",        metallic: true, gradId: "nc-gold"   },
  { id: "silver",     hex: "#A8A8C0", label: "Silver",      metallic: true, gradId: "nc-silver" },
] as const;
type Color = typeof COLORS[number];

const NUDE_IDS = new Set(["sheer-nude", "warm-nude", "baby-pink", "white"]);

/* ── Component ──────────────────────────────────────────────────────────── */
export function NailCustomizer() {
  const [activeShape, setActiveShape] = useState<ShapeKey>("oval");
  const [activeColor, setActiveColor] = useState<Color>(COLORS[4]);  // hot-pink
  const [visible,     setVisible]     = useState(true);

  const changeShape = (s: ShapeKey) => {
    if (s === activeShape) return;
    setVisible(false);
    setTimeout(() => { setActiveShape(s); setVisible(true); }, 200);
  };

  const shape    = SHAPES[activeShape];
  const isNude   = NUDE_IDS.has(activeColor.id);
  const nailFill = activeColor.metallic
    ? `url(#${"gradId" in activeColor ? activeColor.gradId : ""})`
    : activeColor.hex;

  return (
    <section id="nail-customizer" className="relative py-24 px-6 overflow-hidden">
      <style>{`
        @keyframes nc-shimmer {
          0%   { background-position: 0%   50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <BlurFade delay={0.1} inView>
          <p className="text-center text-xs font-medium uppercase tracking-[0.4em] text-mauve-light font-sans mb-4">
            Try It On
          </p>
          <h2 className="text-center font-serif text-4xl md:text-5xl font-light text-white leading-tight">
            Nail Customizer
          </h2>
          <div className="mx-auto mt-5 mb-14 h-px w-16 bg-mauve/40" />
        </BlurFade>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* ── Nail SVG ─────────────────────────────────────────────────── */}
          <BlurFade delay={0.2} inView>
            <div
              style={{ filter: "drop-shadow(0 20px 36px rgba(0,0,0,0.40))" }}
              className="flex-shrink-0"
            >
              <svg
                viewBox="0 0 120 270"
                className="w-[88px] lg:w-[104px] h-auto"
                aria-label={`${SHAPE_LABELS[activeShape]} nail, colour ${activeColor.label}`}
              >
                <defs>
                  {/* Lateral cylindrical shading — darker at edges, lighter in centre */}
                  <linearGradient id="nc-skin-lat" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#8B4A22" stopOpacity="0.55"/>
                    <stop offset="10%"  stopColor="#8B4A22" stopOpacity="0.18"/>
                    <stop offset="32%"  stopColor="#ffffff" stopOpacity="0.10"/>
                    <stop offset="46%"  stopColor="#ffffff" stopOpacity="0.24"/>
                    <stop offset="62%"  stopColor="#ffffff" stopOpacity="0.06"/>
                    <stop offset="90%"  stopColor="#8B4A22" stopOpacity="0.18"/>
                    <stop offset="100%" stopColor="#8B4A22" stopOpacity="0.55"/>
                  </linearGradient>

                  {/* Warm vertical shadow toward fingertip base */}
                  <linearGradient id="nc-skin-vert" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"   stopColor="#000000" stopOpacity="0.00"/>
                    <stop offset="65%"  stopColor="#000000" stopOpacity="0.00"/>
                    <stop offset="100%" stopColor="#7A3010" stopOpacity="0.30"/>
                  </linearGradient>

                  {/* Nail depth — darkens edges of nail plate */}
                  <radialGradient id="nc-nail-depth" cx="50%" cy="50%" r="55%">
                    <stop offset="40%"  stopColor="black" stopOpacity="0.00"/>
                    <stop offset="100%" stopColor="black" stopOpacity="0.24"/>
                  </radialGradient>

                  {/* Gold shimmer */}
                  <linearGradient id="nc-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#8B5E00"/>
                    <stop offset="35%"  stopColor="#D4AF37"/>
                    <stop offset="50%"  stopColor="#FFD700"/>
                    <stop offset="70%"  stopColor="#D4AF37"/>
                    <stop offset="100%" stopColor="#8B5E00"/>
                    <animateTransform attributeName="gradientTransform" type="rotate"
                      values="0 0.5 0.5;360 0.5 0.5" dur="2.8s" repeatCount="indefinite"/>
                  </linearGradient>

                  {/* Silver shimmer */}
                  <linearGradient id="nc-silver" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#606070"/>
                    <stop offset="35%"  stopColor="#B8B8C8"/>
                    <stop offset="50%"  stopColor="#EEEEFF"/>
                    <stop offset="70%"  stopColor="#B8B8C8"/>
                    <stop offset="100%" stopColor="#606070"/>
                    <animateTransform attributeName="gradientTransform" type="rotate"
                      values="0 0.5 0.5;360 0.5 0.5" dur="2.2s" repeatCount="indefinite"/>
                  </linearGradient>

                  {/* Clip paths */}
                  <clipPath id="nc-nail-clip">
                    <path d={shape.nail}/>
                  </clipPath>
                  <clipPath id="nc-finger-clip">
                    <path d={shape.finger}/>
                  </clipPath>
                </defs>

                {/* ════ FINGER BODY ════════════════════════════════════════ */}

                {/* Base skin */}
                <path d={shape.finger} fill="#f5d5c0"/>

                {/* Cylindrical lateral shading */}
                <path d={shape.finger} fill="url(#nc-skin-lat)"
                      clipPath="url(#nc-finger-clip)"/>

                {/* Warm vertical shadow at base */}
                <path d={shape.finger} fill="url(#nc-skin-vert)"
                      clipPath="url(#nc-finger-clip)"/>

                {/* Knuckle creases in the lower third */}
                <path d="M 42 194 Q 60 189 78 194"
                  fill="none" stroke="#B07050" strokeWidth="1.0"
                  strokeLinecap="round" opacity="0.36"/>
                <path d="M 43 204 Q 60 199 77 204"
                  fill="none" stroke="#B07050" strokeWidth="0.7"
                  strokeLinecap="round" opacity="0.22"/>

                {/* Lateral nail folds — thin skin strips beside the nail plate */}
                <path d="M 36 124 L 36 146 Q 40 144 40 124 Z"
                  fill="#f5d5c0" opacity="0.90"/>
                <path d="M 84 124 L 84 146 Q 80 144 80 124 Z"
                  fill="#f5d5c0" opacity="0.90"/>

                {/* ════ NAIL PLATE (fades on shape change) ════════════════ */}

                {/* Drop shadow under nail plate */}
                <ellipse cx="60" cy="122" rx="23" ry="5"
                  fill="#5A1808" opacity="0.18"/>

                <g style={{ opacity: visible ? 1 : 0, transition: "opacity 0.20s ease" }}>

                  {/* Nail colour fill */}
                  <path d={shape.nail} fill={nailFill}
                    stroke="rgba(0,0,0,0.08)" strokeWidth="0.5"/>

                  {/* Nail-bed oval — dark hollow, most visible on nude tones */}
                  <ellipse cx="60" cy="116" rx="17" ry="7"
                    fill="#0D0204"
                    opacity={isNude ? 0.60 : 0.14}
                    clipPath="url(#nc-nail-clip)"/>

                  {/* Depth vignette — darker edges */}
                  <path d={shape.nail} fill="url(#nc-nail-depth)"
                    clipPath="url(#nc-nail-clip)"/>

                  {/* Gloss highlight stripe */}
                  <path d={shape.highlight}
                    fill="white" opacity="0.50"
                    clipPath="url(#nc-nail-clip)"/>

                </g>

                {/* ════ CUTICLE FOLD (always above the nail) ══════════════ */}

                {/* Lunula — faint white half-moon */}
                <ellipse cx="60" cy="120" rx="15" ry="5.5"
                  fill="white" opacity="0.15"/>

                {/* Skin crescent over nail base */}
                <path d="M 36 124 Q 60 112 84 124 Q 60 136 36 124 Z"
                  fill="#f5d5c0" opacity="0.94"/>

                {/* Cuticle shading */}
                <path d="M 36 124 Q 60 112 84 124 Q 60 136 36 124 Z"
                  fill="url(#nc-skin-lat)" opacity="0.48"/>

                {/* Cuticle shadow line */}
                <path d="M 40 124 Q 60 114 80 124"
                  fill="none" stroke="#8A3A14" strokeWidth="0.6" opacity="0.26"/>

              </svg>
            </div>
          </BlurFade>

          {/* ── Controls ─────────────────────────────────────────────────── */}
          <div className="flex-1 w-full max-w-sm space-y-10">

            {/* Shape buttons */}
            <BlurFade delay={0.3} inView>
              <p className="text-xs uppercase tracking-[0.3em] text-mauve-light font-sans mb-4">
                Nail Shape
              </p>
              <div className="flex flex-wrap gap-2">
                {SHAPE_KEYS.map(s => (
                  <button
                    key={s}
                    onClick={() => changeShape(s)}
                    className={`px-4 py-2 rounded-full border text-xs font-sans uppercase tracking-[0.15em]
                      transition-all duration-200
                      ${activeShape === s
                        ? "bg-mauve border-mauve text-white"
                        : "border-white/20 text-white/55 hover:border-mauve/50 hover:text-white/80"}`}
                  >
                    {SHAPE_LABELS[s]}
                  </button>
                ))}
              </div>
            </BlurFade>

            {/* Colour swatches */}
            <BlurFade delay={0.4} inView>
              <div className="flex items-baseline gap-3 mb-4">
                <p className="text-xs uppercase tracking-[0.3em] text-mauve-light font-sans">Colour</p>
                <span className="text-white/40 text-xs font-sans">{activeColor.label}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {COLORS.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setActiveColor(c as Color)}
                    title={c.label}
                    className={`w-8 h-8 rounded-full transition-all duration-200 focus-visible:outline-none
                      ${activeColor.id === c.id
                        ? "ring-2 ring-mauve ring-offset-2 ring-offset-charcoal scale-110"
                        : "hover:scale-105 hover:ring-1 hover:ring-white/30"}`}
                    style={c.metallic
                      ? {
                          background: c.id === "gold"
                            ? "linear-gradient(120deg,#9A6800 0%,#FFD700 45%,#D4AF37 60%,#9A6800 100%)"
                            : "linear-gradient(120deg,#707080 0%,#EBEBF8 45%,#B8B8C8 60%,#707080 100%)",
                          backgroundSize: "200% 100%",
                          animation: "nc-shimmer 2s linear infinite",
                        }
                      : {
                          backgroundColor: c.hex,
                          boxShadow: c.hex === "#F8F5F0"
                            ? "inset 0 0 0 1px rgba(255,255,255,0.25)"
                            : undefined,
                        }}
                  />
                ))}
              </div>
            </BlurFade>

            {/* CTA */}
            <BlurFade delay={0.5} inView>
              <div className="pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm font-serif font-light italic mb-3">
                  Love a look? Book your appointment.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em]
                    text-mauve-light hover:text-white transition-colors duration-200 font-sans"
                >
                  Book now <span aria-hidden="true">→</span>
                </a>
              </div>
            </BlurFade>

          </div>
        </div>
      </div>
    </section>
  );
}
