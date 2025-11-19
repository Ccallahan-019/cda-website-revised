const SKIP_BUILD_STATIC_GENERATION = process.env.SKIP_BUILD_STATIC_GENERATION === 'true'

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
import { GET_FUNDRAISER_BY_SLUG, GET_FUNDRAISER_SLUGS } from '@/graphql/queries/pages/fundraiser'
import { FundraiserHero } from '@/heros/FundraiserHero'
import { Fundraiser } from '@/payload-types'

export const revalidate = 3600
export const dynamicParams = true

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export async function generateStaticParams() {
  if (SKIP_BUILD_STATIC_GENERATION) {
    // Don't pre-generate any paths while backend isn't available
    return []
  }

  const client = getApolloServerClient()
  const fundraisers = await client.query({
    query: GET_FUNDRAISER_SLUGS,
  })

  const params = fundraisers.data.Fundraisers.docs?.map(({ slug }: { slug: string }) => {
    return { slug }
  })

  return params
}

const queryFundraiserBySlug = async ({ slug }: { slug: string }) => {
  if (SKIP_BUILD_STATIC_GENERATION) {
    return null
  }

  const { isEnabled: draft } = await draftMode()
  const cookieStore = await cookies()
  const token = draft ? cookieStore.get('payload-token')?.value : undefined

  const client = getApolloServerClient(token)

  const { data } = await client.query({
    query: GET_FUNDRAISER_BY_SLUG,
    variables: { slug, draft },
  })

  return data.Fundraisers.docs[0] || null
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise

  if (SKIP_BUILD_STATIC_GENERATION || !slug) {
    return {
      title: 'PA Catholic Daughters',
      description: 'Learn about the Pennsylvania Catholic Daughters State Court',
    }
  }

  let fundraiser

  if (slug) {
    fundraiser = await queryFundraiserBySlug({
      slug,
    })
  }

  return generateMeta({ doc: fundraiser })
}

export default async function FundraiserTemplate({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await paramsPromise

  if (SKIP_BUILD_STATIC_GENERATION) {
    // Temporarily hide the route completely
    return notFound()
  }

  let fundraiser: Fundraiser | null = null

  if (slug) {
    fundraiser = await queryFundraiserBySlug({
      slug,
    })
  }

  if (!fundraiser) {
    return notFound()
  }

  const { relatedFundraisers, content } = fundraiser

  const relatedFundraiserObjs = relatedFundraisers?.filter(
    (fundraiser) => typeof fundraiser === 'object',
  )

  return (
    <Article>
      {draft && <LivePreviewListener />}

      <FundraiserHero fundraiser={fundraiser} />

      <Container>
        <Section maxWidth="64rem" mx="auto">
          {content && <RichText data={content} />}
        </Section>

        {Array.isArray(relatedFundraiserObjs) && relatedFundraiserObjs.length > 0 && (
          <Section>
            <Flex direction="column" gap="5">
              <Heading as="h2">Related Fundraisers</Heading>
              <CollectionArchive docs={relatedFundraiserObjs} relationTo="fundraisers" />
            </Flex>
          </Section>
        )}
      </Container>
    </Article>
  )
}
