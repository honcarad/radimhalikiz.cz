/**
 * Eleventy configuration
 * --------------------------------------------------------------------------
 * HOWL stack notes:
 *  - Tailwind is compiled OUTSIDE of Eleventy (see package.json scripts) and
 *    written straight to `dist/css/main.css`, so we only pass through the
 *    hand-written JS (Stimulus controllers) and any static partials/assets.
 */
module.exports = function (eleventyConfig) {
  // ---- Filters -------------------------------------------------------------
  // A tiny, dependency-free strftime-style `date` filter.
  // Supports the tokens used in our templates: %Y %m %d %e %B.
  // Accepts a Date, an ISO string, or the literal "now".
  eleventyConfig.addFilter("date", (value, format = "%Y-%m-%d") => {
    const d = value === "now" || value == null ? new Date() : new Date(value);
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    const pad = (n) => String(n).padStart(2, "0");
    return format
      .replace(/%Y/g, d.getUTCFullYear())
      .replace(/%m/g, pad(d.getUTCMonth() + 1))
      .replace(/%d/g, pad(d.getUTCDate()))
      .replace(/%e/g, String(d.getUTCDate())) // space-less day, no leading zero
      .replace(/%B/g, months[d.getUTCMonth()]);
  });

  // ---- Passthrough static assets ------------------------------------------
  // Copy client-side JS (Stimulus controllers) verbatim to the output.
  eleventyConfig.addPassthroughCopy("src/js");
  // HTMX fetches these small HTML fragments at runtime. Pass them through
  // verbatim and stop Eleventy from also rendering them as page templates,
  // so we get exactly one file at /partials/schedule.html.
  eleventyConfig.addPassthroughCopy("src/partials");
  eleventyConfig.ignores.add("src/partials/**");
  // Images, fonts, favicons, etc.
  eleventyConfig.addPassthroughCopy("src/assets");

  // ---- Watch targets -------------------------------------------------------
  // Rebuild the browser when the compiled Tailwind file changes.
  eleventyConfig.addWatchTarget("./dist/css/main.css");

  // ---- Directory / template configuration ---------------------------------
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes", // layouts live in src/_includes
    },
    // Process HTML and Markdown with the Nunjucks-flavoured engine so that
    // `layout`, front matter, and template tags all work consistently.
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "md", "njk"],
  };
};
