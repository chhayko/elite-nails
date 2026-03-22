"use client";

import { ReactLenis } from "lenis/react";
import { ScrollVideo } from "@/components/scroll-video";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { MarqueeSection } from "@/components/marquee-section";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="relative">
        <Navbar />

        {/* Fixed video background + hero text */}
        <ScrollVideo />

        {/* Content floats over the video background — all sections transparent */}
        <div className="relative z-20 mt-[250vh]">
          <About />
          <MarqueeSection />
          <Services />
          <SectionDivider text="Precision   Beauty   Elegance   Care   Elite Nails" />
          <Gallery />
          <SectionDivider text="Our Work   Nail Art   Lashes   Brows   Pedicure   BIAB" />
          <Testimonials />
          <SectionDivider text="Questions?   Get in Touch   Contact Us   Elite Nails" />
          <Contact />
          <SectionDivider text="Book Now   Elite Nails Lierde   DM Us   Your Perfect Nails" />
          <Booking />
          <SectionDivider text="Elite Nails   Sint-Martens-Lierde   Belgium   Clean & Safe" />
          <Footer />
        </div>
      </main>
    </ReactLenis>
  );
}
