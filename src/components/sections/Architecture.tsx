import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow, Reveal, Section } from "../primitives";
import { useMounted } from "@/lib/useMounted";

const LAYERS = [
  { label: "CLIENT", sub: "Browser / Admin" },
  { label: "FRONTEND", sub: "Next.js · React · TypeScript" },
  { label: "API LAYER", sub: "ASP.NET Core · REST" },
  { label: "BUSINESS LOGIC", sub: "C# · Validation · Auth" },
  { label: "DATA", sub: "SQL Server · T-SQL · EF Core" },
  { label: "INTEGRATIONS", sub: "WhatsApp API · Payment Gateway" },
];

/** Production architecture with a packet animating request -> response. */
export default function Architecture() {
  const reduce = useReducedMotion();
  const mounted = useMounted();
  // Gate on mount so SSR and first client render agree (useReducedMotion is
  // null on the server, resolved on the client).
  const showPacket = mounted && !reduce;

  return (
    <Section id="architecture" className="border-t border-line py-28 sm:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow index="03">Architecture</Eyebrow>
          <h2 className="fluid-h2 mt-6 max-w-4xl font-display font-medium tracking-tightest">
            How a request <span className="text-accent">flows</span> through a system I build.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-16 overflow-hidden rounded-sm border border-line bg-surface/40 p-6 sm:p-12">
            <div className="relative mx-auto flex max-w-xl flex-col">
              {/* travelling packet */}
              {showPacket && (
                <motion.span
                  aria-hidden
                  className="absolute left-1/2 top-0 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_20px_rgb(var(--accent))]"
                  initial={{ top: "0%" }}
                  animate={{ top: "100%" }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              )}

              {LAYERS.map((layer, i) => (
                <div key={layer.label} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-center justify-between border border-line bg-elevated px-5 py-4"
                  >
                    <span className="font-display text-sm font-semibold tracking-tight sm:text-base">
                      {layer.label}
                    </span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted sm:text-xs">
                      {layer.sub}
                    </span>
                  </motion.div>
                  {i < LAYERS.length - 1 && (
                    <div className="relative mx-auto flex h-8 w-px items-center justify-center bg-line">
                      <span className="absolute -right-10 font-mono text-[0.55rem] uppercase tracking-widest text-faint">
                        {i < 4 ? "req ↓" : "↓"}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-10 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-faint">
              request travels down · response travels back up
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
