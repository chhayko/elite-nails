"use client";

import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

interface SectionDividerProps {
  text?: string;
}

export function SectionDivider({
  text = "Elite Nails   Lierde   Beauty   Nails   Care   Elegance",
}: SectionDividerProps) {
  return (
    <div className="py-4 overflow-hidden">
      <VelocityScroll
        text={text}
        default_velocity={1}
        className="font-serif text-lg md:text-2xl font-light text-white/10 tracking-tight"
      />
    </div>
  );
}
