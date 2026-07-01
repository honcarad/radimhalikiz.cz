/**
 * Design tokens for the dance studio site.
 * --------------------------------------------------------------------------
 * This is the single place to configure the site's look & feel. Everything
 * here is merged into Tailwind's `theme.extend` (see tailwind.config.js), so
 * these values are *added to* Tailwind's defaults rather than replacing them.
 *
 * Change a value here and it propagates everywhere via utility classes
 * (e.g. `bg-brand`, `font-display`, `rounded-card`, `shadow-card`).
 */
module.exports = {
  // ---- Colors --------------------------------------------------------------
  // `brand` is the accent used across buttons, links and highlights.
  // Each shade is a full ramp so you can use e.g. bg-brand-100 / text-brand-700.
  colors: {
    brand: {
      DEFAULT: "#e11d48",
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      dark: "#9f1239", // kept for existing `bg-brand-dark` usages
    },
  },

  // ---- Typography ----------------------------------------------------------
  // Reference these with `font-sans` (body) and `font-display` (headings).
  // Swap the first entry for a web font when you load one.
  fontFamily: {
    sans: ["Inter", "system-ui", "sans-serif"],
    display: ["Poppins", "Inter", "system-ui", "sans-serif"],
  },

  // ---- Shape & elevation ---------------------------------------------------
  // Semantic tokens so components stay consistent: `rounded-card`, `shadow-card`.
  borderRadius: {
    card: "1rem",
    pill: "9999px",
  },
  boxShadow: {
    card: "0 10px 30px -12px rgb(0 0 0 / 0.15)",
  },

  // ---- Layout --------------------------------------------------------------
  // Handy named max-width for page containers: `max-w-content`.
  maxWidth: {
    content: "72rem", // 1152px — matches the max-w-6xl used in layouts
  },
};
