import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-2xl mx-auto mb-14"
    >
      <div className="inline-flex items-center rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-4 uppercase tracking-widest">
        {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-lg">{description}</p>
      )}
    </motion.div>
  );
}
