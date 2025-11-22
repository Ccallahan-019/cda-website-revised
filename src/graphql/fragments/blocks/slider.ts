import { gql } from '@apollo/client'

export const SLIDER_FRAGMENT = gql`
  fragment SliderBlockFields on SliderBlock {
    blockType
    id
    slides {
      media {
        url
        alt
        height
        width
      }
      richText
      links {
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
          color
          appearance
          label
        }
      }
    }
  }
`
