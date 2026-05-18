import { motion } from "motion/react";
import { Target, Eye, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./Section";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    body: "Empower businesses and institutions with reliable, beautifully engineered software that drives measurable growth.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "Be Africa's most trusted studio for crafting modern web platforms, fintech and institution-grade systems.",
  },
  {
    icon: ShieldCheck,
    title: "Why Trust Us",
    body: "Transparent process, fixed timelines, clean code, and a team that stays with you long after launch.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="About Us"
          title={<>A studio built for <span className="text-gradient">serious software</span></>}
          description="Stack Crafts Studio is a multidisciplinary product team blending design, engineering and growth — shipping software that real businesses depend on every day."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass gradient-border rounded-2xl p-8 hover:bg-white/[0.07] transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand glow mb-5">
                <p.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
