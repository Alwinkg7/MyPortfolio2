import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { profile, roleMorph } from "@/content/resume";
import { Section } from "../primitives";

/**
 * Opening section. A tall scroll track pins the name while the role word
 * steps through the career sequence and the environment drifts per step.
 *
 * The role uses a scroll-driven active index + AnimatePresence (the same
 * reliable pattern as the Experience/Projects timelines) rather than per-word
 * scroll transforms, so exactly one role is ever shown — no overlap.
 */
export default function Identity() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const n = roleMorph.length;
  const [idx, setIdx] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(n - 1, Math.max(0, Math.floor(v * n)));
    setIdx(next);
  });

  const role = roleMorph[idx];
  const isLead = role === "Technical Lead";

  // Background drift as you move through states.
  const bgShift = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const blobY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Section id="identity">
      <div ref={ref} style={{ height: `${n * 90}vh` }} className="relative">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          {/* drifting technical grid backdrop */}
          <motion.div
            aria-hidden
            style={{ opacity: gridOpacity, backgroundPositionX: bgShift }}
            className="grid-rules pointer-events-none absolute inset-0"
          />
          <motion.div
            aria-hidden
            style={{ y: blobY }}
            className="pointer-events-none absolute -right-20 top-1/4 h-[40rem] w-[40rem] rounded-full opacity-[0.07] blur-3xl"
          >
            <div className="h-full w-full rounded-full bg-accent" />
          </motion.div>

          <div className="shell relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow mb-6 flex flex-wrap items-center gap-x-4 gap-y-1"
            >
              <span className="text-accent">{`// ${profile.location}`}</span>
              <span>Available for production work</span>
            </motion.div>

            <h1 className="fluid-display font-display font-medium tracking-tightest">
              {profile.name.toUpperCase()}
            </h1>

            {/* Role stepper — exactly one role visible at a time */}
            <div className="mt-6 flex h-[1.5em] items-center overflow-hidden sm:mt-10">
              <div className="relative flex w-full items-center font-display text-xl font-light tracking-tight text-muted sm:text-3xl md:text-4xl">
                {/* progress counter */}
                <span className="mr-4 font-mono text-xs text-faint sm:text-sm">
                  0{idx + 1}
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, y: "0.5em" }}
                    animate={{ opacity: 1, y: "0em" }}
                    exit={{ opacity: 0, y: "-0.5em" }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`whitespace-nowrap ${isLead ? "text-accent" : "text-fg"}`}
                  >
                    {role}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-10 max-w-xl text-sm leading-relaxed text-muted sm:text-base"
            >
              {profile.summary}
            </motion.p>
          </div>

          {/* scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="shell absolute inset-x-0 bottom-8"
          >
            <div className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-faint">
              <span className="relative flex h-6 w-px overflow-hidden bg-line">
                <motion.span
                  className="absolute inset-0 bg-accent"
                  initial={{ y: "-100%" }}
                  animate={{ y: "100%" }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                />
              </span>
              Scroll to explore
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
