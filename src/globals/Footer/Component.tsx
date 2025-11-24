import React from 'react'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Flex } from '@radix-ui/themes'
import { Link } from '@/components/UI/RadixComponents/Typography/Links'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Text } from '@/components/UI/RadixComponents/Typography/Text'
import RichText from '@/components/RichText'
import { Heading } from '@/components/UI/RadixComponents/Typography/Heading'
import { SocialMediaIcon } from '@/components/UI/SocialMediaIcon'
import { getApolloServerClient } from '@/graphql/apolloClient'
import { GET_FOOTER } from '@/graphql/queries/globals/footer'

export async function Footer() {
  const client = getApolloServerClient()
  const footer = await client.query({ query: GET_FOOTER })

  const { data } = footer

  const footerData: Footer = data.Footer

  const navHeading = footerData?.navHeading
  const navItems = footerData?.navItems || []
  const logo = footerData?.logo
  const copyright = footerData?.copyrightText
  const text = footerData?.richText
  const socialMedia = footerData?.socialMedia || []

  return (
    <Container asChild style={{ boxShadow: 'var(--shadow-4)' }}>
      <footer>
        <Flex direction="column" align="center" gap="5" py="5">
          <Flex
            gap="5"
            direction={{ initial: 'column', md: 'row' }}
            justify={{ md: 'between' }}
            align={{ initial: 'start', md: 'center' }}
            width="100%"
          >
            <Flex direction="column" gap={{ initial: '3', md: '4' }}>
              <Link href="/">
                <Flex align="center">
                  {logo && typeof logo === 'object' && (
                    <Logo imageClassName="h-[3rem] sm:h-[4rem] w-auto" {...logo} />
                  )}
                </Flex>
              </Link>
              {text && <RichText data={text} />}
              {Array.isArray(socialMedia) && socialMedia.length > 0 && (
                <Flex gap="4">
                  {socialMedia.map((media, index) => (
                    <SocialMediaIcon key={media.id || index} {...media} />
                  ))}
                </Flex>
              )}
            </Flex>
            <Flex direction="column" gap="2" align={{ md: 'end' }}>
              {navHeading && (
                <Heading
                  as="h6"
                  weight="regular"
                  color="gray"
                  style={{ textTransform: 'uppercase' }}
                >
                  {navHeading}
                </Heading>
              )}
              <Flex asChild direction="column" gap="2" align={{ md: 'end' }} pr={{ md: '1' }}>
                <nav>
                  {navItems.map(({ link }, i) => {
                    return <CMSLink key={i} {...link} />
                  })}
                </nav>
              </Flex>
            </Flex>
          </Flex>
          {copyright && <Text>{copyright}</Text>}
        </Flex>
      </footer>
    </Container>
  )
}
