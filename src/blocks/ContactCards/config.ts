import { lexicalEditor, HeadingFeature } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const ContactCards: Block = {
  slug: 'contactCards',
  interfaceName: 'ContactCardsBlock',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] })]
        },
      }),
      label: false,
    },
    {
      name: 'autoPopulate',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'contactPosition',
      type: 'radio',
      options: [
        { label: 'Officer', value: 'officer' },
        { label: 'Chairman', value: 'chairman' },
        { label: 'District Deputy', value: 'deputy' },
      ],
      defaultValue: 'officer',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData.autoPopulate === true,
        layout: 'horizontal',
      },
    },
    {
      name: 'diocese',
      type: 'relationship',
      relationTo: 'dioceses',
      required: true,
      admin: {
        condition: (_, siblingData) =>
          siblingData.autoPopulate === true && siblingData.contactPosition === 'deputy',
      },
    },
    {
      name: 'officerType',
      type: 'radio',
      options: [
        { label: 'National', value: 'national' },
        { label: 'State', value: 'state' },
        { label: 'Local', value: 'local' },
      ],
      defaultValue: 'state',
      required: true,
      admin: {
        condition: (_, siblingData) =>
          siblingData.autoPopulate === true && siblingData.contactPosition === 'officer',
        layout: 'horizontal',
      },
    },
    {
      name: 'contacts',
      type: 'relationship',
      required: true,
      relationTo: 'contacts',
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.autoPopulate === false,
      },
    },
  ],
}
