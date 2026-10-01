import { useRef } from "react";
import { motion } from "framer-motion";
import {
  certifications,
  education,
  profile,
} from "@/content/resume";
import { Eyebrow, Reveal, Section } from "../primitives";

const LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, cursor: "SEND" },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, cursor: "OPEN ↗" },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, cursor: "OPEN ↗" },
];

export default function Contact() {
  return (
    <Section id="contact" className="border-t border-line py-28 sm:py-36">
      <div className="shell">
        {/* Education + certs */}
        <div className="grid gap-10 border-b border-line pb-20 lg:grid-cols-[0.5fr_1fr]">
          <Eyebrow index="09">Background</Eyebrow>
          <div className="flex flex-col gap-8">
            {education.map((e) => (
              <Reveal key={e.school}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-tight">
                      {e.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{e.school}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-mono text-xs text-accent">{e.period}</p>
                    <p className="font-mono text-xs text-muted">{e.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                Certification —{" "}
                <span className="text-fg">{certifications.join(", ")}</span>
              </p>
            </Reveal>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-20">
          <Reveal>
            <span className="eyebrow text-accent">{"// let's talk"}</span>
            <h2 className="fluid-display mt-6 font-display font-medium tracking-tightest">
              HAVE A SYSTEM
              <br />
              TO <span className="text-accent">BUILD?</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
            {LINKS.map((link) => (
              <MagneticLink key={link.label} {...link} />
            ))}
          </div>

          <Reveal delay={0.1}>
            <a
              href={profile.resumeUrl}
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted link-underline hover:text-fg"
              data-cursor="OPEN ↗"
            >
              Download resume (PDF)
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function MagneticLink({
  label,
  value,
  href,
  cursor,
}: {
  label: string;
  value: string;
  href: string;
  cursor: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${mx * 0.08}px, ${my * 0.12}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const external = href.startsWith("http");

  return (
    <a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={reset}
      data-cursor={cursor}
      className="group flex min-h-[9rem] flex-col justify-between bg-bg p-6 transition-[transform,background-color] duration-300 ease-editorial hover:bg-surface"
    >
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
      <span className="font-display text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
        {value}
      </span>
    </a>
  );
}
