import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getFundraisersSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://localhost:3000'

    const results = await payload.find({
      collection: 'fundraisers',
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
          .filter((fundraiser) => Boolean(fundraiser?.slug))
          .map((fundraiser) => ({
            loc: `${SITE_URL}/fundraisers/${fundraiser?.slug}`,
            lastmod: fundraiser.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['fundraisers-sitemap'],
  {
    tags: ['fundraisers-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getFundraisersSitemap()

  return getServerSideSitemap(sitemap)
}
