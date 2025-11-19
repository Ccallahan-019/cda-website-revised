import { gql } from '@apollo/client'

export const COURT_LISTING_FRAGMENT = gql`
  fragment CourtListingBlockFields on CourtListingBlock {
    blockType
    id
    richText
    listingSelectionType: selectionType
    courts {
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
    diocese {
      id
    }
    rowsPerPage
  }
`
