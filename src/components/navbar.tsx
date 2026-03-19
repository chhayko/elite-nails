"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#booking", label: "Book" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          className={`font-serif text-xl tracking-wide transition-colors duration-500 ${
            scrolled ? "text-white" : "text-white"
          }`}
        >
          Elite Nails
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500 font-sans hover:opacity-70 ${
                scrolled ? "text-white/90" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/elite_nails_lierde/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xs font-medium uppercase tracking-[0.15em] font-sans transition-colors duration-500 ${
            scrolled ? "text-mauve-light" : "text-white/80"
          }`}
        >
          @elite_nails_lierde
        </a>
      </div>
    </nav>
  );
}
