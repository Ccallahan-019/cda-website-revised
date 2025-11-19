import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'
import { linkGroup } from '@/fields/linkGroup'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'description',
          type: 'text',
          required: false,
        },
        {
          name: 'subNav',
          type: 'array',
          required: false,
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            linkGroup({
              appearances: false,
            }),
          ],
          maxRows: 3,
        },
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Header/RowLabel#RowLabel',
        },
      },
    },
    linkGroup({
      appearances: ['default', 'solid', 'soft', 'outline'],
      overrides: {
        name: 'navButtons',
        maxRows: 2,
      },
    }),
    {
      name: 'logo',
      type: 'relationship',
      relationTo: 'media',
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
