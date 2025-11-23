import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Flex } from '@radix-ui/themes'
import { Card } from '@/components/UI/RadixComponents/Card'

type Props = {
  enableGutter?: boolean
  ctaLinks?: CTABlockProps['links']
} & CTABlockProps

export const CallToActionBlock: React.FC<Props> = ({ ctaLinks, richText, enableGutter = true }) => {
  const component = (
    <Card size={{ md: '3' }}>
      <Flex
        direction={{ initial: 'column', sm: 'row' }}
        justify={{ sm: 'between' }}
        align={{ sm: 'center' }}
        gap="3"
      >
        <Flex align="center">{richText && <RichText data={richText} />}</Flex>
        <Flex direction="column" gap="4" flexShrink="0">
          {(ctaLinks || []).map(({ link }, i) => {
            return <CMSLink key={i} size="2" {...link} />
          })}
        </Flex>
      </Flex>
    </Card>
  )

  return <>{enableGutter ? <Container>{component}</Container> : <Box>{component}</Box>}</>
}
