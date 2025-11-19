import { CollectionArchive, NormalizedDoc, SelectedDoc } from '@/components/CollectionArchive'
import RichText from '@/components/RichText'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { getApolloServerClient } from '@/graphql/apolloClient'
import {
  GET_CHARITIES,
  GET_EVENTS,
  GET_FUNDRAISERS,
  GET_PROJECTS,
} from '@/graphql/queries/blocks/archive'
import type {
  ArchiveBlock as ArchiveBlockProps,
  Charity,
  Event,
  Fundraiser,
  Project,
} from '@/payload-types'
import { Box, Flex } from '@radix-ui/themes'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const {
    id,
    introContent,
    limit: limitFromProps,
    pagination,
    itemsPerPage,
    populateBy,
    relationTo,
    selectedDocs,
    type,
  } = props

  const limit = limitFromProps || 3

  let docs: NormalizedDoc[] = []

  if (populateBy === 'collection') {
    const client = getApolloServerClient()

    switch (relationTo) {
      case 'events': {
        const { data: eventData } = await client.query({
          query: GET_EVENTS,
          variables: { type, limit },
        })
        const eventDocs: Event[] = eventData.Events.docs ?? []
        if (eventDocs.length) docs = eventDocs
        break
      }
      case 'fundraisers': {
        const { data: fundraiserData } = await client.query({
          query: GET_FUNDRAISERS,
          variables: { type, limit },
        })
        const fundraiserDocs: Fundraiser[] = fundraiserData.Fundraisers.docs ?? []
        if (fundraiserDocs.length) docs = fundraiserDocs
        break
      }
      case 'projects': {
        const { data: projectData } = await client.query({
          query: GET_PROJECTS,
          variables: { type, limit },
        })
        const projectDocs: Fundraiser[] = projectData.Projects.docs ?? []
        if (projectDocs.length) docs = projectDocs
        break
      }
      case 'charities': {
        const { data: charityData } = await client.query({
          query: GET_CHARITIES,
          variables: { type, limit },
        })
        const charityDocs: Fundraiser[] = charityData.Charities.docs ?? []
        if (charityDocs.length) docs = charityDocs
        break
      }
      default:
        break
    }
  } else if (Array.isArray(selectedDocs) && selectedDocs.length > 0) {
    const normalized: SelectedDoc[] = selectedDocs
      .filter(
        (
          doc,
        ): doc is {
          relationTo: 'events' | 'fundraisers' | 'projects' | 'charities'
          value: Event | Fundraiser | Project | Charity
        } => typeof doc?.value === 'object' && !!doc.value,
      )
      .map((doc) => ({
        relationTo: doc.relationTo,
        value: doc.value as Event | Fundraiser | Project | Charity,
      }))

    docs = normalized
  }

  return (
    <Container id={`block-${id}`}>
      <Flex direction="column" gap="8">
        <Box maxWidth="48rem">{introContent && <RichText data={introContent} />}</Box>
        <CollectionArchive
          docs={docs}
          relationTo={relationTo}
          pagination={pagination != null ? pagination : false}
          itemsPerPage={itemsPerPage != null ? itemsPerPage : 3}
        />
      </Flex>
    </Container>
  )
}
