"use client";

import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function MarqueeSection() {
  return (
    <div className="py-8 overflow-hidden">
      <VelocityScroll
        text="Russian Manicure   BIAB   Gel Nails   Pedicure   Lash Lamination   Brow Lamination   Clean & Safe"
        default_velocity={1.5}
        className="font-serif text-3xl md:text-5xl font-light text-white/20 tracking-tight"
      />
    </div>
  );
}
