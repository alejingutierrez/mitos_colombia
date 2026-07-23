const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        // Fondo base
        paper: "rgb(var(--paper) / <alpha-value>)",
        // Neutrales (texto)
        ink: {
          900: "rgb(var(--ink-900) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          500: "rgb(var(--ink-500) / <alpha-value>)",
        },
        // Líneas / bordes / superficies sutiles
        line: {
          100: "rgb(var(--line-100) / <alpha-value>)",
          200: "rgb(var(--line-200) / <alpha-value>)",
          300: "rgb(var(--line-300) / <alpha-value>)",
        },
        mist: {
          50: "rgb(var(--mist-50) / <alpha-value>)",
          100: "rgb(var(--mist-100) / <alpha-value>)",
        },
        // Acento primario — verde selva
        jungle: {
          500: "rgb(var(--jungle-500) / <alpha-value>)",
          600: "rgb(var(--jungle-600) / <alpha-value>)",
          700: "rgb(var(--jungle-700) / <alpha-value>)",
          tint: "rgb(var(--jungle-tint) / <alpha-value>)",
        },
        // Acento secundario — azul río
        river: {
          500: "rgb(var(--river-500) / <alpha-value>)",
          600: "rgb(var(--river-600) / <alpha-value>)",
          700: "rgb(var(--river-700) / <alpha-value>)",
          tint: "rgb(var(--river-tint) / <alpha-value>)",
        },
        // Compat (sistema anterior, se retira al migrar)
        ember: {
          400: "rgb(var(--ember-400) / <alpha-value>)",
          500: "rgb(var(--ember-500) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
        body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        editorial: ["var(--font-editorial)", ...defaultTheme.fontFamily.serif],
      },
      borderRadius: {
        // Sistema editorial: esquinas rectas / mínimas
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        // Compat con el sistema anterior (se retira al migrar)
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        // Sombras discretas, editoriales (tintadas al tono del fondo)
        card: "0 1px 2px rgba(22, 22, 17, 0.04)",
        lift: "0 6px 20px rgba(22, 22, 17, 0.08)",
        // Sombra de difusión amplia y suave para superficies elevadas
        float:
          "0 24px 48px -24px rgba(22, 22, 17, 0.12), 0 8px 16px -12px rgba(22, 22, 17, 0.07)",
        // Compat
        glass: "0 20px 60px rgba(6, 24, 24, 0.12)",
      },
      transitionTimingFunction: {
        // Curva de salida premium (usada en motion del sistema)
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
