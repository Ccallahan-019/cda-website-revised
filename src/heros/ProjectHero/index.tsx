import React from 'react'

import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Flex } from '@radix-ui/themes'
import { Section } from '@/components/UI/RadixComponents/Layout/Section'
import { Project } from '@/payload-types'
import { Heading } from '@/components/UI/RadixComponents/Typography/Heading'
import { Text } from '@/components/UI/RadixComponents/Typography/Text'
import { formatDateTime } from '@/utilities/formatDateTime'
import { headerHeight } from '@/cssVariables'

export const ProjectHero: React.FC<{ project: Project }> = ({ project }) => {
  const { name, type, updatedAt } = project

  return (
    <Section>
      {/* adjust padding if header size changes */}
      <Container mt={headerHeight}>
        <Flex direction="column" gap="4" maxWidth="48rem">
          <Heading
            as="h6"
            weight="regular"
            style={{ textTransform: 'uppercase' }}
          >{`${type} Project`}</Heading>
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
