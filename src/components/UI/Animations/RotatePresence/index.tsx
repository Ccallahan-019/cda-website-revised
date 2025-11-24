import { motion, AnimatePresence } from 'framer-motion'
import { JSX } from 'react'

type Props = {
  clicked: boolean
  onClick?: () => void
  firstIcon: JSX.Element
  secondIcon: JSX.Element
}

export const RotatePresence: React.FC<Props> = ({ clicked, onClick, firstIcon, secondIcon }) => {
  return (
    <AnimatePresence initial={false} mode="popLayout">
      {!clicked ? (
        <motion.div
          key="first"
          onClick={onClick}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotateZ: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {firstIcon}
        </motion.div>
      ) : (
        <motion.div
          key="second"
          onClick={onClick}
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotateZ: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {secondIcon}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
