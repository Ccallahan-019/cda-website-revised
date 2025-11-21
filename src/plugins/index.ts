import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { fields, formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'

import { Plugin } from 'payload'
import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

import { Page } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | PA Catholic Daughters` : 'PA Catholic Daughters'
}

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages'],
    overrides: {
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  vercelBlobStorage({
    enabled: true,
    collections: {
      media: true,
      newsletters: true,
    },
    token: process.env.BLOB_READ_WRITE_TOKEN,
    clientUploads: true,
    addRandomSuffix: true,
  }),
  nestedDocsPlugin({
    collections: ['pages'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
      text: {
        fields: [
          ...(fields.text
            ? typeof fields.text === 'function'
              ? fields.text().fields
              : fields.text.fields
            : []),
          {
            name: 'type',
            type: 'select',
            options: [
              { label: 'Text', value: 'text' },
              { label: 'Password', value: 'password' },
              { label: 'Phone Number', value: 'tel' },
            ],
            required: true,
            defaultValue: 'text',
          },
          {
            name: 'placeholder',
            type: 'text',
            required: false,
          },
        ],
      },
      email: {
        fields: [
          ...(fields.email
            ? typeof fields.email === 'function'
              ? fields.email().fields
              : fields.email.fields
            : []),
          {
            name: 'placeholder',
            type: 'text',
            required: false,
          },
        ],
      },
      number: {
        fields: [
          ...(fields.number
            ? typeof fields.number === 'function'
              ? fields.number().fields
              : fields.number.fields
            : []),
          {
            name: 'min',
            label: 'Minimum',
            type: 'number',
            required: true,
            defaultValue: 0,
          },
          {
            name: 'max',
            label: 'Maximum',
            type: 'number',
            required: true,
            defaultValue: 100,
          },
          {
            name: 'placeholder',
            type: 'text',
            required: false,
          },
        ],
      },
      date: true,
    },
    formOverrides: {
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          return field
        })
      },
    },
  }),
  payloadCloudPlugin(),
]
