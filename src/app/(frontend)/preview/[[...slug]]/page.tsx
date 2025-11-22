import { notFound } from 'next/navigation'
import { cookies, draftMode } from 'next/headers'
import { queryPageByPathDraft } from '@/utilities/fetch-page'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { Article } from '@/components/UI/RadixComponents/Layout/Article'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export const dynamic = 'force-dynamic'

type Args = {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function PreviewPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const cookieStore = await cookies()
  const token = draft ? cookieStore.get('payload-token')?.value : undefined

  const { slug } = await paramsPromise

  const page = await queryPageByPathDraft(slug, token)

  if (!page) return notFound()

  const { hero, layout, breadcrumbs } = page

  return (
    <Article>
      <LivePreviewListener />
      <RenderHero breadcrumbs={breadcrumbs} hero={hero} />
      <RenderBlocks blocks={layout} />
    </Article>
  )
}
