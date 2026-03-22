"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimate, stagger, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Phone, X, Instagram } from "lucide-react";
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

/* ── Animated draw-path oval (Instagram CTA) ───────────────────────────── */
function BookingCTA() {
  const t = useTranslations("booking");
  const draw = {
    hidden:  { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as const },
        opacity:    { duration: 0.5 },
      },
    },
  } as const;

  return (
    <a
      href="https://www.instagram.com/elite_nails_lierde/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block group cursor-pointer w-full max-w-xl mx-auto"
    >
      <div className="relative py-14">
        <div className="absolute inset-0">
          <motion.svg
            width="100%" height="100%"
            viewBox="0 0 800 300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-full"
          >
            <title>{t("cta")}</title>
            <motion.path
              d="M 640 55 C 850 160, 700 260, 400 275 C 160 275, 80 235, 80 155 C 80 75, 230 45, 400 45 C 570 45, 650 105, 640 105"
              fill="none" strokeWidth="10"
              stroke="currentColor"
              strokeLinecap="round" strokeLinejoin="round"
              variants={draw}
              className="text-mauve-light/55 group-hover:text-mauve-light transition-colors duration-300"
            />
          </motion.svg>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <motion.p
            className="text-xs text-mauve-light/70 font-sans uppercase tracking-[0.3em] mb-2"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t("eyebrow")}
          </motion.p>
          <motion.h3
            className="font-serif text-3xl md:text-4xl text-white group-hover:text-mauve-light transition-colors duration-300 tracking-tight"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.55, duration: 0.7 }}
          >
            {t("cta")}
          </motion.h3>
          <motion.p
            className="text-sm text-white/45 font-sans font-light mt-2"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.7 }}
          >
            {t("ctaSub")}
          </motion.p>
        </div>
      </div>
    </a>
  );
}

/* ── Floating service tags ─────────────────────────────────────────────── */
function FloatingTags({ onTagClick }: { onTagClick: (tag: string) => void }) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "button",
      { opacity: [0, 1], y: [20, 0] },
      { delay: stagger(0.08, { startDelay: 0.2 }), duration: 0.5, ease: "easeOut" }
    );
  }, [animate]);

  return (
    <div ref={scope} className="flex flex-wrap justify-center gap-3">
      {SERVICE_TAGS.map((tag) => (
        <motion.button
          key={tag}
          onClick={() => onTagClick(tag)}
          style={{ opacity: 0 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2 rounded-full border border-mauve/30 bg-mauve/10 text-white/70
            text-xs font-medium font-sans tracking-wide hover:border-mauve hover:bg-mauve/20
            hover:text-white transition-colors duration-200 cursor-pointer"
        >
          {tag}
        </motion.button>
      ))}
    </div>
  );
}

/* ── Inquiry modal ────────────────────────────────────────────────────── */
function InquiryModal({
  isOpen, onClose, preselectedService,
}: {
  isOpen: boolean; onClose: () => void; preselectedService: string;
}) {
  const t = useTranslations("contact");
  const [service, setService] = useState(preselectedService);
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [msg,     setMsg]     = useState("");
  const [status,  setStatus]  = useState<"idle"|"loading"|"success"|"error">("idle");

  useEffect(() => {
    if (isOpen) { setService(preselectedService); setStatus("idle"); setName(""); setEmail(""); setMsg(""); }
  }, [isOpen, preselectedService]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@elitenails.biz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name, email,
          message: `Service: ${service || "—"}\n\n${msg}`,
          _subject: `Inquiry about ${service || "Elite Nails"} — Elite Nails`,
          _captcha: "false", _replyto: email, _template: "table",
        }),
      });
      const data = await res.json();
      setStatus(data.success === "true" || data.success === true ? "success" : "error");
    } catch { setStatus("error"); }
  };

  const reset = () => { setStatus("idle"); setName(""); setEmail(""); setMsg(""); setService(preselectedService); };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}/>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-charcoal/95 backdrop-blur-xl p-6 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-2xl text-white font-light">{t("modalTitle")}</h3>
            <button onClick={onClose} className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors" aria-label="Close">
              <X size={18}/>
            </button>
          </div>

          {status === "success" ? (
            <div className="py-8 text-center">
              <p className="text-mauve-light font-serif text-3xl mb-3">✓</p>
              <p className="text-white/80 font-sans text-sm mb-8">{t("modalSuccess")}</p>
              <button onClick={reset} className="w-full rounded-lg border border-mauve/40 bg-mauve/10 py-3 text-sm font-medium text-white font-sans tracking-wide hover:bg-mauve/20 hover:border-mauve transition-colors duration-200">
                {t("modalSendAnother")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.15em] text-white/50 font-sans mb-1.5">{t("modalService")}</label>
                <select value={service} onChange={e => setService(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white font-sans focus:border-mauve/50 focus:outline-none focus:ring-1 focus:ring-mauve/30 transition-colors">
                  <option value="" className="bg-charcoal">{t("modalServicePlaceholder")}</option>
                  {SERVICE_TAGS.map(s => <option key={s} value={s} className="bg-charcoal">{s}</option>)}
                </select>
              </div>
              {/* Name */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.15em] text-white/50 font-sans mb-1.5">{t("modalName")}</label>
                <input type="text" required value={name} onChange={e => setName(e.target.value)}
                  placeholder={t("modalNamePlaceholder")}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 font-sans focus:border-mauve/50 focus:outline-none focus:ring-1 focus:ring-mauve/30 transition-colors"/>
              </div>
              {/* Email */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.15em] text-white/50 font-sans mb-1.5">{t("modalEmail")}</label>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder={t("modalEmailPlaceholder")}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 font-sans focus:border-mauve/50 focus:outline-none focus:ring-1 focus:ring-mauve/30 transition-colors"/>
              </div>
              {/* Message */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-[0.15em] text-white/50 font-sans mb-1.5">{t("modalMessage")}</label>
                <textarea rows={4} value={msg} onChange={e => setMsg(e.target.value)}
                  placeholder={t("modalMessagePlaceholder")}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 font-sans focus:border-mauve/50 focus:outline-none focus:ring-1 focus:ring-mauve/30 transition-colors resize-none"/>
              </div>
              {status === "error" && <p className="text-rose text-xs font-sans">{t("modalError")}</p>}
              <button type="submit" disabled={status === "loading"}
                className="w-full rounded-lg bg-mauve py-3 text-sm font-medium text-white font-sans tracking-wide hover:bg-mauve/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                {status === "loading" ? "…" : t("modalSubmit")}
              </button>
            </form>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ── Combined section ─────────────────────────────────────────────────── */
export function ContactBooking() {
  const t = useTranslations("contact");
  const [modalOpen, setModalOpen]             = useState(false);
  const [preselectedService, setPreselected]  = useState("");

  const openModal = (tag = "") => { setPreselected(tag); setModalOpen(true); };

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden py-24 px-6 bg-charcoal/20 backdrop-blur-md"
      >
        <Particles className="absolute inset-0 z-0" quantity={40} color="#9B8AA0" staticity={60} ease={60}/>

        <div className="relative z-10 mx-auto max-w-3xl text-center">

          {/* Section heading */}
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
            <div className="mx-auto mt-6 mb-10 h-px w-16 bg-mauve/40"/>
          </BlurFade>

          {/* Animated oval Instagram CTA */}
          <BlurFade delay={0.4} inView>
            <BookingCTA/>
          </BlurFade>

          {/* Divider */}
          <BlurFade delay={0.5} inView>
            <p className="text-xs text-white/30 font-sans uppercase tracking-[0.4em] my-6">
              or send us a question
            </p>
          </BlurFade>

          {/* Service tags — click to open modal */}
          <BlurFade delay={0.55} inView>
            <FloatingTags onTagClick={openModal}/>
          </BlurFade>

          {/* Action buttons */}
          <BlurFade delay={0.65} inView>
            <HighlightGroup className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <HighlighterItem className="rounded-full">
                <button
                  onClick={() => openModal()}
                  className="relative z-10 flex items-center gap-2 rounded-full border border-mauve/40 bg-mauve/10 px-6 py-3 text-sm font-medium text-white font-sans tracking-wide hover:bg-mauve/20 hover:border-mauve transition-colors duration-200"
                >
                  <Phone size={15}/>
                  {t("bookCall")}
                </button>
              </HighlighterItem>

              <HighlighterItem className="rounded-full">
                <a
                  href="mailto:info@elitenails.biz"
                  className="relative z-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 font-sans tracking-wide hover:bg-white/10 hover:text-white hover:border-white/20 transition-colors duration-200"
                >
                  <Mail size={15}/>
                  {t("email")}
                </a>
              </HighlighterItem>

              <HighlighterItem className="rounded-full">
                <a
                  href="https://www.instagram.com/elite_nails_lierde/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 font-sans tracking-wide hover:bg-white/10 hover:text-white hover:border-white/20 transition-colors duration-200"
                >
                  <Instagram size={15}/>
                  Instagram
                </a>
              </HighlighterItem>

              <HighlighterItem className="rounded-full">
                <a
                  href="#"
                  className="relative z-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 font-sans tracking-wide hover:bg-white/10 hover:text-white hover:border-white/20 transition-colors duration-200"
                >
                  <MessageCircle size={15}/>
                  {t("whatsapp")}
                </a>
              </HighlighterItem>
            </HighlightGroup>
          </BlurFade>

        </div>
      </section>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={preselectedService}
      />
    </>
  );
}
