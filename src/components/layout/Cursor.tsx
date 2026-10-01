import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Desktop-only custom cursor. A small dot that grows into a labelled puck when
 * hovering elements that declare data-cursor="VIEW" (etc).
 * Auto-disabled on touch / coarse pointers and under reduced motion.
 */
export default function Cursor() {
  const reduce = useReducedMotion();
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    // Enable only after confirming a fine pointer at runtime (client-only).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.body.classList.add("has-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const render = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const el = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-cursor], a, button"
      );
      if (el) {
        setActive(true);
        setLabel(el.getAttribute("data-cursor"));
      } else {
        setActive(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", move);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-cursor");
    };
  }, [reduce]);

  if (!enabled) return null;

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] flex items-center justify-center rounded-full bg-accent text-accent-ink transition-[width,height,opacity] duration-300 ease-editorial will-change-transform"
      style={{
        width: label ? 64 : active ? 14 : 8,
        height: label ? 64 : active ? 14 : 8,
        mixBlendMode: label ? "normal" : "difference",
      }}
    >
      {label && (
        <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-widest">
          {label}
        </span>
      )}
    </div>
  );
}
