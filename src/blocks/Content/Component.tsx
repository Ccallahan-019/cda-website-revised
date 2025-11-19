import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Grid } from '@radix-ui/themes'

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
      <Grid columns={{ initial: '4', lg: '12' }} gapX="9" gapY="5">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col

            return (
              <Box
                gridColumn={{
                  initial: 'span 4',
                  md: size !== 'full' ? 'span 2' : undefined,
                  lg: `span ${colsSpanClasses[size!]}`,
                }}
                key={index}
              >
                {richText && <RichText data={richText} enableGutter={false} />}

                {enableLink && <CMSLink {...link} />}
              </Box>
            )
          })}
      </Grid>
    </Container>
  )
}
