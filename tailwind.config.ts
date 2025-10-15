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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        dark: {
          main: "#161719",
          highlighted: "#212225",
        },
        pink: {
          primary: "#b12176",
        },
      },
      fontFamily: {
        'heading': ['var(--font-heading)'],
        'sans': ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        'mono': ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
