import { gql } from '@apollo/client'

export const GET_CHAIRMEN = gql`
  query Chairmen {
    Contacts(
      where: { positions: { in: [chairman] } }
      limit: 1000
      draft: false
      pagination: false
    ) {
      docs {
        name
        roles {
          role
        }
        email
      }
    }
  }
`

export const GET_OFFICERS = gql`
  query Officers($officerType: [Contact_officerType_Input]) {
    Contacts(
      where: { AND: [{ positions: { in: [officer] } }, { officerType: { in: $officerType } }] }
      limit: 1000
      draft: false
      pagination: false
    ) {
      docs {
        name
        roles {
          role
        }
        email
      }
    }
  }
`
