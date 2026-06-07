import { motion } from "motion/react";
import { Target, Eye, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./Section";
import actingCeo from "@/assets/acting-ceo.png.asset.json";


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

        {/* Leadership — Acting CEO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <SectionHeader
            eyebrow="Leadership"
            title={<>Meet our <span className="text-gradient">Acting CEO</span></>}
            description="Driving Stack Crafts Studio's vision, craft and client success."
          />
          <div className="mx-auto max-w-4xl glass gradient-border rounded-2xl p-6 md:p-10 grid md:grid-cols-[260px_1fr] gap-8 items-center">
            <div
              className="relative rounded-2xl p-[3px] w-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #ff3d8a, #ffb800, #00e5a8, #00b3ff, #a855f7, #ff3d8a)",
              }}
            >
              <img
                src={actingCeo.url}
                alt="Acting CEO of Stack Crafts Studio"
                loading="eager"
                decoding="async"
                width={520}
                height={640}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!img.dataset.fallback) {
                    img.dataset.fallback = "1";
                    img.src = window.location.origin + actingCeo.url;
                  }
                }}
                className="block rounded-2xl w-full h-72 md:h-80 object-cover object-top bg-background"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gradient">
                Acting CEO & Founder
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold">Leading with vision & craft</h3>
              <p className="mt-4 text-muted-foreground">
                A hands-on builder passionate about turning ideas into reliable digital products.
                He leads Stack Crafts Studio with a sharp eye for design, a deep love for clean
                engineering, and a relentless focus on delivering real value to every client we serve.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

