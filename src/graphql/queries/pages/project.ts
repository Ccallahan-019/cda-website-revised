import { gql } from '@apollo/client'

export const GET_PROJECT_SLUGS = gql`
  query Projects {
    Projects(limit: 1000, draft: false, pagination: false) {
      docs {
        slug
      }
    }
  }
`

export const GET_PROJECT_BY_SLUG = gql`
  query Project($slug: String, $draft: Boolean) {
    Projects(where: { slug: { equals: $slug } }, draft: $draft, pagination: false) {
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
        relatedProjects {
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
