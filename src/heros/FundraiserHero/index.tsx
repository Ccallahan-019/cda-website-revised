import React from 'react'

import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Flex } from '@radix-ui/themes'
import { Section } from '@/components/UI/RadixComponents/Layout/Section'
import { Fundraiser } from '@/payload-types'
import { Heading } from '@/components/UI/RadixComponents/Typography/Heading'
import { Text } from '@/components/UI/RadixComponents/Typography/Text'
import { formatDateTime } from '@/utilities/formatDateTime'
import { headerHeight } from '@/cssVariables'

export const FundraiserHero: React.FC<{ fundraiser: Fundraiser }> = ({ fundraiser }) => {
  const { name, type, updatedAt } = fundraiser

  return (
    <Section>
      <Container mt={headerHeight}>
        <Flex direction="column" gap="4" maxWidth="48rem">
          <Heading
            as="h6"
            weight="regular"
            style={{ textTransform: 'uppercase' }}
          >{`${type} Fundraiser`}</Heading>
          <Heading as="h1">{name}</Heading>
          {formatDateTime(updatedAt) && (
            <Flex direction="column" gap="1">
              <Text>Last Updated</Text>
              <Text>{formatDateTime(updatedAt)?.displayDate}</Text>
            </Flex>
          )}
        </Flex>
      </Container>
    </Section>
  )
}
