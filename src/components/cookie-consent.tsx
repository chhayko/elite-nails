"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

const STORAGE_KEY = "en_cookie_consent";

type ConsentValue = "accepted" | "declined";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

function updateGtagConsent(granted: boolean) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: "denied",
      functionality_storage: granted ? "granted" : "denied",
      personalization_storage: "denied",
    });
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
    if (stored === "accepted") {
      updateGtagConsent(true);
    } else if (stored === "declined") {
      updateGtagConsent(false);
    } else {
      // No prior decision — show banner after short delay
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    updateGtagConsent(true);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
    updateGtagConsent(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie toestemming"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
    >
      <div className="mx-auto max-w-xl rounded-lg border border-white/10 bg-charcoal/95 backdrop-blur-md px-5 py-5 shadow-2xl">
        <p className="font-serif text-lg text-white mb-1">Cookies</p>
        <p className="text-xs text-white/60 font-sans leading-relaxed mb-4">
          Wij gebruiken analytische cookies (Google Analytics 4) om te begrijpen hoe bezoekers onze website gebruiken.
          Er worden geen cookies geplaatst zonder uw toestemming.{" "}
          <Link
            href={`/${locale}/privacybeleid`}
            className="text-mauve-light underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Privacybeleid
          </Link>
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={accept}
            className="flex-1 rounded-md bg-mauve px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-80 font-sans"
          >
            Accepteren
          </button>
          <button
            onClick={decline}
            className="flex-1 rounded-md border border-white/20 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-white/60 transition-opacity hover:opacity-80 font-sans"
          >
            Weigeren
          </button>
        </div>
      </div>
    </div>
  );
}

/** Small trigger the footer can render to let users re-open the banner. */
export function CookiePreferencesButton({ label }: { label: string }) {
  function reopen() {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  }

  return (
    <button
      onClick={reopen}
      className="text-sm font-light text-white/40 hover:text-white/70 transition-colors font-sans"
    >
      {label}
    </button>
  );
}
