import { gql } from '@apollo/client'

export const MEDIA_RIGHT_HERO_FRAGMENT = gql`
  fragment MediaRightHeroFields on MediaRightHero {
    blockType
    id
    richText
    buttonType
    mediaRightLinks: links {
      id
      link {
        type
        newTab
        reference {
          relationTo
          value {
            ... on Page {
              slug
              breadcrumbs {
                id
                label
                url
              }
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
    media {
      id
      alt
      url
      width
      height
    }
  }
`
