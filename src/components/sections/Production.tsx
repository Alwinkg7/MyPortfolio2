import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { productionPipeline } from "@/content/resume";
import { Eyebrow } from "../primitives";

/**
 * Pinned horizontal pipeline on desktop: CODE -> BUILD -> ... -> TROUBLESHOOT.
 * Falls back to a vertical stepped list on small screens (no pin, no horizontal).
 */
export default function Production() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const steps = productionPipeline;

  // Measure how far the track must travel so the last card ends flush, in px.
  // Recomputed on resize so the horizontal scroll stays correct at any width.
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      // +48px for the pl-12 start offset so the last card isn't clipped at the edge.
      const d = Math.max(0, track.scrollWidth - window.innerWidth + 48);
      setDistance(d);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section id="production" className="border-t border-line">
      {/* Desktop: pinned horizontal */}
      <div
        ref={ref}
        style={{ height: "320vh" }}
        className="relative hidden lg:block"
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="shell mb-12">
            <Eyebrow index="04">Production engineering</Eyebrow>
            <h2 className="fluid-h2 mt-6 max-w-3xl font-display font-medium tracking-tightest">
              I don&apos;t only write code — I <span className="text-accent">run</span> it in production.
            </h2>
          </div>
          <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-6 pl-12 pr-12 will-change-transform">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="flex w-[22rem] shrink-0 flex-col justify-between border border-line bg-surface/50 p-8"
                style={{ minHeight: "22rem" }}
              >
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")} / {steps.length}
                </span>
                <div>
                  <h3 className="font-display text-5xl font-semibold tracking-tightest">
                    {s.step}
                  </h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <span
                        key={t}
                        className="border border-line px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet: vertical steps */}
      <div className="shell py-24 lg:hidden">
        <Eyebrow index="04">Production engineering</Eyebrow>
        <h2 className="fluid-h2 mt-6 max-w-3xl font-display font-medium tracking-tightest">
          I don&apos;t only write code — I <span className="text-accent">run</span> it in production.
        </h2>
        <div className="mt-12 flex flex-col">
          {steps.map((s, i) => (
            <div key={s.step} className="relative pl-8">
              <span className="absolute left-0 top-1 h-full w-px bg-line" aria-hidden />
              <span className="absolute left-[-3px] top-2 h-[7px] w-[7px] rounded-full bg-accent" aria-hidden />
              <div className="pb-10">
                <span className="font-mono text-xs text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl font-semibold tracking-tightest">
                  {s.step}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.tools.map((t) => (
                    <span
                      key={t}
                      className="border border-line px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
