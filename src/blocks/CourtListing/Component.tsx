import { getApolloServerClient } from '@/graphql/apolloClient'
import { GET_ALL_COURTS, GET_COURTS_BY_DIOCESE } from '@/graphql/queries/blocks/courtListing'
import { Court, CourtListingBlock as CourtListingBlockProps } from '@/payload-types'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Flex } from '@radix-ui/themes'
import RichText from '@/components/RichText'
import { CourtTable } from '@/components/CourtTable'

export const CourtListingBlock: React.FC<
  { listingSelectionType: CourtListingBlockProps['selectionType'] } & CourtListingBlockProps
> = async (props) => {
  const { listingSelectionType, courts: selectedCourts, diocese, richText, rowsPerPage } = props

  let courts: (number | Court)[] = []

  const client = getApolloServerClient()
  if (listingSelectionType === 'all') {
    const { data } = await client.query({
      query: GET_ALL_COURTS,
    })

    const docs = data.Courts.docs

    if (Array.isArray(docs) && docs.length > 0) {
      courts = docs
    }
  } else if (listingSelectionType === 'diocese' && diocese && typeof diocese === 'object') {
    const { data } = await client.query({
      query: GET_COURTS_BY_DIOCESE,
      variables: { dioceseId: diocese.id },
    })

    const docs = data.Courts.docs

    if (Array.isArray(docs) && docs.length > 0) {
      courts = docs
    }
  } else {
    if (Array.isArray(selectedCourts) && selectedCourts.length > 0) {
      courts = selectedCourts
    }
  }

  return (
    <Container>
      <Flex direction="column" gap="6">
        {richText && <RichText data={richText} />}

        <CourtTable courts={courts} rowsPerPage={rowsPerPage} />
      </Flex>
    </Container>
  )
}
