import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const NewsPosts: Block = {
  slug: 'newsPosts',
  interfaceName: 'NewsPostsBlock',
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
      name: 'limit',
      type: 'number',
      admin: {
        condition: (_, siblingData) => siblingData.selectionType === 'auto',
        step: 1,
      },
      defaultValue: 10,
    },
    {
      name: 'posts',
      type: 'relationship',
      required: true,
      relationTo: 'newsPosts',
      hasMany: true,
      maxRows: 10,
      admin: {
        condition: (_, siblingData) => siblingData.selectionType === 'custom',
      },
    },
    {
      name: 'pagination',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'rowsPerPage',
      type: 'number',
      admin: {
        condition: (_, siblingData) => siblingData.pagination === true,
        step: 1,
      },
      defaultValue: 5,
    },
  ],
}
