import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  {
    name: "Brian Otieno",
    role: "Founder, Cartlet",
    quote: "Stack Crafts rebuilt our store and integrated M-Pesa flawlessly. Sales jumped 40% in the first month.",
    rating: 5,
  },
  {
    name: "Mary Wanjiku",
    role: "Director, Edusync Academy",
    quote: "Our school management system finally feels modern. Parents and teachers love it — and so do we.",
    rating: 5,
  },
  {
    name: "Daniel Kim",
    role: "CEO, PayFlow",
    quote: "Top-tier engineering. They shipped our fintech MVP in 6 weeks, not 6 months. Highly recommended.",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Loved by <span className="text-gradient">founders & teams</span></>}
        />

        <div className="max-w-3xl mx-auto relative">
          <div className="glass-strong rounded-3xl p-10 md:p-14 min-h-[280px]">
            <Quote className="h-10 w-10 text-brand-violet/60 mb-4" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-xl md:text-2xl leading-relaxed">{items[i].quote}</p>
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: items[i].rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-semibold">{items[i].name}</div>
                  <div className="text-sm text-muted-foreground">{items[i].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} className="h-11 w-11 rounded-full glass inline-flex items-center justify-center hover:bg-white/10 transition" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gradient-brand" : "w-2 bg-white/20"}`}
                  aria-label={`Slide ${k + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="h-11 w-11 rounded-full glass inline-flex items-center justify-center hover:bg-white/10 transition" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
