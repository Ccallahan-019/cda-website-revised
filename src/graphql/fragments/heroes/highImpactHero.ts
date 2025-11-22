import { gql } from '@apollo/client'

export const HIGH_IMPACT_HERO_FRAGMENT = gql`
  fragment HighImpactHeroFields on HighImpactHero {
    blockType
    id
    heading
    subHeading
    richText
    links {
      id
      link {
        type
        newTab
        reference {
          relationTo
          value {
            ... on Page {
              slug
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
        label
        appearance
        color
      }
    }
    logo {
      id
      alt
      url
      width
      height
    }
    media {
      id
      alt
      url
      width
      height
    }
  }
`
