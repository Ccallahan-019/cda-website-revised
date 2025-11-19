import { gql } from '@apollo/client'

export const NEWS_POSTS_FRAGMENT = gql`
  fragment NewsPostsBlockFields on NewsPostsBlock {
    blockType
    id
    introContent
    selectionType
    limit
    posts {
      id
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
            }
          }
          url
          label
          color
        }
      }
    }
    pagination
    rowsPerPage
  }
`
