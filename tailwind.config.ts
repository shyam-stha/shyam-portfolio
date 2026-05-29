import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        accent: "var(--accent-color)",
        card: "var(--card-bg)",
        "card-border": "var(--card-border)",
        glow: "var(--glow-color)",
        "cta-bg": "var(--btn-cta-bg)",
        "cta-btn": "var(--btn-cta-text)",
        "timeline-rail": "var(--timeline-rail)",
        obsidian: "#030712", /* Slate-950 background */
        charcoal: "#0f172a", /* Slate-900 */
        bronze: {
          DEFAULT: "#e2b857", /* Vibrant Champagne Gold */
          light: "#f3d078",
          dark: "#b89035",
          subtle: "rgba(226, 184, 87, 0.06)",
          border: "rgba(226, 184, 87, 0.15)"
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          450: "#94a3b8",
          500: "#64748b"
        },
        ink: "#030712",
        panel: "rgba(15, 23, 42, 0.8)",
        line: "rgba(226, 184, 87, 0.12)"
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "ui-serif", "Georgia", "serif"],
        display: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 0 35px rgba(226, 184, 87, 0.08)",
        card: "0 20px 60px rgba(0, 0, 0, 0.5)"
      },
      backgroundImage: {
        "mesh": "radial-gradient(circle at 18% 18%, rgba(226, 184, 87, 0.06), transparent 28%), radial-gradient(circle at 82% 8%, rgba(226, 184, 87, 0.04), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
