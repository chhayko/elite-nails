"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

const servicesSlugs = [
  {
    id: 1,
    name: "Russian Manicure",
    role: "PRECISION CUTICLE CARE",
    imageUrl: "/services/russian-manicure.jpg",
    slug: "russische-manicure",
  },
  {
    id: 2,
    name: "BIAB",
    role: "BUILDER IN A BOTTLE",
    imageUrl: "/services/biab.jpg",
    slug: "biab",
  },
  {
    id: 3,
    name: "Gel Nails",
    role: "LONG-LASTING COLOR",
    imageUrl: "/services/gel-nails.jpg",
    slug: "gelnagels",
  },
  {
    id: 4,
    name: "Pedicure",
    role: "COMPLETE FOOT CARE",
    imageUrl: "/services/pedicure.jpg",
    slug: "pedicure",
  },
  {
    id: 5,
    name: "Lash Lamination",
    role: "LIFT & DEFINE",
    imageUrl: "/services/lash-lamination.jpg",
    slug: "wimper-wenkbrauw",
  },
  {
    id: 6,
    name: "Brow Lamination",
    role: "SHAPE & FULLNESS",
    imageUrl: "/services/brow-lamination.jpg",
    slug: "wimper-wenkbrauw",
  },
];

function AccordionItem({
  item,
  isActive,
  onMouseEnter,
  locale,
}: {
  item: (typeof servicesSlugs)[0];
  isActive: boolean;
  onMouseEnter: () => void;
  locale: string;
}) {
  return (
    <Link
      href={`/${locale}/diensten/${item.slug}`}
      className={`
        relative h-[480px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out flex-shrink-0 block
        ${isActive ? "w-[340px]" : "w-[58px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isActive ? "scale(1.05)" : "scale(1)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {isActive && (
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-mauve-light font-sans mb-1">
            {item.role}
          </p>
          <h3 className="text-white font-serif text-2xl font-light">
            {item.name}
          </h3>
        </div>
      )}
      {!isActive && (
        <span className="absolute bottom-20 left-1/2 -translate-x-1/2 rotate-90 text-white/80 text-sm font-sans font-medium whitespace-nowrap tracking-widest uppercase">
          {item.name}
        </span>
      )}
    </Link>
  );
}

export function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const locale = useLocale();

  return (
    <div className="flex flex-row items-center justify-center gap-2 overflow-x-auto py-4 px-2">
      {servicesSlugs.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => setActiveIndex(index)}
          locale={locale}
        />
      ))}
    </div>
  );
}
