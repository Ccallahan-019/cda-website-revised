import { gql } from '@apollo/client'
import { CONTENT_FRAGMENT } from './content'
import { CONTACT_CARDS_FRAGMENT } from './contactCards'

export const TABS_FRAGMENT = gql`
  fragment TabsBlockFields on TabsBlock {
    blockType
    blockName
    id
    tabs {
      id
      label
      content {
        ...ContentBlockFields
        ...ContactCardsBlockFields
      }
    }
  }
  ${CONTENT_FRAGMENT}
  ${CONTACT_CARDS_FRAGMENT}
`
