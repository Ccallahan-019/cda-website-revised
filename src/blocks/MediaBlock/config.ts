import { linkGroup } from '@/fields/linkGroup'
import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'contentType',
      type: 'select',
      required: true,
      defaultValue: 'media',
      options: [
        { label: 'Media Only', value: 'media' },
        { label: 'Media Gallery', value: 'gallery' },
        { label: 'Media With Text', value: 'withText' },
      ],
    },
    {
      name: 'media',
      type: 'relationship',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, siblingData) =>
          siblingData.contentType === 'media' || siblingData.contentType === 'withText',
      },
    },
    {
      name: 'galleryMedia',
      type: 'relationship',
      relationTo: 'media',
      required: true,
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.contentType === 'gallery',
        description:
          'The ideal ratio for these media files is 16 / 9. Media with vastly different ratios will be cropped heavily in order to fit within the gallery.',
      },
    },
    {
      name: 'mediaAlignment',
      type: 'select',
      required: true,
      options: [
        { value: 'left', label: 'Left' },
        { value: 'right', label: 'Right' },
      ],
      defaultValue: 'left',
      admin: {
        condition: (_, siblingData) => siblingData.contentType === 'withText',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] })]
        },
      }),
      admin: {
        condition: (_, siblingData) => siblingData.contentType === 'withText',
      },
    },
    linkGroup({
      appearances: ['default', 'outline', 'solid', 'ghost', 'soft'],
      overrides: {
        maxRows: 2,
        admin: {
          condition: (_, siblingData) => siblingData.contentType === 'withText',
        },
      },
    }),
    {
      name: 'autoPlay',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        condition: (_, siblingData) => siblingData.contentType === 'gallery',
        description:
          'This determines if the media will move from one slide to the next automatically.',
      },
    },
    {
      name: 'looping',
      type: 'checkbox',
      defaultValue: 'true',
      admin: {
        condition: (_, siblingData) => siblingData.contentType === 'gallery',
        description:
          'This determines if the media will loop from the last slide to the first without moving through every previous slide.',
      },
    },
  ],
}
