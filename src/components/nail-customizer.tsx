"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

/* ── Types ─────────────────────────────────────────────────────────────── */
type ShapeKey = "rounded" | "almond" | "ballerina" | "square" | "stiletto";

const SHAPE_ORDER: ShapeKey[] = ["rounded", "almond", "ballerina", "square", "stiletto"];

const SHAPE_LABELS: Record<ShapeKey, string> = {
  rounded:   "Round",
  almond:    "Almond",
  ballerina: "Ballerina",
  square:    "Square",
  stiletto:  "Stiletto",
};

type ColorEntry = {
  id: string;
  hex: string;
  label: string;
  metallic: boolean;
};

const COLORS: ColorEntry[] = [
  { id: "sheer-nude", hex: "#F5DDD0", label: "Sheer Nude",  metallic: false },
  { id: "warm-nude",  hex: "#E8C4A8", label: "Warm Nude",   metallic: false },
  { id: "baby-pink",  hex: "#F9C5D1", label: "Baby Pink",   metallic: false },
  { id: "dusty-rose", hex: "#D4A0B0", label: "Dusty Rose",  metallic: false },
  { id: "hot-pink",   hex: "#D64C72", label: "Hot Pink",    metallic: false },
  { id: "red",        hex: "#C82D48", label: "Red",         metallic: false },
  { id: "burgundy",   hex: "#7C1A3C", label: "Burgundy",    metallic: false },
  { id: "coral",      hex: "#F07060", label: "Coral",       metallic: false },
  { id: "white",      hex: "#FAFAFA", label: "White",       metallic: false },
  { id: "black",      hex: "#1A1010", label: "Black",       metallic: false },
  { id: "gold",       hex: "#D4AF37", label: "Gold",        metallic: true  },
  { id: "silver",     hex: "#B0B8C8", label: "Silver",      metallic: true  },
];

/* ── Helpers ────────────────────────────────────────────────────────────── */
function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

const CANVAS_W = 300;
const CANVAS_H = 400;

/*
 * Nail-plate detection: pixels where ALL channels > 210 are the white
 * dotted nail-plate area of the illustration. Skin (R>G>B) and outline
 * (dark) both fall below this threshold, so they stay untouched.
 */
const NAIL_THRESHOLD = 210;

/* ── Component ──────────────────────────────────────────────────────────── */
export function NailCustomizer() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const imgCache   = useRef<Map<ShapeKey, HTMLImageElement>>(new Map());

  const [activeShape, setActiveShape] = useState<ShapeKey>("rounded");
  const [activeColor, setActiveColor] = useState<ColorEntry>(COLORS[4]); // hot-pink
  const [fading,      setFading]      = useState(false);

  /* Preload all 5 images on mount */
  useEffect(() => {
    SHAPE_ORDER.forEach(shape => {
      if (imgCache.current.has(shape)) return;
      const img = new Image();
      img.src = `/nails/${shape}.png`;
      img.onload = () => imgCache.current.set(shape, img);
    });
  }, []);

  /* Apply colour to nail-plate pixels via multiply blend */
  const applyColor = useCallback((img: HTMLImageElement, color: ColorEntry) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.drawImage(img, 0, 0, CANVAS_W, CANVAS_H);

    const imageData = ctx.getImageData(0, 0, CANVAS_W, CANVAS_H);
    const d = imageData.data;
    const [cr, cg, cb] = hexToRgb(color.hex);

    for (let i = 0; i < d.length; i += 4) {
      if (d[i + 3] < 10) continue; // fully transparent — skip

      const r = d[i], g = d[i + 1], b = d[i + 2];

      // Nail plate = the bright white dotted area (all channels high)
      if (Math.min(r, g, b) > NAIL_THRESHOLD) {
        // Multiply blend: keeps light/dark variation while tinting with colour
        d[i]     = Math.round((r * cr) / 255);
        d[i + 1] = Math.round((g * cg) / 255);
        d[i + 2] = Math.round((b * cb) / 255);
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  /* Load shape image (from cache or network) and draw */
  const drawShape = useCallback((shape: ShapeKey, color: ColorEntry) => {
    const cached = imgCache.current.get(shape);
    if (cached) {
      applyColor(cached, color);
      return;
    }
    const img = new Image();
    img.onload = () => {
      imgCache.current.set(shape, img);
      applyColor(img, color);
    };
    img.src = `/nails/${shape}.png`;
  }, [applyColor]);

  /* Redraw whenever shape or colour changes */
  useEffect(() => {
    drawShape(activeShape, activeColor);
  }, [activeShape, activeColor, drawShape]);

  /* Shape switch: fade out → swap → fade in */
  const changeShape = (newShape: ShapeKey) => {
    if (newShape === activeShape || fading) return;
    setFading(true);
    setTimeout(() => {
      setActiveShape(newShape);
      setFading(false);
    }, 220);
  };

  const isMetallic = activeColor.metallic;

  return (
    <section id="nail-customizer" className="relative py-24 px-6 overflow-hidden">
      <style>{`
        @keyframes nc-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
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

          {/* ── Canvas illustration ──────────────────────────────────── */}
          <BlurFade delay={0.2} inView>
            <div
              className="flex-shrink-0 relative"
              style={{ filter: "drop-shadow(0 20px 44px rgba(0,0,0,0.5))" }}
            >
              {/* Metallic shimmer overlay */}
              {isMetallic && (
                <div
                  className="absolute inset-0 pointer-events-none z-10 rounded"
                  style={{
                    background: activeColor.id === "gold"
                      ? "linear-gradient(120deg, transparent 20%, rgba(255,220,80,0.22) 50%, transparent 80%)"
                      : "linear-gradient(120deg, transparent 20%, rgba(200,220,255,0.22) 50%, transparent 80%)",
                    backgroundSize: "200% 100%",
                    animation: "nc-shimmer 1.8s linear infinite",
                    mixBlendMode: "screen",
                  }}
                />
              )}

              <canvas
                ref={canvasRef}
                width={CANVAS_W}
                height={CANVAS_H}
                className="w-[150px] lg:w-[190px] h-auto block"
                style={{
                  opacity:    fading ? 0 : 1,
                  transition: "opacity 0.22s ease",
                }}
              />
            </div>
          </BlurFade>

          {/* ── Controls ─────────────────────────────────────────────── */}
          <div className="flex-1 w-full max-w-sm space-y-10">

            {/* Shape selector */}
            <BlurFade delay={0.3} inView>
              <p className="text-xs uppercase tracking-[0.3em] text-mauve-light font-sans mb-4">
                Nail Shape
              </p>
              <div className="flex flex-wrap gap-2">
                {SHAPE_ORDER.map(s => (
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
                    onClick={() => setActiveColor(c)}
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
                          boxShadow: c.id === "white"
                            ? "inset 0 0 0 1px rgba(255,255,255,0.3)"
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
