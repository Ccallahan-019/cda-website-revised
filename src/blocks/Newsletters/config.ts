import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const Newsletters: Block = {
  slug: 'newsletters',
  interfaceName: 'NewslettersBlock',
  fields: [
    {
      name: 'introContent',
      type: 'richText',
      required: false,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] })]
        },
      }),
    },
    {
      name: 'selectionType',
      type: 'select',
      required: true,
      options: [
        { label: 'Auto Populate', value: 'auto' },
        { label: 'Custom Selection', value: 'custom' },
      ],
      defaultValue: 'auto',
    },
    {
      name: 'autoPopulationType',
      type: 'radio',
      required: true,
      defaultValue: 'state',
      options: [
        {
          label: 'Local',
          value: 'local',
        },
        {
          label: 'State',
          value: 'state',
        },
        {
          label: 'National',
          value: 'national',
        },
      ],
      admin: {
        layout: 'horizontal',
        condition: (_, siblingData) => siblingData.selectionType === 'auto',
      },
    },
    {
      name: 'items',
      type: 'relationship',
      required: true,
      relationTo: 'newsletters',
      hasMany: true,
      maxRows: 10,
      admin: {
        condition: (_, siblingData) => siblingData.selectionType === 'custom',
      },
    },
  ],
}
