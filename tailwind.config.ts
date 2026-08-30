import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neural: {
          bg: "#030712",
          surface: "#0b1329",
          card: "#111c38",
          border: "#1e2c4f",
          cyan: "#00d4ff",
          purple: "#818cf8",
          pink: "#f472b6",
          green: "#34d399",
          amber: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 15px rgba(0, 212, 255, 0.2)" },
          "100%": { boxShadow: "0 0 30px rgba(0, 212, 255, 0.6), 0 0 50px rgba(129, 140, 248, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
