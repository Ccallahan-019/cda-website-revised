import { notFound } from 'next/navigation'
import { getApolloServerClient } from '@/graphql/apolloClient'
import { cookies, draftMode } from 'next/headers'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Article } from '@/components/UI/RadixComponents/Layout/Article'
import { Metadata } from 'next'
import { generateMeta } from '@/utilities/generateMeta'
import RichText from '@/components/RichText'
import { GET_EVENT_BY_SLUG, GET_EVENT_SLUGS } from '@/graphql/queries/pages/events'
import { EventHero } from '@/heros/EventHero'
import { Box, Card, DataList, Flex } from '@radix-ui/themes'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { CollectionArchive } from '@/components/CollectionArchive'
import { Section } from '@/components/UI/RadixComponents/Layout/Section'
import { Heading } from '@/components/UI/RadixComponents/Typography/Heading'
import { formatDateTime } from '@/utilities/formatDateTime'
import { Text } from '@/components/UI/RadixComponents/Typography/Text'
import { Event } from '@/payload-types'

export const revalidate = 3600
export const dynamicParams = true

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export async function generateStaticParams() {
  const client = getApolloServerClient()
  const events = await client.query({
    query: GET_EVENT_SLUGS,
  })

  const params = events.data.Events.docs?.map(({ slug }: { slug: string }) => {
    return { slug }
  })

  return params
}

const queryEventBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const cookieStore = await cookies()
  const token = draft ? cookieStore.get('payload-token')?.value : undefined

  const client = getApolloServerClient(token)

  const { data } = await client.query({
    query: GET_EVENT_BY_SLUG,
    variables: { slug, draft },
  })

  return data.Events.docs[0] || null
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise

  let event

  if (slug) {
    event = await queryEventBySlug({
      slug,
    })
  }

  return generateMeta({ doc: event })
}

export default async function EventTemplate({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await paramsPromise

  let event: Event | null = null

  if (slug) {
    event = await queryEventBySlug({
      slug,
    })
  }

  if (!event) {
    return notFound()
  }

  const { dates, location, relatedEvents, content } = event

  const startDateTime = {
    displayDate: dates && dates.startDate ? formatDateTime(dates.startDate)?.displayDate : null,
    time: dates && dates.startDate ? formatDateTime(dates.startDate)?.time : null,
  }

  let displayStartDate: string | null = null
  if (startDateTime.displayDate) {
    if (startDateTime.time) {
      displayStartDate = `${startDateTime.displayDate}, ${startDateTime.time}`
    } else {
      displayStartDate = startDateTime.displayDate
    }
  }

  const endDateTime = {
    displayDate: dates && dates.endDate ? formatDateTime(dates.endDate)?.displayDate : null,
    time: dates && dates.endDate ? formatDateTime(dates.endDate)?.time : null,
  }

  let displayEndDate: string | null = null
  if (endDateTime.displayDate) {
    if (endDateTime.time) {
      displayEndDate = `${endDateTime.displayDate}, ${endDateTime.time}`
    } else {
      displayEndDate = endDateTime.displayDate
    }
  }

  const relatedEventsObjs = relatedEvents?.filter((event) => typeof event === 'object')

  return (
    <Article>
      {draft && <LivePreviewListener />}

      <EventHero event={event} />

      <Container>
        <Section>
          <Flex direction={{ initial: 'column', lg: 'row' }} gap="4">
            <Flex
              direction="column"
              gap="4"
              width="100%"
              maxWidth={{ initial: '56rem', lg: '22rem' }}
              mx={{ initial: 'auto', lg: '0' }}
            >
              {(displayStartDate || displayEndDate) && (
                <Card>
                  <Flex direction="column" gap={{ initial: '3', xs: '4' }}>
                    <Heading as="h5">Dates</Heading>

                    <DataList.Root size={{ initial: '1', xs: '2' }}>
                      {displayStartDate && (
                        <DataList.Item align="center">
                          <DataList.Label>Begins</DataList.Label>
                          <DataList.Value>{displayStartDate}</DataList.Value>
                        </DataList.Item>
                      )}
                      {displayEndDate && (
                        <DataList.Item align="center">
                          <DataList.Label>Ends</DataList.Label>
                          <DataList.Value>{displayEndDate}</DataList.Value>
                        </DataList.Item>
                      )}
                    </DataList.Root>
                  </Flex>
                </Card>
              )}

              {location && (
                <Card>
                  <Flex direction="column" gap="3">
                    <Heading as="h5">Location</Heading>
                    <Flex direction="column">
                      {location.address && <Text>{location.address}</Text>}
                      {location.city && location.state && (
                        <Text>{`${location.city}, ${location.state}`}</Text>
                      )}
                      {location.zipcode && <Text>{location.zipcode}</Text>}
                    </Flex>
                  </Flex>
                </Card>
              )}
            </Flex>
            <Box p="1" maxWidth="56rem" mx="auto">
              {content && <RichText data={content} />}
            </Box>
          </Flex>
        </Section>

        {Array.isArray(relatedEventsObjs) && relatedEventsObjs.length > 0 && (
          <Section>
            <Flex direction="column" gap="5">
              <Heading as="h2">Related Events</Heading>
              <CollectionArchive docs={relatedEventsObjs} relationTo="events" />
            </Flex>
          </Section>
        )}
      </Container>
    </Article>
  )
}
