module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      // Suas cores específicas
      "from-green-400",
      "to-green-700",
      "from-blue-400",
      "to-blue-700",
      "from-gray-400",
      "to-gray-700",

      // Ou use regex mais específico
      /^from-(green|blue|gray)-(400|700)$/,
      /^to-(green|blue|gray)-(400|700)$/,

      // Manter seus padrões gerais
      /^bg-/,
    ],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
