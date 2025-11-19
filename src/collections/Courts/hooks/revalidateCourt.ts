import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Court } from '@/payload-types'

export const revalidateCourt: CollectionAfterChangeHook<Court> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/courts/${doc.slug}`

      payload.logger.info(`Revalidating court at path: ${path}`)

      revalidatePath(path)
      revalidateTag('courts-sitemap')
    }

    // If the page was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/courts/${previousDoc.slug}`

      payload.logger.info(`Revalidating old court at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('courts-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Court> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/courts/${doc?.slug}`
    revalidatePath(path)
    revalidateTag('courts-sitemap')
  }

  return doc
}
