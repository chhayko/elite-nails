"use client"

import type React from "react"
import { useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"

interface LocationMapProps {
  location?: string
  coordinates?: string
  className?: string
  mapsUrl?: string
}

export function LocationMap({
  location = "Sint-Martens-Lierde, Belgium",
  coordinates = "50.8167° N, 3.8333° E",
  className,
  mapsUrl = "https://maps.google.com/?q=Sint-Martens-Lierde,Belgium",
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-50, 50], [8, -8])
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8])
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative cursor-pointer select-none ${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          width: isExpanded ? 320 : 240,
          height: isExpanded ? 260 : 130,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      >
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />

        {/* Expanded map view */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="pointer-events-none absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-white/10" />
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <motion.line x1="0%" y1="35%" x2="100%" y2="35%" stroke="rgba(255,255,255,0.2)" strokeWidth="4"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
                <motion.line x1="0%" y1="65%" x2="100%" y2="65%" stroke="rgba(255,255,255,0.2)" strokeWidth="4"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
                <motion.line x1="30%" y1="0%" x2="30%" y2="100%" stroke="rgba(255,255,255,0.15)" strokeWidth="3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.4 }} />
                <motion.line x1="70%" y1="0%" x2="70%" y2="100%" stroke="rgba(255,255,255,0.15)" strokeWidth="3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.5 }} />
                {[20, 50, 80].map((y, i) => (
                  <motion.line key={`h-${i}`} x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`}
                    stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }} />
                ))}
                {[15, 45, 55, 85].map((x, i) => (
                  <motion.line key={`v-${i}`} x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%"
                    stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }} />
                ))}
              </svg>

              {/* Buildings */}
              {[
                { top: "40%", left: "10%", h: "20%", w: "15%" },
                { top: "15%", left: "35%", h: "15%", w: "12%" },
                { top: "70%", left: "75%", h: "18%", w: "18%" },
                { top: "20%", right: "10%", h: "25%", w: "10%" },
                { top: "55%", left: "5%", h: "12%", w: "8%" },
              ].map((style, i) => (
                <motion.div key={i} className="absolute rounded-sm border border-white/10 bg-white/15"
                  style={style}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }} />
              ))}

              {/* Pin */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.3 }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                  style={{ filter: "drop-shadow(0 0 10px rgba(216, 180, 254, 0.7))" }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#d8b4fe" />
                  <circle cx="12" cy="9" r="2.5" fill="rgba(0,0,0,0.3)" />
                </svg>
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid pattern (collapsed) */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isExpanded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.04]">
            <defs>
              <pattern id="grid-elite" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-elite)" />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-5">
          {/* Top */}
          <div className="flex items-start justify-between">
            <motion.div animate={{ opacity: isExpanded ? 0 : 1 }} transition={{ duration: 0.3 }}>
              <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-mauve-light"
                animate={{ filter: isHovered ? "drop-shadow(0 0 8px rgba(216,180,254,0.6))" : "drop-shadow(0 0 4px rgba(216,180,254,0.3))" }}
                transition={{ duration: 0.3 }}>
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" x2="9" y1="3" y2="18" />
                <line x1="15" x2="15" y1="6" y2="21" />
              </motion.svg>
            </motion.div>

            <motion.div
              className="flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-1 backdrop-blur-sm"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-mauve-light" />
              <span className="text-[10px] font-medium uppercase tracking-wide text-white/50 font-sans">
                Belgium
              </span>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="space-y-1">
            <motion.h3
              className="text-sm font-medium tracking-tight text-white font-sans"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {location}
            </motion.h3>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2"
                >
                  <p className="font-mono text-xs text-white/40">{coordinates}</p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-mauve-light hover:opacity-70 transition-opacity font-sans"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Open in Maps →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="h-px bg-gradient-to-r from-mauve/60 via-mauve/30 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: isHovered || isExpanded ? 1 : 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Click hint */}
      <motion.p
        className="absolute -bottom-6 left-1/2 whitespace-nowrap text-[10px] text-white/30 font-sans"
        style={{ x: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered && !isExpanded ? 1 : 0, y: isHovered ? 0 : 4 }}
        transition={{ duration: 0.2 }}
      >
        Click to expand
      </motion.p>
    </motion.div>
  )
}
