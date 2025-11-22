import { gql } from '@apollo/client'

export const GET_COURT_SLUGS = gql`
  query Courts {
    Courts(limit: 1000, draft: false, pagination: false) {
      docs {
        slug
      }
    }
  }
`

export const GET_COURT_BY_SLUG = gql`
  query Court($slug: String, $draft: Boolean) {
    Courts(where: { slug: { equals: $slug } }, draft: $draft, pagination: false) {
      docs {
        updatedAt
        name
        diocese {
          name
        }
        number
        instituted
        website {
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
        location {
          address
          city
          state
          zipcode
        }
        phoneNumber
        contactEmail
        officers {
          regent {
            name
          }
          viceRegent {
            name
          }
          recordingSecretary {
            name
          }
          financialSecretary {
            name
          }
          treasurer {
            name
          }
        }
        newsletters {
          id
          title
          yearOfRelease
          type
          reissueDate
          url
          filesize
          filename
        }
        content
      }
    }
  }
`
