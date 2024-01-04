import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'text-5xl',
    'text-4xl',
    'text-3xl',
    'text-2xl',
    'text-xl',
    'bg-lightgray',
    'float-right',
    'list-disc',
    'list-decimal',
    'mb-2',
    'ml-6',
    'p-4',
    'inline-block',
    'w-fit',
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
      width: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: "#e2e8f0",
      lightgray: "#f3f3f3",
      header: "#d3e2eb",
      blue: "#1e3a8a",
    },
  },
  plugins: [],
};
export default config;
