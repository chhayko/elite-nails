"use client";

import React, { forwardRef } from "react";

const images = {
  left: [
    "/gallery/gallery-1.jpeg",
    "/gallery/gallery-2.jpeg",
    "/gallery/gallery-3.jpeg",
    "/gallery/gallery-4.jpeg",
    "/gallery/gallery-5.jpeg",
  ],
  center: [
    "/gallery/gallery-6.jpeg",
    "/gallery/gallery-7.jpeg",
    "/gallery/gallery-8.jpeg",
  ],
  right: [
    "/gallery/gallery-9.jpeg",
    "/gallery/gallery-10.jpeg",
    "/gallery/gallery-11.jpeg",
    "/gallery/gallery-12.jpeg",
    "/gallery/gallery-13.jpeg",
  ],
};

const StickyScrollGallery = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="w-full">
      <div className="grid grid-cols-12 gap-2 px-2">
        {/* Left column — scrolls */}
        <div className="grid gap-2 col-span-4">
          {images.left.map((src, i) => (
            <figure key={`left-${i}`} className="w-full">
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="transition-all duration-300 w-full h-96 align-bottom object-cover rounded-lg"
              />
            </figure>
          ))}
        </div>

        {/* Center column — sticky */}
        <div className="sticky top-0 h-screen w-full col-span-4 gap-2 grid grid-rows-3">
          {images.center.map((src, i) => (
            <figure key={`center-${i}`} className="w-full h-full">
              <img
                src={src}
                alt={`Featured image ${i + 1}`}
                className="transition-all duration-300 h-full w-full align-bottom object-cover rounded-lg"
              />
            </figure>
          ))}
        </div>

        {/* Right column — scrolls */}
        <div className="grid gap-2 col-span-4">
          {images.right.map((src, i) => (
            <figure key={`right-${i}`} className="w-full">
              <img
                src={src}
                alt={`Gallery image ${i + 6}`}
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
