import { gql } from '@apollo/client'

export const BANNER_FRAGMENT = gql`
  fragment BannerBlockFields on BannerBlock {
    blockType
    id
    style
    content
  }
`
