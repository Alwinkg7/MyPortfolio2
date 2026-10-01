import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { experience } from "@/content/resume";
import { Eyebrow } from "../primitives";

/** Sticky timeline. Scroll scrubs through Trainee -> Engineer -> Technical Lead. */
export default function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(
      experience.length - 1,
      Math.floor(v * experience.length)
    );
    setIndex(i);
  });

  const active = experience[index];

  return (
    <section id="experience" className="border-t border-line">
      <div ref={ref} style={{ height: `${experience.length * 100}vh` }} className="relative">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="shell grid w-full gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left rail: years + markers */}
            <div>
              <Eyebrow index="06">Experience</Eyebrow>
              <div className="mt-10 flex flex-col gap-1">
                {experience.map((role, i) => {
                  const on = i === index;
                  return (
                    <button
                      key={role.title}
                      onClick={() => {
                        const el = ref.current;
                        if (!el) return;
                        const top =
                          el.offsetTop +
                          (i + 0.5) * (el.offsetHeight / experience.length) -
                          window.innerHeight / 2;
                        window.scrollTo({ top });
                      }}
                      className="flex items-center gap-4 py-2 text-left"
                    >
                      <span
                        className={`h-2 w-2 shrink-0 rounded-full transition-colors ${
                          on ? "bg-accent" : "bg-faint"
                        }`}
                      />
                      <span
                        className={`font-display text-lg font-medium tracking-tight transition-colors sm:text-xl ${
                          on ? "text-fg" : "text-muted"
                        }`}
                      >
                        {role.title}
                      </span>
                      <span className="font-mono text-[0.65rem] text-faint">
                        {role.period}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: active role detail */}
            <div className="relative min-h-[22rem]">
              <AnimatedRole key={active.title} role={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedRole({ role }: { role: (typeof experience)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-baseline justify-between border-b border-line pb-5">
        <h3 className="font-display text-3xl font-semibold tracking-tightest sm:text-5xl">
          {role.title}
        </h3>
        <span className="font-mono text-xs text-accent">{role.period}</span>
      </div>
      <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
        {role.org}
      </p>
      <ul className="mt-8 flex flex-col gap-4">
        {role.points.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
            className="flex gap-3 text-sm leading-relaxed text-muted"
          >
            <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
            {point}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
