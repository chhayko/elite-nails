"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ServiceItem {
  id: string;
  name: string;
  role: string;
  image: string;
}

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: "1",
    name: "Russian Manicure",
    role: "PRECISION CUTICLE CARE",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "BIAB",
    role: "BUILDER IN A BOTTLE",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Gel Nails",
    role: "LONG-LASTING COLOR",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Pedicure",
    role: "COMPLETE FOOT CARE",
    image: "/services/pedicure.png",
  },
  {
    id: "5",
    name: "Lash Lamination",
    role: "LIFT & DEFINE",
    image: "/services/lash-lamination.jpg",
  },
  {
    id: "6",
    name: "Brow Lamination",
    role: "SHAPE & FULLNESS",
    image: "/services/brow-lamination.jpg",
  },
];

interface ServicesShowcaseProps {
  services?: ServiceItem[];
}

export default function ServicesShowcase({
  services = DEFAULT_SERVICES,
}: ServicesShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = services.filter((_, i) => i % 3 === 0);
  const col2 = services.filter((_, i) => i % 3 === 1);
  const col3 = services.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 px-4 md:px-6 font-sans">
      {/* Photo grid */}
      <div className="flex gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-1 md:pb-0">
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((s) => (
            <PhotoCard
              key={s.id}
              service={s}
              className="w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-3 mt-[48px] sm:mt-[56px] md:mt-[68px]">
          {col2.map((s) => (
            <PhotoCard
              key={s.id}
              service={s}
              className="w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-3 mt-[22px] sm:mt-[26px] md:mt-[32px]">
          {col3.map((s) => (
            <PhotoCard
              key={s.id}
              service={s}
              className="w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* Service name list */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full">
        {services.map((service) => (
          <ServiceRow
            key={service.id}
            service={service}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

function PhotoCard({
  service,
  className,
  hoveredId,
  onHover,
}: {
  service: ServiceItem;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === service.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-400",
        className,
        isDimmed ? "opacity-60" : "opacity-100"
      )}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive
            ? "grayscale(0) brightness(1)"
            : "grayscale(1) brightness(0.77)",
        }}
      />
    </div>
  );
}

function ServiceRow({
  service,
  hoveredId,
  onHover,
}: {
  service: ServiceItem;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === service.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "cursor-pointer transition-opacity duration-300",
        isDimmed ? "opacity-50" : "opacity-100"
      )}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300",
            isActive ? "bg-mauve-light w-5" : "bg-white/25"
          )}
        />
        <span
          className={cn(
            "text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300 font-sans",
            isActive ? "text-white" : "text-white/80"
          )}
        >
          {service.name}
        </span>
      </div>
      <p className="mt-1.5 pl-[27px] text-[7px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
        {service.role}
      </p>
    </div>
  );
}
