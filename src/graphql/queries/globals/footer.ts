import { gql } from '@apollo/client'

export const GET_FOOTER = gql`
  query Footer {
    Footer {
      navHeading
      navItems {
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
      richText
      socialMedia {
        platform
        link
      }
      copyrightText
    }
  }
`
