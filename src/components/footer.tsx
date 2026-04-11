"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { LocationMap } from "@/components/ui/location-map";
import { CookiePreferencesButton } from "@/components/cookie-consent";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="relative pt-16 pb-12 px-6 bg-charcoal/20 backdrop-blur-md">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between md:items-start">

          {/* Left — branding */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-white">Elite Nails</h3>
            <p className="mt-1 text-sm font-light text-white/50 font-sans">
              {t("location")}
            </p>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-8">
              <a
                href="https://www.instagram.com/elite_nails_lierde/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase tracking-[0.15em] text-mauve-light transition-opacity hover:opacity-70 font-sans"
              >
                {t("instagram")}
              </a>
            </div>
          </div>

          {/* Right — location card */}
          <div className="pb-8">
            <LocationMap
              location="Steenweg 234b, 9572 Sint-Martens-Lierde, België"
              coordinates="50.8167° N, 3.8333° E"
              mapsUrl="https://maps.google.com/?q=Steenweg+234b,+9572+Sint-Martens-Lierde,+Belgium"
            />
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/privacybeleid`}
              className="text-xs text-white/30 hover:text-white/60 transition-colors font-sans"
            >
              {t("privacy")}
            </Link>
            <span className="text-white/20 text-xs">·</span>
            <CookiePreferencesButton label={t("cookiePreferences")} />
          </div>
          <p className="text-xs text-white/30 font-sans">
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
