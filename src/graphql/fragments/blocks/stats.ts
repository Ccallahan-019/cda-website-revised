import { gql } from '@apollo/client'

export const STATS_FRAGMENT = gql`
  fragment StatsBlockFields on StatsBlock {
    blockType
    id
    richText
    stats {
      value
      description
      postfix
    }
  }
`
