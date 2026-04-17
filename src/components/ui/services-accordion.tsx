"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const servicesSlugs = [
  {
    id: 1,
    nameKey: "russianManicure" as const,
    roleKey: "russianManicureRole" as const,
    imageUrl: "/services/russian-manicure.jpg",
    slug: "russische-manicure",
  },
  {
    id: 2,
    nameKey: "biab" as const,
    roleKey: "biabRole" as const,
    imageUrl: "/services/biab.jpg",
    slug: "biab",
  },
  {
    id: 3,
    nameKey: "gelNails" as const,
    roleKey: "gelNailsRole" as const,
    imageUrl: "/services/gel-nails.jpg",
    slug: "gelnagels",
  },
  {
    id: 4,
    nameKey: "pedicure" as const,
    roleKey: "pedicureRole" as const,
    imageUrl: "/services/pedicure.jpg",
    slug: "pedicure",
  },
  {
    id: 5,
    nameKey: "lashLamination" as const,
    roleKey: "lashLaminationRole" as const,
    imageUrl: "/services/lash-lamination.jpg",
    slug: "wimpers-lamineren",
  },
  {
    id: 6,
    nameKey: "browLamination" as const,
    roleKey: "browLaminationRole" as const,
    imageUrl: "/services/brow-lamination.jpg",
    slug: "wenkbrauw-laminatie",
  },
];

function AccordionItem({
  item,
  isActive,
  onMouseEnter,
  locale,
  name,
  role,
}: {
  item: (typeof servicesSlugs)[0];
  isActive: boolean;
  onMouseEnter: () => void;
  locale: string;
  name: string;
  role: string;
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
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isActive ? "scale(1.05)" : "scale(1)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {isActive && (
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-mauve-light font-sans mb-1">
            {role}
          </p>
          <h3 className="text-white font-serif text-2xl font-light">
            {name}
          </h3>
        </div>
      )}
      {!isActive && (
        <span className="absolute bottom-20 left-1/2 -translate-x-1/2 rotate-90 text-white/80 text-sm font-sans font-medium whitespace-nowrap tracking-widest uppercase">
          {name}
        </span>
      )}
    </Link>
  );
}

export function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const locale = useLocale();
  const t = useTranslations("services.items");

  return (
    <div className="flex flex-row items-center justify-center gap-2 overflow-x-auto py-4 px-2">
      {servicesSlugs.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => setActiveIndex(index)}
          locale={locale}
          name={t(item.nameKey)}
          role={t(item.roleKey)}
        />
      ))}
    </div>
  );
}
