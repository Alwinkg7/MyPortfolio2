import { useRef, useState } from "react";
import Image from "next/image";
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
  const portraitY = useTransform(scrollYProgress, [0, 1], ["-28px", "28px"]);

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

          {/* Desktop portrait — art-directed editorial frame with scroll parallax */}
          <div className="absolute right-[4%] top-1/2 hidden -translate-y-1/2 lg:block xl:right-[7%]">
            <motion.div
              style={{ y: portraitY }}
              className="relative h-[27rem] w-[20rem] overflow-hidden border border-line xl:h-[30rem] xl:w-[22rem]"
            >
              <Image
                src="/portfolio1.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="22rem"
                priority
                className="object-cover grayscale contrast-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 border border-accent/0" />
              <span className="absolute bottom-3 left-3 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-fg/80">
                {profile.name} — &apos;26
              </span>
            </motion.div>
          </div>

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

            {/* Role stepper — exactly one role visible at a time.
                No overflow-hidden here: a fixed-height clip was cropping letter
                descenders. min-h reserves space during the AnimatePresence swap. */}
            <div className="mt-6 flex min-h-[1.5em] items-center sm:mt-10">
              <div className="relative flex w-full items-center font-display text-xl font-light leading-[1.3] tracking-tight text-muted sm:text-3xl md:text-4xl">
                {/* progress counter */}
                <span className="mr-4 font-mono text-xs text-faint sm:text-sm">
                  0{idx + 1}
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, y: "0.3em" }}
                    animate={{ opacity: 1, y: "0em" }}
                    exit={{ opacity: 0, y: "-0.3em" }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`inline-block whitespace-nowrap pb-[0.12em] ${isLead ? "text-accent" : "text-fg"}`}
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

            {/* Mobile portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 lg:hidden"
            >
              <div className="relative h-52 w-40 overflow-hidden border border-line">
                <Image
                  src="/portfolio1.jpg"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="10rem"
                  className="object-cover grayscale contrast-[1.05]"
                />
              </div>
            </motion.div>
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
