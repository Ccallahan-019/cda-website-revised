import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import type { CollectionConfig } from 'payload'

export const Contacts: CollectionConfig = {
  slug: 'contacts',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: false,
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'roles',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'role',
          type: 'text',
        },
      ],
    },
    {
      name: 'positions',
      type: 'select',
      options: [
        { label: 'Officer', value: 'officer' },
        { label: 'Chairman', value: 'chairman' },
        { label: 'District Deputy', value: 'deputy' },
      ],
      hasMany: true,
      required: true,
    },
    {
      name: 'officerType',
      type: 'select',
      required: true,
      options: [
        { label: 'National', value: 'national' },
        { label: 'State', value: 'state' },
        { label: 'Local', value: 'local' },
      ],
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.positions.includes('officer'),
      },
    },
  ],
}
