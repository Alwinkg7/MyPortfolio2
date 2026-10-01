import type { AppProps } from "next/app";
import { MotionConfig } from "framer-motion";
import { useMounted } from "@/lib/useMounted";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const mounted = useMounted();
  // Resolve reduced-motion only after mount. During SSR and the first client
  // render we use "never" so framer-motion renders `initial` states on both
  // sides (no hydration mismatch). After mount we switch to "user", honoring the
  // OS prefers-reduced-motion setting: transform/layout animations are disabled
  // (content stays visible), opacity fades remain.
  return (
    <MotionConfig reducedMotion={mounted ? "user" : "never"}>
      <Component {...pageProps} />
    </MotionConfig>
  );
}
