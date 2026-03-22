"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

/*
 * Five nail shapes, each as a self-contained SVG definition.
 * Every shape has three named paths:
 *   finger    — skin / finger body  (#f5d5c0)
 *   nail      — nail plate          (user-selected colour)
 *   highlight — gloss shine         (white, semi-transparent)
 *
 * viewBox "0 0 120 220" — single fingertip, portrait orientation.
 * Cuticle line sits at y ≈ 90. Nail extends upward; finger body downward.
 */

type ShapeKey = "round" | "almond" | "ballerina" | "square" | "stiletto";

const SHAPE_KEYS: ShapeKey[] = ["round", "almond", "ballerina", "square", "stiletto"];

const SHAPE_LABELS: Record<ShapeKey, string> = {
  round:    "Round",
  almond:   "Almond",
  ballerina:"Ballerina",
  square:   "Square",
  stiletto: "Stiletto",
};

/* Each shape: finger / nail / highlight as SVG path data strings.
 * All coordinate in the same 120×220 viewBox. */
interface ShapePaths { finger: string; nail: string; highlight: string; }

const SHAPES: Record<ShapeKey, ShapePaths> = {

  /* ─── ROUND ─────────────────────────────────────────────────────────────
   * Short wide oval. Finger is a rounded rectangle below the cuticle line. */
  round: {
    finger:
      "M 18 92 L 18 188 Q 18 216 60 216 Q 102 216 102 188 L 102 92 " +
      "Q 102 78 60 76 Q 18 78 18 92 Z",
    nail:
      "M 20 90 C 20 66 38 50 60 46 C 82 50 100 66 100 90 " +
      "Q 60 80 20 90 Z",
    highlight:
      "M 24 86 C 24 68 36 55 48 51 C 36 62 30 74 30 86 Z",
  },

  /* ─── ALMOND ─────────────────────────────────────────────────────────────
   * Longer oval tapering to a soft rounded point. */
  almond: {
    finger:
      "M 18 92 L 18 188 Q 18 216 60 216 Q 102 216 102 188 L 102 92 " +
      "Q 102 78 60 76 Q 18 78 18 92 Z",
    nail:
      "M 22 90 C 22 60 42 26 60 10 C 78 26 98 60 98 90 " +
      "Q 60 80 22 90 Z",
    highlight:
      "M 26 84 C 26 60 38 36 50 22 C 38 44 30 64 30 84 Z",
  },

  /* ─── BALLERINA / COFFIN ─────────────────────────────────────────────────
   * Tapered sides with a flat top. */
  ballerina: {
    finger:
      "M 18 92 L 18 188 Q 18 216 60 216 Q 102 216 102 188 L 102 92 " +
      "Q 102 78 60 76 Q 18 78 18 92 Z",
    nail:
      "M 20 90 C 26 72 32 54 36 38 L 84 38 C 88 54 94 72 100 90 " +
      "Q 60 80 20 90 Z",
    highlight:
      "M 24 84 C 28 68 33 52 36 40 L 44 40 C 40 54 34 70 30 84 Z",
  },

  /* ─── SQUARE ─────────────────────────────────────────────────────────────
   * Flat top, straight sides, slightly rounded top corners. */
  square: {
    finger:
      "M 18 92 L 18 188 Q 18 216 60 216 Q 102 216 102 188 L 102 92 " +
      "Q 102 78 60 76 Q 18 78 18 92 Z",
    nail:
      "M 20 90 L 20 38 Q 20 32 26 32 L 94 32 Q 100 32 100 38 L 100 90 " +
      "Q 60 80 20 90 Z",
    highlight:
      "M 24 84 L 24 38 Q 24 34 28 34 L 38 34 L 38 84 Z",
  },

  /* ─── STILETTO ───────────────────────────────────────────────────────────
   * Curves to a very sharp, tapered point. */
  stiletto: {
    finger:
      "M 18 92 L 18 188 Q 18 216 60 216 Q 102 216 102 188 L 102 92 " +
      "Q 102 78 60 76 Q 18 78 18 92 Z",
    nail:
      "M 26 90 C 26 64 46 28 60 4 C 74 28 94 64 94 90 " +
      "Q 60 80 26 90 Z",
    highlight:
      "M 30 84 C 30 62 42 34 52 14 C 40 38 34 60 34 84 Z",
  },
};

/* ── Colors ─────────────────────────────────────────────────────────────── */
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
  const [activeColor, setActiveColor] = useState<Color>(COLORS[4]); // hot-pink default
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
        @keyframes nc-nail-shimmer {
          0%   { stop-color: #9A6800; }
          50%  { stop-color: #FFD700; }
          100% { stop-color: #9A6800; }
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

          {/* ── Single nail SVG ──────────────────────────────────────────── */}
          <BlurFade delay={0.2} inView>
            <div
              style={{
                filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.35))",
                transition: "filter 0.3s ease",
              }}
              className="flex-shrink-0"
            >
              <svg
                viewBox="0 0 120 220"
                className="w-[110px] lg:w-[130px] h-auto"
                aria-label={`Nail shape: ${SHAPE_LABELS[activeShape]}, colour: ${activeColor.label}`}
              >
                <defs>
                  {/* Finger lateral shading — cylindrical 3-D effect */}
                  <linearGradient id="nc-skin-shade" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"    stopColor="#C07040" stopOpacity="0.55"/>
                    <stop offset="15%"   stopColor="#C07040" stopOpacity="0.10"/>
                    <stop offset="50%"   stopColor="#ffffff" stopOpacity="0.12"/>
                    <stop offset="85%"   stopColor="#C07040" stopOpacity="0.10"/>
                    <stop offset="100%"  stopColor="#C07040" stopOpacity="0.55"/>
                  </linearGradient>

                  {/* Finger lower warm shadow */}
                  <radialGradient id="nc-skin-tip" cx="50%" cy="90%" r="40%">
                    <stop offset="0%"   stopColor="#A05030" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="#A05030" stopOpacity="0.00"/>
                  </radialGradient>

                  {/* Nail depth — darkens edges of nail plate */}
                  <radialGradient id="nc-nail-depth" cx="50%" cy="50%" r="55%">
                    <stop offset="50%"  stopColor="black" stopOpacity="0.00"/>
                    <stop offset="100%" stopColor="black" stopOpacity="0.20"/>
                  </radialGradient>

                  {/* Gold shimmer */}
                  <linearGradient id="nc-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#9A6800"/>
                    <stop offset="35%"  stopColor="#D4AF37"/>
                    <stop offset="50%"  stopColor="#FFD700"/>
                    <stop offset="70%"  stopColor="#D4AF37"/>
                    <stop offset="100%" stopColor="#9A6800"/>
                    <animateTransform attributeName="gradientTransform" type="rotate"
                      values="0 0.5 0.5;360 0.5 0.5" dur="2.8s" repeatCount="indefinite"/>
                  </linearGradient>

                  {/* Silver shimmer */}
                  <linearGradient id="nc-silver" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#707080"/>
                    <stop offset="35%"  stopColor="#B8B8C8"/>
                    <stop offset="50%"  stopColor="#EBEBF8"/>
                    <stop offset="70%"  stopColor="#B8B8C8"/>
                    <stop offset="100%" stopColor="#707080"/>
                    <animateTransform attributeName="gradientTransform" type="rotate"
                      values="0 0.5 0.5;360 0.5 0.5" dur="2.2s" repeatCount="indefinite"/>
                  </linearGradient>

                  {/* Clip path — keeps nail bed oval + depth inside the nail plate */}
                  <clipPath id="nc-nail-clip">
                    <path d={shape.nail}/>
                  </clipPath>
                </defs>

                {/* ── FINGER body ── */}
                <path id="finger" d={shape.finger} fill="#f5d5c0"/>
                <path d={shape.finger} fill="url(#nc-skin-shade)"/>
                <path d={shape.finger} fill="url(#nc-skin-tip)"/>

                {/* Knuckle crease lines */}
                <path d="M 26 152 Q 60 146 94 152"
                  fill="none" stroke="#BF8060" strokeWidth="1.2" strokeLinecap="round" opacity="0.45"/>
                <path d="M 29 163 Q 60 157 91 163"
                  fill="none" stroke="#BF8060" strokeWidth="0.8" strokeLinecap="round" opacity="0.28"/>

                {/* ── NAIL plate ── */}

                {/* Drop shadow under nail plate */}
                <ellipse cx="60" cy="89" rx="40" ry="7" fill="#7A3010" opacity="0.18"/>

                {/* Nail layers — fade in/out on shape change */}
                <g
                  id="nail"
                  style={{
                    opacity:    visible ? 1 : 0,
                    transition: "opacity 0.20s ease",
                  }}
                >
                  {/* Nail fill — user colour */}
                  <path
                    d={shape.nail}
                    fill={nailFill}
                    stroke="rgba(0,0,0,0.10)"
                    strokeWidth="0.5"
                  />

                  {/* Nail-bed oval — the dark hollow characteristic of this illustration style.
                      More visible on nude/translucent colours, subtle on opaques. */}
                  <ellipse
                    cx="60" cy="84" rx="22" ry="9"
                    fill="#100404"
                    opacity={isNude ? 0.65 : 0.18}
                    clipPath="url(#nc-nail-clip)"
                  />

                  {/* Nail depth — darkens edges */}
                  <path d={shape.nail} fill="url(#nc-nail-depth)" clipPath="url(#nc-nail-clip)"/>

                  {/* ── HIGHLIGHT — white gloss shine ── */}
                  <path
                    id="highlight"
                    d={shape.highlight}
                    fill="white"
                    opacity="0.55"
                    clipPath="url(#nc-nail-clip)"
                  />
                </g>

                {/* ── CUTICLE fold — skin crescent over the nail base ── */}
                {/* Lunula (white half-moon under cuticle) */}
                <ellipse cx="60" cy="88" rx="20" ry="7" fill="white" opacity="0.20"/>
                {/* Skin crescent */}
                <path
                  d="M 18 90 Q 60 78 102 90 Q 60 102 18 90 Z"
                  fill="#f5d5c0"
                  opacity="0.92"
                />
                {/* Cuticle shading */}
                <path
                  d="M 18 90 Q 60 78 102 90 Q 60 102 18 90 Z"
                  fill="url(#nc-skin-shade)"
                  opacity="0.55"
                />
                {/* Cuticle shadow line */}
                <path
                  d="M 22 90 Q 60 80 98 90"
                  fill="none" stroke="#8A4018" strokeWidth="0.7" opacity="0.30"
                />

                {/* Lateral nail folds (skin slightly overlapping nail sides) */}
                <path d="M 18 90 L 18 108 Q 22 106 22 90 Z"
                  fill="#f5d5c0" opacity="0.88"/>
                <path d="M 102 90 L 102 108 Q 98 106 98 90 Z"
                  fill="#f5d5c0" opacity="0.88"/>
              </svg>
            </div>
          </BlurFade>

          {/* ── Controls ─────────────────────────────────────────────────── */}
          <div className="flex-1 w-full max-w-sm space-y-10">

            {/* Shape selector */}
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

            {/* Color picker */}
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
