import { motion } from "motion/react";
import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" width={1920} height={1280} className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-brand-violet/40 blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-0 h-[28rem] w-[28rem] rounded-full bg-brand-blue/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
            Crafting digital experiences since 2019
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]"
          >
            We Build <span className="text-gradient">Smart Digital</span><br />
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            From websites and powerful web apps to payment systems, SEO and full institution
            management platforms — Stack Crafts Studio engineers software that scales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-7 py-3.5 font-medium text-primary-foreground glow hover:opacity-95 transition"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-medium hover:bg-white/10 transition"
            >
              <PlayCircle className="h-4 w-4" />
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              ["120+", "Projects"],
              ["80+", "Clients"],
              ["24/7", "Support"],
              ["6+", "Years"],
            ].map(([n, l]) => (
              <div key={l} className="glass rounded-2xl p-4">
                <div className="text-2xl font-display font-semibold text-gradient">{n}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
