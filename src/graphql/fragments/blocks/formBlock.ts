import { gql } from '@apollo/client'

export const FORM_BLOCK_FRAGMENT = gql`
  fragment FormBlockFields on FormBlock {
    blockType
    id
    enableIntro
    introContent
    form {
      id
      confirmationMessage
      confirmationType
      submitButtonLabel
      fields {
        ... on Checkbox {
          blockType
          name
          label
          width
          required
          defaultCheckValue: defaultValue
        }
        ... on Country {
          blockType
          name
          label
          width
          required
        }
        ... on Email {
          blockType
          name
          label
          width
          required
          placeholder
        }
        ... on Message {
          message
          blockType
        }
        ... on Number {
          blockType
          name
          label
          width
          defaultNumberValue: defaultValue
          required
          min
          max
          placeholder
        }
        ... on Select {
          blockType
          name
          label
          width
          defaultValue
          placeholder
          options {
            label
            value
            id
          }
          required
        }
        ... on State {
          blockType
          name
          label
          width
          required
        }
        ... on Text {
          blockType
          name
          label
          width
          required
          defaultValue
          type
          placeholder
        }
        ... on Textarea {
          blockType
          name
          label
          width
          required
          defaultValue
        }
        ... on Date {
          blockType
          name
          label
          width
          required
          defaultDateValue: defaultValue
        }
      }
    }
  }
`
