import React from 'react'

import RichText from '@/components/RichText'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box } from '@radix-ui/themes'
import { Section } from '@/components/UI/RadixComponents/Layout/Section'
import { LowImpactHero as LowImpactHeroProps } from '@/payload-types'
import { headerHeight } from '@/cssVariables'

export const LowImpactHero: React.FC<LowImpactHeroProps> = ({ richText }) => {
  return (
    <Section>
      {/* adjust padding if header size changes */}
      <Container mt={headerHeight} pt={{ initial: '2', sm: '3', md: '4', lg: '5' }}>
        <Box maxWidth="56rem">{richText && <RichText data={richText} enableGutter={false} />}</Box>
      </Container>
    </Section>
  )
}
