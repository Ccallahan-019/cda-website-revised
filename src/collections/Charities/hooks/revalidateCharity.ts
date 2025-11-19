import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Charity } from '@/payload-types'

export const revalidateCharity: CollectionAfterChangeHook<Charity> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/charities/${doc.slug}`

      payload.logger.info(`Revalidating charity at path: ${path}`)

      revalidatePath(path)
      revalidateTag('charities-sitemap')
    }

    // If the page was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/charities/${previousDoc.slug}`

      payload.logger.info(`Revalidating old charity at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('charities-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Charity> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/charities/${doc?.slug}`
    revalidatePath(path)
    revalidateTag('charities-sitemap')
  }

  return doc
}
