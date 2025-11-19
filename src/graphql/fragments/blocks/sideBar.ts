import { gql } from '@apollo/client'

export const SIDE_BAR_FRAGMENT = gql`
  fragment SideBarBlockFields on SideBarBlock {
    blockType
    id
    alignment
    sections {
      id
      label
      richText
    }
  }
`
