'use client'

import { motion } from 'framer-motion'

export const AnimateBounce: React.FC<{
  distance: number
  duration: number
  children: React.ReactNode
}> = ({ distance, duration, children }) => {
  return (
    <motion.span
      animate={{ y: [0, distance, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: ['easeOut', 'easeIn'],
        times: [0, 0.6, 1],
      }}
    >
      {children}
    </motion.span>
  )
}
