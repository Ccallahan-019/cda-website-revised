import type { Header as HeaderProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Box, Flex } from '@radix-ui/themes'
import { DropdownMenu } from './DropdownMenu'

type Props = {
  data: HeaderProps
  hoveredItem: string | null
  isDropdownVisible: boolean
  onMouseEnter: (value: string, subNav: boolean) => void
  onMouseLeave: () => void
  onLinkClick: () => void
}

export const HeaderNav: React.FC<Props> = ({
  data,
  hoveredItem,
  isDropdownVisible,
  onMouseEnter,
  onMouseLeave,
  onLinkClick,
}) => {
  const navItems = data?.navItems || []

  return (
    <Flex asChild display={{ initial: 'none', lg: 'flex' }} align="center" gap="5" height="100%">
      <nav>
        {navItems.map((navItem, i) => {
          const { link, subNav } = navItem
          const hasSubNav = Array.isArray(subNav) && subNav.length > 0
          return (
            <Box key={i} height="100%">
              <Box
                height="100%"
                onMouseEnter={() => {
                  onMouseEnter(link.label, hasSubNav)
                }}
                onMouseLeave={onMouseLeave}
              >
                <Flex height="100%" align="center" key={i}>
                  <CMSLink weight="regular" {...link} />
                </Flex>

                <Box position="absolute" top="100%" left="0" width="100%">
                  {Array.isArray(subNav) &&
                    subNav.length > 0 &&
                    hoveredItem === link.label &&
                    isDropdownVisible && (
                      <DropdownMenu navItem={navItem} onLinkClick={onLinkClick} />
                    )}
                </Box>
              </Box>
            </Box>
          )
        })}
      </nav>
    </Flex>
  )
}
