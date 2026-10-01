import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skillGroups, techGraph } from "@/content/resume";
import { Eyebrow, Reveal, Section } from "../primitives";

// Fixed layout coordinates (0-100 viewBox space) per node id.
const POS: Record<string, { x: number; y: number }> = {
  nextjs: { x: 14, y: 16 },
  react: { x: 14, y: 42 },
  ts: { x: 14, y: 68 },
  rest: { x: 38, y: 42 },
  aspnet: { x: 60, y: 42 },
  csharp: { x: 60, y: 16 },
  auth: { x: 60, y: 68 },
  ef: { x: 78, y: 24 },
  sql: { x: 90, y: 50 },
  tsql: { x: 90, y: 76 },
  whatsapp: { x: 78, y: 86 },
  payments: { x: 44, y: 86 },
};

export default function TechGraph() {
  const [hover, setHover] = useState<string | null>(null);

  // Build unique edges from the adjacency list.
  const edges = useMemo(() => {
    const seen = new Set<string>();
    const list: { a: string; b: string }[] = [];
    techGraph.forEach((node) => {
      node.connects.forEach((c) => {
        const key = [node.id, c].sort().join("-");
        if (!seen.has(key) && POS[node.id] && POS[c]) {
          seen.add(key);
          list.push({ a: node.id, b: c });
        }
      });
    });
    return list;
  }, []);

  const activeNode = hover ? techGraph.find((n) => n.id === hover) : null;
  const litNodes = new Set<string>(
    activeNode ? [activeNode.id, ...activeNode.connects] : []
  );

  const isEdgeLit = (a: string, b: string) =>
    !!activeNode && (a === activeNode.id || b === activeNode.id);

  return (
    <Section id="stack" className="border-t border-line py-28 sm:py-36">
      <div className="shell">
        <Reveal>
          <Eyebrow index="02">Technology</Eyebrow>
          <h2 className="fluid-h2 mt-6 max-w-4xl font-display font-medium tracking-tightest">
            One connected stack — frontend to <span className="text-accent">database</span>.
          </h2>
        </Reveal>

        {/* Interactive graph (md+) */}
        <Reveal delay={0.1}>
          <div className="mt-14 hidden rounded-sm border border-line bg-surface/40 p-6 md:block">
            <svg
              viewBox="0 0 100 100"
              className="h-[32rem] w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* edges */}
              {edges.map(({ a, b }, i) => {
                const lit = isEdgeLit(a, b);
                return (
                  <motion.line
                    key={i}
                    x1={POS[a].x}
                    y1={POS[a].y}
                    x2={POS[b].x}
                    y2={POS[b].y}
                    stroke={lit ? "rgb(var(--accent))" : "rgb(var(--line) / 0.18)"}
                    strokeWidth={lit ? 0.5 : 0.25}
                    animate={{ opacity: hover && !lit ? 0.25 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                );
              })}
              {/* nodes */}
              {techGraph.map((node) => {
                if (!POS[node.id]) return null;
                const lit = !hover || litNodes.has(node.id);
                const isActive = hover === node.id;
                return (
                  <g
                    key={node.id}
                    transform={`translate(${POS[node.id].x} ${POS[node.id].y})`}
                    onMouseEnter={() => setHover(node.id)}
                    onMouseLeave={() => setHover(null)}
                    className="cursor-none"
                  >
                    <circle
                      r={isActive ? 1.8 : 1.2}
                      fill={isActive ? "rgb(var(--accent))" : "rgb(var(--bg))"}
                      stroke={lit ? "rgb(var(--accent))" : "rgb(var(--faint))"}
                      strokeWidth={0.3}
                    />
                    <text
                      x={node.group === "data" || node.id === "ef" ? -2.2 : 2.2}
                      y={0.9}
                      textAnchor={node.group === "data" || node.id === "ef" ? "end" : "start"}
                      fontSize={2.3}
                      className="font-mono"
                      fill={lit ? "rgb(var(--fg))" : "rgb(var(--muted))"}
                      opacity={lit ? 1 : 0.4}
                    >
                      {node.label}
                    </text>
                    {/* invisible hit area */}
                    <circle r={3.5} fill="transparent" />
                  </g>
                );
              })}
            </svg>
            <p className="mt-2 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-faint">
              {activeNode ? `${activeNode.label} — illuminated path` : "Hover a node to trace its connections"}
            </p>
          </div>
        </Reveal>

        {/* Grouped list (always present; primary view on mobile) */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-bg p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                {group.label}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
