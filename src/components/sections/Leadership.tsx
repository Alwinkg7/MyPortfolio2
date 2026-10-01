import { leadership, mentorship } from "@/content/resume";
import { Eyebrow, Reveal, Section } from "../primitives";
import { motion } from "framer-motion";

/** Technical Lead responsibilities as activating verbs. */
export default function Leadership() {
  return (
    <Section id="leadership" className="border-t border-line py-28 sm:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow index="08">Technical lead</Eyebrow>
          <h2 className="fluid-h2 mt-6 max-w-4xl font-display font-medium tracking-tightest">
            Leading through the <span className="text-accent">work</span>, still hands-on.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col divide-y divide-line border-y border-line">
          {leadership.map((item, i) => (
            <motion.div
              key={item.verb}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.5 }}
              className="group grid items-center gap-4 py-6 sm:grid-cols-[0.4fr_1fr] sm:py-8"
            >
              <h3 className="font-display text-4xl font-semibold tracking-tightest text-muted transition-colors duration-300 group-hover:text-accent sm:text-6xl">
                {item.verb}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl border-l border-accent pl-5 text-sm leading-relaxed text-muted">
            {mentorship}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
