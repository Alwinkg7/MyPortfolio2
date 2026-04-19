/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F172A",
          surface: "#1E293B",
          cyan: "#38BDF8",
          slate: "#94A3B8",
          offwhite: "#F1F5F9",
          border: "#334155",
          success: "#22C55E",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
          '50%': { opacity: 0.7, filter: 'brightness(1.5)' },
        },
      },
    },
  },
  plugins: [
    require('lightswind/plugin'),
  ],
}
