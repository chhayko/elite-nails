"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

/*
 * Nail Customizer — redesigned illustration
 *
 * Structure:
 *   SKIN       – shape-neutral finger body: narrow nail-bed area (x 47-73)
 *                transitioning to full finger width (x 35-85) below the cuticle.
 *                Does NOT follow any nail shape outline.
 *   NAILS      – nail plate per shape, shorter tip (y ≈ 45-52)
 *   CUTICLE    – cuticle arch shared by every nail shape
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

/* ── Shape-neutral finger skin ────────────────────────────────────────────
 * Narrow nail-bed section (x 47–73, rounded top at y≈32)
 * expands to full finger tube (x 35–85) below the cuticle at y≈162-175.   */
const SKIN =
  "M 73 162 " +
  "L 73 52 Q 73 30 60 30 Q 47 30 47 52 " +
  "L 47 162 " +
  "C 42 163 35 168 35 178 " +
  "L 35 262 " +
  "L 85 262 " +
  "L 85 178 C 85 168 78 163 73 162 Z";

/* ── Cuticle fold arch — shared by all shapes ────────────────────────────
 * Traces from the right nail base (72.74, 138.71) downward through
 * the cuticle fold (y ≈ 156) and back up to the left nail base (47.12, 135.26). */
const CUTICLE_BASE =
  "C 72.66 145.23 71.37 151.52 69.07 156.54 " +
  "C 66.29 153.56 63.12 152.01 59.88 152.04 " +
  "H 59.87 " +
  "C 56.52 151.92 53.21 153.51 50.32 156.61 " +
  "C 48.38 151.69 47.29 144.54 47.12 135.26 ";

/* ── Nail plate paths — tip shortened to y ≈ 45-52 ──────────────────────
 * All paths: start (72.74, 138.71) → CUTICLE_BASE → left edge up → tip → right edge down → Z */
const NAILS: Record<ShapeKey, string> = {

  /* OVAL — smooth oval, tip at y≈48 */
  oval:
    "M 72.74 138.71 " + CUTICLE_BASE +
    "C 46.5 115 46 92 47 72 " +
    "C 48 58 52 48 60 48 " +
    "C 68 48 72 58 73 72 " +
    "C 74 92 73.5 115 72.74 138.71 Z",

  /* ALMOND — tapers to a soft rounded point, tip at y≈42 */
  almond:
    "M 72.74 138.71 " + CUTICLE_BASE +
    "C 46.5 110 47.5 78 51.5 55 " +
    "C 54.5 38 65.5 38 68.5 55 " +
    "C 72.5 78 73.5 110 72.74 138.71 Z",

  /* BALLERINA / COFFIN — tapered sides, flat squared-off top at y≈50 */
  ballerina:
    "M 72.74 138.71 " + CUTICLE_BASE +
    "C 47 108 49.5 75 52.5 52 " +
    "L 67.5 52 " +
    "C 70.5 75 73 108 72.74 138.71 Z",

  /* SQUARE — straight sides, flat top with slightly rounded corners */
  square:
    "M 72.74 138.71 " + CUTICLE_BASE +
    "L 47.12 46 " +
    "Q 47.12 38 53 38 " +
    "L 67 38 " +
    "Q 72.74 38 72.74 46 " +
    "L 72.74 138.71 Z",

  /* STILETTO — narrows to a sharp fine point at y≈38 */
  stiletto:
    "M 72.74 138.71 " + CUTICLE_BASE +
    "C 46.5 100 50.5 62 60 38 " +
    "C 69.5 62 73.5 100 72.74 138.71 Z",
};

/* ── Cuticle fold detail ─────────────────────────────────────────────────
 * Small arch drawn on top of the nail base / skin boundary.              */
const CUTICLE_DETAIL =
  "M 66.43 160.61 " +
  "C 64.35 163.0 61.96 164.36 59.5 164.55 " +
  "H 59.35 " +
  "C 56.33 164.79 53.39 162.68 51.28 158.74 " +
  "C 53.9 156.04 56.87 154.67 59.88 154.77 " +
  "H 59.89 " +
  "C 62.71 154.74 65.5 156.02 67.98 158.5 " +
  "C 67.49 159.27 66.98 159.98 66.43 160.61 Z";

/* Subtle skin-tone crease lines in the finger body */
const HYPO_1 =
  "M 48.75 216.41 L 48.53 219.11 " +
  "C 52.99 220.32 57.5 220.92 62.01 220.92 " +
  "C 65.03 220.92 68.05 220.65 71.05 220.11 " +
  "L 70.91 217.39 " +
  "C 63.52 218.72 56.08 218.39 48.75 216.41 Z";

const HYPO_2 =
  "M 48.96 229.61 L 48.66 232.29 " +
  "C 55.92 234.94 63.43 234.37 70.55 230.64 " +
  "L 70.13 228.01 " +
  "C 63.25 231.63 55.98 232.17 48.96 229.61 Z";

/* ── Colours ─────────────────────────────────────────────────────────── */
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
  { id: "gold",       hex: "#D4AF37", label: "Gold",        metallic: true,  gradId: "nc-gold"   },
  { id: "silver",     hex: "#A8A8C0", label: "Silver",      metallic: true,  gradId: "nc-silver" },
] as const;
type Color = typeof COLORS[number];

const NUDE_IDS = new Set(["sheer-nude", "warm-nude", "baby-pink", "white"]);

/* ── Component ─────────────────────────────────────────────────────────── */
export function NailCustomizer() {
  const [activeShape, setActiveShape] = useState<ShapeKey>("oval");
  const [activeColor, setActiveColor] = useState<Color>(COLORS[4]);
  const [visible,     setVisible]     = useState(true);

  const changeShape = (s: ShapeKey) => {
    if (s === activeShape) return;
    setVisible(false);
    setTimeout(() => { setActiveShape(s); setVisible(true); }, 180);
  };

  const nailPath = NAILS[activeShape];
  const isNude   = NUDE_IDS.has(activeColor.id);
  const nailFill = activeColor.metallic
    ? `url(#${"gradId" in activeColor ? activeColor.gradId : ""})`
    : activeColor.hex;

  return (
    <section id="nail-customizer" className="relative py-24 px-6 overflow-hidden">
      <style>{`
        @keyframes nc-shimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      <div className="mx-auto max-w-4xl">

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

          {/* ── SVG illustration ──────────────────────────────────────── */}
          <BlurFade delay={0.2} inView>
            <div
              className="flex-shrink-0"
              style={{ filter: "drop-shadow(0 18px 32px rgba(0,0,0,0.45))" }}
            >
              <svg
                viewBox="0 0 120 270"
                className="w-[80px] lg:w-[96px] h-auto"
                aria-label={`${SHAPE_LABELS[activeShape]} nail, colour ${activeColor.label}`}
              >
                <defs>
                  {/* Lateral cylindrical shading */}
                  <linearGradient id="nc-skin-lat" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#8B4A22" stopOpacity="0.50"/>
                    <stop offset="12%"  stopColor="#8B4A22" stopOpacity="0.16"/>
                    <stop offset="34%"  stopColor="#ffffff" stopOpacity="0.12"/>
                    <stop offset="48%"  stopColor="#ffffff" stopOpacity="0.22"/>
                    <stop offset="66%"  stopColor="#ffffff" stopOpacity="0.06"/>
                    <stop offset="88%"  stopColor="#8B4A22" stopOpacity="0.16"/>
                    <stop offset="100%" stopColor="#8B4A22" stopOpacity="0.50"/>
                  </linearGradient>

                  {/* Vertical warm shadow toward finger base */}
                  <linearGradient id="nc-skin-vert" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"   stopColor="#000000" stopOpacity="0.00"/>
                    <stop offset="60%"  stopColor="#000000" stopOpacity="0.00"/>
                    <stop offset="100%" stopColor="#7A3010" stopOpacity="0.28"/>
                  </linearGradient>

                  {/* Nail edge depth vignette */}
                  <radialGradient id="nc-nail-depth" cx="50%" cy="60%" r="55%">
                    <stop offset="40%"  stopColor="black" stopOpacity="0.00"/>
                    <stop offset="100%" stopColor="black" stopOpacity="0.20"/>
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

                  {/* Clip to nail plate */}
                  <clipPath id="nc-nail-clip">
                    <path d={nailPath}/>
                  </clipPath>

                  {/* Clip to full skin area */}
                  <clipPath id="nc-skin-clip">
                    <path d={SKIN}/>
                  </clipPath>
                </defs>

                {/* ── 1. SKIN BASE ── */}
                <path d={SKIN} fill="#f5d5c0"/>

                {/* Lateral cylindrical shading */}
                <path d={SKIN} fill="url(#nc-skin-lat)" clipPath="url(#nc-skin-clip)"/>

                {/* Vertical warm shadow */}
                <path d={SKIN} fill="url(#nc-skin-vert)" clipPath="url(#nc-skin-clip)"/>

                {/* Subtle skin crease lines in finger body */}
                <path d={HYPO_1} fill="#e8c0b0" opacity="0.6"/>
                <path d={HYPO_2} fill="#ddb8a8" opacity="0.5"/>

                {/* ── 2. NAIL PLATE (fades on shape change) ── */}
                <g style={{ opacity: visible ? 1 : 0, transition: "opacity 0.18s ease" }}>

                  {/* Nail colour fill */}
                  <path d={nailPath} fill={nailFill}/>

                  {/* Nail-bed lunula — visible on nude tones */}
                  <ellipse
                    cx="60" cy="138" rx="11" ry="4.5"
                    fill="#0D0204"
                    opacity={isNude ? 0.50 : 0.10}
                    clipPath="url(#nc-nail-clip)"
                  />

                  {/* Edge depth vignette */}
                  <path d={nailPath} fill="url(#nc-nail-depth)" clipPath="url(#nc-nail-clip)"/>

                  {/* Gloss highlight — left-side shine stripe */}
                  <path
                    d="M 51.5 134 C 50 110 49.5 78 51 52 C 48.5 74 48 108 49 132 Z"
                    fill="white" opacity="0.46"
                    clipPath="url(#nc-nail-clip)"
                  />

                </g>

                {/* ── 3. CUTICLE FOLD (always on top) ── */}
                <path d={CUTICLE_DETAIL} fill="#f0cabb"/>
                <path d={CUTICLE_DETAIL} fill="url(#nc-skin-lat)" opacity="0.55"/>

              </svg>
            </div>
          </BlurFade>

          {/* ── Controls ──────────────────────────────────────────────── */}
          <div className="flex-1 w-full max-w-sm space-y-10">

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
