import { lexicalEditor, HeadingFeature } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const SideBar: Block = {
  slug: 'sideBar',
  interfaceName: 'SideBarBlock',
  fields: [
    {
      name: 'sections',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'richText',
          type: 'richText',
          required: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] })]
            },
          }),
          label: false,
        },
      ],
      maxRows: 4,
    },
    {
      name: 'alignment',
      type: 'select',
      required: true,
      defaultValue: 'right',
      hasMany: false,
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
  ],
}
