'use client'

import { Fragment, useMemo, useState } from 'react'
import { Pagination } from '@/components/UI/Pagination'
import { Link } from '@/components/UI/RadixComponents/Typography/Link'
import { Court } from '@/payload-types'
import { formatDateTime } from '@/utilities/formatDateTime'
import { Flex, Table, Text } from '@radix-ui/themes'
import { ArrowDownUpIcon } from 'lucide-react'
import { SortKey } from '@/utilities/typedefs'

function convertToAnniversaryYears(date: string) {
  const instituted = new Date(date)
  const today = new Date()
  const years = today.getFullYear() - instituted.getFullYear()
  const hasOccurredThisYear =
    today.getMonth() > instituted.getMonth() ||
    (today.getMonth() === instituted.getMonth() && today.getDate() >= instituted.getDate())
  return hasOccurredThisYear ? years : years - 1
}
function convertToAnniversaryLabel(date: string) {
  return `${convertToAnniversaryYears(date)} years`
}

type SortDir = 'asc' | 'desc'

export const CourtTable: React.FC<{
  courts: (number | Court)[]
  rowsPerPage?: number
  showDiocese?: boolean
}> = ({ courts, rowsPerPage, showDiocese = true }) => {
  // keep only valid Court objects
  const courtObjs = useMemo(
    () => (Array.isArray(courts) ? courts.filter((c): c is Court => typeof c === 'object') : []),
    [courts],
  )

  const [sortKey, setSortKey] = useState<SortKey>('number')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  const onSort = (key: SortKey) => {
    setSortKey((prev) => (prev === key ? prev : key))
    setSortDir((prev) => (key === sortKey ? (prev === 'asc' ? 'desc' : 'asc') : 'asc'))
  }

  const sortedCourts = useMemo(() => {
    const arr = [...courtObjs]
    const getVal = (c: Court, key: SortKey): string | number | Date => {
      switch (key) {
        case 'number':
          return typeof c.number === 'number' ? c.number : Number.NEGATIVE_INFINITY
        case 'name':
          return c.name ?? ''
        case 'diocese':
          return typeof c.diocese === 'object' ? (c.diocese.name ?? '') : ''
        case 'location':
          return typeof c.location === 'object' ? (c.location.city ?? '') : ''
        case 'instituted':
          return c.instituted ? new Date(c.instituted) : new Date(0)
        case 'anniversary':
          return c.instituted ? convertToAnniversaryYears(c.instituted) : -1
        case 'regent': {
          const regentName =
            typeof c.officers === 'object' && typeof c.officers.regent === 'object'
              ? (c.officers.regent?.name ?? '')
              : ''
          return regentName
        }
      }
    }

    arr.sort((a, b) => {
      const va = getVal(a, sortKey)
      const vb = getVal(b, sortKey)

      let cmp = 0
      if (va instanceof Date && vb instanceof Date) {
        cmp = va.getTime() - vb.getTime()
      } else if (typeof va === 'number' && typeof vb === 'number') {
        cmp = va - vb
      } else {
        cmp = String(va).localeCompare(String(vb), undefined, {
          numeric: true,
          sensitivity: 'base',
        })
      }

      return sortDir === 'asc' ? cmp : -cmp
    })

    return arr
  }, [courtObjs, sortKey, sortDir])

  const HeaderCell: React.FC<{ label: string; sortKey: SortKey }> = (props) => {
    const { label, sortKey } = props

    return (
      <Table.ColumnHeaderCell>
        <Flex gap="2" align="center">
          <Fragment>{label}</Fragment>
          <ArrowDownUpIcon
            size={18}
            strokeWidth={2.25}
            onClick={() => onSort(sortKey)}
            style={{ cursor: 'pointer' }}
          />
        </Flex>
      </Table.ColumnHeaderCell>
    )
  }

  return (
    <Pagination
      items={sortedCourts}
      rowsPerPage={rowsPerPage}
      rangeLabels={{ singular: 'Court', plural: 'Courts' }}
      render={(paginatedCourts) => (
        <Table.Root variant="surface" layout="auto">
          <Table.Header>
            <Table.Row align="center">
              <HeaderCell label="Number" sortKey="number" />
              <HeaderCell label="Name" sortKey="name" />
              {showDiocese && <HeaderCell label="Diocese" sortKey="diocese" />}
              <HeaderCell label="Location" sortKey="location" />
              <HeaderCell label="Instituted" sortKey="instituted" />
              <HeaderCell label="Anniversary" sortKey="anniversary" />
              <HeaderCell label="Regent" sortKey="regent" />
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {paginatedCourts.map((court, index) => {
              const { id, number, slug, name, diocese, location, instituted, officers } = court

              let regentName: string | undefined = ''
              let regentEmail: string | null | undefined = ''

              if (typeof officers === 'object' && typeof officers.regent === 'object') {
                regentName = officers.regent?.name
                regentEmail = officers.regent?.email
              }

              return (
                <Table.Row key={id || index} align="center">
                  <Table.Cell>{number}</Table.Cell>
                  <Table.Cell>
                    <Link href={`/courts/${slug}`}>{name}</Link>
                  </Table.Cell>
                  {showDiocese && (
                    <Table.Cell>{typeof diocese === 'object' && <>{diocese.name}</>}</Table.Cell>
                  )}
                  <Table.Cell>{typeof location === 'object' && <>{location.city}</>}</Table.Cell>
                  <Table.Cell>{formatDateTime(instituted)?.displayDate}</Table.Cell>
                  <Table.Cell>{convertToAnniversaryLabel(instituted)}</Table.Cell>
                  <Table.Cell>
                    <Flex direction="column">
                      <Text>{regentName}</Text>
                      <Text>{regentEmail}</Text>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table.Root>
      )}
    />
  )
}
