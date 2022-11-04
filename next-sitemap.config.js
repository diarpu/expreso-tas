/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: `${process.env.NEXT_PUBLIC_WEB_URL}`,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  priority: 1.0,
  generateIndexSitemap: false
}
