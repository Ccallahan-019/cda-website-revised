import { gql } from '@apollo/client'

export const CALENDAR_FRAGMENT = gql`
  fragment CalendarBlockFields on CalendarBlock {
    blockType
    id
    intro
    months {
      title
      items {
        item
      }
    }
  }
`
