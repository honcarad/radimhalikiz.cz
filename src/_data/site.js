/**
 * Global site metadata — the single source of truth for SEO.
 * --------------------------------------------------------------------------
 * Available in every template as `site.*` (e.g. {{ site.name }}).
 * Fill in the blanks (telephone, address, socials, real domain) to strengthen
 * search-engine and social-sharing results.
 */
module.exports = {
  // ---- Identity ------------------------------------------------------------
  name: "Rhythm & Motion",
  legalName: "Rhythm & Motion Dance Studio",

  // IMPORTANT: the production domain, no trailing slash. Used to build the
  // absolute URLs required by canonical tags, Open Graph, sitemap & JSON-LD.
  url: "https://radimhalikiz.cz",

  // BCP-47 language tag; used in <html lang> and (as en_US form) og:locale.
  locale: "en",

  // ---- Default SEO copy (pages can override via front matter) --------------
  defaultTitle: "Rhythm & Motion — Dance Studio",
  titleTemplate: "%s · Rhythm & Motion", // how per-page titles are framed
  description:
    "A welcoming dance studio offering salsa, ballet, hip-hop and more — " +
    "classes for every level, from your first steps to the stage.",

  // ---- Media (create these files in src/assets/) ---------------------------
  // Social share image should be 1200×630px for best results.
  image: "/assets/og-image.jpg",
  logo: "/assets/logo.png",

  // ---- Contact & location (used in LocalBusiness structured data) ----------
  telephone: "", // e.g. "+420 123 456 789"
  email: "", // e.g. "hello@radimhalikiz.cz"
  address: {
    streetAddress: "",
    addressLocality: "Prague",
    postalCode: "",
    addressCountry: "CZ",
  },

  // ---- Social / authority profiles (help Google connect the brand) ---------
  twitter: "", // e.g. "@rhythmmotion" (used for Twitter Card attribution)
  sameAs: [
    // "https://www.instagram.com/your-handle/",
    // "https://www.facebook.com/your-page/",
    // "https://www.youtube.com/@your-channel",
  ],
};
