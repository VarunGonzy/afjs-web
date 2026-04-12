/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://joyfullsmiles.org",
  generateRobotsTxt: true,
  exclude: ["/case-studies"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/case-studies"] },
    ],
  },
};
