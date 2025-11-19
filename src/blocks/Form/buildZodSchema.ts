import { z } from 'zod/v4'
import type { FormFieldBlock } from '@payloadcms/plugin-form-builder/types'
import { countryOptions } from '@/blocks/Form/Country/options'
import { stateOptions } from '@/blocks/Form/State/options'

const createOptionSchema = (options: string[], required: boolean | undefined) => {
  if (options.length === 0) return z.string('Enter a valid option')

  const base = z.literal(options, 'Choose a valid option')
  return required
    ? base
    : z.preprocess((val) => (!val || val === '' ? null : val), z.nullable(base))
}

export const buildZodSchema = (fields: FormFieldBlock[]) => {
  const shape: Record<string, z.ZodTypeAny> = {}

  fields.forEach((field) => {
    if ('name' in field) {
      const { blockType } = field

      let schema: z.ZodTypeAny

      switch (blockType) {
        case 'checkbox':
          if (field.required) {
            schema = z
              .boolean('Enter a valid input')
              .refine((val) => val === true, 'This field must be checked')
          } else {
            schema = z.boolean()
          }
          break

        case 'select': {
          const options = (field.options || []).map((opt) => opt.value)

          schema = createOptionSchema(options, field.required)

          break
        }

        case 'country': {
          const options = (countryOptions || []).map((opt) => opt.value)

          schema = createOptionSchema(options, field.required)

          break
        }

        case 'state': {
          const options = (stateOptions || []).map((opt) => opt.value)

          schema = createOptionSchema(options, field.required)

          break
        }

        case 'textarea':
          if (field.required) {
            schema = z.string().min(1, 'This field is required')
          } else {
            schema = z.string()
          }
          break

        case 'text': {
          const { type } = field as {
            type?: 'text' | 'password' | 'tel'
          }

          switch (type) {
            case 'tel':
              const phoneSchema = z
                .string()
                .regex(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Must be a valid phone number')

              if (field.required) {
                schema = phoneSchema
              } else {
                schema = z.optional(phoneSchema)
              }
              break

            case 'password':
              const passwordSchema = z
                .string('Please enter a valid password')
                .min(8, 'Password must be at least 8 characters')

              if (field.required) {
                schema = passwordSchema
              } else {
                schema = z.optional(passwordSchema)
              }
              break

            case 'text':
            default:
              if (field.required) {
                schema = z.string().min(1, 'This field is required')
              } else {
                schema = z.string()
              }
              break
          }
          break
        }

        case 'email':
          if (field.required) {
            schema = z.email('Please enter a valid email')
          } else {
            schema = z.preprocess(
              (val) => {
                if (!val || val === '') return null
                return val
              },
              z.nullable(z.email('Please enter a valid email')),
            )
          }
          break

        case 'date': {
          schema = z.preprocess(
            (val) => {
              if (val instanceof Date) return val
              if (val === null || val === '') return null
              const parsed = new Date(val as string)
              return isNaN(parsed.getTime()) ? null : parsed
            },
            field.required
              ? z.date('Please enter a valid date')
              : z.union([z.date('Please enter a valid date'), z.null()]),
          )
          break
        }

        default:
          const { min, max, required } = field as {
            min?: number
            max?: number
            required: boolean
          }

          schema = z.preprocess(
            (val) => {
              if (!val || val === '') return null
              return val
            },
            required
              ? z.number('Please enter a valid number')
              : z.nullable(z.number('Please enter a valid number')),
          )

          if (min !== undefined && schema instanceof z.ZodNumber) {
            schema = schema.min(min, `Value must be greater than or equal to ${min}`)
          }
          if (max !== undefined && schema instanceof z.ZodNumber) {
            schema = schema.max(max, `Value must be less than or equal to ${max}`)
          }
      }
      shape[field.name] = schema
    }
  })

  return z.object(shape)
}
