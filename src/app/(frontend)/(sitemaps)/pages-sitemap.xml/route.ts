import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'
import { getPagePathFromBreadcrumbs } from '@/utilities/getPagePathFromBreadcrumbs'

const getPagesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })

    const rawSiteUrl =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://localhost:3000'

    // normalize to avoid trailing slash issues
    const SITE_URL = rawSiteUrl.replace(/\/$/, '')

    const results = await payload.find({
      collection: 'pages',
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
        breadcrumbs: true,
      },
    })

    const dateFallback = new Date().toISOString()

    const sitemap: ISitemapField[] =
      results.docs?.reduce<ISitemapField[]>((acc, page) => {
        const path = getPagePathFromBreadcrumbs(page)
        if (!path) return acc

        const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`

        acc.push({
          loc,
          lastmod: page.updatedAt || dateFallback,
        })

        return acc
      }, []) ?? []

    return sitemap
  },
  ['pages-sitemap'],
  {
    tags: ['pages-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getPagesSitemap()
  return getServerSideSitemap(sitemap)
}
