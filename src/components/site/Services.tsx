import { motion } from "motion/react";
import {
  Globe, LayoutDashboard, School, Search, CreditCard, Palette, ServerCog,
} from "lucide-react";
import { SectionHeader } from "./Section";

const services = [
  { icon: Globe, title: "Website Development", body: "Marketing sites and landing pages that load fast, rank high and convert." },
  { icon: LayoutDashboard, title: "Web App Development", body: "Custom SaaS platforms, dashboards and tools built with modern stacks." },
  { icon: School, title: "Institution Systems", body: "Schools, churches, clinics — admin, finance and records in one place." },
  { icon: Search, title: "SEO Optimization", body: "Technical SEO, content strategy and on-page tuning that compounds." },
  { icon: CreditCard, title: "Payment Integration", body: "M-Pesa, Stripe, Paystack — secure, reliable checkout for any business." },
  { icon: Palette, title: "UI / UX Design", body: "Interfaces that feel obvious, branded and a pleasure to use." },
  { icon: ServerCog, title: "Hosting & Maintenance", body: "Deployments, monitoring and support so you stay online 24/7." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="What We Do"
          title={<>End-to-end <span className="text-gradient">software services</span></>}
          description="One team, every layer of your product — design, frontend, backend, payments and growth."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group relative glass rounded-2xl p-7 overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-violet/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-gradient-brand group-hover:border-transparent transition">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
