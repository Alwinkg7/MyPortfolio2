import { motion } from "framer-motion";
import { ReactNode } from "react";

/** Monospace editorial section label, e.g. // 02 — SYSTEMS I BUILD */
export function Eyebrow({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="eyebrow flex items-center gap-3">
      <span className="text-accent">{`// ${index}`}</span>
      <span>{children}</span>
    </div>
  );
}

/** Scroll-into-view reveal that respects reduced motion automatically
 *  (framer-motion disables transforms when the user prefers reduced motion). */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/** Section wrapper providing the anchor id and vertical rhythm. */
export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}
