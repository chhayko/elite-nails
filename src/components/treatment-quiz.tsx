"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";

/* ── Questions ────────────────────────────────────────────────────────── */
const QUESTIONS = [
  {
    id: "q1",
    text: "What are you looking to treat?",
    options: [
      { id: "A", text: "Hands only" },
      { id: "B", text: "Feet only" },
      { id: "C", text: "Hands and feet" },
    ],
  },
  {
    id: "q2",
    text: "What is your priority?",
    options: [
      { id: "A", text: "Strength and growth" },
      { id: "B", text: "Clean natural look" },
      { id: "C", text: "Bold colour and shape" },
      { id: "D", text: "Low maintenance" },
    ],
  },
  {
    id: "q3",
    text: "How often can you come in for maintenance?",
    options: [
      { id: "A", text: "Every 2–3 weeks" },
      { id: "B", text: "Every 4–5 weeks" },
      { id: "C", text: "Once a month or less" },
    ],
  },
  {
    id: "q4",
    text: "Any extra interest?",
    options: [
      { id: "A", text: "Lashes" },
      { id: "B", text: "Brows" },
      { id: "C", text: "Lashes and brows" },
      { id: "D", text: "Just nails" },
    ],
  },
] as const;

type QID = typeof QUESTIONS[number]["id"];
type Answers = Partial<Record<QID, string>>;

/* ── Reason snippets ──────────────────────────────────────────────────── */
const NAIL_REASONS: Record<string, string> = {
  "Russian Manicure":
    "Your preference for a clean, precise look makes the Russian Manicure ideal — a dry technique that keeps cuticles flawless and colour lasting for weeks.",
  "BIAB":
    "BIAB is your perfect match — it wraps your natural nail in a resilient gel layer that encourages growth and strength without any damage.",
  "Gel Nails":
    "You want bold, defined style — gel nails deliver a chip-free, glossy finish in any colour that stays perfect for 3–4 weeks.",
  "Pedicure":
    "A professional pedicure fits your routine beautifully — complete foot care from callus removal to a polished finish, with minimal upkeep needed.",
};

const ADDON_REASONS: Record<string, string> = {
  "Lash Lamination":
    "Lash lamination lifts and curls your natural lashes for an open-eyed look that lasts weeks — no extensions needed.",
  "Brow Lamination":
    "Brow lamination gives you smooth, groomed brows that look fuller and more defined using only your own hair.",
  "Pedicure":
    "A pedicure rounds off the treatment beautifully — complete foot care from callus removal to a polished finish.",
};

/* ── Recommendation engine ─────────────────────────────────────────────── */
type Result = { treatments: string[]; reason: string };

function recommend(a: Answers): Result {
  const { q1, q2, q4 } = a;

  /* — Primary nail treatment (Q1 + Q2) — */
  let primaryNail: string;

  if (q1 === "B") {
    // Feet only → always Pedicure
    primaryNail = "Pedicure";
  } else {
    // Hands only or Hands and feet — Q2 decides the hand treatment
    if (q2 === "A")      primaryNail = "BIAB";
    else if (q2 === "C") primaryNail = "Gel Nails";
    else                 primaryNail = "Russian Manicure"; // B (clean) or D (low maintenance)
  }

  /* — Add-ons — */
  const addons: string[] = [];

  // Hands and feet: always add Pedicure as second service
  if (q1 === "C" && primaryNail !== "Pedicure") {
    addons.push("Pedicure");
  }

  // Q4 extras
  if (q4 === "A") {
    addons.push("Lash Lamination");
  } else if (q4 === "B") {
    addons.push("Brow Lamination");
  } else if (q4 === "C") {
    addons.push("Lash Lamination");
    addons.push("Brow Lamination");
  }
  // q4 === "D" → no add-ons

  /* — Build result — */
  const treatments = [primaryNail, ...addons];

  let reason = NAIL_REASONS[primaryNail] ?? "";
  if (addons.length > 0) {
    const addonSentences = addons
      .map(t => ADDON_REASONS[t] ?? "")
      .filter(Boolean)
      .join(" ");
    if (addonSentences) reason += " " + addonSentences;
  }

  return { treatments, reason };
}

/* ── Component ──────────────────────────────────────────────────────────── */
export function TreatmentQuiz() {
  const [step, setStep]       = useState(0);
  const [dir, setDir]         = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult]   = useState<Result | null>(null);

  const question = QUESTIONS[step] as typeof QUESTIONS[number] | undefined;

  const handleAnswer = (optId: string) => {
    if (!question) return;
    const next = { ...answers, [question.id]: optId };
    setAnswers(next);
    setDir(1);
    if (step < QUESTIONS.length - 1) {
      setStep(s => s + 1);
    } else {
      setResult(recommend(next));
      setStep(QUESTIONS.length);
    }
  };

  const restart = () => {
    setDir(-1);
    setAnswers({});
    setResult(null);
    setTimeout(() => setStep(0), 40);
  };

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 48 : -48 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -48 : 48 }),
  };

  return (
    <section id="quiz" className="relative py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-2xl">

        {/* Heading */}
        <BlurFade delay={0.1} inView>
          <p className="text-center text-xs font-medium uppercase tracking-[0.4em] text-mauve-light font-sans mb-4">
            Personalised Advice
          </p>
          <h2 className="text-center font-serif text-4xl md:text-5xl font-light text-white leading-tight">
            Find Your Treatment
          </h2>
          <div className="mx-auto mt-5 mb-12 h-px w-16 bg-mauve/40" />
        </BlurFade>

        {/* Card */}
        <BlurFade delay={0.2} inView>
          <div className="relative rounded-2xl border border-white/10 bg-charcoal/30 backdrop-blur-xl
                          px-8 py-10 md:px-12 md:py-12 min-h-[300px] overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>

              {step < QUESTIONS.length && question ? (
                /* ── Question slide ─────────────────────────────── */
                <motion.div
                  key={step}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  {/* Step counter */}
                  <p className="text-[11px] text-white/30 font-sans uppercase tracking-[0.35em] mb-7">
                    {step + 1} / {QUESTIONS.length}
                  </p>

                  {/* Question */}
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-8 leading-snug">
                    {question.text}
                  </h3>

                  {/* Options */}
                  <div className="flex flex-col gap-2.5">
                    {question.options.map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => handleAnswer(opt.id)}
                        className="group w-full text-left px-5 py-3.5 rounded-xl border border-white/12
                          text-white/65 text-sm font-sans tracking-wide
                          hover:border-mauve/60 hover:bg-mauve/10 hover:text-white
                          transition-all duration-200"
                      >
                        <span className="text-mauve/55 font-medium mr-3
                          group-hover:text-mauve transition-colors duration-200">
                          {opt.id}
                        </span>
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </motion.div>

              ) : (
                /* ── Result slide ───────────────────────────────── */
                <motion.div
                  key="result"
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="text-center"
                >
                  <p className="text-xs text-mauve-light font-sans uppercase tracking-[0.35em] mb-5">
                    Your perfect match
                  </p>

                  {/* Treatment pills */}
                  {result && (
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                      {result.treatments.map((t, i) => (
                        <>
                          <span
                            key={t}
                            className="px-4 py-1.5 rounded-full bg-mauve/20 border border-mauve/40
                              font-serif text-lg md:text-xl font-light text-white"
                          >
                            {t}
                          </span>
                          {i < result.treatments.length - 1 && (
                            <span key={`plus-${i}`} className="text-mauve/60 font-light text-xl">+</span>
                          )}
                        </>
                      ))}
                    </div>
                  )}

                  <p className="text-white/55 text-sm font-sans leading-relaxed mb-10 max-w-md mx-auto">
                    {result?.reason ?? ""}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 bg-mauve hover:bg-mauve/90
                        text-white px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em]
                        font-sans transition-colors duration-200"
                    >
                      Book this treatment
                    </a>
                    <button
                      onClick={restart}
                      className="text-xs uppercase tracking-[0.2em] text-white/35
                        hover:text-white/65 transition-colors font-sans"
                    >
                      Start over
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
