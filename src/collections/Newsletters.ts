import type { CollectionConfig } from 'payload'

import path from 'path'
import { fileURLToPath } from 'url'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { AllowListType } from './Media'

const allowList: AllowListType[] = [
  {
    hostname: process.env.VERCEL_PROJECT_PRODUCTION_URL,
    pathname: '/api/newsletters/file/*',
    protocol: 'https',
  },
]

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Newsletters: CollectionConfig = {
  slug: 'newsletters',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'displayTitle',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'yearOfRelease',
      type: 'number',
      required: true,
    },
    {
      name: 'type',
      type: 'radio',
      required: true,
      defaultValue: 'state',
      options: [
        {
          label: 'Local',
          value: 'local',
        },
        {
          label: 'State',
          value: 'state',
        },
        {
          label: 'National',
          value: 'national',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'associatedCourt',
      type: 'relationship',
      relationTo: 'courts',
      admin: {
        condition: (_, siblingData) => siblingData.type === 'local',
      },
    },
    {
      name: 'reissueDate',
      type: 'date',
      required: false,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'displayTitle',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [({ data }) => `${data?.title} (${data?.yearOfRelease})`],
      },
    },
  ],
  upload: {
    staticDir: path.resolve(dirname, '../../public/newsletters'),
    mimeTypes: ['application/pdf'],
    skipSafeFetch: allowList
      .filter((item) => item.hostname)
      .map((item) => {
        const { hostname, pathname, port, protocol, search } = item

        return {
          hostname: hostname as string,
          pathname,
          port,
          protocol,
          search,
        }
      }),
  },
}
