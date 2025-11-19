'use client'

import React, { useState } from 'react'

import type { SideBarBlock as SideBarBlockProps } from '@/payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import { SideBar } from '@/components/SideBar'
import RichText from '@/components/RichText'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Card, Flex, Grid } from '@radix-ui/themes'

export const SideBarBlock: React.FC<SideBarBlockProps> = (props) => {
  const { sections, alignment } = props

  const [activeSection, setActiveSection] = useState(sections[0])

  const left = alignment === 'left'

  return (
    <Container>
      <Card size="4" style={{ position: 'relative' }}>
        <Box
          position="absolute"
          inset="0"
          style={{
            background: 'linear-gradient(to right, var(--accent-5), var(--accent-3))',
          }}
        />
        <Box style={{ zIndex: 1 }}>
          <Grid display={{ initial: 'none', md: 'grid' }} columns="12" gap="6" minHeight="50vh">
            <Flex
              height="100%"
              align="center"
              gridColumn={left ? '4 / span 9' : 'span 9'}
              style={{ zIndex: 1 }}
            >
              {activeSection && (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeSection.id || activeSection.label}
                    initial={{ y: -15, x: -20, opacity: 0 }}
                    animate={{ y: 0, x: 0, opacity: 1 }}
                    exit={{ y: 15, x: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeSection.richText && <RichText data={activeSection.richText} />}
                  </motion.div>
                </AnimatePresence>
              )}
            </Flex>

            <Box gridColumn={left ? '1 / span 3' : '10 / span 3'} gridRow="1 / span 1">
              <SideBar
                alignment={alignment}
                sections={sections}
                onClick={setActiveSection}
                activeSection={activeSection}
              />
            </Box>
          </Grid>
          <Flex direction="column" gap="6" display={{ initial: 'flex', md: 'none' }}>
            {sections &&
              sections.length > 0 &&
              sections.map((section, index) => (
                <Box key={section.id || index} style={{ zIndex: 1 }}>
                  {section.richText && <RichText data={section.richText} />}
                </Box>
              ))}
          </Flex>
        </Box>
      </Card>
    </Container>
  )
}
