// Server Component — no "use client" so Next.js renders full HTML on the server.
// ReactLenis is wrapped in LenisWrapper (a client component) so smooth scrolling
// still hydrates client-side without making the entire page CSR-only.

import type { Metadata } from "next";
import { LenisWrapper }    from "@/components/lenis-wrapper";
import { ScrollVideo }     from "@/components/scroll-video";
import { Navbar }          from "@/components/navbar";
import { About }           from "@/components/about";
import { Services }        from "@/components/services";
import { MarqueeSection }  from "@/components/marquee-section";
import { Gallery }         from "@/components/gallery";
import { TreatmentQuiz }   from "@/components/treatment-quiz";
import { Testimonials }    from "@/components/testimonials";
import { ContactBooking }  from "@/components/contact-booking";
import { Footer }          from "@/components/footer";
import { SectionDivider }  from "@/components/section-divider";

const BASE_URL = "https://www.elitenails.biz";

const homeMeta: Record<string, { title: string; description: string }> = {
  nl: {
    title: "Nagelstudio Lierde | Russian Manicure & BIAB | Elite Nails",
    description:
      "Elite Nails in Sint-Martens-Lierde, gespecialiseerd in Russian manicure, BIAB en gelnagels. Op 10 min van Geraardsbergen en Zottegem. Boek nu!",
  },
  en: {
    title: "Nail Salon Lierde | Russian Manicure & BIAB | Elite Nails",
    description:
      "Elite Nails in Sint-Martens-Lierde, Belgium — specialising in Russian manicure, BIAB and gel nails. 10 min from Geraardsbergen. Book now!",
  },
  fr: {
    title: "Salon Ongles Lierde | Manucure Russe & BIAB | Elite Nails",
    description:
      "Elite Nails à Sint-Martens-Lierde — spécialisé en manucure russe, BIAB et ongles gel. À 10 min de Geraardsbergen. Réservez maintenant!",
  },
  ru: {
    title: "Ногтевая студия Льерде | Русский маникюр | Elite Nails",
    description:
      "Elite Nails в Синт-Мартенс-Льерде — русский маникюр, BIAB и гелевые ногти. 10 минут от Герарсбергена. Запишитесь сейчас!",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = homeMeta[locale] ?? homeMeta.nl;
  const canonical = `${BASE_URL}/${locale}`;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: "Elite Nails",
      images: [
        { url: `${BASE_URL}/frames/frame-0001.jpg`, width: 1200, height: 630 },
      ],
    },
  };
}

export default function Home() {
  return (
    <LenisWrapper>
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
          <TreatmentQuiz />
          <SectionDivider text="Personalised Advice   Find Your Treatment   Elite Nails" />
          <Testimonials />
          <SectionDivider text="Questions?   Get in Touch   Book Now   Elite Nails Lierde" />
          <ContactBooking />
          <SectionDivider text="Elite Nails   Sint-Martens-Lierde   Belgium   Clean & Safe" />
          <Footer />
        </div>
      </main>
    </LenisWrapper>
  );
}
