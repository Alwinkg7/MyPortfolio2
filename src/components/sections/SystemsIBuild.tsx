import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { systems } from "@/content/resume";
import { Eyebrow, Reveal, Section } from "../primitives";

/** Interactive selector: choosing a system rebuilds its architecture column. */
export default function SystemsIBuild() {
  const [activeId, setActiveId] = useState(systems[0].id);
  const active = systems.find((s) => s.id === activeId)!;

  return (
    <Section id="systems" className="py-28 sm:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow index="01">Systems I build</Eyebrow>
          <h2 className="fluid-h2 mt-6 max-w-4xl font-display font-medium tracking-tightest">
            Not a list of technologies. The <span className="text-accent">systems</span> they add up to.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Selector */}
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
              {systems.map((s) => {
                const on = s.id === activeId;
                return (
                  <button
                    key={s.id}
                    onMouseEnter={() => setActiveId(s.id)}
                    onFocus={() => setActiveId(s.id)}
                    onClick={() => setActiveId(s.id)}
                    data-cursor="EXPLORE"
                    className="group relative border-b border-line py-4 pr-2 text-left lg:py-6"
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className={`font-mono text-xs transition-colors ${
                          on ? "text-accent" : "text-faint"
                        }`}
                      >
                        {String(systems.indexOf(s) + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-2xl font-medium tracking-tight transition-colors sm:text-3xl ${
                          on ? "text-fg" : "text-muted group-hover:text-fg"
                        }`}
                      >
                        {s.label}
                      </span>
                    </span>
                    {on && (
                      <motion.span
                        layoutId="systems-active"
                        className="absolute bottom-[-1px] left-0 h-px w-full bg-accent"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Architecture panel */}
          <div className="relative rounded-sm border border-line bg-surface/60 p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                  {active.project}
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {active.blurb}
                </p>

                <div className="mt-8 flex flex-col">
                  {active.stack.map((layer, i) => (
                    <motion.div
                      key={layer}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="relative"
                    >
                      <div className="flex items-center gap-4 border border-line bg-elevated px-4 py-3">
                        <span className="font-mono text-[0.65rem] text-faint">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-sm text-fg">{layer}</span>
                      </div>
                      {i < active.stack.length - 1 && (
                        <div className="ml-6 h-5 w-px bg-line" aria-hidden />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
