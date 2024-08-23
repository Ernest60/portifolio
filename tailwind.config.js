/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
  });
});

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#3b363d",
        "primary-light": "#cfc9c9",
        "primary-darker": "333333",
        "secondary-1": "#ff0000",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      },
    },
    fontFamily: {
      title: ["oswald", "sans-serif"],

      body: ["Poppins", "sans-serif"],
    },
  },

  plugins: [rotateY],
};
