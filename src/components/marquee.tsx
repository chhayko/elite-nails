export function Marquee() {
  const items = [
    "Russian Manicure",
    "BIAB",
    "Gel Nails",
    "Pedicure",
    "Lash Lamination",
    "Brow Lamination",
    "Clean & Safe",
    "Cozy Atmosphere",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-rose-light/30 bg-white py-6">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-8 font-serif text-2xl font-light text-charcoal-muted/40 md:text-3xl"
          >
            {item}
            <span className="ml-8 text-mauve/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
