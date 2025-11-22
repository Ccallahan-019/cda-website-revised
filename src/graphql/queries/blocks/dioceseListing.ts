import { gql } from '@apollo/client'

export const GET_ALL_DIOCESES = gql`
  query Dioceses {
    Dioceses(limit: 1000, draft: false, pagination: false) {
      docs {
        id
        name
        location {
          address
          city
          state
          zipcode
        }
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
          color
        }
        phoneNumber
        info
      }
    }
  }
`
