import { motion } from 'framer-motion'
import React from 'react'

export const AnimateDropdown: React.FC<{
  children: React.ReactNode
  isExpanded: boolean
}> = ({ children, isExpanded }) => {
  return (
    <motion.div
      style={{ overflowY: 'hidden' }}
      initial={false}
      animate={{ height: isExpanded ? 'auto' : 0 }}
    >
      {children}
    </motion.div>
  )
}
