import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { SectionHeader } from "./Section";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = () => {
    setSending(true);
    setTimeout(() => setSending(false), 3000);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Get in touch"
          title={<>Let's build something <span className="text-gradient">remarkable</span></>}
          description="Tell us about your project. We'll reply within 24 hours with next steps."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass rounded-2xl p-6 space-y-5">
              <a href="tel:+254710911645" className="flex items-start gap-4 group">
                <span className="h-11 w-11 rounded-xl bg-gradient-brand inline-flex items-center justify-center glow shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                  <div className="font-medium group-hover:text-brand-cyan transition">+254 710 911 645</div>
                </div>
              </a>
              <a href="mailto:stackcraftsstudio@gmail.com" className="flex items-start gap-4 group">
                <span className="h-11 w-11 rounded-xl bg-gradient-brand inline-flex items-center justify-center glow shrink-0">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-medium group-hover:text-brand-cyan transition break-all">stackcraftsstudio@gmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <span className="h-11 w-11 rounded-xl bg-gradient-brand inline-flex items-center justify-center glow shrink-0">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                  <div className="font-medium">Nairobi, Kenya</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Follow us</div>
                <div className="flex gap-2">
                  {[Twitter, Linkedin, Instagram, Github].map((I, k) => (
                    <a key={k} href="#" className="h-10 w-10 rounded-xl glass inline-flex items-center justify-center hover:bg-white/10 transition">
                      <I className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            action="https://api.web3forms.com/submit"
            method="POST"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 space-y-5"
          >
            <input type="hidden" name="access_key" value="6ff52103-febf-48c8-83d9-64e549f2e411" />

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" placeholder="Jane Doe" defaultValue="Eric Thyaka" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" defaultValue="stackcraftsstudio@gmail.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Phone" name="phone" type="tel" placeholder="+254 700 000 000" defaultValue="0710911645" />
              <Field label="Subject" name="subject" placeholder="What do you need?" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Project details</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your goals, timeline and budget…"
                className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-brand-violet/60 focus:bg-white/10 transition resize-none"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 font-medium text-primary-foreground glow hover:opacity-95 transition disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {sending ? "Sending…" : "Send message"}
              </button>
              <a
                href="https://wa.me/254710911645"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium bg-[oklch(0.72_0.18_150)] text-black hover:opacity-90 transition"
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, defaultValue }: { label: string; name: string; type?: string; placeholder?: string; defaultValue?: string }) {
  return (
    <div>
      <label className="text-sm text-muted-foreground">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-brand-violet/60 focus:bg-white/10 transition"
      />
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.3zM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 12C2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zm5.4-7.3c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-.9-.4-1.8-.9-2.7-2-.7-.8-1.1-1.7-1.3-2-.1-.3 0-.4.1-.5l.4-.5.3-.5c.1-.2.1-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.8.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.5z"/></svg>
  );
}
