"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

/*
 * Nail shapes — matched to the 18313 illustration (front-facing realistic finger)
 *
 * Path template:
 *   M[0][1] Q[2][3][4][5] L[6][7] Q[8][9][10][11] Q[12][13][0][1] Z
 *
 * viewBox "0 0 140 230", nail centred at x=70, cuticle base at y=108.
 */
const SHAPE_KEYS = ["round", "almond", "coffin", "square", "stiletto"] as const;
type ShapeKey = typeof SHAPE_KEYS[number];

const SHAPES: Record<ShapeKey, number[]> = {
  //           lBx lBy  lCx lCy  lTx lTy   rTx rTy  rCx  rCy  rBx rBy   cCx cCy
  round:    [  30, 108,  30,  80,  70,  60,  70,  60, 110,  80, 110, 108,  70, 120 ],
  almond:   [  32, 108,  32,  62,  70,  28,  70,  28, 108,  62, 108, 108,  70, 120 ],
  coffin:   [  30, 108,  40,  74,  44,  50,  96,  50, 100,  74, 110, 108,  70, 120 ],
  square:   [  28, 108,  28,  68,  32,  48, 108,  48, 112,  68, 112, 108,  70, 120 ],
  stiletto: [  32, 108,  38,  68,  70,   6,  70,   6, 102,  68, 108, 108,  70, 120 ],
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
  { id: "gold",       hex: "#D4AF37", label: "Gold",        metallic: true, gradId: "nail-gold"   },
  { id: "silver",     hex: "#A8A8C0", label: "Silver",      metallic: true, gradId: "nail-silver" },
] as const;
type Color = typeof COLORS[number];

/* ── Helpers ─────────────────────────────────────────────────────────────── */
function makePath(c: number[]): string {
  return `M${c[0]} ${c[1]} Q${c[2]} ${c[3]} ${c[4]} ${c[5]} L${c[6]} ${c[7]} Q${c[8]} ${c[9]} ${c[10]} ${c[11]} Q${c[12]} ${c[13]} ${c[0]} ${c[1]}Z`;
}
function ease(t: number) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

/* ── Component ──────────────────────────────────────────────────────────── */
export function NailCustomizer() {
  const [activeShape, setActiveShape] = useState<ShapeKey>("almond");
  const [activeColor, setActiveColor] = useState<Color>(COLORS[4]); // hot-pink

  const nailEl    = useRef<SVGPathElement | null>(null);
  const glossEl   = useRef<SVGPathElement | null>(null);
  const gloss2El  = useRef<SVGPathElement | null>(null);

  const cur  = useRef([...SHAPES.almond]);
  const from = useRef([...SHAPES.almond]);
  const to   = useRef([...SHAPES.almond]);
  const raf  = useRef(0);

  const draw = useCallback(() => {
    const p = makePath(cur.current);
    nailEl.current?.setAttribute("d", p);
    glossEl.current?.setAttribute("d", p);
    gloss2El.current?.setAttribute("d", p);
  }, []);

  const morphTo = useCallback((shape: ShapeKey) => {
    cancelAnimationFrame(raf.current);
    from.current = [...cur.current];
    to.current   = [...SHAPES[shape]];
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = ease(Math.min((now - t0) / 380, 1));
      cur.current = from.current.map((v, i) => v + (to.current[i] - v) * t);
      draw();
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, [draw]);

  useEffect(() => { draw(); return () => cancelAnimationFrame(raf.current); }, [draw]);

  const nailFill = activeColor.metallic
    ? `url(#${"gradId" in activeColor ? activeColor.gradId : ""})`
    : activeColor.hex;

  return (
    <section id="nail-customizer" className="relative py-24 px-6 overflow-hidden">
      <style>{`@keyframes sw-shimmer{0%{background-position:0% 50%}100%{background-position:200% 50%}}`}</style>

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

          {/* ── Realistic finger SVG matching 18313 illustration ──── */}
          <BlurFade delay={0.2} inView>
            <svg
              viewBox="0 0 140 230"
              className="w-[130px] lg:w-[150px] h-auto flex-shrink-0"
              style={{ filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.35))" }}
              aria-label="Interactive nail shape and colour customizer"
            >
              <defs>

                {/* ══ FINGER GRADIENTS ══════════════════════════════ */}

                {/* Base skin tone — warm peach */}
                {/* (applied as rect fill, not gradient) */}

                {/* Cylindrical side-to-side shading — the 3D roundness effect */}
                <linearGradient id="skin-cylinder" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#B8603A" stopOpacity="0.55"/>
                  <stop offset="12%"  stopColor="#D4845A" stopOpacity="0.25"/>
                  <stop offset="30%"  stopColor="#F8D0B0" stopOpacity="0.00"/>
                  <stop offset="70%"  stopColor="#F8D0B0" stopOpacity="0.00"/>
                  <stop offset="88%"  stopColor="#D4845A" stopOpacity="0.25"/>
                  <stop offset="100%" stopColor="#B8603A" stopOpacity="0.55"/>
                </linearGradient>

                {/* Centre highlight — the bright stripe down the middle of the finger */}
                <radialGradient id="skin-center-hi" cx="50%" cy="38%" r="38%">
                  <stop offset="0%"   stopColor="#FDE8D0" stopOpacity="0.55"/>
                  <stop offset="100%" stopColor="#FDE8D0" stopOpacity="0.00"/>
                </radialGradient>

                {/* Bottom-tip warm shadow */}
                <radialGradient id="skin-tip" cx="50%" cy="92%" r="40%">
                  <stop offset="0%"   stopColor="#C07050" stopOpacity="0.28"/>
                  <stop offset="100%" stopColor="#C07050" stopOpacity="0.00"/>
                </radialGradient>

                {/* Upper knuckle area — slightly cooler/pinker */}
                <radialGradient id="skin-knuckle" cx="50%" cy="72%" r="35%">
                  <stop offset="0%"   stopColor="#E8907A" stopOpacity="0.20"/>
                  <stop offset="100%" stopColor="#E8907A" stopOpacity="0.00"/>
                </radialGradient>

                {/* ══ NAIL GRADIENTS ════════════════════════════════ */}

                {/* Primary gloss — bright white streak upper-left (matching illustration) */}
                <linearGradient id="nail-gloss-1" x1="5%" y1="3%" x2="60%" y2="70%">
                  <stop offset="0%"   stopColor="white" stopOpacity="0.72"/>
                  <stop offset="25%"  stopColor="white" stopOpacity="0.30"/>
                  <stop offset="55%"  stopColor="white" stopOpacity="0.00"/>
                </linearGradient>

                {/* Secondary gloss — softer lower-right reflection */}
                <linearGradient id="nail-gloss-2" x1="40%" y1="55%" x2="95%" y2="100%">
                  <stop offset="0%"   stopColor="white" stopOpacity="0.00"/>
                  <stop offset="60%"  stopColor="white" stopOpacity="0.12"/>
                  <stop offset="100%" stopColor="white" stopOpacity="0.22"/>
                </linearGradient>

                {/* Nail depth — darkens bottom and lateral edges slightly */}
                <radialGradient id="nail-depth" cx="50%" cy="50%" r="55%">
                  <stop offset="55%"  stopColor="black" stopOpacity="0.00"/>
                  <stop offset="100%" stopColor="black" stopOpacity="0.18"/>
                </radialGradient>

                {/* Gold shimmer */}
                <linearGradient id="nail-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#9A6800"/>
                  <stop offset="35%"  stopColor="#D4AF37"/>
                  <stop offset="50%"  stopColor="#FFD700"/>
                  <stop offset="70%"  stopColor="#D4AF37"/>
                  <stop offset="100%" stopColor="#9A6800"/>
                  <animateTransform attributeName="gradientTransform" type="rotate"
                    values="0 0.5 0.5;360 0.5 0.5" dur="2.8s" repeatCount="indefinite"/>
                </linearGradient>

                {/* Silver shimmer */}
                <linearGradient id="nail-silver" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#707080"/>
                  <stop offset="35%"  stopColor="#B8B8C8"/>
                  <stop offset="50%"  stopColor="#EBEBF8"/>
                  <stop offset="70%"  stopColor="#B8B8C8"/>
                  <stop offset="100%" stopColor="#707080"/>
                  <animateTransform attributeName="gradientTransform" type="rotate"
                    values="0 0.5 0.5;360 0.5 0.5" dur="2.2s" repeatCount="indefinite"/>
                </linearGradient>

                {/* Nail clip so gloss stays inside nail shape */}
                <clipPath id="nail-clip">
                  <path id="nail-clip-path"/>
                </clipPath>

              </defs>

              {/* ═══════════════════════════════════════════════════
                  FINGER BODY — multiple gradient passes for realism
                  ═══════════════════════════════════════════════════ */}

              {/* 1 — Base skin colour */}
              <path
                d="M 30 112 L 30 196 Q 30 224 70 224 Q 110 224 110 196 L 110 112
                   Q 110 96 70 94 Q 30 96 30 112 Z"
                fill="#F2B48A"
              />

              {/* 2 — Cylindrical left/right shading (3D roundness) */}
              <path
                d="M 30 112 L 30 196 Q 30 224 70 224 Q 110 224 110 196 L 110 112
                   Q 110 96 70 94 Q 30 96 30 112 Z"
                fill="url(#skin-cylinder)"
              />

              {/* 3 — Central highlight */}
              <path
                d="M 30 112 L 30 196 Q 30 224 70 224 Q 110 224 110 196 L 110 112
                   Q 110 96 70 94 Q 30 96 30 112 Z"
                fill="url(#skin-center-hi)"
              />

              {/* 4 — Tip warm shadow */}
              <path
                d="M 30 112 L 30 196 Q 30 224 70 224 Q 110 224 110 196 L 110 112
                   Q 110 96 70 94 Q 30 96 30 112 Z"
                fill="url(#skin-tip)"
              />

              {/* 5 — Knuckle blush */}
              <path
                d="M 30 112 L 30 196 Q 30 224 70 224 Q 110 224 110 196 L 110 112
                   Q 110 96 70 94 Q 30 96 30 112 Z"
                fill="url(#skin-knuckle)"
              />

              {/* Knuckle crease lines */}
              <path d="M 36 172 Q 70 167 104 172"
                fill="none" stroke="#C07050" strokeWidth="1.2"
                strokeLinecap="round" opacity="0.45"/>
              <path d="M 38 183 Q 70 178 102 183"
                fill="none" stroke="#C07050" strokeWidth="0.8"
                strokeLinecap="round" opacity="0.28"/>
              <path d="M 41 193 Q 70 189 99 193"
                fill="none" stroke="#C07050" strokeWidth="0.6"
                strokeLinecap="round" opacity="0.18"/>

              {/* Fingertip pad central highlight */}
              <ellipse cx="70" cy="215" rx="18" ry="5.5"
                fill="white" opacity="0.09"/>

              {/* ═══════════════════════════════════════════════════
                  NAIL — shadow under nail, then nail plate + gloss
                  ═══════════════════════════════════════════════════ */}

              {/* Shadow at nail base (depth effect) */}
              <ellipse cx="70" cy="108" rx="40" ry="6"
                fill="#8A4020" opacity="0.18"/>

              {/* ── Nail plate ── coloured, morphing ── */}
              <path
                ref={nailEl}
                fill={nailFill}
                stroke="rgba(0,0,0,0.08)"
                strokeWidth={0.5}
              />

              {/* ── Nail depth shadow at edges (same path) ── */}
              <path
                ref={glossEl}
                fill="url(#nail-depth)"
              />

              {/* ── Nail primary gloss (same path) ── */}
              <path
                ref={gloss2El}
                fill="url(#nail-gloss-1)"
              />

              {/* Secondary lower-right gloss — static ellipse positioned at
                  nail lower area; subtle secondary highlight matching illustration */}
              <ellipse cx="82" cy="95" rx="10" ry="8"
                fill="white" opacity="0.13"/>

              {/* Lunula — white half-moon at cuticle base */}
              <ellipse cx="70" cy="106" rx="20" ry="7"
                fill="white" opacity="0.28"/>

              {/* ── Cuticle fold — skin crescent over nail base ── */}
              <path
                d="M 30 108 Q 70 98 110 108 Q 70 118 30 108 Z"
                fill="#F2B48A"
                opacity={0.90}
              />
              {/* Cuticle shading (cylinder gradient applied again) */}
              <path
                d="M 30 108 Q 70 98 110 108 Q 70 118 30 108 Z"
                fill="url(#skin-cylinder)"
                opacity={0.65}
              />

            </svg>
          </BlurFade>

          {/* ── Controls ─────────────────────────────────────────────── */}
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
                    onClick={() => { setActiveShape(s); morphTo(s); }}
                    className={`px-4 py-2 rounded-full border text-xs font-sans uppercase tracking-[0.15em]
                      transition-all duration-200
                      ${activeShape === s
                        ? "bg-mauve border-mauve text-white"
                        : "border-white/20 text-white/55 hover:border-mauve/50 hover:text-white/80"}`}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </BlurFade>

            {/* Color picker */}
            <BlurFade delay={0.4} inView>
              <div className="flex items-baseline gap-3 mb-4">
                <p className="text-xs uppercase tracking-[0.3em] text-mauve-light font-sans">
                  Colour
                </p>
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
                          animation: "sw-shimmer 2s linear infinite",
                        }
                      : {
                          backgroundColor: c.hex,
                          boxShadow: c.hex === "#F8F5F0"
                            ? "inset 0 0 0 1px rgba(255,255,255,0.25)"
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
