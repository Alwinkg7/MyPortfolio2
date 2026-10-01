import { securityChain } from "@/content/resume";
import { Eyebrow, Reveal, Section } from "../primitives";
import { motion } from "framer-motion";

/** Production-readiness chain: AUTH -> AUTHZ -> ... -> AUDIT TRAILS. */
export default function Security() {
  return (
    <Section id="security" className="border-t border-line py-28 sm:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow index="05">Production readiness</Eyebrow>
          <h2 className="fluid-h2 mt-6 max-w-4xl font-display font-medium tracking-tightest">
            Security built into the <span className="text-accent">request path</span>, not bolted on.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-7">
          {securityChain.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group flex min-h-[11rem] flex-col justify-between bg-bg p-5 transition-colors hover:bg-surface"
            >
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold leading-tight tracking-tight">
                  {item.label}
                </h3>
                <p className="mt-2 font-mono text-[0.68rem] leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
