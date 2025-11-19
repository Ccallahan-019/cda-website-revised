import { gql } from '@apollo/client'

export const NEWSLETTERS_FRAGMENT = gql`
  fragment NewslettersBlockFields on NewslettersBlock {
    blockType
    id
    introContent
    newsletterSelectionType: selectionType
    autoPopulationType
    items {
      id
      title
      yearOfRelease
      type
      reissueDate
      url
      filesize
      filename
    }
  }
`
