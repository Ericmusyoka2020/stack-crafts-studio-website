import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, X, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.3zM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 12C2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zm5.4-7.3c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-.9-.4-1.8-.9-2.7-2-.7-.8-1.1-1.7-1.3-2-.1-.3 0-.4.1-.5l.4-.5.3-.5c.1-.2.1-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.8.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.5z" />
    </svg>
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const onSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim() || !phone.trim()) return;
    setStatus("sending");
    setErrorMsg(null);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && (json.success ?? true)) {
        setStatus("idle");
        setSent(true);
        setMessage("");
        setPhone("");
      } else {
        throw new Error(json.message || "Submission failed");
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Submission failed");
      setStatus("error");
    }
  };

  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Auto-open as an ad on first load and every 1 minute
  useEffect(() => {
    const open = () => {
      setSent(false);
      setStatus("idle");
      setChatOpen(true);
    };
    const t = setTimeout(open, 800);
    const i = setInterval(open, 60_000);
    return () => {
      clearTimeout(t);
      clearInterval(i);
    };
  }, []);

  const sending = status === "sending";
  const waText = encodeURIComponent("Hi Stack Crafts, I'd like to chat about a project.");

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
          className="relative h-16 w-16 rounded-full inline-flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          style={{
            background: "conic-gradient(from 0deg, #ff3d8a, #ffb800, #00e5a8, #00b3ff, #a855f7, #ff3d8a)",
            boxShadow:
              "0 0 0 4px rgba(255,255,255,0.12), 0 10px 30px rgba(255, 61, 138, 0.55), 0 6px 20px rgba(0, 179, 255, 0.45)",
            WebkitTapHighlightColor: "transparent",
          }}
          aria-label="Live chat"
        >
          {!chatOpen && (
            <>
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: "rgba(255, 61, 138, 0.55)", animationDuration: "1.8s" }}
              />
              <span
                aria-hidden="true"
                className="absolute -top-1 -right-1 flex h-3 w-3"
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#00e5a8] opacity-75 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00e5a8] ring-2 ring-white" />
              </span>
            </>
          )}
          <span className="relative h-12 w-12 rounded-full bg-[#0b0b14] inline-flex items-center justify-center">
            {chatOpen ? (
              <X className="h-6 w-6 text-white" strokeWidth={2.5} />
            ) : (
              <MessageCircle className="h-6 w-6 text-white" strokeWidth={2.5} />
            )}
          </span>
        </button>

        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-20 right-0 w-80 glass-strong rounded-2xl p-5 shadow-card"
            >
              <button
                onClick={() => setChatOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-3 h-7 w-7 rounded-full inline-flex items-center justify-center hover:bg-white/10 transition"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3 pb-3 border-b border-white/10 pr-8">
                <div className="h-10 w-10 rounded-full bg-gradient-brand inline-flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">We're live now 🎉</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" /> Online — reply in minutes
                  </div>
                </div>
              </div>

              {sent ? (
                <div className="mt-5 flex flex-col items-center text-center gap-3 py-2">
                  <CheckCircle2 className="h-10 w-10 text-[oklch(0.72_0.18_150)]" />
                  <div className="font-semibold text-sm">Message sent successfully</div>
                  <p className="text-xs text-muted-foreground">Prefer a faster reply? Chat with us on WhatsApp.</p>
                  <a
                    href={`https://wa.me/254710911645?text=${waText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[oklch(0.72_0.18_150)] text-black px-4 py-2.5 text-sm font-medium hover:opacity-90 transition"
                  >
                    <WhatsAppIcon /> Chat on WhatsApp
                  </a>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs underline text-muted-foreground hover:text-foreground"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSend} className="mt-4 space-y-3">
                  <input type="hidden" name="access_key" value="6ff52103-febf-48c8-83d9-64e549f2e411" />
                  <input type="hidden" name="from_name" value="Stack Crafts — Live Chat" />
                  <input type="hidden" name="subject" value="New live chat message from website" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  <p className="text-sm text-muted-foreground">
                    Got something to say? Drop a message and your number — we'll reach out.
                  </p>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Something to say..."
                    rows={3}
                    required
                    className="w-full rounded-xl glass px-3 py-2 text-sm bg-transparent border border-white/10 focus:outline-none focus:border-white/30 resize-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    required
                    className="w-full rounded-xl glass px-3 py-2 text-sm bg-transparent border border-white/10 focus:outline-none focus:border-white/30"
                  />
                  {status === "error" && (
                    <div className="text-xs text-red-300">{errorMsg || "Something went wrong. Please try again."}</div>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand text-primary-foreground px-4 py-2.5 text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    {sending ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
