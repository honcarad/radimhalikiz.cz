/**
 * Design tokens for the dance studio site.
 * --------------------------------------------------------------------------
 * This is the single place to configure the site's look & feel. Everything
 * here is merged into Tailwind's `theme.extend` (see tailwind.config.js), so
 * these values are *added to* Tailwind's defaults rather than replacing them.
 *
 * Palette & fonts are matched to the existing radimhalikiz.cz site:
 *   - Accent  : golden yellow (#f3c813) — the site's signature color
 *   - Ink/BG  : black text on white, high-contrast and minimal
 *   - Fonts   : Montserrat (body) + Poppins (headings/display)
 *
 * Change a value here and it propagates everywhere via utility classes
 * (e.g. `bg-brand`, `font-display`, `rounded-card`, `shadow-card`).
 */
module.exports = {
  // ---- Colors --------------------------------------------------------------
  // `brand` is the golden-yellow accent from the live site. Because it's a
  // light color, use DARK text on top of it (e.g. `bg-brand text-ink`), not
  // white. The full ramp lets you use tints like bg-brand-50 / text-brand-700.
  colors: {
    brand: {
      DEFAULT: "#f3c813", // exact accent used across radimhalikiz.cz
      50: "#fffdea",
      100: "#fff9c2",
      200: "#fff34d", // bright yellow highlight seen on the site
      300: "#fde047",
      400: "#f7d827",
      500: "#f3c813",
      600: "#ca9a04", // darker gold — good for hover states
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      dark: "#ca9a04", // kept for existing `bg-brand-dark` (hover) usages
    },
    // Near-black used for text/headings on the live site.
    ink: {
      DEFAULT: "#000000",
      soft: "#1a1a1a",
    },
    // Neutral grey used for secondary text on the live site.
    muted: "#7f8794",
  },

  // ---- Typography ----------------------------------------------------------
  // Matches the fonts loaded by radimhalikiz.cz.
  // Reference with `font-sans` (body, applied automatically) and
  // `font-display` (headings — applied to h1–h3 via src/css/tailwind.css).
  fontFamily: {
    sans: ["Montserrat", "system-ui", "sans-serif"],
    display: ["Poppins", "Montserrat", "system-ui", "sans-serif"],
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
