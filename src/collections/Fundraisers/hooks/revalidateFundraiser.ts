import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Fundraiser } from '@/payload-types'

export const revalidateFundraiser: CollectionAfterChangeHook<Fundraiser> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/fundraisers/${doc.slug}`

      payload.logger.info(`Revalidating fundraiser at path: ${path}`)

      revalidatePath(path)
      revalidateTag('fundraisers-sitemap')
    }

    // If the page was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/fundraisers/${previousDoc.slug}`

      payload.logger.info(`Revalidating old fundraiser at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('fundraisers-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Fundraiser> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/fundraisers/${doc?.slug}`
    revalidatePath(path)
    revalidateTag('fundraisers-sitemap')
  }

  return doc
}
