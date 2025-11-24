'use client'

import React, { useLayoutEffect, useRef, useState } from 'react'

import type { SideBarBlock as SideBarBlockProps } from '@/payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import { SideBar } from '@/components/SideBar'
import RichText from '@/components/RichText'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Flex, Grid } from '@radix-ui/themes'

export const SideBarBlock: React.FC<SideBarBlockProps> = (props) => {
  const { sections, alignment } = props

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  const [maxHeight, setMaxHeight] = useState<number | null>(null)
  const measureRef = useRef<HTMLDivElement | null>(null)

  // Measure all sections and update whenever layout changes
  useLayoutEffect(() => {
    if (!measureRef.current) return

    const measure = () => {
      if (!measureRef.current) return

      const children = Array.from(measureRef.current.children) as HTMLDivElement[]

      if (!children.length) return

      const tallest = children.reduce((max, el) => {
        const h = el.offsetHeight
        return h > max ? h : max
      }, 0)

      setMaxHeight(tallest)
    }

    // Initial measure
    measure()

    // Re-measure when the measuring container resizes
    const ro = new ResizeObserver(() => {
      measure()
    })

    ro.observe(measureRef.current)

    return () => {
      ro.disconnect()
    }
  }, [sections]) // if sections change, re-run the whole setup

  const variants = {
    enter: (direction: 1 | -1) => ({
      y: direction === 1 ? 25 : -25,
      x: direction === 1 ? 5 : -5,
      opacity: 0,
    }),
    center: {
      y: 0,
      x: 0,
      opacity: 1,
    },
    exit: (direction: 1 | -1) => ({
      y: direction === 1 ? -25 : 25,
      x: direction === 1 ? -5 : 5,
      opacity: 0,
    }),
  }

  const activeSection = sections[activeIndex]

  const handleSectionClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const left = alignment === 'left'
  const animationDuration = 0.4

  return (
    <Container>
      <Grid display={{ initial: 'none', md: 'grid' }} columns="12" px="2">
        <Flex position="relative" gridColumn={left ? '6 / span 7' : 'span 7'}>
          {/* Hidden container used for measuring content */}
          <Box
            ref={measureRef}
            style={{
              position: 'absolute',
              visibility: 'hidden',
              pointerEvents: 'none',
              inset: 0,
              overflow: 'visible',
            }}
          >
            {sections.map((section, index) => (
              <Box key={section.id || index}>
                {section.richText && <RichText data={section.richText} />}
              </Box>
            ))}
          </Box>

          <Flex
            align="center"
            // numeric value is fine, React will add px
            style={{ minHeight: maxHeight ?? undefined }}
          >
            {activeSection && (
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeSection.id || activeSection.label}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: animationDuration }}
                >
                  {activeSection.richText && <RichText data={activeSection.richText} />}
                </motion.div>
              </AnimatePresence>
            )}
          </Flex>
        </Flex>

        <Box gridColumn={left ? 'span 4' : '9 / span 4'} gridRow="1 / span 1">
          <SideBar
            alignment={alignment}
            sections={sections}
            onClick={handleSectionClick}
            activeSection={activeSection}
            animationDuration={animationDuration * 2}
          />
        </Box>
      </Grid>

      <Flex direction="column" gap="6" display={{ initial: 'flex', md: 'none' }}>
        {sections?.map((section, index) => (
          <Box key={section.id || index} style={{ zIndex: 1 }}>
            {section.richText && <RichText data={section.richText} />}
          </Box>
        ))}
      </Flex>
    </Container>
  )
}
