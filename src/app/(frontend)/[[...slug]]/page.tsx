import { notFound } from 'next/navigation'
import { queryPageByPathStatic } from '@/utilities/fetch-page'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { Article } from '@/components/UI/RadixComponents/Layout/Article'
import type { Metadata } from 'next'
import { generateMeta } from '@/utilities/generateMeta'
import { getApolloServerClient } from '@/graphql/apolloClient'
import { GET_PAGE_SLUGS } from '@/graphql/queries/pages/page'
import { Document } from 'payload'

export const revalidate = 3600
export const dynamicParams = true

type Args = {
  params: Promise<{
    slug?: string[]
  }>
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

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise
  const page = await queryPageByPathStatic(slug)

  if (!page) {
    return {
      title: 'PA Catholic Daughters',
      description: 'Learn about the Pennsylvania Catholic Daughters State Court',
    }
  }

  return generateMeta({ doc: page })
}

export default async function PageTemplate({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const page = await queryPageByPathStatic(slug)

  if (!page) return notFound()

  const { hero, layout, breadcrumbs } = page

  return (
    <Article>
      <RenderHero breadcrumbs={breadcrumbs} hero={hero} />
      <RenderBlocks blocks={layout} />
    </Article>
  )
}
