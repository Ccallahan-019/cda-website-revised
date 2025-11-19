import { gql } from '@apollo/client'

export const GET_FUNDRAISER_SLUGS = gql`
  query Fundraisers {
    Fundraisers(limit: 1000, draft: false, pagination: false) {
      docs {
        slug
      }
    }
  }
`

export const GET_FUNDRAISER_BY_SLUG = gql`
  query Fundraiser($slug: String, $draft: Boolean) {
    Fundraisers(where: { slug: { equals: $slug } }, draft: $draft, pagination: false) {
      docs {
        updatedAt
        name
        type
        associatedCourt {
          id
          name
          slug
        }
        content
        heroImage {
          url
          alt
          height
          width
        }
        relatedFundraisers {
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
