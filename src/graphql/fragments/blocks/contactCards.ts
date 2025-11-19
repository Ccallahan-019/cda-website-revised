import { gql } from '@apollo/client'

export const CONTACT_CARDS_FRAGMENT = gql`
  fragment ContactCardsBlockFields on ContactCardsBlock {
    blockType
    id
    richText
    autoPopulate
    contactPosition
    diocese {
      id
      deputies {
        name
        roles {
          role
        }
        email
      }
    }
    officerType
    contacts {
      name
      email
      roles {
        role
      }
    }
  }
`
