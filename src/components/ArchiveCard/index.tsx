import Link from 'next/link'

import type { Event } from '@/payload-types'

import { Media } from '@/components/Media'

import { Card } from '../UI/RadixComponents/Card'
import { AspectRatio, Flex, Inset } from '@radix-ui/themes'
import { Text } from '../UI/RadixComponents/Typography/Text'
import { Heading } from '../UI/RadixComponents/Typography/Heading'

export type CardData = Pick<Event, 'slug' | 'type' | 'meta' | 'name'>

export const ArchiveCard: React.FC<{
  doc: CardData
  relationTo?: 'events' | 'fundraisers' | 'projects' | 'charities' | null
  name?: string
}> = (props) => {
  const { doc, relationTo, name: nameFromProps } = props

  const { slug, type, meta, name } = doc || {}
  const { description, image: metaImage } = meta || {}

  const titleToUse = nameFromProps || name
  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/${relationTo}/${slug}`

  return (
    <Link href={href}>
      <Flex width="100%" height="100%">
        <Card>
          <Inset side="top" pb="current" clip="padding-box">
            {metaImage && typeof metaImage !== 'string' && (
              <AspectRatio ratio={16 / 9} style={{ overflow: 'hidden' }}>
                <Media
                  className="flex h-full w-full items-center"
                  imgClassName="h-full w-full object-cover"
                  resource={metaImage}
                  size="33vw"
                />
              </AspectRatio>
            )}
          </Inset>
          <Flex direction="column" gap="2" pt="1">
            {type && relationTo && (
              <Text size="2" color="gray" style={{ textTransform: 'uppercase' }}>
                {type} {relationTo}
              </Text>
            )}
            {titleToUse && (
              <Heading as="h4" removeColor>
                {titleToUse}
              </Heading>
            )}
            {description && <>{description && <Text>{sanitizedDescription}</Text>}</>}
          </Flex>
        </Card>
      </Flex>
    </Link>
  )
}
