/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan every template Eleventy might render so unused classes are purged.
  content: [
    "./src/**/*.html",
    "./src/**/*.md",
    "./src/**/*.njk",
    "./src/js/**/*.js",
  ],
  theme: {
    extend: {
      // A small brand palette for the dance studio — tweak to taste.
      colors: {
        brand: {
          DEFAULT: "#e11d48", // rose-600-ish accent
          dark: "#9f1239",
        },
      },
    },
  },
  plugins: [],
};
