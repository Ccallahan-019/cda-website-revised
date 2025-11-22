import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'
import type { Page } from '../../../payload-types'
import { getPagePathFromBreadcrumbs } from '@/utilities/getPagePathFromBreadcrumbs'

export const revalidatePage: CollectionAfterChangeHook<Page> = ({ doc, previousDoc, req }) => {
  const disableRevalidate = req?.context?.disableRevalidate

  if (disableRevalidate) return doc

  const newPath = getPagePathFromBreadcrumbs(doc)
  const oldPath = previousDoc ? getPagePathFromBreadcrumbs(previousDoc) : null

  // If page is published now, revalidate its current path
  if (doc._status === 'published' && newPath) {
    req.payload.logger.info(`Revalidating page at path: ${newPath}`)
    revalidatePath(newPath)
    revalidateTag('pages-sitemap')
  }

  // If it was published before but isn't now or the path changed, revalidate the old path too
  const wasPublished = previousDoc?._status === 'published'
  const isPublished = doc._status === 'published'

  if (wasPublished && (!isPublished || (oldPath && newPath && oldPath !== newPath))) {
    if (oldPath) {
      req.payload.logger.info(`Revalidating old page path: ${oldPath}`)
      revalidatePath(oldPath)
      revalidateTag('pages-sitemap')
    }
  }

  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({ doc, req }) => {
  const disableRevalidate = req?.context?.disableRevalidate

  if (!disableRevalidate) {
    const path = getPagePathFromBreadcrumbs(doc)

    if (path) {
      req.payload.logger.info(`Revalidating deleted page at path: ${path}`)
      revalidatePath(path)
      revalidateTag('pages-sitemap')
    }
  }

  return doc
}
