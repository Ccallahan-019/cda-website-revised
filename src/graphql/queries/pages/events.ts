import { gql } from '@apollo/client'

export const GET_EVENT_SLUGS = gql`
  query Events {
    Events(limit: 1000, draft: false, pagination: false) {
      docs {
        slug
      }
    }
  }
`

export const GET_EVENT_BY_SLUG = gql`
  query Event($slug: String, $draft: Boolean) {
    Events(where: { slug: { equals: $slug } }, draft: $draft, pagination: false) {
      docs {
        updatedAt
        name
        dates {
          startDate
          endDate
        }
        location {
          address
          city
          state
          zipcode
        }
        type
        associatedCourt {
          id
          name
          slug
        }
        content
        relatedEvents {
          id
          slug
          name
          type
          meta {
            description
            image {
              url
              alt
              height
              width
            }
          }
        }
      }
    }
  }
`
