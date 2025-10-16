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
          main: "var(--background)",
          mains: "rgb(var(--background-rgb) / <alpha-value>)",
          highlighted: "var(--secondary)",
          highlights: "rgb(var(--secondary-rgb) / <alpha-value>)",
        },
        pink: {
          primary: "var(--primary)",
          primaries: "rgb(var(--primary-rgb) / <alpha-value>)",
          accent: "var(--accent)",
          accents: "rgb(var(--accent-rgb) / <alpha-value>)",
        },
        coral: {
          primary: "var(--coral)",
          primaries: "rgb(var(--coral-rgb) / <alpha-value>)",
        },
      },
      fontFamily: {
        'heading': ['var(--font-heading)'],
        'sans': ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        'mono': ['var(--font-geist-mono)', 'monospace'],
      },
        animation: {
          'scroll': 'scroll 240s linear infinite',
        },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
