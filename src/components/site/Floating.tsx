import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, X, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {show && (
            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="h-12 w-12 rounded-full glass-strong inline-flex items-center justify-center hover:bg-white/10 transition"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <button
          onClick={() => setChatOpen((v) => !v)}
          className="h-14 w-14 rounded-full bg-gradient-brand glow inline-flex items-center justify-center hover:scale-105 transition"
          aria-label="Live chat"
        >
          {chatOpen ? <X className="h-6 w-6 text-primary-foreground" /> : <MessageCircle className="h-6 w-6 text-primary-foreground" />}
        </button>

        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-20 right-0 w-80 glass-strong rounded-2xl p-5 shadow-card"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="h-10 w-10 rounded-full bg-gradient-brand inline-flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Stack Crafts Support</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" /> Online now
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Hi 👋 How can we help you today? Reach us directly:
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="https://wa.me/254710911645"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center rounded-xl bg-[oklch(0.72_0.18_150)] text-black px-4 py-2.5 text-sm font-medium hover:opacity-90 transition"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:stackcraftsstudio@gmail.com"
                  className="block w-full text-center rounded-xl glass px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition"
                >
                  Email us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
