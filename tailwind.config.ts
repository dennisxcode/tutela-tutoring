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
        cream: "#faf7f2",
        ink: "#1f4733",
        // One terracotta, three values — a tonal ramp, not a second accent hue.
        // `accent` fills the CTA (white on it = 4.65:1). Small accent text needs
        // more: on cream use `accent-deep` (4.98:1 vs 4.35:1), and on the
        // deep-green panels use `accent-light` (4.59:1 vs 2.25:1).
        accent: "#c0532b",
        "accent-deep": "#b44a24",
        "accent-light": "#e69a70",
        body: "#2b2b28",
      },
      // `--font-noto-sans-sc` is injected by next/font in app/layout.tsx — keep it.
      fontFamily: {
        sans: ["var(--font-noto-sans-sc)", "system-ui", "sans-serif"],
        serif: ["var(--font-noto-serif-sc)", "Georgia", "serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: { content: "42rem" },
    },
  },
  plugins: [],
};
export default config;
