import { CMSLink } from '@/components/Link'
import { Header } from '@/payload-types'
import { Box, Flex } from '@radix-ui/themes'
import { ChevronRightIcon } from 'lucide-react'
import { useState } from 'react'
import SubMenu from './SubMenu'

type Props = {
  navItems: Header['navItems']
  onLinkClick: () => void
}

export default function SideNav({ navItems, onLinkClick }: Props) {
  const [clickedItem, setClickedItem] = useState<string | null>(null)
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false)

  return (
    <Box
      position="absolute"
      top="100%"
      left="0"
      width="100%"
      style={{ backgroundColor: 'var(--color-panel-solid)' }}
    >
      {!isSubMenuVisible && (
        <Flex asChild direction="column" style={{ borderTop: '1px solid var(--gray-6)' }}>
          <ul>
            {Array.isArray(navItems) &&
              navItems.length > 0 &&
              navItems.map((item, index) => {
                const { link, id, subNav } = item

                return (
                  <Flex asChild key={id || index} justify="between" align="center" py="3" px="6">
                    <li
                      style={{
                        borderBottom: '1px solid var(--gray-6)',
                      }}
                      onClick={
                        subNav && subNav.length > 0
                          ? () => {
                              setClickedItem(link.label)
                              setIsSubMenuVisible(true)
                            }
                          : () => {
                              setClickedItem(link.label)
                            }
                      }
                    >
                      <CMSLink
                        onClick={() => {
                          setClickedItem(link.label)
                          onLinkClick()
                        }}
                        {...link}
                      />
                      {subNav && subNav.length > 0 && <ChevronRightIcon size={24} />}
                    </li>
                  </Flex>
                )
              })}
          </ul>
        </Flex>
      )}

      {Array.isArray(navItems) &&
        navItems.length > 0 &&
        navItems.map((item, index) => (
          <div key={index}>
            {item.subNav && item.subNav.length > 0 && clickedItem === item.link.label && (
              <SubMenu
                subNav={item.subNav}
                onClick={() => {
                  setIsSubMenuVisible(false)
                  setClickedItem(null)
                }}
                onLinkClick={onLinkClick}
              />
            )}
          </div>
        ))}
    </Box>
  )
}
