export function Footer() {
  return (
    <footer className="relative pt-16 pb-12 px-6 bg-charcoal/20 backdrop-blur-md">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-white">Elite Nails</h3>
            <p className="mt-1 text-sm font-light text-white/50 font-sans">
              Sint-Martens-Lierde, Belgium
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/elite_nails_lierde/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium uppercase tracking-[0.15em] text-mauve-light transition-opacity hover:opacity-70 font-sans"
            >
              Instagram
            </a>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-white/30 font-sans">
          &copy; {new Date().getFullYear()} Elite Nails Lierde. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
