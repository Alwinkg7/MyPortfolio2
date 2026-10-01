import { useEffect, useState } from "react";

type Theme = "dark" | "light";

/** Persisted theme toggle. Dark is the designed default. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    let initial: Theme = "dark";
    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored === "light" || stored === "dark") initial = stored;
    } catch {
      /* storage unavailable — keep default */
    }
    // One-time hydration sync of persisted theme; default stays "dark" on the
    // server so the first client render matches (no hydration mismatch).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      data-cursor=""
      className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted transition-colors hover:text-fg"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
