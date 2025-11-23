import { gql } from '@apollo/client'

export const GET_ALL_EVENTS = gql`
  query Events($type: Event_type_Input, $limit: Int, $sortKey: String) {
    Events(
      where: { type: { equals: $type } }
      limit: $limit
      draft: false
      pagination: false
      sort: $sortKey
    ) {
      docs {
        id
        slug
        name
        type
        meta {
          description
          image {
            url
            alt
            height
            width
          }
        }
      }
    }
  }
`

export const GET_PAST_EVENTS = gql`
  query PastEvents($type: Event_type_Input, $date: DateTime, $limit: Int, $sortKey: String) {
    Events(
      where: {
        AND: [{ type: { equals: $type } }, { dates__startDate: { less_than_equal: $date } }]
      }
      limit: $limit
      draft: false
      pagination: false
      sort: $sortKey
    ) {
      docs {
        id
        slug
        name
        type
        meta {
          description
          image {
            url
            alt
            height
            width
          }
        }
      }
    }
  }
`

export const GET_FUTURE_EVENTS = gql`
  query PastEvents($type: Event_type_Input, $date: DateTime, $limit: Int, $sortKey: String) {
    Events(
      where: {
        AND: [{ type: { equals: $type } }, { dates__startDate: { greater_than_equal: $date } }]
      }
      limit: $limit
      draft: false
      pagination: false
      sort: $sortKey
    ) {
      docs {
        id
        slug
        name
        type
        meta {
          description
          image {
            url
            alt
            height
            width
          }
        }
      }
    }
  }
`

export const GET_FUNDRAISERS = gql`
  query Fundraiser($type: Fundraiser_type_Input, $limit: Int) {
    Fundraisers(
      where: { type: { equals: $type } }
      limit: $limit
      draft: false
      pagination: false
    ) {
      docs {
        id
        slug
        name
        type
        meta {
          description
          image {
            url
            alt
            height
            width
          }
        }
      }
    }
  }
`

export const GET_PROJECTS = gql`
  query Project($type: Project_type_Input, $limit: Int) {
    Projects(where: { type: { equals: $type } }, limit: $limit, draft: false, pagination: false) {
      docs {
        id
        slug
        name
        type
        meta {
          description
          image {
            url
            alt
            height
            width
          }
        }
      }
    }
  }
`

export const GET_CHARITIES = gql`
  query Charities($type: Charity_type_Input, $limit: Int) {
    Charities(where: { type: { equals: $type } }, limit: $limit, draft: false, pagination: false) {
      docs {
        id
        slug
        name
        type
        meta {
          description
          image {
            url
            alt
            height
            width
          }
        }
      }
    }
  }
`
