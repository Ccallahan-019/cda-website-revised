const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  'https://localhost:3000'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: [
    '/pages-sitemap.xml',
    '/courts-sitemap.xml',
    '/events-sitemap.xml',
    '/fundraisers-sitemap.xml',
    '/projects-sitemap.xml',
    '/charities-sitemap.xml',
    '/*',
    '/courts/*',
    '/events/*',
    '/fundraisers/*',
    '/projects/*',
    '/charities/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/admin/*',
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/pages-sitemap.xml`,
      `${SITE_URL}/courts-sitemap.xml`,
      `${SITE_URL}/events-sitemap.xml`,
      `${SITE_URL}/fundraisers-sitemap.xml`,
      `${SITE_URL}/projects-sitemap.xml`,
      `${SITE_URL}/charities-sitemap.xml`,
    ],
  },
}
