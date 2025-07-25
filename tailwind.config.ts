import type { Config } from "tailwindcss";

/**
 * TailwindCSS configuration
 * -------------------------
 * This file tells Tailwind where to find class names so it can tree-shake the final CSS.
 * We include `app`, `src`, and `components` directories – adjust as your project grows.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
