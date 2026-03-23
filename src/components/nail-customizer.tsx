"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

/* ── Types ──────────────────────────────────────────────────────────────── */
type ShapeKey = "rounded" | "almond" | "ballerina" | "square" | "stiletto";

const SHAPE_ORDER: ShapeKey[] = ["rounded", "almond", "ballerina", "square", "stiletto"];
const SHAPE_LABELS: Record<ShapeKey, string> = {
  rounded:   "Round",
  almond:    "Almond",
  ballerina: "Ballerina",
  square:    "Square",
  stiletto:  "Stiletto",
};

type ColorEntry = { id: string; hex: string; label: string; metallic: boolean };

const COLORS: ColorEntry[] = [
  { id: "sheer-nude",  hex: "#F2D9CC", label: "Sheer Nude",  metallic: false },
  { id: "warm-nude",   hex: "#E3B990", label: "Warm Nude",   metallic: false },
  { id: "baby-pink",   hex: "#F7BDCC", label: "Baby Pink",   metallic: false },
  { id: "dusty-rose",  hex: "#CA8FA0", label: "Dusty Rose",  metallic: false },
  { id: "hot-pink",    hex: "#D03D68", label: "Hot Pink",    metallic: false },
  { id: "red",         hex: "#C02040", label: "Red",         metallic: false },
  { id: "burgundy",    hex: "#6E1535", label: "Burgundy",    metallic: false },
  { id: "coral",       hex: "#E85D50", label: "Coral",       metallic: false },
  { id: "white",       hex: "#F8F4F2", label: "White",       metallic: false },
  { id: "black",       hex: "#1C1010", label: "Black",       metallic: false },
  { id: "gold",        hex: "#C8A030", label: "Gold",        metallic: true  },
  { id: "silver",      hex: "#A8B0C0", label: "Silver",      metallic: true  },
];

/* ── Finger layout ──────────────────────────────────────────────────────── */
// tipY = y of fingertip apex (top of SVG)
// bw   = half-width at base (clipped below viewBox)
// tw   = half-width at tip
// nw   = nail plate width (≈ tw*2 - lateral fold margin)
// nh   = nail plate height (tall — nail dominates, like the reference)
const FINGERS = [
  { id: "index",  cx: 65,  tipY: 36,  bw: 30, tw: 22, nw: 38, nh: 92  },
  { id: "middle", cx: 145, tipY: 6,   bw: 32, tw: 24, nw: 42, nh: 102 },
  { id: "ring",   cx: 221, tipY: 27,  bw: 30, tw: 22, nw: 38, nh: 92  },
  { id: "pinky",  cx: 288, tipY: 74,  bw: 24, tw: 16, nw: 28, nh: 70  },
] as const;

/* ── Path helpers ───────────────────────────────────────────────────────── */

/**
 * Smooth tapered finger — wide at base, narrows toward tip via cubic bezier.
 * No bumps in the silhouette (matches the clean reference illustration style).
 */
function fingerPath(cx: number, tipY: number, bw: number, tw: number): string {
  const r = tw * 0.95; // tip rounding radius
  return [
    `M${cx - bw},310`,
    `C${cx - bw},185 ${cx - tw - 1},${tipY + r * 2.6} ${cx - tw},${tipY + r}`,
    `Q${cx - tw},${tipY} ${cx},${tipY}`,
    `Q${cx + tw},${tipY} ${cx + tw},${tipY + r}`,
    `C${cx + tw + 1},${tipY + r * 2.6} ${cx + bw},185 ${cx + bw},310`,
    `Z`,
  ].join(" ");
}

/**
 * Nail plate — local coords, origin at cuticle centre, tip at y = −nh.
 */
function nailPath(shape: ShapeKey, nw: number, nh: number): string {
  const hw = nw / 2;
  switch (shape) {
    case "square":
      return `M${-hw},0 L${-hw},${-nh} L${hw},${-nh} L${hw},0 Z`;

    case "rounded": {
      const r = Math.min(hw * 0.95, nh * 0.52);
      return (
        `M${-hw},0 L${-hw},${-(nh - r)} ` +
        `Q${-hw},${-nh} 0,${-nh} ` +
        `Q${hw},${-nh} ${hw},${-(nh - r)} L${hw},0 Z`
      );
    }

    case "almond":
      return (
        `M${-hw},0 ` +
        `L${-hw * 0.88},${-nh * 0.46} ` +
        `Q${-hw * 0.16},${-nh} 0,${-nh} ` +
        `Q${hw * 0.16},${-nh} ${hw * 0.88},${-nh * 0.46} ` +
        `L${hw},0 Z`
      );

    case "stiletto":
      return (
        `M${-hw},0 L${-hw},${-nh * 0.5} L0,${-nh} L${hw},${-nh * 0.5} L${hw},0 Z`
      );

    case "ballerina": {
      const tw = hw * 0.54;
      return (
        `M${-hw},0 L${-hw},${-nh * 0.44} ` +
        `L${-tw},${-nh} L${tw},${-nh} ` +
        `L${hw},${-nh * 0.44} L${hw},0 Z`
      );
    }
  }
}

/* ── Colour helpers ─────────────────────────────────────────────────────── */
function adjustHex(hex: string, amt: number): string {
  const c = (ch: string) =>
    Math.max(
      0,
      Math.min(
        255,
        parseInt(
          hex.slice(ch === "r" ? 1 : ch === "g" ? 3 : 5, ch === "r" ? 3 : ch === "g" ? 5 : 7),
          16
        ) + amt
      )
    );
  return `rgb(${c("r")},${c("g")},${c("b")})`;
}

/* ── Hand SVG ───────────────────────────────────────────────────────────── */
function HandSVG({ shape, color }: { shape: ShapeKey; color: ColorEntry }) {
  const dark  = adjustHex(color.hex, -50);
  const mid   = adjustHex(color.hex, -22);
  const light = adjustHex(color.hex, 55);

  return (
    <svg
      viewBox="0 0 334 270"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 300, display: "block" }}
      aria-label="Interactive nail shape and colour preview"
    >
      <defs>
        {/*
          Per-finger horizontal skin gradients (userSpaceOnUse so the specular
          highlight is centred on each finger's axis — the key to a 3-D look).
          Light peach skin, matching the clean flat-vector reference style.
        */}
        {FINGERS.map(f => (
          <linearGradient
            key={`sk-${f.id}`}
            id={`sk-${f.id}`}
            gradientUnits="userSpaceOnUse"
            x1={f.cx - f.bw} y1="0"
            x2={f.cx + f.bw} y2="0"
          >
            <stop offset="0%"   stopColor="#A06838" />
            <stop offset="12%"  stopColor="#CAAA78" />
            <stop offset="30%"  stopColor="#EDD0A8" />
            <stop offset="50%"  stopColor="#FDE8CC" />
            <stop offset="70%"  stopColor="#EDD0A8" />
            <stop offset="88%"  stopColor="#CAAA78" />
            <stop offset="100%" stopColor="#A06838" />
          </linearGradient>
        ))}

        {/* Subtle vertical depth (top brighter, base darker — ambient occlusion) */}
        <linearGradient id="skv" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(255,245,235,0.06)" />
          <stop offset="40%"  stopColor="rgba(0,0,0,0)"          />
          <stop offset="100%" stopColor="rgba(0,0,0,0.18)"       />
        </linearGradient>

        {/* Nail solid gradient */}
        <linearGradient id="ng" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%"   stopColor={dark}      />
          <stop offset="35%"  stopColor={color.hex} />
          <stop offset="100%" stopColor={light}     />
        </linearGradient>

        {/* Metallic diagonal gradient */}
        <linearGradient id="nm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={dark}      />
          <stop offset="28%"  stopColor={light}     />
          <stop offset="50%"  stopColor={color.hex} />
          <stop offset="72%"  stopColor={light}     />
          <stop offset="100%" stopColor={dark}      />
        </linearGradient>

        {/* Soft drop shadow for fingers */}
        <filter id="fsh" x="-30%" y="-8%" width="160%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="8"
            floodColor="#000" floodOpacity="0.32" />
        </filter>

        {/* Blur for nail gloss ellipse */}
        <filter id="gb" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.0" />
        </filter>

        {/* Blur for skin specular line */}
        <filter id="spec" x="-100%" y="-20%" width="300%" height="140%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>

      {/* ── Finger bodies ── */}
      {FINGERS.map(f => {
        const fp       = fingerPath(f.cx, f.tipY, f.bw, f.tw);
        const cuticleY = f.tipY + f.nh;

        // Single knuckle crease, positioned just below the nail area
        // Width at that depth interpolated along the taper
        const creaseY = cuticleY + 56;
        const creaseHW = f.tw + (f.bw - f.tw) * 0.50;

        return (
          <g key={`body-${f.id}`}>
            {/* Base skin fill with drop shadow */}
            <g filter="url(#fsh)">
              <path d={fp} fill={`url(#sk-${f.id})`} />
            </g>

            {/* Atmospheric depth overlay */}
            <path d={fp} fill="url(#skv)" />

            {/* Specular: soft bright stripe down the central axis (3-D catch-light) */}
            <line
              x1={f.cx} y1={f.tipY + 10}
              x2={f.cx} y2={cuticleY + 42}
              stroke="rgba(255,240,220,0.38)"
              strokeWidth={f.tw * 0.40}
              strokeLinecap="round"
              filter="url(#spec)"
            />

            {/* Warm skin-tone outline (soft, not black) */}
            <path d={fp} fill="none"
              stroke="#8A4820" strokeWidth="1.2" strokeOpacity="0.22"
            />

            {/* Single knuckle crease — one gentle arc, like the reference */}
            <path
              d={`M${f.cx - creaseHW * 0.72},${creaseY} Q${f.cx},${creaseY + 7} ${f.cx + creaseHW * 0.72},${creaseY}`}
              fill="none" stroke="#B07040"
              strokeWidth="1.5" strokeOpacity="0.38" strokeLinecap="round"
            />
            {/* Thin secondary shadow below the crease for depth */}
            <path
              d={`M${f.cx - creaseHW * 0.50},${creaseY + 5} Q${f.cx},${creaseY + 10} ${f.cx + creaseHW * 0.50},${creaseY + 5}`}
              fill="none" stroke="#B07040"
              strokeWidth="0.7" strokeOpacity="0.18" strokeLinecap="round"
            />
          </g>
        );
      })}

      {/* ── Nail plates — fade between shapes ── */}
      <AnimatePresence mode="wait">
        <motion.g
          key={shape}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeInOut" }}
        >
          {FINGERS.map(f => {
            const np       = nailPath(shape, f.nw, f.nh);
            const fillId   = color.metallic ? "nm" : "ng";
            const cuticleY = f.tipY + f.nh;

            return (
              <g key={`nail-${f.id}`} transform={`translate(${f.cx},${cuticleY})`}>
                {/* Nail fill */}
                <path d={np} fill={`url(#${fillId})`} />

                {/* Nail border */}
                <path d={np} fill="none"
                  stroke={dark} strokeWidth="0.8" strokeOpacity="0.50"
                />

                {/* Lateral nail fold shadow (skin strip each side of the nail) */}
                <rect
                  x={-f.nw / 2 - 3} y={-f.nh * 0.92}
                  width="3" height={f.nh * 0.86}
                  fill="rgba(140,80,30,0.10)" rx="1"
                />
                <rect
                  x={f.nw / 2} y={-f.nh * 0.92}
                  width="3" height={f.nh * 0.86}
                  fill="rgba(140,80,30,0.10)" rx="1"
                />

                {/* Cuticle arc */}
                <path
                  d={`M${-f.nw / 2},0 Q0,${-11} ${f.nw / 2},0`}
                  fill="none" stroke={mid}
                  strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.50"
                />

                {/* Lunula */}
                <ellipse
                  cx={0} cy={-f.nh * 0.12}
                  rx={f.nw * 0.26} ry={f.nh * 0.085}
                  fill="white" opacity="0.16"
                />

                {/* Gloss — blurred soft highlight */}
                <ellipse
                  cx={-f.nw * 0.14} cy={-f.nh * 0.68}
                  rx={f.nw * 0.20}   ry={f.nh * 0.19}
                  fill="white" opacity="0.32"
                  filter="url(#gb)"
                />

                {/* Gloss — sharp inner streak */}
                <ellipse
                  cx={-f.nw * 0.11} cy={-f.nh * 0.65}
                  rx={f.nw * 0.065}  ry={f.nh * 0.22}
                  fill="white" opacity="0.26"
                />
              </g>
            );
          })}
        </motion.g>
      </AnimatePresence>
    </svg>
  );
}

/* ── Main export ────────────────────────────────────────────────────────── */
export function NailCustomizer() {
  const [shape, setShape] = useState<ShapeKey>("rounded");
  const [color, setColor] = useState<ColorEntry>(COLORS[4]); // hot-pink

  return (
    <section id="nail-customizer" className="relative py-24 px-6 overflow-hidden">
      <style>{`
        @keyframes nc-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
      `}</style>

      <div className="mx-auto max-w-5xl">

        <BlurFade delay={0.1} inView>
          <p className="text-center text-xs font-medium uppercase tracking-[0.4em] text-mauve-light font-sans mb-4">
            Try It On
          </p>
          <h2 className="text-center font-serif text-4xl md:text-5xl font-light text-white leading-tight">
            Nail Customizer
          </h2>
          <div className="mx-auto mt-5 mb-16 h-px w-16 bg-mauve/40" />
        </BlurFade>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* ── Illustration ───────────────────────────────── */}
          <BlurFade delay={0.2} inView>
            <div
              className="relative flex-shrink-0"
              style={{
                filter: "drop-shadow(0 22px 44px rgba(0,0,0,0.50))",
                width: "clamp(220px, 40vw, 300px)",
              }}
            >
              <HandSVG shape={shape} color={color} />

              {color.metallic && (
                <div
                  className="absolute inset-0 pointer-events-none rounded"
                  style={{
                    background: color.id === "gold"
                      ? "linear-gradient(120deg, transparent 20%, rgba(255,215,60,0.18) 50%, transparent 80%)"
                      : "linear-gradient(120deg, transparent 20%, rgba(200,220,255,0.18) 50%, transparent 80%)",
                    backgroundSize: "200% 100%",
                    animation: "nc-shimmer 2s linear infinite",
                    mixBlendMode: "screen",
                  }}
                />
              )}
            </div>
          </BlurFade>

          {/* ── Controls ───────────────────────────────────── */}
          <div className="flex-1 w-full max-w-xs space-y-10">

            <BlurFade delay={0.3} inView>
              <p className="text-xs uppercase tracking-[0.35em] text-mauve-light font-sans mb-5">
                Shape
              </p>
              <div className="flex flex-wrap gap-2">
                {SHAPE_ORDER.map(s => (
                  <button
                    key={s}
                    onClick={() => setShape(s)}
                    className={`
                      px-4 py-2 rounded-full border text-xs font-sans
                      uppercase tracking-[0.15em] transition-all duration-200
                      ${shape === s
                        ? "bg-mauve border-mauve text-white"
                        : "border-white/20 text-white/55 hover:border-mauve/50 hover:text-white/80"
                      }
                    `}
                  >
                    {SHAPE_LABELS[s]}
                  </button>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div className="flex items-baseline gap-3 mb-5">
                <p className="text-xs uppercase tracking-[0.35em] text-mauve-light font-sans">
                  Colour
                </p>
                <span className="text-white/40 text-xs font-sans">{color.label}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {COLORS.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setColor(c)}
                    title={c.label}
                    className={`
                      w-8 h-8 rounded-full transition-all duration-200 focus-visible:outline-none
                      ${color.id === c.id
                        ? "ring-2 ring-mauve ring-offset-2 ring-offset-charcoal scale-110"
                        : "hover:scale-105 hover:ring-1 hover:ring-white/30"
                      }
                    `}
                    style={c.metallic
                      ? {
                          background: c.id === "gold"
                            ? "linear-gradient(135deg,#7A5000 0%,#F0C030 40%,#C89020 60%,#7A5000 100%)"
                            : "linear-gradient(135deg,#606070 0%,#E8EAF5 40%,#A8B0C0 60%,#606070 100%)",
                        }
                      : {
                          backgroundColor: c.hex,
                          boxShadow: c.id === "white"
                            ? "inset 0 0 0 1px rgba(200,200,200,0.5)"
                            : undefined,
                        }
                    }
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
