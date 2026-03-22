"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

/* ── Nail shape data ──────────────────────────────────────────────────────
   Template: M[0][1] Q[2][3][4][5] L[6][7] Q[8][9][10][11] Q[12][13][0][1] Z
   Single front-facing finger view; nail centered at x=80, cuticle at y=148.
   [leftBaseX, leftBaseY, leftCtrlX, leftCtrlY, leftTipX, leftTipY,
    rightTipX, rightTipY, rightCtrlX, rightCtrlY, rightBaseX, rightBaseY,
    cuticleCtrlX, cuticleCtrlY]                                             */
const SHAPE_KEYS = ["round", "almond", "coffin", "square", "stiletto"] as const;
type ShapeKey = typeof SHAPE_KEYS[number];

const SHAPES: Record<ShapeKey, number[]> = {
  //           lBx  lBy  lCx  lCy  lTx  lTy   rTx  rTy  rCx  rCy  rBx  rBy   cCx  cCy
  round:    [  42, 148,  42,  94,  80,  60,   80,  60, 118,  94, 118, 148,   80, 162 ],
  almond:   [  44, 148,  44,  68,  80,  28,   80,  28, 116,  68, 116, 148,   80, 162 ],
  coffin:   [  42, 148,  52,  88,  58,  48,  102,  48, 108,  88, 118, 148,   80, 162 ],
  square:   [  40, 148,  40,  78,  46,  50,  114,  50, 120,  78, 120, 148,   80, 162 ],
  stiletto: [  46, 148,  52,  80,  80,   5,   80,   5, 108,  80, 114, 148,   80, 162 ],
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
  // M start  Q left-side  L flat-top-or-point  Q right-side  Q cuticle-close Z
  return `M${c[0]} ${c[1]} Q${c[2]} ${c[3]} ${c[4]} ${c[5]} L${c[6]} ${c[7]} Q${c[8]} ${c[9]} ${c[10]} ${c[11]} Q${c[12]} ${c[13]} ${c[0]} ${c[1]}Z`;
}
function ease(t: number) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

const SKIN = "#EAB896";

/* ── Component ──────────────────────────────────────────────────────────── */
export function NailCustomizer() {
  const [activeShape, setActiveShape] = useState<ShapeKey>("almond");
  const [activeColor, setActiveColor] = useState<Color>(COLORS[1]);

  /* Two path elements share the same morphing `d` attribute */
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

          {/* ── Single finger SVG ─────────────────────────────────── */}
          <BlurFade delay={0.2} inView>
            <svg
              viewBox="0 0 160 330"
              className="w-[130px] lg:w-[155px] h-auto drop-shadow-2xl flex-shrink-0"
              aria-label="Interactive nail customizer"
            >
              <defs>
                {/* Gloss overlay applied to the nail path */}
                <linearGradient id="nail-gloss" x1="10%" y1="5%" x2="85%" y2="95%">
                  <stop offset="0%"   stopColor="white" stopOpacity="0.48"/>
                  <stop offset="28%"  stopColor="white" stopOpacity="0.14"/>
                  <stop offset="100%" stopColor="black" stopOpacity="0.13"/>
                </linearGradient>

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

                {/* Finger side-shading gradient (lighter centre → darker edges) */}
                <linearGradient id="finger-shade" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%"   stopColor="#000" stopOpacity="0.10"/>
                  <stop offset="20%"  stopColor="#000" stopOpacity="0.00"/>
                  <stop offset="80%"  stopColor="#000" stopOpacity="0.00"/>
                  <stop offset="100%" stopColor="#000" stopOpacity="0.12"/>
                </linearGradient>

                {/* Drop shadow */}
                <filter id="fs" x="-20%" y="-5%" width="140%" height="115%">
                  <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.22"/>
                </filter>
              </defs>

              {/* ── Finger body ────────────────────────────────────── */}
              <path
                d="M 38 152 L 38 272 Q 38 318 80 318 Q 122 318 122 272 L 122 152 Q 122 134 80 132 Q 38 134 38 152 Z"
                fill={SKIN}
                filter="url(#fs)"
              />
              {/* Side shading for rounded look */}
              <path
                d="M 38 152 L 38 272 Q 38 318 80 318 Q 122 318 122 272 L 122 152 Q 122 134 80 132 Q 38 134 38 152 Z"
                fill="url(#finger-shade)"
              />

              {/* Knuckle creases */}
              <path d="M 50 224 Q 80 219 110 224" stroke="#C08860" strokeWidth="1.6" fill="none" opacity="0.45" strokeLinecap="round"/>
              <path d="M 53 237 Q 80 232 107 237" stroke="#C08860" strokeWidth="1.0" fill="none" opacity="0.30" strokeLinecap="round"/>

              {/* Fingertip pad highlight */}
              <ellipse cx="80" cy="304" rx="20" ry="7" fill="white" opacity="0.08"/>

              {/* ── Nail plate (colour fill, morphing) ─────────────── */}
              <path
                ref={nailEl}
                fill={nailFill}
                stroke="rgba(0,0,0,0.09)"
                strokeWidth={0.5}
              />

              {/* ── Gloss overlay (same morphing path) ─────────────── */}
              <path
                ref={shineEl}
                fill="url(#nail-gloss)"
                stroke="none"
              />

              {/* Lunula — subtle white half-moon at nail base */}
              <ellipse cx="80" cy="144" rx="21" ry="8"
                fill="white" opacity="0.28"/>

              {/* Cuticle fold — skin crescent drawn over nail base */}
              <path
                d="M 42 148 Q 80 138 118 148 Q 80 158 42 148 Z"
                fill={SKIN}
                opacity={0.80}
              />
            </svg>
          </BlurFade>

          {/* ── Controls ───────────────────────────────────────────── */}
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
