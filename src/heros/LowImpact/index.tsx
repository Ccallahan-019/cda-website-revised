import React from 'react'

import RichText from '@/components/RichText'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Flex } from '@radix-ui/themes'
import { Section } from '@/components/UI/RadixComponents/Layout/Section'
import { LowImpactHero as LowImpactHeroProps, Page } from '@/payload-types'
import { headerHeight } from '@/cssVariables'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const LowImpactHero: React.FC<{ breadcrumbs: Page['breadcrumbs'] } & LowImpactHeroProps> = ({
  richText,
  breadcrumbs,
}) => {
  return (
    <Section>
      {/* adjust padding if header size changes */}
      <Container mt={headerHeight}>
        <Flex direction="column" gap={{ initial: '4', xs: '5' }}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Box maxWidth="56rem">
            {richText && <RichText data={richText} enableGutter={false} />}
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}
