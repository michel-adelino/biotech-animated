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
        // Brand Colors
        purple: {
          900: "var(--bmv-purple-900)",
          800: "var(--bmv-purple-800)",
          700: "var(--bmv-purple-700)",
          600: "var(--bmv-purple-600)",
          500: "var(--bmv-purple-500)",
          400: "var(--bmv-purple-400)",
          300: "var(--bmv-purple-300)",
          200: "var(--bmv-purple-200)",
          100: "var(--bmv-purple-100)",
        },
        orange: {
          700: "var(--bmv-orange-700)",
          600: "var(--bmv-orange-600)",
          500: "var(--bmv-orange-500)",
          400: "var(--bmv-orange-400)",
          300: "var(--bmv-orange-300)",
        },
        gray: {
          900: "var(--bmv-gray-900)",
          850: "var(--bmv-gray-850)",
          800: "var(--bmv-gray-800)",
          700: "var(--bmv-gray-700)",
          600: "var(--bmv-gray-600)",
          500: "var(--bmv-gray-500)",
          400: "var(--bmv-gray-400)",
          300: "var(--bmv-gray-300)",
          200: "var(--bmv-gray-200)",
          100: "var(--bmv-gray-100)",
        },
        success: "var(--bmv-success)",
        warning: "var(--bmv-warning)",
        error: "var(--bmv-error)",
        info: "var(--bmv-info)",
      },
      fontFamily: {
        'display': ['var(--font-display)'],
        'text': ['var(--font-text)'],
        'mono': ['var(--font-mono)'],
      },
      fontSize: {
        'h1': 'var(--h1)',
        'h2': 'var(--h2)',
        'h3': 'var(--h3)',
        'h4': 'var(--h4)',
        'body': 'var(--body)',
        'body-lg': 'var(--body-lg)',
        'small': 'var(--small)',
        'meta': 'var(--meta)',
      },
      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
        '7': 'var(--space-7)',
        '8': 'var(--space-8)',
        '9': 'var(--space-9)',
        '10': 'var(--space-10)',
        '11': 'var(--space-11)',
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
