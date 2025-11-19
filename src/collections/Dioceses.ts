import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { lexicalEditor, HeadingFeature } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
import { Where } from 'payload'
import { link } from '@/fields/link'

const deputiesQuery: Where = {
  positions: {
    contains: 'deputy',
  },
}

export const Dioceses: CollectionConfig = {
  slug: 'dioceses',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Diocese Info',
          fields: [
            {
              name: 'name',
              type: 'text',
            },
            link({
              disableLabel: true,
              appearances: false,
              overrides: {
                name: 'website',
              },
            }),
            {
              name: 'location',
              type: 'group',
              fields: [
                {
                  name: 'address',
                  type: 'text',
                },
                {
                  name: 'city',
                  type: 'text',
                },
                {
                  name: 'state',
                  type: 'text',
                },
                {
                  name: 'zipcode',
                  type: 'text',
                },
              ],
            },
            {
              name: 'phoneNumber',
              type: 'text',
            },
            {
              name: 'deputies',
              type: 'relationship',
              relationTo: 'contacts',
              hasMany: true,
              filterOptions: deputiesQuery,
              admin: {
                description:
                  'This field has been pre-filtered to only show contacts that have designated as a District Deputy in the "Positions" field.',
              },
            },
          ],
        },
        {
          label: 'Additional Info',
          fields: [
            {
              name: 'info',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                  ]
                },
              }),
              label: false,
              required: false,
            },
          ],
        },
      ],
    },
  ],
}
