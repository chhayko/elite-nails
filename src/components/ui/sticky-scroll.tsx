"use client";

import React, { forwardRef } from "react";

const images = {
  left: [
    { src: "/gallery/gallery-1.jpeg", alt: "Russian manicure with gel nails at Elite Nails Lierde Belgium" },
    { src: "/gallery/gallery-2.jpeg", alt: "BIAB nail treatment Sint-Martens-Lierde" },
    { src: "/gallery/gallery-3.jpeg", alt: "Gel nail design Elite Nails Lierde" },
    { src: "/gallery/gallery-4.jpeg", alt: "Nail art and manicure at Elite Nails Belgium" },
    { src: "/gallery/gallery-5.jpeg", alt: "Professional pedicure Elite Nails Lierde" },
  ],
  center: [
    { src: "/gallery/gallery-6.jpeg", alt: "Russian manicure close-up Elite Nails Lierde" },
    { src: "/gallery/gallery-7.jpeg", alt: "Luxury nail salon Sint-Martens-Lierde Belgium" },
    { src: "/gallery/gallery-8.jpeg", alt: "Gel nails and nail art Elite Nails" },
  ],
  right: [
    { src: "/gallery/gallery-9.jpeg", alt: "Lash lamination treatment Elite Nails Lierde" },
    { src: "/gallery/gallery-10.jpeg", alt: "Brow lamination and nail care Belgium" },
    { src: "/gallery/gallery-11.jpeg", alt: "BIAB and gel nail design Elite Nails" },
    { src: "/gallery/gallery-12.jpeg", alt: "Russian manicure nail art Sint-Martens-Lierde" },
    { src: "/gallery/gallery-13.jpeg", alt: "Premium nail salon results Elite Nails Lierde" },
  ],
};

const StickyScrollGallery = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="w-full">
      <div className="grid grid-cols-12 gap-2 px-2">
        {/* Left column — scrolls */}
        <div className="grid gap-2 col-span-4">
          {images.left.map((img, i) => (
            <figure key={`left-${i}`} className="w-full">
              <img
                src={img.src}
                alt={img.alt}
                className="transition-all duration-300 w-full h-96 align-bottom object-cover rounded-lg"
              />
            </figure>
          ))}
        </div>

        {/* Center column — sticky */}
        <div className="sticky top-0 h-screen w-full col-span-4 gap-2 grid grid-rows-3">
          {images.center.map((img, i) => (
            <figure key={`center-${i}`} className="w-full h-full">
              <img
                src={img.src}
                alt={img.alt}
                className="transition-all duration-300 h-full w-full align-bottom object-cover rounded-lg"
              />
            </figure>
          ))}
        </div>

        {/* Right column — scrolls */}
        <div className="grid gap-2 col-span-4">
          {images.right.map((img, i) => (
            <figure key={`right-${i}`} className="w-full">
              <img
                src={img.src}
                alt={img.alt}
                className="transition-all duration-300 w-full h-96 align-bottom object-cover rounded-lg"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
});

StickyScrollGallery.displayName = "StickyScrollGallery";
export default StickyScrollGallery;
