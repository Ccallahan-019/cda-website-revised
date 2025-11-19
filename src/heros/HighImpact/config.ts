import { linkGroup } from '@/fields/linkGroup'
import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const HighImpactHero: Block = {
  slug: 'highImpactHero',
  interfaceName: 'HighImpactHero',
  fields: [
    {
      name: 'logo',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'media',
      type: 'relationship',
      required: true,
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subHeading',
      type: 'text',
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
    linkGroup({
      overrides: {
        maxRows: 2,
      },
      appearances: ['default', 'outline', 'solid'],
    }),
  ],
}
