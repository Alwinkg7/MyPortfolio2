import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Section } from "../primitives";

const LINES = ["I WRITE CODE", "I BUILD SYSTEMS", "I SHIP SOFTWARE"];

/** Large-type transition layer between identity and the system sections. */
export default function HowIThink() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <Section id="think">
      <div ref={ref} style={{ height: "300vh" }} className="relative">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="shell w-full">
            <span className="eyebrow mb-8 block text-accent">{"// how i think"}</span>
            <div className="relative">
              {LINES.map((line, i) => (
                <Line
                  key={line}
                  line={line}
                  i={i}
                  n={LINES.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Line({
  line,
  i,
  n,
  progress,
}: {
  line: string;
  i: number;
  n: number;
  progress: MotionValue<number>;
}) {
  const seg = 1 / n;
  const start = i * seg;
  const mid = start + seg / 2;
  const end = start + seg;

  const opacity = useTransform(
    progress,
    [start, mid - 0.08, mid + 0.08, end],
    [0.12, 1, 1, 0.12]
  );
  const x = useTransform(progress, [start, end], ["-2%", "2%"]);

  return (
    <motion.h2
      style={{ opacity, x }}
      className="fluid-h2 font-display font-semibold tracking-tightest"
    >
      {line.split(" ").map((w, wi) =>
        w === "SYSTEMS" || w === "SOFTWARE" || w === "CODE" ? (
          <span key={wi} className="text-accent">
            {w}{" "}
          </span>
        ) : (
          <span key={wi}>{w} </span>
        )
      )}
    </motion.h2>
  );
}
