'use client'

import { ArchiveCard } from '../ArchiveCard'
import { Box, Grid } from '@radix-ui/themes'

import type { Charity, Event, Fundraiser, Project } from '@/payload-types'
import { Pagination } from '../UI/Pagination'

export type Relation = 'events' | 'fundraisers' | 'projects' | 'charities'

export type SelectedDoc = {
  relationTo: Relation
  value: Event | Fundraiser | Project | Charity
}

export type NormalizedDoc = SelectedDoc | Event | Fundraiser | Project | Charity

export type Props = {
  relationTo?: 'events' | 'fundraisers' | 'projects' | 'charities' | null
  pagination?: boolean
  itemsPerPage?: number
  docs: NormalizedDoc[]
}

const labelsMap = {
  events: { singular: 'Event', plural: 'Events' },
  fundraisers: { singular: 'Fundraiser', plural: 'Fundraisers' },
  projects: { singular: 'Project', plural: 'Projects' },
  charities: { singular: 'Charity', plural: 'Charities' },
}

const ArchiveGrid: React.FC<{
  docs: NormalizedDoc[]
  relationTo?: 'events' | 'fundraisers' | 'projects' | 'charities' | null
}> = ({ docs, relationTo }) => {
  return (
    <Grid
      columns={{ initial: '4', sm: '8', lg: '12' }}
      gapX={{ initial: '2', lg: '4', xl: '8' }}
      gapY={{ initial: '2', lg: '4' }}
    >
      {docs.map((result, index) => {
        if ('relationTo' in result) {
          return (
            <Box gridColumn="span 4" key={index}>
              <ArchiveCard doc={result.value} relationTo={result.relationTo} />
            </Box>
          )
        }

        return (
          <Box gridColumn="span 4" key={index}>
            <ArchiveCard doc={result} relationTo={relationTo ?? null} />
          </Box>
        )
      })}
    </Grid>
  )
}

export const CollectionArchive: React.FC<Props> = ({
  docs,
  relationTo,
  pagination = true,
  itemsPerPage = 3,
}) => {
  if (pagination) {
    return (
      <Pagination
        items={docs}
        rowsPerPage={itemsPerPage}
        rangeLabels={relationTo ? labelsMap[relationTo] : { singular: 'Item', plural: 'Items' }}
        render={(paginatedDocs) => <ArchiveGrid docs={paginatedDocs} relationTo={relationTo} />}
      />
    )
  }

  return <ArchiveGrid docs={docs} relationTo={relationTo} />
}
