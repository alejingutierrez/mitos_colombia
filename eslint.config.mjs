import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextCoreWebVitals,
  {
    rules: {
      "react-hooks/immutability": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    ignores: [
      "**/.next/**",
      ".claude/**",
      ".next/**",
      "out/**",
      "build/**",
      "coverage/**",
      ".vercel/**",
    ],
  },
];

export default config;
