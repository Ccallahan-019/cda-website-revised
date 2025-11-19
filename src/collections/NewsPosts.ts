import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { linkGroup } from '@/fields/linkGroup'
import type { CollectionConfig } from 'payload'

export const NewsPosts: CollectionConfig = {
  slug: 'newsPosts',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Write a short description of the news post.',
      },
    },
    linkGroup({
      overrides: {
        maxRows: 1,
      },
      appearances: false,
    }),
  ],
}
