'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Flex } from '@radix-ui/themes'
import { Text } from '../UI/RadixComponents/Typography/Text'
import { CheckCheckIcon } from 'lucide-react'

export const CalendarItem: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props

  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [elementHeight, setElementHeight] = useState<number | 'auto'>('auto')

  useEffect(() => {
    if (containerRef.current) {
      const { height } = containerRef.current.getBoundingClientRect()
      setElementHeight(height)
    }
  }, [isHovered])

  return (
    <Box
      position="relative"
      overflow="hidden"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {!isHovered ? (
          <motion.li
            key="first"
            style={{ borderRadius: 'var(--radius-2)' }}
            initial={{ y: -elementHeight }}
            animate={{ y: 0, transition: { duration: 0.4 } }}
            exit={{ y: -elementHeight, transition: { duration: 0.2 } }}
          >
            <Flex px="2" py="1" align="center" gap="3">
              <CheckCheckIcon size={20} color="var(--accent-11)" style={{ flexShrink: 0 }} />
              <Text as="span">{children}</Text>
            </Flex>
          </motion.li>
        ) : (
          <motion.li
            key="second"
            style={{ backgroundColor: 'var(--accent-11)', borderRadius: 'var(--radius-2)' }}
            initial={{ y: elementHeight }}
            animate={{ y: 0, transition: { duration: 0.4 } }}
            exit={{ y: elementHeight, transition: { duration: 0.2 } }}
          >
            <Flex px="2" py="1" align="center" gap="3">
              <CheckCheckIcon size={20} color="var(--accent-1)" style={{ flexShrink: 0 }} />
              <Text as="span" style={{ color: 'var(--accent-1)' }}>
                {children}
              </Text>
            </Flex>
          </motion.li>
        )}
      </AnimatePresence>
    </Box>
  )
}
