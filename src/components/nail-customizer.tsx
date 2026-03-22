"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

/*
 * Nail shapes — matched to the illustration (18313.svg):
 *   round · square · coffin · almond · stiletto
 *
 * Path template:
 *   M[0][1] Q[2][3][4][5] L[6][7] Q[8][9][10][11] Q[12][13][0][1] Z
 *
 * Coordinate system: viewBox "0 0 120 280"
 *   Nail centred at x=60, cuticle base at y=128.
 *   [leftBaseX, leftBaseY, leftCtrlX, leftCtrlY, leftTipX,  leftTipY,
 *    rightTipX, rightTipY, rightCtrlX,rightCtrlY, rightBaseX,rightBaseY,
 *    cuticleCtrlX, cuticleCtrlY]
 */
const SHAPE_KEYS = ["round", "almond", "coffin", "square", "stiletto"] as const;
type ShapeKey = typeof SHAPE_KEYS[number];

const SHAPES: Record<ShapeKey, number[]> = {
  //           lBx lBy  lCx lCy  lTx lTy   rTx rTy  rCx rCy  rBx rBy   cCx cCy
  round:    [  26, 128,  26,  90,  60,  66,  60,  66,  94,  90,  94, 128,  60, 140 ],
  almond:   [  28, 128,  28,  70,  60,  36,  60,  36,  92,  70,  92, 128,  60, 140 ],
  coffin:   [  26, 128,  34,  76,  40,  50,  80,  50,  86,  76,  94, 128,  60, 140 ],
  square:   [  24, 128,  24,  72,  27,  50,  93,  50,  96,  72,  96, 128,  60, 140 ],
  stiletto: [  28, 128,  36,  72,  60,   8,  60,   8,  84,  72,  92, 128,  60, 140 ],
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
  const [activeColor, setActiveColor] = useState<Color>(COLORS[4]); // hot-pink default

  const nailEl  = useRef<SVGPathElement | null>(null);
  const shineEl = useRef<SVGPathElement | null>(null);

  const cur  = useRef([...SHAPES.almond]);
  const from = useRef([...SHAPES.almond]);
  const to   = useRef([...SHAPES.almond]);
  const raf  = useRef(0);

  const draw = useCallback(() => {
    const p = makePath(cur.current);
    nailEl.current?.setAttribute("d", p);
    shineEl.current?.setAttribute("d", p);
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

          {/* ── Finger SVG — styled after illustration 18313.svg ─── */}
          <BlurFade delay={0.2} inView>
            <svg
              viewBox="0 0 120 280"
              className="w-[110px] lg:w-[130px] h-auto flex-shrink-0"
              style={{ filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.28))" }}
              aria-label="Interactive nail shape and colour customizer"
            >
              <defs>
                {/* ── Finger skin gradient — cylincrical 3-D look ── */}
                <linearGradient id="skin-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#D99070" stopOpacity="0.55"/>
                  <stop offset="18%"  stopColor="#F5C5A2" stopOpacity="0"/>
                  <stop offset="82%"  stopColor="#F5C5A2" stopOpacity="0"/>
                  <stop offset="100%" stopColor="#D08060" stopOpacity="0.50"/>
                </linearGradient>

                {/* ── Fingertip underside shading ── */}
                <radialGradient id="tip-grad" cx="50%" cy="90%" r="55%">
                  <stop offset="0%"   stopColor="#C08060" stopOpacity="0.18"/>
                  <stop offset="100%" stopColor="#C08060" stopOpacity="0"/>
                </radialGradient>

                {/* ── Nail gloss — white highlight upper-left to dark lower-right ── */}
                <linearGradient id="nail-gloss" x1="8%" y1="4%" x2="88%" y2="96%">
                  <stop offset="0%"   stopColor="white" stopOpacity="0.52"/>
                  <stop offset="30%"  stopColor="white" stopOpacity="0.16"/>
                  <stop offset="100%" stopColor="black" stopOpacity="0.14"/>
                </linearGradient>

                {/* ── Nail edge inner shadow ── */}
                <linearGradient id="nail-edge" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="black" stopOpacity="0.18"/>
                  <stop offset="12%"  stopColor="black" stopOpacity="0"/>
                  <stop offset="88%"  stopColor="black" stopOpacity="0"/>
                  <stop offset="100%" stopColor="black" stopOpacity="0.18"/>
                </linearGradient>

                {/* ── Gold shimmer ── */}
                <linearGradient id="nail-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#9A6800"/>
                  <stop offset="35%"  stopColor="#D4AF37"/>
                  <stop offset="50%"  stopColor="#FFD700"/>
                  <stop offset="70%"  stopColor="#D4AF37"/>
                  <stop offset="100%" stopColor="#9A6800"/>
                  <animateTransform attributeName="gradientTransform" type="rotate"
                    values="0 0.5 0.5;360 0.5 0.5" dur="2.8s" repeatCount="indefinite"/>
                </linearGradient>

                {/* ── Silver shimmer ── */}
                <linearGradient id="nail-silver" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#707080"/>
                  <stop offset="35%"  stopColor="#B8B8C8"/>
                  <stop offset="50%"  stopColor="#EBEBF8"/>
                  <stop offset="70%"  stopColor="#B8B8C8"/>
                  <stop offset="100%" stopColor="#707080"/>
                  <animateTransform attributeName="gradientTransform" type="rotate"
                    values="0 0.5 0.5;360 0.5 0.5" dur="2.2s" repeatCount="indefinite"/>
                </linearGradient>
              </defs>

              {/* ═══ FINGER BODY ═══════════════════════════════════════ */}

              {/* Main finger shape — warm peach base */}
              <path
                d="M 26 132
                   L 26 238 Q 26 268 60 268 Q 94 268 94 238
                   L 94 132 Q 94 118 60 116 Q 26 118 26 132 Z"
                fill="#F5C5A2"
              />

              {/* Side shading — makes finger look round/cylindrical */}
              <path
                d="M 26 132
                   L 26 238 Q 26 268 60 268 Q 94 268 94 238
                   L 94 132 Q 94 118 60 116 Q 26 118 26 132 Z"
                fill="url(#skin-grad)"
              />

              {/* Fingertip roundness shadow */}
              <path
                d="M 26 132
                   L 26 238 Q 26 268 60 268 Q 94 268 94 238
                   L 94 132 Q 94 118 60 116 Q 26 118 26 132 Z"
                fill="url(#tip-grad)"
              />

              {/* First knuckle crease */}
              <path
                d="M 33 200 Q 60 195 87 200"
                fill="none" stroke="#C99078" strokeWidth="1.4"
                strokeLinecap="round" opacity="0.55"/>
              <path
                d="M 35 210 Q 60 205 85 210"
                fill="none" stroke="#C99078" strokeWidth="0.9"
                strokeLinecap="round" opacity="0.35"/>

              {/* Skin texture dot at knuckle */}
              <ellipse cx="60" cy="203" rx="8" ry="2.5" fill="#C99078" opacity="0.10"/>

              {/* Fingertip pad highlight */}
              <ellipse cx="60" cy="257" rx="16" ry="5" fill="white" opacity="0.10"/>

              {/* ═══ NAIL PLATE ════════════════════════════════════════ */}

              {/* Nail base shadow (underneath nail) */}
              <path
                d="M 26 132 Q 60 122 94 132 Q 60 140 26 132 Z"
                fill="#B08070" opacity="0.20"/>

              {/* Nail fill — morphing, coloured */}
              <path
                ref={nailEl}
                fill={nailFill}
                stroke="rgba(0,0,0,0.10)"
                strokeWidth={0.5}
              />

              {/* Nail gloss overlay — same morphing path */}
              <path
                ref={shineEl}
                fill="url(#nail-gloss)"
                stroke="none"
              />


              {/* Lunula — white half-moon at nail base */}
              <ellipse
                cx="60" cy="125" rx="18" ry="7"
                fill="white" opacity="0.30"/>

              {/* Cuticle fold — skin crescent drawn over the nail base */}
              <path
                d="M 26 128 Q 60 118 94 128 Q 60 138 26 128 Z"
                fill="#F5C5A2"
                opacity={0.85}
              />

              {/* Cuticle fold shading (sides darker) */}
              <path
                d="M 26 128 Q 60 118 94 128 Q 60 138 26 128 Z"
                fill="url(#skin-grad)"
                opacity={0.6}
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
                  href="#booking"
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
