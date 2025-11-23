import { gql } from '@apollo/client'

export const CTA_FRAGMENT = gql`
  fragment CallToActionBlockFields on CallToActionBlock {
    id
    blockType
    richText
    ctaLinks: links {
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
            ... on Media {
              url
            }
          }
        }
        url
        color
        appearance
        label
      }
    }
  }
`
