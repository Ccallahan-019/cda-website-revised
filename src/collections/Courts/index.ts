import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { lexicalEditor, HeadingFeature, BlocksFeature } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
import { Where } from 'payload'
import { revalidateCourt, revalidateDelete } from './hooks/revalidateCourt'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { Banner } from '@/blocks/Banner/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { link } from '@/fields/link'

const contactQuery: Where = {
  and: [
    {
      positions: {
        in: 'officer',
      },
    },
    {
      officerType: {
        in: 'local',
      },
    },
  ],
}

export const Courts: CollectionConfig = {
  slug: 'courts',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    name: true,
    slug: true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'courts',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'courts',
        req,
      }),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Info',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'diocese',
              type: 'relationship',
              required: true,
              relationTo: 'dioceses',
            },
            {
              name: 'number',
              type: 'number',
              required: true,
            },
            {
              name: 'instituted',
              type: 'date',
              required: true,
              admin: {
                date: {
                  pickerAppearance: 'default',
                },
              },
            },
            {
              name: 'includeWebsite',
              type: 'checkbox',
            },
            link({
              overrides: {
                name: 'website',
                required: false,
                admin: {
                  condition: (_, siblingData) => siblingData.includeWebsite === true,
                },
              },
            }),
            {
              name: 'location',
              type: 'group',
              fields: [
                {
                  name: 'address',
                  type: 'text',
                },
                {
                  name: 'city',
                  type: 'text',
                },
                {
                  name: 'state',
                  type: 'text',
                },
                {
                  name: 'zipcode',
                  type: 'text',
                },
              ],
            },
            {
              name: 'phoneNumber',
              type: 'text',
            },
            {
              name: 'contactEmail',
              type: 'email',
            },
            {
              name: 'officers',
              type: 'group',
              admin: {
                description:
                  "These fields have been pre-filtered to only include officers whose 'type' includes 'local'.",
              },
              fields: [
                {
                  name: 'regent',
                  type: 'relationship',
                  relationTo: 'contacts',
                  filterOptions: contactQuery,
                },
                {
                  name: 'viceRegent',
                  type: 'relationship',
                  relationTo: 'contacts',
                  filterOptions: contactQuery,
                },
                {
                  name: 'recordingSecretary',
                  type: 'relationship',
                  relationTo: 'contacts',
                  filterOptions: contactQuery,
                },
                {
                  name: 'financialSecretary',
                  type: 'relationship',
                  relationTo: 'contacts',
                  filterOptions: contactQuery,
                },
                {
                  name: 'treasurer',
                  type: 'relationship',
                  relationTo: 'contacts',
                  filterOptions: contactQuery,
                },
              ],
            },
            {
              name: 'newsletters',
              type: 'relationship',
              relationTo: 'newsletters',
              hasMany: true,
              filterOptions: ({ data }) => {
                const courtId = data?.id

                if (!courtId) return true // fallback to show all

                return {
                  associatedCourt: {
                    equals: courtId,
                  },
                }
              },
              admin: {
                description:
                  'As long as this court has been saved, this field has been pre-filtered to only include newsletters that have been associated with this court.',
              },
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5'] }),
                    BlocksFeature({ blocks: [MediaBlock, Banner, CallToAction] }),
                  ]
                },
              }),
              label: false,
              required: false,
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField('name'),
  ],
  hooks: {
    afterChange: [revalidateCourt],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
