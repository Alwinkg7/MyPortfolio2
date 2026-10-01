import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { projects } from "@/content/resume";
import { Eyebrow } from "../primitives";

/**
 * Full-bleed case-study showcase. One project is active at a time; scrolling
 * through the pinned track swaps the active project (background, index, layers).
 */
export default function ProjectsShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(projects.length - 1, Math.floor(v * projects.length));
    setIndex(i);
  });

  const active = projects[index];

  return (
    <section id="work" className="border-t border-line">
      <div ref={ref} style={{ height: `${projects.length * 110}vh` }} className="relative">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
          {/* header row */}
          <div className="shell flex items-center justify-between pt-24 sm:pt-28">
            <Eyebrow index="07">Selected work</Eyebrow>
            <span className="font-mono text-xs text-muted">
              <span className="text-accent">{active.index}</span> / {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          {/* giant index numeral backdrop */}
          <AnimatePresence>
            <motion.span
              key={active.index}
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.04 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute -right-4 bottom-0 select-none font-display text-[40vw] font-bold leading-none tracking-tightest"
            >
              {active.index}
            </motion.span>
          </AnimatePresence>

          <div className="shell flex flex-1 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid w-full gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16"
              >
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                    {active.kind} · {active.domain}
                  </p>
                  <h3 className="fluid-h2 mt-4 font-display font-semibold tracking-tightest">
                    {active.title}
                  </h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {active.stack.map((t) => (
                      <span
                        key={t}
                        className="border border-line px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-px overflow-hidden rounded-sm border border-line bg-line">
                  {active.layers.map((layer, i) => (
                    <motion.div
                      key={layer.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="bg-bg p-5"
                    >
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                        {layer.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {layer.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* progress ticks */}
          <div className="shell flex gap-2 pb-10">
            {projects.map((p, i) => (
              <span
                key={p.index}
                className={`h-px flex-1 transition-colors duration-300 ${
                  i <= index ? "bg-accent" : "bg-line"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
