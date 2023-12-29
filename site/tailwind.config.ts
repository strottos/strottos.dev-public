import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./generated/**/*.{js,jsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.8rem",
        "4xl": "2.2rem",
        "5xl": "2.75rem",
      },
      height: {
        112: "28rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: "#e2e8f0",
      header: "#d3e2eb",
      blue: "#1e3a8a",
    },
  },
  plugins: [],
};
export default config;
