"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { Mail, MessageCircle, Phone, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Particles, HighlightGroup, HighlighterItem } from "@/components/ui/highlighter";
import { BlurFade } from "@/components/ui/blur-fade";

const SERVICE_TAGS = [
  "Russian Manicure",
  "BIAB",
  "Gel Nails",
  "Pedicure",
  "Lash Lamination",
  "Brow Lamination",
];

function FloatingTags({ onTagClick }: { onTagClick: (tag: string) => void }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "button",
      { opacity: [0, 1], y: [20, 0] },
      { delay: stagger(0.1, { startDelay: 0.3 }), duration: 0.6, ease: "easeOut" }
    );
  }, [animate]);

  return (
    <div ref={scope} className="flex flex-wrap justify-center gap-3 mt-8">
      {SERVICE_TAGS.map((tag) => (
        <motion.button
          key={tag}
          onClick={() => onTagClick(tag)}
          style={{ opacity: 0 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2 rounded-full border border-mauve/30 bg-mauve/10 text-white/70 text-xs font-medium font-sans tracking-wide hover:border-mauve hover:bg-mauve/20 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          {tag}
        </motion.button>
      ))}
    </div>
  );
}

function BookingModal({
  isOpen,
  onClose,
  preselectedService,
}: {
  isOpen: boolean;
  onClose: () => void;
  preselectedService: string;
}) {
  const t = useTranslations("contact");
  const [service, setService] = useState(preselectedService);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Sync preselected service when modal opens
  useEffect(() => {
    if (isOpen) setService(preselectedService);
  }, [isOpen, preselectedService]);

  // Trap focus & close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Inquiry about ${service || "Elite Nails"} — Elite Nails`,
          from_name: name,
          email,
          message: `Service: ${service || "—"}\n\n${message}`,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setService("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-charcoal/95 backdrop-blur-md p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-2xl text-white font-light">{t("modalTitle")}</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {status === "success" ? (
          <div className="py-8 text-center">
            <p className="text-mauve-light font-serif text-xl mb-2">✓</p>
            <p className="text-white/80 font-sans text-sm mb-6">{t("modalSuccess")}</p>
            <button
              onClick={() => {
                setStatus("idle");
                setName("");
                setEmail("");
                setMessage("");
                setService("");
              }}
              className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors font-sans"
            >
              {t("modalSendAnother")}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium uppercase tracking-[0.15em] text-white/50 font-sans mb-1.5">
                {t("modalService")}
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white font-sans focus:border-mauve/50 focus:outline-none focus:ring-1 focus:ring-mauve/30 transition-colors"
              >
                <option value="" className="bg-charcoal">{t("modalServicePlaceholder")}</option>
                {SERVICE_TAGS.map((s) => (
                  <option key={s} value={s} className="bg-charcoal">{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-[0.15em] text-white/50 font-sans mb-1.5">
                {t("modalName")}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("modalNamePlaceholder")}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 font-sans focus:border-mauve/50 focus:outline-none focus:ring-1 focus:ring-mauve/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-[0.15em] text-white/50 font-sans mb-1.5">
                {t("modalEmail")}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("modalEmailPlaceholder")}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 font-sans focus:border-mauve/50 focus:outline-none focus:ring-1 focus:ring-mauve/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-[0.15em] text-white/50 font-sans mb-1.5">
                {t("modalMessage")}
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("modalMessagePlaceholder")}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 font-sans focus:border-mauve/50 focus:outline-none focus:ring-1 focus:ring-mauve/30 transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-rose text-xs font-sans">{t("modalError")}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-mauve py-3 text-sm font-medium text-white font-sans tracking-wide hover:bg-mauve/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "…" : t("modalSubmit")}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

export function Contact() {
  const t = useTranslations("contact");
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const handleTagClick = (tag: string) => {
    setPreselectedService(tag);
    setModalOpen(true);
  };

  const handleBookCall = () => {
    setPreselectedService("");
    setModalOpen(true);
  };

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden py-32 px-6 bg-charcoal/20 backdrop-blur-md"
      >
        {/* Particle background */}
        <Particles
          className="absolute inset-0 z-0"
          quantity={40}
          color="#9B8AA0"
          staticity={60}
          ease={60}
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <BlurFade delay={0.1} inView>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-mauve-light font-sans">
              {t("eyebrow")}
            </p>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl leading-tight">
              {t("heading")}
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="mx-auto mt-6 h-px w-16 bg-mauve/40" />
          </BlurFade>

          {/* Floating service tags */}
          <BlurFade delay={0.4} inView>
            <FloatingTags onTagClick={handleTagClick} />
          </BlurFade>

          {/* Action buttons */}
          <BlurFade delay={0.5} inView>
            <HighlightGroup className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <HighlighterItem className="rounded-full">
                <button
                  onClick={handleBookCall}
                  className="relative z-10 flex items-center gap-2 rounded-full border border-mauve/40 bg-mauve/10 px-6 py-3 text-sm font-medium text-white font-sans tracking-wide hover:bg-mauve/20 hover:border-mauve transition-colors duration-200"
                >
                  <Phone size={15} />
                  {t("bookCall")}
                </button>
              </HighlighterItem>

              <HighlighterItem className="rounded-full">
                <a
                  href="mailto:info@elitenails.biz"
                  className="relative z-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 font-sans tracking-wide hover:bg-white/10 hover:text-white hover:border-white/20 transition-colors duration-200"
                >
                  <Mail size={15} />
                  {t("email")}
                </a>
              </HighlighterItem>

              <HighlighterItem className="rounded-full">
                <a
                  href="#"
                  className="relative z-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 font-sans tracking-wide hover:bg-white/10 hover:text-white hover:border-white/20 transition-colors duration-200"
                >
                  <MessageCircle size={15} />
                  {t("whatsapp")}
                </a>
              </HighlighterItem>
            </HighlightGroup>
          </BlurFade>
        </div>
      </section>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={preselectedService}
      />
    </>
  );
}
