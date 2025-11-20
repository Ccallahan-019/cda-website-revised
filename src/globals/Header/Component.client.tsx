'use client'

import React, { useEffect, useRef, useState } from 'react'

import type { Header as HeaderProps } from '@/payload-types'
import { Box, Flex, IconButton } from '@radix-ui/themes'
import { Link } from '@/components/UI/RadixComponents/Typography/Link'
import { HeaderNav } from './Nav'
import { Logo } from '@/components/Logo/Logo'

import { ThemeToggle } from '@/providers/Theme/ThemeSelector'
import SideNav from './SideNav'
import { useMediaQuery } from '@/utilities/hooks/useMediaQuery'
import { useClickOutside } from '@/utilities/hooks/useClickOutside'
import { MenuIcon } from 'lucide-react'
import { CMSLink } from '@/components/Link'
import { headerHeight } from '@/cssVariables'

export const HeaderClient: React.FC<HeaderProps> = (props) => {
  const { logo, navItems, navButtons } = props

  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)
  const [isSideNavVisible, setIsSideNavVisible] = useState(false)
  const isLarge = useMediaQuery('(min-width: 1280px)')
  const sideNavRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = (value: string, subNav: boolean) => {
    setHoveredItem(value)
    if (subNav) {
      setIsDropdownVisible(true)
    }
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
    setIsDropdownVisible(false)
  }

  const handleLinkClick = () => {
    setIsDropdownVisible(false)
    setIsSideNavVisible(false)
  }

  const toggleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible)
  }

  useClickOutside(sideNavRef, () => {
    setIsSideNavVisible(false)
  })

  useEffect(() => {
    if (isLarge) {
      setIsSideNavVisible(false)
    }
  }, [isLarge])

  return (
    <>
      <Box
        position="fixed"
        top="0"
        px={{ initial: '4', xs: '5' }}
        style={{
          backgroundColor: 'var(--color-panel-solid)',
          transition: 'background-color 0.2s ease',
          zIndex: 1000,
          insetInline: 0,
          boxShadow: 'var(--shadow-3)',
        }}
      >
        <header>
          {/* Modify headerAdjustment in cssVariables.js if header size changes */}
          <Flex justify="between" align="center" height={headerHeight}>
            <Box>
              <Link href="/">
                {logo && typeof logo === 'object' && (
                  <Logo imageClassName="h-[2.5rem] sm:h-[3rem] w-auto" {...logo} />
                )}
              </Link>
            </Box>

            <HeaderNav
              data={props}
              hoveredItem={hoveredItem}
              isDropdownVisible={isDropdownVisible}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onLinkClick={handleLinkClick}
            />

            <Flex gap={{ initial: '3', xs: '4' }} align="center">
              {Array.isArray(navButtons) &&
                navButtons.length > 0 &&
                navButtons.map((button, index) => {
                  const { link } = button
                  return <CMSLink key={index} {...link} />
                })}
              <ThemeToggle />
              <Box ref={sideNavRef} display={{ initial: 'block', lg: 'none' }}>
                <IconButton onClick={toggleSideNav} variant="soft" size="2">
                  <MenuIcon size={22} strokeWidth={2.25} />
                </IconButton>
                <Box>
                  {isSideNavVisible && (
                    <SideNav onLinkClick={handleLinkClick} navItems={navItems} />
                  )}
                </Box>
              </Box>
            </Flex>
          </Flex>
        </header>
      </Box>
      <Box
        position="fixed"
        top="0"
        left="0"
        height="100%"
        width="100%"
        hidden={isDropdownVisible || isSideNavVisible ? false : true}
        style={{ backgroundColor: 'var(--color-overlay)', zIndex: 900 }}
      />
    </>
  )
}
