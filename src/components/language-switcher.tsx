"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const locales = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "nl", label: "NL", flag: "🇧🇪" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  const switchLocale = (newLocale: string) => {
    setOpen(false);
    // Replace current locale segment in path
    const segments = pathname.split("/");
    // segments[1] is the locale segment
    segments[1] = newLocale;
    router.push(segments.join("/") || "/");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors font-sans"
        aria-label="Switch language"
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-8 z-50 min-w-[100px] rounded-lg border border-white/10 bg-charcoal/90 backdrop-blur-md py-1 shadow-xl">
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLocale(l.code)}
                className={`flex w-full items-center gap-2 px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors font-sans
                  ${l.code === locale
                    ? "text-mauve-light"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
