import { LocationMap } from "@/components/ui/location-map";

export function Footer() {
  return (
    <footer className="relative pt-16 pb-12 px-6 bg-charcoal/20 backdrop-blur-md">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between md:items-start">

          {/* Left — branding */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-white">Elite Nails</h3>
            <p className="mt-1 text-sm font-light text-white/50 font-sans">
              Sint-Martens-Lierde, Belgium
            </p>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-8">
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

          {/* Right — location card */}
          <div className="pb-8">
            <LocationMap
              location="Sint-Martens-Lierde, Belgium"
              coordinates="50.8167° N, 3.8333° E"
              mapsUrl="https://maps.google.com/?q=Sint-Martens-Lierde,Belgium"
            />
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
