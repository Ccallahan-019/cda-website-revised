'use client'

import { Court, Diocese } from '@/payload-types'
import { RotatePresence } from '../UI/Animations/RotatePresence'
import { useState } from 'react'
import { AnimateDropdown } from '../UI/Animations/AnimateDropdown'
import RichText from '../RichText'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { Box, Flex, Separator } from '@radix-ui/themes'
import { Text } from '../UI/RadixComponents/Typography/Text'
import { Heading } from '../UI/RadixComponents/Typography/Heading'
import { CMSLink } from '../Link'
import { CourtTable } from '../CourtTable'

export const AccordianDropdownClient: React.FC<{ courts?: Court[] } & Diocese> = (props) => {
  const { name, location, website, phoneNumber, info, courts } = props

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Box>
      <Flex
        py={{ initial: '5', xs: '6' }}
        px={{ initial: '3', xs: '4' }}
        align="center"
        justify="between"
        width="100%"
        style={{ cursor: 'pointer', backgroundColor: 'var(--accent-3)' }}
        asChild
      >
        <button onClick={toggleExpanded}>
          <Heading as="h4" align="left">
            {name}
          </Heading>
          <Text as="span">
            <RotatePresence
              firstIcon={<PlusIcon size={24} />}
              secondIcon={<MinusIcon size={24} />}
              clicked={isExpanded}
            />
          </Text>
        </button>
      </Flex>

      <AnimateDropdown isExpanded={isExpanded}>
        <Flex p={{ initial: '4', sm: '5' }} direction="column" gap="5">
          <Flex
            direction={{ initial: 'column', md: 'row' }}
            gap={{ initial: '4', sm: '5', md: '6' }}
          >
            <Flex direction="column" gap="3">
              {location && (
                <Flex direction="column" width="16rem">
                  {location.address && <Text>{location.address}</Text>}
                  {location.city && location.state && (
                    <Text>{`${location.city}, ${location.state}`}</Text>
                  )}
                  {location.zipcode && <Text>{location.zipcode}</Text>}
                </Flex>
              )}
              <Text>{phoneNumber}</Text>
              {website.url && (
                <CMSLink {...website}>{website.url.replace(/^https?:\/\//, '')}</CMSLink>
              )}
            </Flex>
            <Box>
              <Separator size="4" orientation={{ initial: 'horizontal', md: 'vertical' }} />
            </Box>
            <Box>
              {info ? (
                <RichText data={info} />
              ) : (
                <Text>No additional information available. Check back soon!</Text>
              )}
            </Box>
          </Flex>
          {courts && courts.length > 0 && (
            <Flex direction="column" gap="4">
              <Heading as="h5">Diocese Courts</Heading>
              <CourtTable showDiocese={false} courts={courts} />
            </Flex>
          )}
        </Flex>
      </AnimateDropdown>
    </Box>
  )
}
