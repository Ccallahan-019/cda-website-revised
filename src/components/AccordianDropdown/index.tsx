import { Court, Diocese } from '@/payload-types'
import { AccordianDropdownClient } from './client'
import { getApolloServerClient } from '@/graphql/apolloClient'
import { GET_COURTS_BY_DIOCESE } from '@/graphql/queries/blocks/courtListing'

export const AccordianDropdown: React.FC<Diocese> = async (props) => {
  const { id } = props

  const client = getApolloServerClient()
  const { data } = await client.query({
    query: GET_COURTS_BY_DIOCESE,
    variables: { dioceseId: id },
  })

  let courts: Court[] = []
  const docs = data.Courts.docs

  if (Array.isArray(docs) && docs.length > 0) {
    courts = docs
  }

  return <AccordianDropdownClient courts={courts} {...props} />
}
