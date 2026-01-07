const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "rgb(var(--ink-900) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          500: "rgb(var(--ink-500) / <alpha-value>)",
        },
        mist: {
          50: "rgb(var(--mist-50) / <alpha-value>)",
          100: "rgb(var(--mist-100) / <alpha-value>)",
        },
        jungle: {
          500: "rgb(var(--jungle-500) / <alpha-value>)",
          600: "rgb(var(--jungle-600) / <alpha-value>)",
        },
        river: {
          500: "rgb(var(--river-500) / <alpha-value>)",
          600: "rgb(var(--river-600) / <alpha-value>)",
        },
        ember: {
          400: "rgb(var(--ember-400) / <alpha-value>)",
          500: "rgb(var(--ember-500) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", ...defaultTheme.fontFamily.serif],
        body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        glass: "0 20px 60px rgba(6, 24, 24, 0.12)",
        lift: "0 18px 40px rgba(10, 30, 26, 0.18)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
