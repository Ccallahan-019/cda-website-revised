'use client'

import { Button, ButtonProps, Flex } from '@radix-ui/themes'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowUpFromDotIcon } from 'lucide-react'
import { Text } from '../RadixComponents/Typography/Text'

export const ScrollToTopButton: React.FC<{ threshold?: number } & ButtonProps> = ({
  threshold = 250,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > threshold) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  })

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="scrollButton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ overflow: 'visible' }}
        >
          <Button onClick={scrollToTop} {...props}>
            <Flex gap="1" align="center">
              <ArrowUpFromDotIcon size={20} strokeWidth="2.5px" />
              <Text>Scroll to Top</Text>
            </Flex>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
