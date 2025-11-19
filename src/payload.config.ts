/* eslint-disable @typescript-eslint/no-explicit-any */

import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { Footer } from './globals/Footer/config'
import { Header } from './globals/Header/config'
import { plugins } from './plugins'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { getServerSideURL } from './utilities/getURL'
import { buildZodSchema } from './blocks/Form/buildZodSchema'
import { FormFieldBlock } from '@payloadcms/plugin-form-builder/types'
import z from 'zod/v4'
import { NewsPosts } from './collections/NewsPosts'
import { Newsletters } from './collections/Newsletters'
import { Contacts } from './collections/Contacts'
import { Dioceses } from './collections/Dioceses'
import { Courts } from './collections/Courts'
import { Events } from './collections/Events'
import { Fundraisers } from './collections/Fundraisers/config'
import { Projects } from './collections/Projects/config'
import { Charities } from './collections/Charities/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

type FieldEntry = { field: string; value: any }

function flattenSubmission(entries: FieldEntry[]): Record<string, any> {
  return entries.reduce(
    (obj, entry) => {
      obj[entry.field] = entry.value
      return obj
    },
    {} as Record<string, any>,
  )
}

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures.filter((feature) => feature.key !== 'align'),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  }),
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  collections: [
    Pages,
    Media,
    Users,
    NewsPosts,
    Newsletters,
    Contacts,
    Dioceses,
    Courts,
    Events,
    Fundraisers,
    Projects,
    Charities,
  ],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  plugins: [...plugins],
  secret: process.env.PAYLOAD_SECRET ?? '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
  email: nodemailerAdapter({
    // Assigned nodemailerAdapter
    defaultFromAddress: 'callahan.0019@gmail.com', //
    defaultFromName: 'Payload',
    transportOptions: {
      service: process.env.SITE_MAIL_SERVICE,
      host: process.env.SMTP_SERVER_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_SERVER_USERNAME,
        pass: process.env.SMTP_SERVER_PASSWORD,
      },
    },
  }),
  endpoints: [
    {
      method: 'post',
      path: '/submit-form',
      handler: async (req: PayloadRequest) => {
        if (req.json) {
          const submission = await req.json()

          const form = await req.payload.findByID({
            collection: 'forms',
            id: submission.form,
          })

          const schema = buildZodSchema((form.fields as FormFieldBlock[]) || [])
          const flattened = flattenSubmission(submission.submissionData)

          const parsed = schema.safeParse(flattened)
          if (!parsed.success) {
            console.error('Validation failed', z.treeifyError(parsed.error))
            return Response.json({ error: 'Invalid form values' }, { status: 400 })
          }

          const created = await req.payload.create({
            collection: 'form-submissions',
            data: submission,
            req,
          })

          return Response.json({ success: true, created }, { status: 201 })
        } else {
          return Response.json({ error: 'No submission data' }, { status: 400 })
        }
      },
    },
  ],
})
