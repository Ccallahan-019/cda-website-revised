import { linkGroup } from '@/fields/linkGroup'
import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const MediaRightHero: Block = {
  slug: 'mediaRightHero',
  interfaceName: 'MediaRightHero',
  fields: [
    {
      name: 'media',
      type: 'relationship',
      required: true,
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          ]
        },
      }),
    },
    {
      name: 'buttonType',
      type: 'select',
      required: true,
      options: [
        { value: 'scroll', label: 'Scroll' },
        { value: 'links', label: 'Links' },
      ],
      defaultValue: 'scroll',
    },
    linkGroup({
      overrides: {
        maxRows: 2,
        admin: {
          condition: (_, siblingData) => siblingData.buttonType === 'links',
        },
      },
      appearances: ['default', 'outline', 'solid'],
    }),
  ],
}
