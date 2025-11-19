import { getApolloServerClient } from '@/graphql/apolloClient'
import { GET_NEWSLETTERS } from '@/graphql/queries/blocks/newsletters'
import { Newsletter, NewslettersBlock as NewsletterBlockProps } from '@/payload-types'
import React from 'react'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Flex } from '@radix-ui/themes'
import { NewsletterArchive } from '@/components/NewsletterArchive'
import RichText from '@/components/RichText'

export const NewslettersBlock: React.FC<
  { newsletterSelectionType: NewsletterBlockProps['selectionType'] } & NewsletterBlockProps
> = async (props) => {
  const { newsletterSelectionType, autoPopulationType, introContent, items } = props

  const newsletters: Newsletter[] = []

  if (newsletterSelectionType === 'auto') {
    const client = getApolloServerClient()

    const { data } = await client.query({
      query: GET_NEWSLETTERS,
      variables: { type: autoPopulationType },
    })

    const docs = data.Newsletters.docs

    if (Array.isArray(docs) && docs.length > 0) {
      for (const doc of docs) {
        if (typeof doc === 'object') {
          newsletters.push(doc)
        }
      }
    }
  } else {
    if (Array.isArray(items) && items.length > 0) {
      for (const item of items) {
        if (typeof item === 'object') {
          newsletters.push(item)
        }
      }
    }
  }

  return (
    <Container>
      <Flex direction="column" gap="6">
        <Box maxWidth="48rem">{introContent && <RichText data={introContent} />}</Box>

        <NewsletterArchive newsletters={newsletters} />
      </Flex>
    </Container>
  )
}
