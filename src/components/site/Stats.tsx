import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { n: 120, suffix: "+", label: "Projects Completed" },
  { n: 80, suffix: "+", label: "Happy Clients" },
  { n: 24, suffix: "/7", label: "Support Availability" },
  { n: 6, suffix: "+", label: "Years Experience" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const dur = 1400;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      setV(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);

  return <span ref={ref}>{v}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-brand-violet/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-5xl md:text-6xl font-display font-bold text-gradient">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
