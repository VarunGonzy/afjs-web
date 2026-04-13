/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://joyfullsmiles.org",
  generateRobotsTxt: true,
  // Privacy & terms have robots: { index: false } in their page metadata
  // Do NOT disallow them in robots.txt — that causes Googlebot crawl errors for linked pages
  exclude: ["/privacy-policy", "/terms", "/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/"] },
    ],
  },
  transform: async (config, path) => ({
    loc: path,
    changefreq:
      path === "/" ? "weekly" :
      path.startsWith("/blog") ? "monthly" :
      "monthly",
    priority:
      path === "/" ? 1.0 :
      path === "/donate" || path === "/sponsor-a-child" ? 0.9 :
      path.startsWith("/programs") ? 0.8 :
      path.startsWith("/blog") ? 0.7 :
      path === "/about" || path === "/impact" || path === "/case-studies" ? 0.7 :
      0.6,
    lastmod: new Date().toISOString(),
  }),
  additionalPaths: async (config) => [
    await config.transform(config, "/programs/child-education"),
    await config.transform(config, "/programs/girl-empowerment"),
    await config.transform(config, "/programs/food-nutrition"),
    await config.transform(config, "/programs/family-welfare"),
    await config.transform(config, "/sponsor-a-child"),
    await config.transform(config, "/ngo-bhavnagar"),
    await config.transform(config, "/donate/80g-tax-exemption"),
  ],
};
