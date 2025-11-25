import type { CollectionConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export type AllowListType = {
  hostname?: string
  pathname?: string
  port?: string
  protocol?: 'http' | 'https'
  search?: string
}

const allowList: AllowListType[] = [
  {
    hostname: process.env.VERCEL_PROJECT_PRODUCTION_URL,
    pathname: '/api/media/file/*',
    protocol: 'https',
  },
]

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
  upload: {
    staticDir: path.resolve(dirname, '../../public/media'),
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
      },
      {
        name: 'square',
        width: 500,
        height: 500,
      },
      {
        name: 'small',
        width: 600,
      },
      {
        name: 'medium',
        width: 900,
      },
      {
        name: 'large',
        width: 1400,
      },
      {
        name: 'xlarge',
        width: 1920,
      },
      {
        name: 'og',
        width: 1200,
        height: 630,
        crop: 'center',
      },
    ],
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
