import { gql } from '@apollo/client'

export const GET_NEWSLETTERS = gql`
  query Newsletters($type: Newsletter_type_Input) {
    Newsletters(where: { type: { equals: $type } }, limit: 1000, draft: false, pagination: false) {
      docs {
        id
        title
        yearOfRelease
        type
        reissueDate
        url
        filesize
        filename
      }
    }
  }
`
