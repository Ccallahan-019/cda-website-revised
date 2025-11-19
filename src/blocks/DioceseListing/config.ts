import { lexicalEditor, HeadingFeature } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const DioceseListing: Block = {
  slug: 'dioceseListing',
  interfaceName: 'DioceseListingBlock',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5'] }),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'selectionType',
      type: 'select',
      required: true,
      options: [
        { label: 'All Dioceses', value: 'all' },
        { label: 'Custom Selection', value: 'custom' },
      ],
      defaultValue: 'all',
    },
    {
      name: 'dioceses',
      type: 'relationship',
      required: true,
      relationTo: 'dioceses',
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.selectionType === 'custom',
      },
    },
  ],
}
