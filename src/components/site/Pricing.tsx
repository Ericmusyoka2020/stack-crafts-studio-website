import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionHeader } from "./Section";

const tiers = [
  {
    name: "Basic Website",
    price: "KES 25K",
    note: "5-page responsive site",
    features: ["Responsive design", "Contact form", "Basic SEO", "1 month support", "SSL & hosting setup"],
  },
  {
    name: "Business Website",
    price: "KES 65K",
    note: "Marketing + CMS",
    features: ["Up to 12 pages", "Custom CMS", "Advanced SEO", "Blog & analytics", "3 months support", "Payment integration"],
    featured: true,
  },
  {
    name: "Custom System",
    price: "Let's talk",
    note: "Full software builds",
    features: ["Custom web app", "Admin dashboard", "User roles & auth", "Payments & reports", "12 months support", "Dedicated team"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Plans that <span className="text-gradient">scale with you</span></>}
          description="Transparent pricing for every stage — from your first launch to enterprise systems."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                t.featured
                  ? "bg-gradient-brand text-primary-foreground glow"
                  : "glass gradient-border"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-sm uppercase tracking-widest opacity-80">{t.name}</div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-display font-bold">{t.price}</span>
              </div>
              <div className={`mt-1 text-sm ${t.featured ? "opacity-80" : "text-muted-foreground"}`}>{t.note}</div>

              <ul className="mt-7 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${t.featured ? "" : "text-brand-sky"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition ${
                  t.featured
                    ? "bg-background text-foreground hover:opacity-90"
                    : "bg-gradient-brand text-primary-foreground hover:opacity-90"
                }`}
              >
                Contact Us
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
