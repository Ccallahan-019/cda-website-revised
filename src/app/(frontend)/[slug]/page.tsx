export const dynamic = 'force-dynamic'

import { notFound } from 'next/navigation'
import { getApolloServerClient } from '@/graphql/apolloClient'
import { GET_PAGE_BY_SLUG } from '@/graphql/queries/pages/page'
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
    slug?: string
  }>
}

export async function generateStaticParams() {
  const client = getApolloServerClient()
  const pages = await client.query({
    query: GET_PAGE_SLUGS,
  })

  const params = pages.data.Pages.docs
    ?.filter((doc: Document) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }: { slug: string }) => {
      return { slug }
    })

  return params
}

const queryPageBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const cookieStore = await cookies()
  const token = draft ? cookieStore.get('payload-token')?.value : undefined

  const client = getApolloServerClient(token)

  const { data } = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: { slug, draft },
  })

  return data.Pages.docs[0] || null
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page })
}

export default async function PageTemplate({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = 'home' } = await paramsPromise

  const page = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return notFound()
  }

  const { hero, layout } = page

  if (!page) return notFound()

  return (
    <Article>
      {draft && <LivePreviewListener />}

      <RenderHero hero={hero} />
      <RenderBlocks blocks={layout} />
    </Article>
  )
}
