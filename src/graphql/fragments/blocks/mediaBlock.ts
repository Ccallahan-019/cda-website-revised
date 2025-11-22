import { gql } from '@apollo/client'

export const MEDIA_BLOCK_FRAGMENT = gql`
  fragment MediaBlockFields on MediaBlock {
    blockType
    id
    contentType
    media {
      id
      alt
      url
      width
      height
      caption
    }
    galleryMedia {
      id
      alt
      url
      width
      height
      caption
    }
    mediaAlignment
    content
    links {
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
    looping
    autoPlay
  }
`
