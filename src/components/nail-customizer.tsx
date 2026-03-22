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
// cx = finger centre x | tipY = y of rounded fingertip top
// fw = finger width    | nw   = nail plate width | nh = nail plate height
const FINGERS = [
  { id: "index",  cx: 60,  tipY: 95,  fw: 52, nw: 43, nh: 78 },
  { id: "middle", cx: 136, tipY: 65,  fw: 56, nw: 47, nh: 86 },
  { id: "ring",   cx: 210, tipY: 86,  fw: 52, nw: 43, nh: 78 },
  { id: "pinky",  cx: 274, tipY: 136, fw: 42, nw: 34, nh: 62 },
] as const;

/* ── Path helpers ───────────────────────────────────────────────────────── */

/** Rounded-rectangle finger body. Extends to y=460 (off screen). */
function fingerPath(cx: number, tipY: number, fw: number): string {
  const hw = fw / 2;
  const r  = hw * 0.85;
  return (
    `M${cx - hw},460 ` +
    `L${cx - hw},${tipY + r} ` +
    `Q${cx - hw},${tipY} ${cx},${tipY} ` +
    `Q${cx + hw},${tipY} ${cx + hw},${tipY + r} ` +
    `L${cx + hw},460 Z`
  );
}

/**
 * Nail plate path — local coords.
 * Origin (0,0) = cuticle centre.  Tip = y = −nh.
 */
function nailPath(shape: ShapeKey, nw: number, nh: number): string {
  const hw = nw / 2;
  switch (shape) {
    case "square":
      return `M${-hw},0 L${-hw},${-nh} L${hw},${-nh} L${hw},0 Z`;

    case "rounded": {
      const r = Math.min(hw * 0.95, nh * 0.55);
      return (
        `M${-hw},0 ` +
        `L${-hw},${-(nh - r)} ` +
        `Q${-hw},${-nh} 0,${-nh} ` +
        `Q${hw},${-nh} ${hw},${-(nh - r)} ` +
        `L${hw},0 Z`
      );
    }

    case "almond":
      return (
        `M${-hw},0 ` +
        `L${-hw * 0.88},${-nh * 0.48} ` +
        `Q${-hw * 0.18},${-nh} 0,${-nh} ` +
        `Q${hw * 0.18},${-nh} ${hw * 0.88},${-nh * 0.48} ` +
        `L${hw},0 Z`
      );

    case "stiletto":
      return (
        `M${-hw},0 ` +
        `L${-hw},${-nh * 0.5} ` +
        `L0,${-nh} ` +
        `L${hw},${-nh * 0.5} ` +
        `L${hw},0 Z`
      );

    case "ballerina": {
      const tw = hw * 0.54; // flat-top half-width
      return (
        `M${-hw},0 ` +
        `L${-hw},${-nh * 0.44} ` +
        `L${-tw},${-nh} ` +
        `L${tw},${-nh} ` +
        `L${hw},${-nh * 0.44} ` +
        `L${hw},0 Z`
      );
    }
  }
}

/* ── Colour helpers ─────────────────────────────────────────────────────── */
function adjustHex(hex: string, amt: number): string {
  const c = (ch: string) =>
    Math.max(0, Math.min(255, parseInt(hex.slice(ch === "r" ? 1 : ch === "g" ? 3 : 5, ch === "r" ? 3 : ch === "g" ? 5 : 7), 16) + amt));
  return `rgb(${c("r")},${c("g")},${c("b")})`;
}

/* ── Hand SVG ───────────────────────────────────────────────────────────── */
function HandSVG({ shape, color }: { shape: ShapeKey; color: ColorEntry }) {
  const dark  = adjustHex(color.hex, -50);
  const mid   = adjustHex(color.hex, -25);
  const light = adjustHex(color.hex, 60);

  return (
    <svg
      viewBox="0 0 334 440"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 290, display: "block" }}
      aria-label="Interactive nail shape and colour preview"
    >
      <defs>
        {/* ─ Skin horizontal (light centre) ─ */}
        <linearGradient id="sk" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#9E5E32" />
          <stop offset="22%"  stopColor="#CC8A5A" />
          <stop offset="50%"  stopColor="#DCA070" />
          <stop offset="78%"  stopColor="#CC8A5A" />
          <stop offset="100%" stopColor="#9E5E32" />
        </linearGradient>

        {/* ─ Skin vertical (subtle depth at base) ─ */}
        <linearGradient id="skv" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(0,0,0,0)"   />
          <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
        </linearGradient>

        {/* ─ Nail solid gradient ─ */}
        <linearGradient id="ng" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%"   stopColor={dark}       />
          <stop offset="38%"  stopColor={color.hex}  />
          <stop offset="100%" stopColor={light}      />
        </linearGradient>

        {/* ─ Metallic diagonal gradient ─ */}
        <linearGradient id="nm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={dark}       />
          <stop offset="28%"  stopColor={light}      />
          <stop offset="50%"  stopColor={color.hex}  />
          <stop offset="72%"  stopColor={light}      />
          <stop offset="100%" stopColor={dark}       />
        </linearGradient>

        {/* ─ Finger drop shadow ─ */}
        <filter id="fsh" x="-25%" y="-5%" width="150%" height="118%">
          <feDropShadow dx="0" dy="5" stdDeviation="7"
            floodColor="#000" floodOpacity="0.38" />
        </filter>

        {/* ─ Gloss blur ─ */}
        <filter id="gb" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>

        {/* ─ Subtle nail glow ─ */}
        <filter id="nglow" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Finger bodies ── */}
      {FINGERS.map(f => (
        <g key={`body-${f.id}`} filter="url(#fsh)">
          {/* Base skin */}
          <path d={fingerPath(f.cx, f.tipY, f.fw)} fill="url(#sk)" />
          {/* Vertical depth */}
          <path d={fingerPath(f.cx, f.tipY, f.fw)} fill="url(#skv)" />
          {/* Outline */}
          <path
            d={fingerPath(f.cx, f.tipY, f.fw)}
            fill="none"
            stroke="#7A4420"
            strokeWidth="0.8"
            strokeOpacity="0.28"
          />
          {/* Knuckle crease 1 */}
          <line
            x1={f.cx - f.fw * 0.30} y1={f.tipY + f.nh + 28}
            x2={f.cx + f.fw * 0.30} y2={f.tipY + f.nh + 28}
            stroke="#8A5230" strokeWidth="1.0"
            strokeOpacity="0.32" strokeLinecap="round"
          />
          {/* Knuckle crease 2 */}
          <line
            x1={f.cx - f.fw * 0.22} y1={f.tipY + f.nh + 36}
            x2={f.cx + f.fw * 0.22} y2={f.tipY + f.nh + 36}
            stroke="#8A5230" strokeWidth="0.7"
            strokeOpacity="0.22" strokeLinecap="round"
          />
        </g>
      ))}

      {/* ── Nail plates (fade on shape change) ── */}
      <AnimatePresence mode="wait">
        <motion.g
          key={shape}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {FINGERS.map(f => {
            const np      = nailPath(shape, f.nw, f.nh);
            const fillId  = color.metallic ? "nm" : "ng";
            const tx      = f.cx;
            const ty      = f.tipY + f.nh;

            return (
              <g key={`nail-${f.id}`} transform={`translate(${tx},${ty})`}>
                {/* ─ Main nail fill ─ */}
                <path d={np} fill={`url(#${fillId})`} />

                {/* ─ Nail border ─ */}
                <path
                  d={np}
                  fill="none"
                  stroke={dark}
                  strokeWidth="0.9"
                  strokeOpacity="0.5"
                />

                {/* ─ Cuticle arc ─ */}
                <path
                  d={`M${-f.nw / 2},0 Q0,${-10} ${f.nw / 2},0`}
                  fill="none"
                  stroke={mid}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeOpacity="0.55"
                />

                {/* ─ Lunula / half-moon ─ */}
                <ellipse
                  cx={0} cy={-f.nh * 0.13}
                  rx={f.nw * 0.28} ry={f.nh * 0.09}
                  fill="white" opacity="0.14"
                />

                {/* ─ Gloss — soft blurred area ─ */}
                <ellipse
                  cx={-f.nw * 0.15} cy={-f.nh * 0.70}
                  rx={f.nw * 0.22}  ry={f.nh * 0.20}
                  fill="white" opacity="0.30"
                  filter="url(#gb)"
                />

                {/* ─ Gloss — sharp inner streak ─ */}
                <ellipse
                  cx={-f.nw * 0.12} cy={-f.nh * 0.67}
                  rx={f.nw * 0.07}  ry={f.nh * 0.24}
                  fill="white" opacity="0.24"
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

        {/* Heading */}
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
                filter: "drop-shadow(0 28px 52px rgba(0,0,0,0.6))",
                width: "clamp(210px, 38vw, 290px)",
              }}
            >
              <HandSVG shape={shape} color={color} />

              {/* Metallic shimmer overlay */}
              {color.metallic && (
                <div
                  className="absolute inset-0 pointer-events-none rounded"
                  style={{
                    background: color.id === "gold"
                      ? "linear-gradient(120deg, transparent 20%, rgba(255,215,60,0.20) 50%, transparent 80%)"
                      : "linear-gradient(120deg, transparent 20%, rgba(200,220,255,0.20) 50%, transparent 80%)",
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

            {/* Shape picker */}
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

            {/* Colour picker */}
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
