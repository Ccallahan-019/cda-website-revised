const SKIP_BUILD_STATIC_GENERATION = process.env.SKIP_BUILD_STATIC_GENERATION === 'true'

import { notFound } from 'next/navigation'
import { getApolloServerClient } from '@/graphql/apolloClient'
import { cookies, draftMode } from 'next/headers'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Article } from '@/components/UI/RadixComponents/Layout/Article'
import { Metadata } from 'next'
import { generateMeta } from '@/utilities/generateMeta'
import { GET_COURT_BY_SLUG, GET_COURT_SLUGS } from '@/graphql/queries/pages/court'
import { CourtHero } from '@/heros/CourtHero'
import RichText from '@/components/RichText'
import { NewsletterArchive } from '@/components/NewsletterArchive'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Heading } from '@/components/UI/RadixComponents/Typography/Heading'
import { Box, Card, DataList, Flex } from '@radix-ui/themes'
import { Text } from '@/components/UI/RadixComponents/Typography/Text'
import { Court } from '@/payload-types'
import { Section } from '@/components/UI/RadixComponents/Layout/Section'
import { formatDateTime } from '@/utilities/formatDateTime'
import { CMSLink } from '@/components/Link'

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
  const courts = await client.query({
    query: GET_COURT_SLUGS,
  })

  const params = courts.data.Courts.docs?.map(({ slug }: { slug: string }) => {
    return { slug }
  })

  return params
}

const queryCourtBySlug = async ({ slug }: { slug: string }) => {
  if (SKIP_BUILD_STATIC_GENERATION) {
    return null
  }

  const { isEnabled: draft } = await draftMode()
  const cookieStore = await cookies()
  const token = draft ? cookieStore.get('payload-token')?.value : undefined

  const client = getApolloServerClient(token)

  const { data } = await client.query({
    query: GET_COURT_BY_SLUG,
    variables: { slug, draft },
  })

  return data.Courts.docs[0] || null
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise

  if (SKIP_BUILD_STATIC_GENERATION || !slug) {
    return {
      title: 'PA Catholic Daughters',
      description: 'Learn about the Pennsylvania Catholic Daughters State Court',
    }
  }

  let court

  if (slug) {
    court = await queryCourtBySlug({
      slug,
    })
  }

  return generateMeta({ doc: court })
}

export default async function CourtTemplate({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await paramsPromise

  if (SKIP_BUILD_STATIC_GENERATION) {
    // Temporarily hide the route completely
    return notFound()
  }

  let court: Court | null = null

  if (slug) {
    court = await queryCourtBySlug({
      slug,
    })
  }

  if (!court) {
    return notFound()
  }

  const {
    location,
    newsletters: courtNewsletters,
    diocese,
    content,
    instituted,
    officers,
    website,
    phoneNumber,
    contactEmail,
  } = court

  const newsletters = courtNewsletters?.filter((newsletter) => typeof newsletter === 'object')

  return (
    <Article>
      {draft && <LivePreviewListener />}

      <CourtHero court={court} />

      <Section>
        <Container>
          <Flex gap="4" direction={{ initial: 'column', lg: 'row' }}>
            <Flex
              direction="column"
              gap="4"
              width="100%"
              minWidth={{ lg: '24rem' }}
              maxWidth={{ initial: '56rem', lg: '28rem' }}
              mx={{ initial: 'auto', lg: '0' }}
            >
              {((diocese && typeof diocese === 'object') ||
                (location && location.city) ||
                (instituted && formatDateTime(instituted)) ||
                website ||
                phoneNumber) && (
                <Card size={{ initial: '2', lg: '3' }}>
                  <Flex direction="column" gap={{ initial: '4', xs: '5' }}>
                    {diocese && typeof diocese === 'object' && <Text>{diocese.name}</Text>}
                    {((location && location.city) ||
                      (instituted && formatDateTime(instituted))) && (
                      <DataList.Root size={{ initial: '2', xs: '3' }}>
                        {location && location.city && (
                          <DataList.Item>
                            <DataList.Label color="purple">Location</DataList.Label>
                            <DataList.Value>{location.city}</DataList.Value>
                          </DataList.Item>
                        )}
                        {instituted && formatDateTime(instituted) && (
                          <DataList.Item>
                            <DataList.Label color="purple">Instituted</DataList.Label>
                            <DataList.Value>
                              {formatDateTime(instituted)?.displayDate}
                            </DataList.Value>
                          </DataList.Item>
                        )}
                        {website && website.url && (
                          <DataList.Item>
                            <DataList.Label color="purple">Website</DataList.Label>
                            <DataList.Value>
                              <CMSLink {...website} />
                            </DataList.Value>
                          </DataList.Item>
                        )}
                        {phoneNumber && (
                          <DataList.Item>
                            <DataList.Label color="purple">Phone Number</DataList.Label>
                            <DataList.Value>{phoneNumber}</DataList.Value>
                          </DataList.Item>
                        )}
                        {contactEmail && contactEmail.length > 0 ? (
                          <DataList.Item>
                            <DataList.Label color="purple">Contact Email</DataList.Label>
                            <DataList.Value>{contactEmail}</DataList.Value>
                          </DataList.Item>
                        ) : officers &&
                          officers.regent &&
                          typeof officers.regent === 'object' &&
                          officers.regent.email &&
                          officers.regent.email.length > 0 ? (
                          <DataList.Item>
                            <DataList.Label color="purple">Contact Email</DataList.Label>
                            <DataList.Value>{officers.regent.email}</DataList.Value>
                          </DataList.Item>
                        ) : null}
                      </DataList.Root>
                    )}
                  </Flex>
                </Card>
              )}

              {officers && (
                <Card size={{ initial: '2', lg: '3' }}>
                  <Flex direction="column" gap={{ initial: '3', xs: '4' }}>
                    <Heading as="h5">Officers</Heading>
                    <DataList.Root size={{ initial: '2', xs: '3' }}>
                      {officers.regent && typeof officers.regent === 'object' && (
                        <DataList.Item>
                          <DataList.Label color="purple">Regent</DataList.Label>
                          <DataList.Value>{officers.regent.name}</DataList.Value>
                        </DataList.Item>
                      )}
                      {officers.viceRegent && typeof officers.viceRegent === 'object' && (
                        <DataList.Item>
                          <DataList.Label color="purple">Vice Regent</DataList.Label>
                          <DataList.Value>{officers.viceRegent.name}</DataList.Value>
                        </DataList.Item>
                      )}
                      {officers.treasurer && typeof officers.treasurer === 'object' && (
                        <DataList.Item>
                          <DataList.Label color="purple">Treasurer</DataList.Label>
                          <DataList.Value>{officers.treasurer.name}</DataList.Value>
                        </DataList.Item>
                      )}
                      {officers.recordingSecretary &&
                        typeof officers.recordingSecretary === 'object' && (
                          <DataList.Item>
                            <DataList.Label color="purple">Recording Secretary</DataList.Label>
                            <DataList.Value>{officers.recordingSecretary.name}</DataList.Value>
                          </DataList.Item>
                        )}
                      {officers.financialSecretary &&
                        typeof officers.financialSecretary === 'object' && (
                          <DataList.Item>
                            <DataList.Label color="purple">Financial Secretary</DataList.Label>
                            <DataList.Value>{officers.financialSecretary.name}</DataList.Value>
                          </DataList.Item>
                        )}
                    </DataList.Root>
                  </Flex>
                </Card>
              )}
            </Flex>

            {content && (
              <Box p="1" maxWidth="56rem" mx="auto">
                <RichText data={content} />
              </Box>
            )}
          </Flex>
        </Container>
      </Section>

      {Array.isArray(newsletters) && newsletters.length > 0 && (
        <Section>
          <Container>
            <Flex direction="column" gap="6">
              <Heading as="h2">Court Newsletters</Heading>
              <NewsletterArchive newsletters={newsletters} />
            </Flex>
          </Container>
        </Section>
      )}
    </Article>
  )
}
