"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

/*
 * Single realistic fingertip illustration.
 *
 * viewBox "0 0 120 260"
 * Finger: 48 px wide (x 36–84), center x = 60
 * Cuticle / nail base sits at y ≈ 102
 * Nail extends upward; fingertip pad rounds at bottom (y ≈ 252)
 *
 * Each shape has:
 *   finger    — full finger body (same for all shapes)
 *   nail      — nail plate (only this path changes per shape)
 *   highlight — gloss stripe on the nail plate
 */

type ShapeKey = "round" | "almond" | "ballerina" | "square" | "stiletto";
const SHAPE_KEYS: ShapeKey[] = ["round", "almond", "ballerina", "square", "stiletto"];
const SHAPE_LABELS: Record<ShapeKey, string> = {
  round:     "Round",
  almond:    "Almond",
  ballerina: "Ballerina",
  square:    "Square",
  stiletto:  "Stiletto",
};

interface ShapePaths { finger: string; nail: string; highlight: string }

/* ── Shared finger body ────────────────────────────────────────────────────
 * 48 px wide, centre at x = 60.
 * Gentle curve at the top (cuticle junction), straight sides, rounded pad. */
const FINGER =
  "M 36 108 Q 36 98 60 96 Q 84 98 84 108 " +
  "L 84 206 Q 84 250 60 254 Q 36 250 36 206 Z";

const SHAPES: Record<ShapeKey, ShapePaths> = {

  /* ── ROUND ──────────────────────────────────────────────────────────────
   * Short, wide oval. Free edge reaches y ≈ 54. */
  round: {
    finger: FINGER,
    nail:
      "M 38 102 C 38 76 46 56 60 52 C 74 56 82 76 82 102 " +
      "Q 60 93 38 102 Z",
    highlight:
      "M 42 97 C 42 76 47 60 54 55 C 46 65 40 80 40 97 Z",
  },

  /* ── ALMOND ─────────────────────────────────────────────────────────────
   * Tapers to a soft oval point. Free edge at y ≈ 20. */
  almond: {
    finger: FINGER,
    nail:
      "M 39 102 C 39 70 46 38 60 18 C 74 38 81 70 81 102 " +
      "Q 60 93 39 102 Z",
    highlight:
      "M 43 96 C 43 70 47 44 54 26 C 46 48 40 72 40 96 Z",
  },

  /* ── BALLERINA / COFFIN ─────────────────────────────────────────────────
   * Sides taper inward; flat top at y = 26. */
  ballerina: {
    finger: FINGER,
    nail:
      "M 38 102 C 38 82 42 62 46 44 L 46 26 L 74 26 L 74 44 " +
      "C 78 62 82 82 82 102 Q 60 93 38 102 Z",
    highlight:
      "M 42 96 C 42 80 44 62 46 46 L 46 28 L 50 28 L 50 46 " +
      "C 44 64 40 80 40 96 Z",
  },

  /* ── SQUARE ─────────────────────────────────────────────────────────────
   * Straight sides, flat top, slightly rounded top corners. */
  square: {
    finger: FINGER,
    nail:
      "M 38 102 L 38 30 Q 38 24 44 24 L 76 24 Q 82 24 82 30 " +
      "L 82 102 Q 60 93 38 102 Z",
    highlight:
      "M 42 96 L 42 30 Q 42 26 46 26 L 52 26 L 52 96 Z",
  },

  /* ── STILETTO ────────────────────────────────────────────────────────────
   * Curves sharply to a fine point at y = 10. */
  stiletto: {
    finger: FINGER,
    nail:
      "M 40 102 C 40 72 50 38 60 10 C 70 38 80 72 80 102 " +
      "Q 60 93 40 102 Z",
    highlight:
      "M 44 96 C 44 72 50 44 56 22 C 48 46 42 72 42 96 Z",
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
  const [activeShape, setActiveShape] = useState<ShapeKey>("almond");
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
                viewBox="0 0 120 260"
                className="w-[90px] lg:w-[108px] h-auto"
                aria-label={`${SHAPE_LABELS[activeShape]} nail, colour ${activeColor.label}`}
              >
                <defs>
                  {/* ── Skin gradients ── */}

                  {/* Lateral cylindrical shading: dark edges, soft centre highlight */}
                  <linearGradient id="nc-skin-lat" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#8B4A22" stopOpacity="0.52"/>
                    <stop offset="10%"  stopColor="#8B4A22" stopOpacity="0.18"/>
                    <stop offset="30%"  stopColor="#ffffff" stopOpacity="0.10"/>
                    <stop offset="46%"  stopColor="#ffffff" stopOpacity="0.22"/>
                    <stop offset="62%"  stopColor="#ffffff" stopOpacity="0.06"/>
                    <stop offset="90%"  stopColor="#8B4A22" stopOpacity="0.18"/>
                    <stop offset="100%" stopColor="#8B4A22" stopOpacity="0.52"/>
                  </linearGradient>

                  {/* Vertical warm shadow at fingertip base */}
                  <linearGradient id="nc-skin-vert" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"   stopColor="#000000" stopOpacity="0.00"/>
                    <stop offset="70%"  stopColor="#000000" stopOpacity="0.00"/>
                    <stop offset="100%" stopColor="#7A3010" stopOpacity="0.28"/>
                  </linearGradient>

                  {/* ── Nail depth — darkens nail edges ── */}
                  <radialGradient id="nc-nail-depth" cx="50%" cy="50%" r="55%">
                    <stop offset="40%"  stopColor="black" stopOpacity="0.00"/>
                    <stop offset="100%" stopColor="black" stopOpacity="0.22"/>
                  </radialGradient>

                  {/* ── Gold shimmer ── */}
                  <linearGradient id="nc-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#8B5E00"/>
                    <stop offset="35%"  stopColor="#D4AF37"/>
                    <stop offset="50%"  stopColor="#FFD700"/>
                    <stop offset="70%"  stopColor="#D4AF37"/>
                    <stop offset="100%" stopColor="#8B5E00"/>
                    <animateTransform attributeName="gradientTransform" type="rotate"
                      values="0 0.5 0.5;360 0.5 0.5" dur="2.8s" repeatCount="indefinite"/>
                  </linearGradient>

                  {/* ── Silver shimmer ── */}
                  <linearGradient id="nc-silver" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#606070"/>
                    <stop offset="35%"  stopColor="#B8B8C8"/>
                    <stop offset="50%"  stopColor="#EEEEFF"/>
                    <stop offset="70%"  stopColor="#B8B8C8"/>
                    <stop offset="100%" stopColor="#606070"/>
                    <animateTransform attributeName="gradientTransform" type="rotate"
                      values="0 0.5 0.5;360 0.5 0.5" dur="2.2s" repeatCount="indefinite"/>
                  </linearGradient>

                  {/* ── Clip path — confines overlays to nail plate ── */}
                  <clipPath id="nc-nail-clip">
                    <path d={shape.nail}/>
                  </clipPath>

                  {/* ── Clip path — confines overlays to finger body ── */}
                  <clipPath id="nc-finger-clip">
                    <path d={shape.finger}/>
                  </clipPath>
                </defs>

                {/* ════════════════════════════════════════════════════════
                    FINGER BODY
                    ════════════════════════════════════════════════════════ */}

                {/* Base skin fill */}
                <path d={shape.finger} fill="#f5d5c0"/>

                {/* Lateral cylindrical shading — clipped to finger */}
                <path d={shape.finger} fill="url(#nc-skin-lat)"
                      clipPath="url(#nc-finger-clip)"/>

                {/* Bottom warm shadow */}
                <path d={shape.finger} fill="url(#nc-skin-vert)"
                      clipPath="url(#nc-finger-clip)"/>

                {/* Knuckle crease lines (lower third of finger) */}
                <path d="M 42 168 Q 60 163 78 168"
                  fill="none" stroke="#B07050" strokeWidth="1.0"
                  strokeLinecap="round" opacity="0.38"/>
                <path d="M 43 178 Q 60 173 77 178"
                  fill="none" stroke="#B07050" strokeWidth="0.7"
                  strokeLinecap="round" opacity="0.22"/>

                {/* Lateral nail folds — thin skin strips each side of nail plate */}
                <path d="M 36 102 L 36 124 Q 40 122 40 102 Z"
                  fill="#f5d5c0" opacity="0.90"/>
                <path d="M 84 102 L 84 124 Q 80 122 80 102 Z"
                  fill="#f5d5c0" opacity="0.90"/>

                {/* ════════════════════════════════════════════════════════
                    NAIL PLATE (fades during shape transitions)
                    ════════════════════════════════════════════════════════ */}

                {/* Soft drop shadow under nail plate */}
                <ellipse cx="60" cy="101" rx="23" ry="5.5"
                  fill="#5A1808" opacity="0.20"/>

                <g style={{ opacity: visible ? 1 : 0, transition: "opacity 0.20s ease" }}>

                  {/* Nail colour fill */}
                  <path d={shape.nail} fill={nailFill}
                    stroke="rgba(0,0,0,0.08)" strokeWidth="0.5"/>

                  {/* Nail-bed oval — the dark lunula hollow.
                      More visible on nude / translucent tones. */}
                  <ellipse cx="60" cy="96" rx="17" ry="7"
                    fill="#0D0204"
                    opacity={isNude ? 0.62 : 0.16}
                    clipPath="url(#nc-nail-clip)"/>

                  {/* Depth vignette — darker toward nail edges */}
                  <path d={shape.nail} fill="url(#nc-nail-depth)"
                    clipPath="url(#nc-nail-clip)"/>

                  {/* Gloss highlight — soft white shine stripe */}
                  <path d={shape.highlight}
                    fill="white" opacity="0.52"
                    clipPath="url(#nc-nail-clip)"/>

                </g>

                {/* ════════════════════════════════════════════════════════
                    CUTICLE FOLD  (always on top of the nail)
                    ════════════════════════════════════════════════════════ */}

                {/* Lunula — faint white half-moon */}
                <ellipse cx="60" cy="99" rx="16" ry="6"
                  fill="white" opacity="0.16"/>

                {/* Skin crescent over nail base */}
                <path d="M 36 103 Q 60 91 84 103 Q 60 115 36 103 Z"
                  fill="#f5d5c0" opacity="0.94"/>

                {/* Cuticle lateral shading */}
                <path d="M 36 103 Q 60 91 84 103 Q 60 115 36 103 Z"
                  fill="url(#nc-skin-lat)" opacity="0.50"/>

                {/* Cuticle shadow line */}
                <path d="M 40 103 Q 60 93 80 103"
                  fill="none" stroke="#8A3A14" strokeWidth="0.6" opacity="0.28"/>

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
