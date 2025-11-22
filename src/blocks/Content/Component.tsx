import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Flex, Grid } from '@radix-ui/themes'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <Container>
      <Grid columns={{ initial: '4', lg: '12' }} gapX="9" gapY="5" align="stretch">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col

            return (
              <Box
                key={index}
                gridColumn={{
                  initial: 'span 4',
                  md: size !== 'full' ? 'span 2' : undefined,
                  lg: `span ${colsSpanClasses[size!]}`,
                }}
              >
                <Flex direction="column" gap="5" align="start" height="100%">
                  {richText && <RichText data={richText} enableGutter={false} />}

                  {enableLink && (
                    <Box mt="auto">
                      <CMSLink {...link} />
                    </Box>
                  )}
                </Flex>
              </Box>
            )
          })}
      </Grid>
    </Container>
  )
}
