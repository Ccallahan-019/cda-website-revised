'use client'

import React from 'react'

import type { StatsBlock as StatsBlockProps } from '@/payload-types'
import { motion } from 'framer-motion'
import { Stat } from '@/components/Stat'
import RichText from '@/components/RichText'
import { Container } from '@/components/UI/RadixComponents/Layout/Container'
import { Box, Card, Flex, Separator } from '@radix-ui/themes'

export const StatsBlock: React.FC<StatsBlockProps> = (props) => {
  const { richText, stats } = props

  return (
    <Container>
      <Flex direction="column" gap="4">
        {richText && <RichText data={richText} />}
        <Box p="1" position="relative" style={{ borderRadius: 'var(--radius-5)' }}>
          <Box
            position="absolute"
            overflow="hidden"
            top="0"
            left="0"
            height="100%"
            width="100%"
            style={{ borderRadius: 'var(--radius-5)' }}
          >
            <motion.div
              style={{
                backgroundColor: 'var(--accent-11)',
                position: 'absolute',
                left: 0,
                top: '25%',
                height: '50%',
                width: '50%',
                filter: 'blur(25px)',
                transformOrigin: '100% 50%',
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            ></motion.div>
          </Box>

          <Card size="4" style={{ boxShadow: 'var(--shadow-5)' }}>
            <Flex
              direction={{ initial: 'column', sm: 'row' }}
              overflow="hidden"
              align="stretch"
              gap="3"
            >
              {stats.map((stat, index) => {
                return (
                  <Flex
                    direction={{ initial: 'column', sm: 'row' }}
                    key={stat.id || index}
                    flexGrow="1"
                    gap="3"
                  >
                    <Stat {...stat} />
                    {index !== stats.length - 1 && (
                      <Separator
                        orientation={{ initial: 'horizontal', sm: 'vertical' }}
                        size="4"
                        color="purple"
                      />
                    )}
                  </Flex>
                )
              })}
            </Flex>
          </Card>
        </Box>
      </Flex>
    </Container>
  )
}
