'use client'

import { Box } from '@radix-ui/themes'
import { AnimatePresence, motion } from 'framer-motion'

export const AnimateDropdown: React.FC<{
  children: React.ReactNode
  isExpanded: boolean
}> = ({ children, isExpanded }) => {
  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          key="dropdown"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <Box>{children}</Box>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
