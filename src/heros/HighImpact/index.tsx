import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Section } from '@/components/UI/RadixComponents/Layout/Section'
import { Box, Flex, Grid, Theme } from '@radix-ui/themes'
import { Heading } from '@/components/UI/RadixComponents/Typography/Heading'
import { HighImpactHero as HighImpactHeroProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { headerHeight } from '@/cssVariables'

export const HighImpactHero: React.FC<HighImpactHeroProps> = ({
  links,
  media,
  logo,
  richText,
  heading,
  subHeading,
}) => {
  return (
    <Theme appearance="dark">
      <Box position="relative" mt={headerHeight}>
        <Flex
          position="absolute"
          top="0"
          left="0"
          height="100%"
          width="100%"
          justify="end"
          align="center"
          overflow="hidden"
        >
          <Media
            className="absolute inset-0"
            imgClassName="object-cover w-full h-full"
            priority
            resource={media}
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            height="100%"
            width="100%"
            style={{
              background: 'linear-gradient(to right, var(--accent-3) 70%, var(--accent-a3))',
              opacity: '85%',
            }}
          ></Box>
        </Flex>
        <Section size="2">
          <Container>
            <Flex
              position="relative"
              direction="column"
              maxWidth="40rem"
              minHeight="80vh"
              style={{ justifyContent: 'space-around' }}
            >
              <Flex align="center" gap="3" direction={{ initial: 'column', xs: 'row' }}>
                {logo && <Media priority imgClassName="h-[72px] w-auto" resource={logo} />}
                <Flex direction="column" gap="1">
                  <Heading as="h2" style={{ color: 'var(--accent-12)' }}>
                    {heading}
                  </Heading>
                  {subHeading && (
                    <Heading
                      as="h5"
                      style={{ color: 'var(--accent-12)', textTransform: 'uppercase' }}
                    >
                      {subHeading}
                    </Heading>
                  )}
                </Flex>
              </Flex>

              <Flex direction="column" gap="4">
                {richText && <RichText data={richText} />}
                <Grid columns={{ initial: '1', sm: '2' }} gap="3">
                  {Array.isArray(links) &&
                    links.length > 0 &&
                    links.map(({ link }, index) => (
                      <CMSLink key={index} {...link} size={{ initial: '3', xs: '4' }} />
                    ))}
                </Grid>
              </Flex>
            </Flex>
          </Container>
        </Section>
      </Box>
    </Theme>
  )
}
