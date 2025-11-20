'use client'

import { Newsletter } from '@/payload-types'
import { Card } from '../UI/RadixComponents/Card'
import { Box, Flex, Grid, IconButton, Select, Tooltip } from '@radix-ui/themes'
import { Text } from '../UI/RadixComponents/Typography/Text'
import { Link } from '../UI/RadixComponents/Typography/Link'
import { DownloadIcon } from 'lucide-react'
import { formatDateTime } from '@/utilities/formatDateTime'
import { useState } from 'react'
import { Heading } from '../UI/RadixComponents/Typography/Heading'

export const NewsletterArchive: React.FC<{ newsletters: Newsletter[] }> = (props) => {
  const { newsletters } = props

  const [year, setYear] = useState<number>(2025)

  const handleYearChange = (year: string) => {
    const convertedYear = Number(year)
    setYear(convertedYear)
  }

  const years = [
    ...new Set(
      newsletters.map((newsletter) => {
        return newsletter.yearOfRelease
      }),
    ),
  ]

  years.sort((a, b) => b - a)

  const filtered = newsletters.filter((newsletter) => {
    return newsletter.yearOfRelease === year
  })

  return (
    <Card size="4">
      <Flex direction="column" gap="5">
        <Flex justify="end">
          <Select.Root size="3" onValueChange={handleYearChange} defaultValue="2025">
            <Select.Trigger />
            <Select.Content>
              {years.map((year) => (
                <Select.Item key={year} value={`${year}`}>
                  {year}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </Flex>

        {filtered.map((newsletter, index) => {
          let filesize: number = 0

          if (newsletter.filesize) {
            filesize = Math.round(newsletter.filesize / 10485.76) / 100
          }

          return (
            <Grid
              columns={{ initial: '3', md: '5' }}
              gap="2"
              align="center"
              px="1"
              key={newsletter.id || index}
            >
              <Flex gridArea={{ initial: '1 / 3 / 2 / 4', md: '1 / 5 / 2 / 6' }} justify="end">
                {newsletter.url && (
                  <Tooltip content="Download">
                    <Link href={newsletter.url} newTab>
                      <IconButton variant="soft" style={{ cursor: 'pointer' }}>
                        <DownloadIcon size={20} />
                      </IconButton>
                    </Link>
                  </Tooltip>
                )}
              </Flex>

              <Box gridArea={{ initial: '1 / 1 / 2 / 3', md: '1 / 1 / 2 / 2' }}>
                <Heading as="h6" weight={{ initial: 'regular', xs: 'medium' }}>
                  {newsletter.title}
                </Heading>
              </Box>

              <Flex
                direction="column"
                gap="1"
                gridArea={{ initial: '2 / 1 / 3 / 2', md: '1 / 2 / 2 / 3' }}
                display={{ initial: 'none', sm: 'flex' }}
              >
                <Text weight="medium">Size</Text>
                {newsletter.filesize && <Text color="gray">{`${filesize} MB`}</Text>}
              </Flex>

              <Flex
                direction="column"
                gap="1"
                gridArea={{ initial: '2 / 1 / 3 / 2', sm: '2 / 2 / 3 / 3', md: '1 / 3 / 2 / 4' }}
                display={{ initial: 'none', xs: 'flex' }}
              >
                <Text weight="medium" align={{ initial: 'left', sm: 'center', md: 'left' }}>
                  Year
                </Text>
                <Text color="gray" align={{ initial: 'left', sm: 'center', md: 'left' }}>
                  {newsletter.yearOfRelease}
                </Text>
              </Flex>

              <Flex
                direction="column"
                gap="1"
                gridArea={{ initial: '2 / 3 / 3 / 4', md: '1 / 4 / 2 / 5' }}
                display={{ initial: 'none', xs: 'flex' }}
              >
                <Text weight="medium" align={{ initial: 'right', md: 'left' }}>
                  Re-Issued
                </Text>
                {newsletter.reissueDate ? (
                  <Text color="gray" align={{ initial: 'right', md: 'left' }}>
                    {formatDateTime(newsletter.reissueDate)?.displayDate}
                  </Text>
                ) : (
                  <Text color="gray" align={{ initial: 'right', md: 'left' }}>
                    N/A
                  </Text>
                )}
              </Flex>
            </Grid>
          )
        })}
      </Flex>
    </Card>
  )
}
