import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { navSections, profile } from "@/content/resume";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [active, setActive] = useState<string>(navSections[0].id);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  // Observe section visibility to drive the active indicator.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock scroll while the mobile overlay is open.
  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        aria-hidden
        className="fixed left-0 top-0 z-[65] h-[2px] w-full origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      <header className="fixed inset-x-0 top-0 z-[55]">
        <div className="shell flex items-center justify-between py-5">
          <a
            href="#identity"
            data-cursor=""
            className="font-display text-sm font-semibold tracking-tighter"
          >
            {profile.name.toUpperCase()}
            <span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {navSections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                data-cursor=""
                className="group relative font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-colors"
              >
                <span className={active === id ? "text-fg" : "text-muted group-hover:text-fg"}>
                  {label}
                </span>
                {active === id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                  />
                )}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile trigger */}
          <button
            onClick={() => setOpen(true)}
            className="font-mono text-[0.7rem] uppercase tracking-[0.2em] md:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] flex flex-col bg-bg md:hidden"
          >
            <div className="shell flex items-center justify-between py-5">
              <span className="font-display text-sm font-semibold tracking-tighter">
                {profile.name.toUpperCase()}
                <span className="text-accent">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="font-mono text-[0.7rem] uppercase tracking-[0.2em]"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
            <nav className="shell flex flex-1 flex-col justify-center gap-2">
              {navSections.map(({ id, label }, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="fluid-h2 font-display font-medium tracking-tighter"
                >
                  <span className="mr-4 font-mono text-sm text-accent align-middle">
                    0{i + 1}
                  </span>
                  {label}
                </motion.a>
              ))}
            </nav>
            <div className="shell flex items-center justify-between py-6">
              <ThemeToggle />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                {profile.location}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
