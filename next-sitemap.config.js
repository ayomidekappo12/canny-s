module.exports = {
  siteUrl: "https://workunlock.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",

  exclude: ["*"],

  additionalPaths: async (config) => [
    {
      loc: "/",
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: "/",
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    { loc: "/", lastmod: new Date().toISOString(), priority: 0.7 },
  ],
};
