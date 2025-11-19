import { linkGroup } from '@/fields/linkGroup'
import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const Slider: Block = {
  slug: 'slider',
  interfaceName: 'SliderBlock',
  fields: [
    {
      name: 'slides',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'media',
          type: 'relationship',
          relationTo: 'media',
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
        },
        linkGroup({
          appearances: ['default', 'outline', 'solid', 'soft'],
        }),
      ],
    },
  ],
}
