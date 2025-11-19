export const dynamic = 'force-dynamic'

import { notFound } from 'next/navigation'
import { getApolloServerClient } from '@/graphql/apolloClient'
import { cookies, draftMode } from 'next/headers'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Article } from '@/components/UI/RadixComponents/Layout/Article'
import { Metadata } from 'next'
import { generateMeta } from '@/utilities/generateMeta'
import RichText from '@/components/RichText'
import { Flex } from '@radix-ui/themes'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { CollectionArchive } from '@/components/CollectionArchive'
import { Section } from '@/components/UI/RadixComponents/Layout/Section'
import { Heading } from '@/components/UI/RadixComponents/Typography/Heading'
import { Charity } from '@/payload-types'
import { GET_CHARITY_BY_SLUG, GET_CHARITY_SLUGS } from '@/graphql/queries/pages/charity'
import { CharityHero } from '@/heros/CharityHero'

export const revalidate = 3600
export const dynamicParams = true

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export async function generateStaticParams() {
  const client = getApolloServerClient()
  const charities = await client.query({
    query: GET_CHARITY_SLUGS,
  })

  const params = charities.data.Charities.docs?.map(({ slug }: { slug: string }) => {
    return { slug }
  })

  return params
}

const queryCharityBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const cookieStore = await cookies()
  const token = draft ? cookieStore.get('payload-token')?.value : undefined

  const client = getApolloServerClient(token)

  const { data } = await client.query({
    query: GET_CHARITY_BY_SLUG,
    variables: { slug, draft },
  })

  return data.Charities.docs[0] || null
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise

  let charity

  if (slug) {
    charity = await queryCharityBySlug({
      slug,
    })
  }

  return generateMeta({ doc: charity })
}

export default async function CharityTemplate({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await paramsPromise

  let charity: Charity | null = null

  if (slug) {
    charity = await queryCharityBySlug({
      slug,
    })
  }

  if (!charity) {
    return notFound()
  }

  const { relatedCharities, content } = charity

  const relatedCharityObjs = relatedCharities?.filter((charity) => typeof charity === 'object')

  return (
    <Article>
      {draft && <LivePreviewListener />}

      <CharityHero charity={charity} />

      <Container>
        <Section maxWidth="64rem" mx="auto">
          <RichText data={content} />
        </Section>

        {Array.isArray(relatedCharityObjs) && relatedCharityObjs.length > 0 && (
          <Section>
            <Flex direction="column" gap="5">
              <Heading as="h2">Related Fundraisers</Heading>
              <CollectionArchive docs={relatedCharityObjs} relationTo="events" />
            </Flex>
          </Section>
        )}
      </Container>
    </Article>
  )
}
