import { gql } from '@apollo/client'

export const ARCHIVE_FRAGMENT = gql`
  fragment ArchiveBlockFields on ArchiveBlock {
    blockType
    id
    introContent
    populateBy
    relationTo
    type
    limit
    pagination
    itemsPerPage
    selectedDocs {
      relationTo
      value {
        ... on Event {
          id
          slug
          name
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
        ... on Fundraiser {
          id
          slug
          name
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
        ... on Project {
          id
          slug
          name
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
        ... on Charity {
          id
          slug
          name
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
