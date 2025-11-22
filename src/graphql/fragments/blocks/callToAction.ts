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
        color
        appearance
        label
      }
    }
  }
`
