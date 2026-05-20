import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fira-code)"],
        sans: ["var(--font-fira-code)"],
        mono: ["var(--font-fira-code)"],
      },
    },
  },
};

export default config;
