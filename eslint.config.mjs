import coreWebVitals from "eslint-config-next/core-web-vitals";

/** Flat ESLint config (ESLint 9 + Next 16). */
const config = [
  ...coreWebVitals,
  {
    ignores: [".next/**", "out/**", "node_modules/**"],
  },
];

export default config;
