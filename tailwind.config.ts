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
        'primary-text': "#2E2E2E",
        'secundary-text': "#6a6f73",
        'bg-input': "#f1f1f1",
        'text-placeholders': "#999",
      },
    },
  },
  plugins: [],
};
export default config;
