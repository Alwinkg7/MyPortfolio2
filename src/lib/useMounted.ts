import { useEffect, useState } from "react";

/**
 * Returns false during SSR and the first client render, true afterwards.
 * Use it to gate anything whose output depends on client-only state (e.g.
 * useReducedMotion, matchMedia) so the first client render matches the server
 * and hydration stays clean.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  // Intentional one-time flip after hydration to gate client-only rendering.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  return mounted;
}
