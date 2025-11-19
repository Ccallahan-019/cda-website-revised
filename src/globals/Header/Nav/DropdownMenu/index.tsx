import { Header } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Box, Flex, Grid } from '@radix-ui/themes'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Text } from '@/components/UI/RadixComponents/Typography/Text'
import { Heading } from '@/components/UI/RadixComponents/Typography/Heading'

type Props = {
  navItem: NonNullable<Header['navItems']>[number]
  onLinkClick: () => void
}

export const DropdownMenu: React.FC<Props> = ({ navItem, onLinkClick }) => {
  const { subNav, description } = navItem

  return (
    <Box py="5" style={{ backgroundColor: 'var(--color-panel-solid)' }}>
      <Container>
        <Grid align="start" columns="12" gapX="6">
          {description && (
            <Box gridColumn="span 3">
              <Text as="p">{description}</Text>
            </Box>
          )}

          {Array.isArray(subNav) &&
            subNav.length > 0 &&
            subNav.map((nav, navIndex) => (
              <Box key={navIndex} gridColumn={description ? 'span 3' : 'span 4'}>
                <Heading
                  as="h6"
                  weight="regular"
                  color="gray"
                  style={{ textTransform: 'uppercase' }}
                >
                  {nav.label}
                </Heading>
                <Flex asChild direction="column" mt="2" gap="2">
                  <ul>
                    {Array.isArray(nav.links) &&
                      nav.links.length > 0 &&
                      nav.links.map((item, index) => (
                        <li key={index}>
                          {typeof item === 'object' && (
                            <CMSLink {...item.link} onClick={onLinkClick} />
                          )}
                        </li>
                      ))}
                  </ul>
                </Flex>
              </Box>
            ))}
        </Grid>
      </Container>
    </Box>
  )
}
