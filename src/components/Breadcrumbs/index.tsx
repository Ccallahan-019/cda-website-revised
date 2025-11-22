'use client'

import { Page } from '@/payload-types'
import { Flex, Box, IconButton, Popover, Badge } from '@radix-ui/themes'
import { ChevronRightIcon, ArrowDownNarrowWideIcon } from 'lucide-react'
import { Text } from '../UI/RadixComponents/Typography/Text'
import { Link } from '../UI/RadixComponents/Typography/Link'
import { useMediaQuery } from '@/utilities/hooks/useMediaQuery'

export const Breadcrumbs: React.FC<{ breadcrumbs: Page['breadcrumbs'] }> = ({ breadcrumbs }) => {
  const isSmall = useMediaQuery('(max-width: 768px)')

  if (!Array.isArray(breadcrumbs) || breadcrumbs.length <= 1) return null

  const visibleCrumbs = isSmall
    ? [breadcrumbs[breadcrumbs.length - 2], breadcrumbs[breadcrumbs.length - 1]]
    : breadcrumbs

  return (
    <Flex align="center">
      {isSmall && breadcrumbs.length >= 3 && (
        <Flex align="center">
          <Popover.Root>
            <Popover.Trigger>
              <IconButton color="amber" variant="soft" size="1">
                <ArrowDownNarrowWideIcon size={16} />
              </IconButton>
            </Popover.Trigger>
            <Popover.Content>
              <Flex direction="column" gap="2">
                {breadcrumbs.map((item, index) => {
                  const { id, url, label } = item
                  const isLast = index === breadcrumbs.length - 1

                  return (
                    <Box key={id || index} pl={`${index}rem`}>
                      {!isLast ? (
                        <Link
                          size={{ initial: '1', sm: '2' }}
                          href={url ?? '#'}
                          style={{ color: 'var(--gray-11)' }}
                          underline="hover"
                        >
                          {label}
                        </Link>
                      ) : (
                        <Text size={{ initial: '1', sm: '2' }} style={{ color: 'var(--gray-12)' }}>
                          {label}
                        </Text>
                      )}
                    </Box>
                  )
                })}
              </Flex>
            </Popover.Content>
          </Popover.Root>
          <Box px={{ initial: '1', xs: '2' }}>
            <ChevronRightIcon size={16} strokeWidth={2.25} color="var(--gray-11)" />
          </Box>
        </Flex>
      )}
      <Flex>
        {visibleCrumbs.map((item, index) => {
          if (!item) return null

          const isLast = index === visibleCrumbs.length - 1

          const { url, label, id } = item

          return (
            <Flex key={id || index} align="center">
              {!isLast ? (
                <Flex align="center">
                  <Flex
                    align="center"
                    minWidth="0"
                    maxWidth={{ initial: '80px', xs: '120px', lg: 'auto' }}
                  >
                    <Badge color="gray" size="2">
                      <Link
                        href={url ?? '#'}
                        style={{ color: 'var(--gray-11)' }}
                        size={{ initial: '1', sm: '2' }}
                        truncate
                        underline="hover"
                      >
                        {label}
                      </Link>
                    </Badge>
                  </Flex>
                  <Box px={{ initial: '1', xs: '2' }}>
                    <ChevronRightIcon size={16} strokeWidth={2.25} color="var(--gray-11)" />
                  </Box>
                </Flex>
              ) : (
                <Flex align="center">
                  <Text style={{ color: 'var(--gray-12)' }} size={{ initial: '1', sm: '2' }}>
                    {label}
                  </Text>
                </Flex>
              )}
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}
