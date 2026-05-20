import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Section";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  { img: p1, title: "Insight Analytics Suite", category: "SaaS Dashboard", tech: ["React", "Node", "PostgreSQL"] },
  { img: p2, title: "Cartlet E-Commerce", category: "Online Store", tech: ["Next.js", "Stripe", "Tailwind"] },
  { img: p3, title: "Edusync School System", category: "Institution Platform", tech: ["React", "Laravel", "MySQL"] },
  { img: p4, title: "PayFlow Wallet", category: "Fintech App", tech: ["React Native", "M-Pesa", "Firebase"] },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Recent <span className="text-gradient">projects</span> we shipped</>}
          description="A look at a few products we designed, built and continue to operate with our clients."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group relative glass rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-brand-sky">{p.category}</div>
                  <h3 className="mt-1.5 text-xl font-semibold">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full glass">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl glass group-hover:bg-gradient-brand transition">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
