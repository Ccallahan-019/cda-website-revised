import type { Header } from '@/payload-types'
import { HeaderClient } from './Component.client'
import { getApolloServerClient } from '@/graphql/apolloClient'
import { GET_HEADER } from '@/graphql/queries/globals/header'

export async function Header() {
  const client = getApolloServerClient()
  const header = await client.query({ query: GET_HEADER })

  const { data } = header

  const headerData: Header = data.Header

  return <HeaderClient {...headerData} />
}
