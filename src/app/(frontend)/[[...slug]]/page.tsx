import { notFound } from 'next/navigation'
import { getApolloServerClient } from '@/graphql/apolloClient'
import { GET_PAGE_BY_SLUG, GET_PAGE_BY_PATH } from '@/graphql/queries/pages/page'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { cookies, draftMode } from 'next/headers'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { GET_PAGE_SLUGS } from '@/graphql/queries/pages/page'
import { Article } from '@/components/UI/RadixComponents/Layout/Article'
import { Metadata } from 'next'
import { generateMeta } from '@/utilities/generateMeta'
import { Document } from 'payload'

export const revalidate = 3600
export const dynamicParams = true

type Args = {
  params: Promise<{
    slug?: string[]
  }>
}

const buildPathFromSegments = (segments?: string[]) => {
  if (!segments || segments.length === 0) return '/'
  return `/${segments.join('/')}`
}

export async function generateStaticParams() {
  const client = getApolloServerClient()
  const pages = await client.query({ query: GET_PAGE_SLUGS })

  const params =
    pages.data.Pages.docs
      ?.filter((doc: Document) => doc.slug !== 'home')
      .map((doc: Document) => {
        const lastUrl = doc.breadcrumbs?.[doc.breadcrumbs.length - 1]?.url as string | undefined

        if (!lastUrl) return null

        const segments = lastUrl.split('/').filter(Boolean)

        return { slug: segments }
      })
      .filter(Boolean) ?? []

  return params
}

const queryPageByPath = async (segments?: string[]) => {
  const { isEnabled: draft } = await draftMode()
  const cookieStore = await cookies()
  const token = draft ? cookieStore.get('payload-token')?.value : undefined
  const client = getApolloServerClient(token)

  const path = buildPathFromSegments(segments)

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
    variables: {
      path,
      draft,
    },
  })

  return data.Pages.docs[0] || null
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise

  const page = await queryPageByPath(slug)

  if (!page) {
    return {
      title: 'PA Catholic Daughters',
      description: 'Learn about the Pennsylvania Catholic Daughters State Court',
    }
  }

  return generateMeta({ doc: page })
}

export default async function PageTemplate({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await paramsPromise

  const page = await queryPageByPath(slug)

  if (!page) return notFound()

  const { hero, layout } = page

  return (
    <Article>
      {draft && <LivePreviewListener />}
      <RenderHero hero={hero} />
      <RenderBlocks blocks={layout} />
    </Article>
  )
}
