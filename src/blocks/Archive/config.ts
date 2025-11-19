import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Archive: Block = {
  slug: 'archive',
  interfaceName: 'ArchiveBlock',
  fields: [
    {
      name: 'introContent',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Intro Content',
    },
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'collection',
      options: [
        {
          label: 'Collection',
          value: 'collection',
        },
        {
          label: 'Individual Selection',
          value: 'selection',
        },
      ],
    },
    {
      name: 'relationTo',
      type: 'select',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
      defaultValue: 'events',
      label: 'Collection To Show',
      options: [
        {
          label: 'Events',
          value: 'events',
        },
        {
          label: 'Fundraisers',
          value: 'fundraisers',
        },
        {
          label: 'Projects',
          value: 'projects',
        },
        {
          label: 'Charities',
          value: 'charities',
        },
      ],
    },
    {
      name: 'selectedDocs',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
      hasMany: true,
      label: 'Selection',
      relationTo: ['events', 'fundraisers', 'projects', 'charities'],
    },
    {
      name: 'type',
      type: 'select',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
      defaultValue: 'state',
      options: [
        { label: 'National', value: 'national' },
        { label: 'State', value: 'state' },
        { label: 'Local', value: 'local' },
      ],
    },
    {
      name: 'limit',
      type: 'number',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
        step: 1,
      },
      defaultValue: 10,
      label: 'Limit',
    },
    {
      name: 'pagination',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'itemsPerPage',
      type: 'number',
      defaultValue: 3,
      admin: {
        condition: (_, siblingData) => siblingData.pagination === true,
        description:
          'Choose how many items are shown on each page. If a number is not given, it will default to 3.',
      },
    },
  ],
  labels: {
    plural: 'Archives',
    singular: 'Archive',
  },
}
