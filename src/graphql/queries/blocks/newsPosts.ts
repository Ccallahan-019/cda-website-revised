import { gql } from '@apollo/client'

export const GET_NEWS_POSTS = gql`
  query NewsPosts($limit: Int) {
    NewsPosts(limit: $limit, draft: false, pagination: false, sort: "-createdAt") {
      docs {
        title
        description
        updatedAt
        links {
          id
          link {
            type
            newTab
            reference {
              relationTo
              value {
                ... on Page {
                  slug
                }
                ... on Charity {
                  slug
                }
                ... on Fundraiser {
                  slug
                }
                ... on Event {
                  slug
                }
                ... on Project {
                  slug
                }
                ... on Court {
                  slug
                }
                ... on Media {
                  url
                }
              }
            }
            url
            label
            color
          }
        }
      }
    }
  }
`
