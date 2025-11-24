'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Section } from '@/components/UI/RadixComponents/Layout/Section'
import { ScrollButton } from '@/components/UI/ScrollButton'
import { MediaRightHero as MediaRightHeroProps } from '@/payload-types'
import { Box, Flex, Grid } from '@radix-ui/themes'
import { headerHeight } from '@/cssVariables'

import { useRef } from 'react'

export const MediaRightHero: React.FC<
  { mediaRightLinks: MediaRightHeroProps['links'] } & MediaRightHeroProps
> = (props) => {
  const { media, richText, buttonType, mediaRightLinks: links } = props
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <Box ref={heroRef}>
      <Section style={{ backgroundColor: 'var(--accent-3)' }}>
        <Container mt={headerHeight}>
          <Grid columns={{ initial: '1', sm: '2' }} align="center">
            <Flex direction="column" gap="6" align="start">
              {richText && <RichText data={richText} />}

              {buttonType === 'scroll' ? (
                <ScrollButton
                  scrollRef={heroRef}
                  size="4"
                  label="Learn More"
                  color="yellow"
                  variant="surface"
                />
              ) : (
                <Grid columns={{ initial: '1', sm: '2' }} gap="3">
                  {Array.isArray(links) &&
                    links.length > 0 &&
                    links.map(({ link }, index) => <CMSLink key={index} {...link} />)}
                </Grid>
              )}
            </Flex>

            <div>
              <Media
                resource={media}
                priority
                className="w-full h-auto"
                imgClassName="w-full h-auto"
              />
            </div>
          </Grid>
        </Container>
      </Section>
    </Box>
  )
}
