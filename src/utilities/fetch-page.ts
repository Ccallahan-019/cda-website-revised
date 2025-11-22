// page-fetch.ts
import { getApolloServerClient } from '@/graphql/apolloClient'
import { GET_PAGE_BY_SLUG, GET_PAGE_BY_PATH } from '@/graphql/queries/pages/page'

const buildPathFromSegments = (segments?: string[]) => {
  if (!segments || segments.length === 0) return '/'
  return `/${segments.join('/')}`
}

export const queryPageByPathStatic = async (segments?: string[]) => {
  const client = getApolloServerClient() // no token
  const path = buildPathFromSegments(segments)

  const draft = false

  if (path === '/') {
    const { data } = await client.query({
      query: GET_PAGE_BY_SLUG,
      variables: { slug: 'home', draft },
    })
    return data.Pages.docs[0] || null
  }

  if (segments && segments.length === 1) {
    const { data } = await client.query({
      query: GET_PAGE_BY_SLUG,
      variables: { slug: segments[0], draft },
    })
    return data.Pages.docs[0] || null
  }

  const { data } = await client.query({
    query: GET_PAGE_BY_PATH,
    variables: { path, draft },
  })

  return data.Pages.docs[0] || null
}

export const queryPageByPathDraft = async (segments?: string[], token?: string) => {
  const client = getApolloServerClient(token)
  const path = buildPathFromSegments(segments)

  const draft = true

  if (path === '/') {
    const { data } = await client.query({
      query: GET_PAGE_BY_SLUG,
      variables: { slug: 'home', draft },
    })
    return data.Pages.docs[0] || null
  }

  if (segments && segments.length === 1) {
    const { data } = await client.query({
      query: GET_PAGE_BY_SLUG,
      variables: { slug: segments[0], draft },
    })
    return data.Pages.docs[0] || null
  }

  const { data } = await client.query({
    query: GET_PAGE_BY_PATH,
    variables: { path, draft },
  })

  return data.Pages.docs[0] || null
}
