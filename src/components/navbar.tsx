"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#gallery", label: t("gallery") },
    { href: "#contact", label: t("contact") },
    { href: "#booking", label: t("book") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-serif text-xl tracking-wide text-white transition-colors duration-500"
        >
          Elite Nails
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500 font-sans hover:opacity-70 text-white/90"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="https://www.instagram.com/elite_nails_lierde/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:block text-xs font-medium uppercase tracking-[0.15em] font-sans transition-colors duration-500 ${
              scrolled ? "text-mauve-light" : "text-white/80"
            }`}
          >
            @elite_nails_lierde
          </a>
        </div>
      </div>
    </nav>
  );
}
