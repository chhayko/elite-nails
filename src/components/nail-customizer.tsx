"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

/* ── Nail shape data ───────────────────────────────────────────────────────
   Template: M[0][1] L[2][3] Q[4][5][6][7] Q[8][9][10][11] L[12][13] Z
   Origin = nail base center; nail grows upward (−y); half-width ≈ 11      */
const SHAPE_KEYS = ["round", "almond", "coffin", "square", "stiletto"] as const;
type ShapeKey = typeof SHAPE_KEYS[number];

const SHAPES: Record<ShapeKey, number[]> = {
  round:    [-11, 2, -11,-18, -11,-26,  0,-26, 11,-26, 11,-18, 11, 2],
  almond:   [-11, 2,  -7,-20,  -3,-34,  0,-34,  3,-34,  7,-20, 11, 2],
  coffin:   [-11, 2,  -7,-26,  -7,-29,  0,-29,  7,-29,  7,-26, 11, 2],
  square:   [-11, 2, -11,-26, -11,-28,  0,-28, 11,-28, 11,-26, 11, 2],
  stiletto: [-11, 2,  -4,-16,  -1,-40,  0,-40,  1,-40,  4,-16, 11, 2],
};

/* ── Colors ────────────────────────────────────────────────────────────── */
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

/* ── Finger layout ─────────────────────────────────────────────────────── */
const FINGERS = [
  { x: 22,  y: 242, w: 28, h:  90, rx: 14, scale: 1.00 }, // thumb
  { x: 60,  y: 162, w: 30, h: 178, rx: 15, scale: 1.10 }, // index
  { x: 98,  y: 142, w: 32, h: 198, rx: 16, scale: 1.15 }, // middle
  { x: 138, y: 160, w: 28, h: 180, rx: 14, scale: 1.05 }, // ring
  { x: 172, y: 192, w: 22, h: 138, rx: 11, scale: 0.78 }, // pinky
];

/* ── Helpers ───────────────────────────────────────────────────────────── */
function makePath(c: number[]): string {
  return `M${c[0]} ${c[1]} L${c[2]} ${c[3]} Q${c[4]} ${c[5]} ${c[6]} ${c[7]} Q${c[8]} ${c[9]} ${c[10]} ${c[11]} L${c[12]} ${c[13]}Z`;
}
function ease(t: number) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }

const SKIN = "#C9A88E";

/* ── Component ─────────────────────────────────────────────────────────── */
export function NailCustomizer() {
  const [activeShape, setActiveShape] = useState<ShapeKey>("almond");
  const [activeColor, setActiveColor] = useState<Color>(COLORS[1]);

  /* animation refs — no state updates during RAF */
  const nailEls  = useRef<(SVGPathElement | null)[]>([null,null,null,null,null]);
  const cur      = useRef([...SHAPES.almond]);
  const from     = useRef([...SHAPES.almond]);
  const to       = useRef([...SHAPES.almond]);
  const raf      = useRef(0);

  const draw = useCallback(() => {
    const p = makePath(cur.current);
    nailEls.current.forEach(el => el?.setAttribute("d", p));
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
      {/* shimmer keyframe injected once */}
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

          {/* ── SVG Hand ──────────────────────────────────────────── */}
          <BlurFade delay={0.2} inView>
            <svg
              viewBox="0 0 220 400"
              className="w-[180px] lg:w-[220px] h-auto drop-shadow-2xl flex-shrink-0"
              aria-label="Interactive nail customizer hand"
            >
              <defs>
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
                {/* Soft shadow */}
                <filter id="hs" x="-10%" y="-5%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="7" floodColor="#000" floodOpacity="0.30"/>
                </filter>
              </defs>

              {/* Palm */}
              <rect x="15" y="308" width="190" height="82" rx="22" fill={SKIN} filter="url(#hs)"/>

              {/* Finger bodies */}
              {FINGERS.map((f, i) => (
                <rect key={i} x={f.x} y={f.y} width={f.w} height={f.h} rx={f.rx} fill={SKIN}/>
              ))}

              {/* Subtle inter-finger shadows */}
              {[86, 124, 164].map((sx, i) => (
                <rect key={`sh-${i}`} x={sx} y={316} width={2} height={24}
                  fill="#9A7060" opacity={0.4} rx={1}/>
              ))}

              {/* Nail beds (lunula hint) */}
              {FINGERS.map((f, i) => (
                <ellipse key={`bed-${i}`}
                  cx={f.x + f.w / 2} cy={f.y + 9 * f.scale}
                  rx={9 * f.scale} ry={5 * f.scale}
                  fill="#D8B89A" opacity={0.55}/>
              ))}

              {/* Nails — morphing paths */}
              {FINGERS.map((f, i) => (
                <path
                  key={`nail-${i}`}
                  ref={el => { nailEls.current[i] = el; }}
                  transform={`translate(${f.x + f.w / 2},${f.y}) scale(${f.scale})`}
                  fill={nailFill}
                  stroke="rgba(0,0,0,0.13)"
                  strokeWidth={0.7 / f.scale}
                />
              ))}
            </svg>
          </BlurFade>

          {/* ── Controls ──────────────────────────────────────────── */}
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
                          boxShadow: c.hex === "#F8F5F0" ? "inset 0 0 0 1px rgba(255,255,255,0.25)" : undefined,
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
