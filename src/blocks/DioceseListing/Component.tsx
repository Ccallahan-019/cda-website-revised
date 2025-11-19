import { Diocese, DioceseListingBlock as DioceseListingBlockProps } from '@/payload-types'
import { AccordianDropdown } from '@/components/AccordianDropdown'
import RichText from '@/components/RichText'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box } from '@radix-ui/themes'
import { getApolloServerClient } from '@/graphql/apolloClient'
import { GET_ALL_DIOCESES } from '@/graphql/queries/blocks/dioceseListing'

export const DioceseListingBlock: React.FC<
  { dioceseSelectionType: DioceseListingBlockProps['selectionType'] } & DioceseListingBlockProps
> = async (props) => {
  const { dioceses: customDioceses, dioceseSelectionType, richText } = props

  let dioceses: (number | Diocese)[] = []

  if (dioceseSelectionType === 'all') {
    const client = getApolloServerClient()

    const { data } = await client.query({
      query: GET_ALL_DIOCESES,
    })

    const docs = data.Dioceses.docs
    if (Array.isArray(docs) && docs.length > 0) {
      dioceses = docs
    }
  } else {
    if (Array.isArray(customDioceses) && customDioceses.length > 0) {
      dioceses = customDioceses
    }
  }

  return (
    <Container>
      <Box>
        {richText && <RichText style={{ marginBottom: 'var(space-6)' }} data={richText} />}
        <Box
          style={{
            borderRadius: 'var(--radius-4)',
            border: '1px solid var(--gray-7)',
            overflow: 'hidden',
          }}
        >
          {Array.isArray(dioceses) &&
            dioceses.length > 0 &&
            dioceses.map((diocese, index) => {
              if (diocese && typeof diocese === 'object') {
                return (
                  <Box
                    key={diocese.id || index}
                    style={{ borderTop: index !== 0 ? '1px solid var(--gray-7)' : undefined }}
                  >
                    <AccordianDropdown {...diocese} />
                  </Box>
                )
              }
              return null
            })}
        </Box>
      </Box>
    </Container>
  )
}
