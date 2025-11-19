// Import all your global types
import type { Header, Footer } from '@/payload-types'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'

type GlobalSlugMap = {
  header: Header
  footer: Footer
}

type Global = keyof GlobalSlugMap

async function getGlobal<T extends Global>(slug: T, depth = 0): Promise<GlobalSlugMap[T]> {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
  })

  return global as GlobalSlugMap[T]
}

export const getCachedGlobal = <T extends Global>(slug: T, depth = 0) =>
  unstable_cache(() => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  })
