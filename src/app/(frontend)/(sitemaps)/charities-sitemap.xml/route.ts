import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getCharitiesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://localhost:3000'

    const results = await payload.find({
      collection: 'charities',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const dateFallback = new Date().toISOString()

    const sitemap = results.docs
      ? results.docs
          .filter((charity) => Boolean(charity?.slug))
          .map((charity) => ({
            loc: `${SITE_URL}/charities/${charity?.slug}`,
            lastmod: charity.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['charities-sitemap'],
  {
    tags: ['charities-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getCharitiesSitemap()

  return getServerSideSitemap(sitemap)
}
