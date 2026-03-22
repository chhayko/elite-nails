"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/language-switcher";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // Close mobile menu on scroll
  useEffect(() => {
    if (scrolled) setMobileOpen(false);
  }, [scrolled]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "bg-charcoal/90 backdrop-blur-md"
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

          {/* Desktop links */}
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
            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white/80 hover:text-white transition-colors p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-charcoal/95 backdrop-blur-md border-b border-white/10 py-6 px-8 flex flex-col gap-5 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors font-sans"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/elite_nails_lierde/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-mauve-light hover:text-mauve transition-colors font-sans mt-2"
            >
              @elite_nails_lierde
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
