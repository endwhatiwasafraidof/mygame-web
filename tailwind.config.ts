import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        surface: "#18181b",
        border: "#27272a",
        glow: "#fb923c",
        accent: {
          DEFAULT: "#f97316",
          foreground: "#fff7ed",
          600: "#ea580c",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(249, 115, 22, 0.2), 0 0 32px rgba(249, 115, 22, 0.22)",
        panel: "0 20px 80px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(circle at top, rgba(249, 115, 22, 0.22), transparent 40%), radial-gradient(circle at bottom right, rgba(251, 146, 60, 0.12), transparent 30%)",
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        shell: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
