/** @type {import('tailwindcss').Config} */

// Design tokens live in a dedicated file so the theme can be configured in
// one place. See tailwind.theme.js.
const theme = require("./tailwind.theme");

module.exports = {
  // Scan every template Eleventy might render so unused classes are purged.
  content: [
    "./src/**/*.html",
    "./src/**/*.md",
    "./src/**/*.njk",
    "./src/js/**/*.js",
  ],
  theme: {
    // Spread the tokens into `extend` so they add to Tailwind's defaults.
    extend: {
      ...theme,
    },
  },
  plugins: [],
};
