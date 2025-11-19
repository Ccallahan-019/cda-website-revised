import { NewsPost as NewsPostProps } from '@/payload-types'
import { formatDateTime } from '@/utilities/formatDateTime'
import { CMSLink } from '../Link'
import { Box, Flex, Grid } from '@radix-ui/themes'
import { Text } from '../UI/RadixComponents/Typography/Text'
import { Heading } from '../UI/RadixComponents/Typography/Heading'
import { MoveRightIcon } from 'lucide-react'

export const NewsItem: React.FC<NewsPostProps> = ({ updatedAt, title, description, links }) => {
  return (
    <Grid
      columns={{ initial: '1', md: '8' }}
      gap="6"
      py="7"
      style={{ borderTop: '2px solid var(--gray-7)' }}
    >
      <Box gridColumn={{ md: 'span 2' }}>
        <Text color="gray">{formatDateTime(updatedAt)?.displayDate}</Text>
      </Box>

      <Flex direction="column" gap="2" gridColumn={{ md: 'span 4' }}>
        <Heading as="h5" weight="medium">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Flex>

      <Flex gridColumn={{ md: 'span 2' }} justify={{ md: 'end' }}>
        {Array.isArray(links) &&
          links.length > 0 &&
          links.map(({ link }, index) => (
            <CMSLink key={index} {...link} size="4">
              <MoveRightIcon size={20} />
            </CMSLink>
          ))}
      </Flex>
    </Grid>
  )
}
