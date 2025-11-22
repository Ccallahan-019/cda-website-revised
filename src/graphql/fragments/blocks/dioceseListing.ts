import { gql } from '@apollo/client'

export const DIOCESE_LISTING_FRAGMENT = gql`
  fragment DioceseListingBlockFields on DioceseListingBlock {
    blockType
    id
    richText
    dioceseSelectionType: selectionType
    dioceses {
      id
      name
      location {
        address
        city
        state
        zipcode
      }
      website {
        type
        newTab
        reference {
          relationTo
          value {
            ... on Page {
              slug
              breadcrumbs {
                id
                label
                url
              }
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
      }
      phoneNumber
      info
    }
  }
`
