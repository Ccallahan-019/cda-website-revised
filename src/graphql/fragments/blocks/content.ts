import { gql } from '@apollo/client'

export const CONTENT_FRAGMENT = gql`
  fragment ContentBlockFields on ContentBlock {
    blockType
    id
    columns {
      id
      size
      richText
      enableLink
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
        color
        appearance
        label
      }
    }
  }
`
