import type { Page } from '@/payload-types'

export const getPagePathFromBreadcrumbs = (
  page: Pick<Page, 'slug' | 'breadcrumbs'> | null | undefined,
): string | null => {
  if (!page) return null

  const crumbs = page.breadcrumbs ?? []
  const lastCrumb = crumbs[crumbs.length - 1]

  // nested docs URL if present
  let path: string | undefined = typeof lastCrumb?.url === 'string' ? lastCrumb.url : undefined

  // Fallback to slug
  if (!path) {
    if (page.slug === 'home') {
      path = '/'
    } else if (page.slug) {
      path = `/${page.slug}`
    }
  }

  if (!path) return null

  // ensure leading slash, no double slashes
  if (!path.startsWith('/')) {
    path = `/${path}`
  }

  return path
}
