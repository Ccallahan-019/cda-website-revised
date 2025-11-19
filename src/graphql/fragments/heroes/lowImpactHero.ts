import { gql } from '@apollo/client'

export const LOW_IMPACT_HERO_FRAGMENT = gql`
  fragment LowImpactHeroFields on LowImpactHero {
    blockType
    id
    richText
  }
`
