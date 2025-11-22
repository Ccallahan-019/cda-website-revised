import { gql } from '@apollo/client'

export const GET_HEADER = gql`
  query Header {
    Header {
      navItems {
        description
        subNav {
          label
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
              label
              color
            }
          }
        }
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
      navButtons {
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
          appearance
        }
      }
      logo {
        id
        alt
        url
        width
        height
      }
    }
  }
`
