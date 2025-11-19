import { gql } from '@apollo/client'

export const GET_ALL_COURTS = gql`
  query Courts {
    Courts(limit: 1000, draft: false, pagination: false) {
      docs {
        slug
        name
        number
        diocese {
          name
        }
        instituted
        officers {
          regent {
            name
            email
          }
        }
        location {
          city
        }
      }
    }
  }
`
export const GET_COURTS_BY_DIOCESE = gql`
  query Courts($dioceseId: JSON) {
    Courts(
      where: { diocese: { equals: $dioceseId } }
      limit: 1000
      draft: false
      pagination: false
    ) {
      docs {
        slug
        name
        number
        diocese {
          name
        }
        instituted
        officers {
          regent {
            name
            email
          }
        }
        location {
          city
        }
      }
    }
  }
`
