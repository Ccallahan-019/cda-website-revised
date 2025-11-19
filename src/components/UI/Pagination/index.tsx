'use client'

import { useState } from 'react'
import { Box, Flex, IconButton } from '@radix-ui/themes'
import { ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react'
import { Text } from '../RadixComponents/Typography/Text'

type RangeLabels = {
  singular: string
  plural: string
}

type Props<T> = {
  items: T[]
  rowsPerPage?: number
  rangeLabels: RangeLabels
  maxVisiblePages?: number
  onPageChange?: (page: number) => void
  render: (pageItems: T[]) => React.ReactNode
}

export function Pagination<T>(props: Props<T>) {
  const { items, rowsPerPage = 10, rangeLabels, maxVisiblePages = 5, onPageChange, render } = props

  const totalCount = items?.length ?? 0
  const totalPages = Math.max(1, Math.ceil(totalCount / rowsPerPage))

  const [currentPage, setCurrentPage] = useState(1)

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    if (onPageChange) {
      onPageChange(currentPage)
    }
  }
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
    if (onPageChange) {
      onPageChange(currentPage)
    }
  }
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (onPageChange) {
      onPageChange(currentPage)
    }
  }

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
  let endPage = startPage + maxVisiblePages - 1
  if (endPage > totalPages) {
    endPage = totalPages
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }
  const pageArr = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)

  const startIndex = totalCount === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1
  const endIndex = totalCount === 0 ? 0 : Math.min(currentPage * rowsPerPage, totalCount)

  const pageItems =
    totalCount > 0 ? items.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage) : []

  return (
    <Flex direction="column" gap="5">
      <Text>
        {totalCount === 1
          ? `Showing ${startIndex} of ${totalCount} ${rangeLabels.singular}`
          : `Showing ${startIndex} - ${endIndex} of ${totalCount} ${rangeLabels.plural}`}
      </Text>

      <Box>{render(pageItems)}</Box>

      <Flex asChild justify="center" gap="1">
        <nav>
          <IconButton onClick={handlePrevPage} disabled={currentPage === 1} variant="soft">
            <span className="sr-only">Previous</span>
            <ChevronsLeftIcon size={20} />
          </IconButton>

          {pageArr.map((page) => (
            <IconButton
              key={page}
              onClick={() => handlePageChange(page)}
              variant={currentPage === page ? 'outline' : 'soft'}
            >
              {page}
            </IconButton>
          ))}

          <IconButton onClick={handleNextPage} disabled={currentPage === totalPages} variant="soft">
            <span className="sr-only">Next</span>
            <ChevronsRightIcon size={20} />
          </IconButton>
        </nav>
      </Flex>
    </Flex>
  )
}
