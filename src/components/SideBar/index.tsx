import { SideBarBlock } from '@/payload-types'
import { Flex } from '@radix-ui/themes'
import { motion } from 'framer-motion'
import { Heading } from '../UI/RadixComponents/Typography/Heading'

type Props = {
  sections: SideBarBlock['sections']
  alignment: SideBarBlock['alignment']
  activeSection?: SideBarBlock['sections'][number]
  onClick: (index: number) => void
  animationDuration?: number
}

export const SideBar: React.FC<Props> = (props) => {
  const { sections, alignment, activeSection, onClick, animationDuration } = props

  const left = alignment === 'left'

  return (
    <Flex asChild height="100%" direction="column" justify="center">
      <aside>
        <Flex direction="column" gap="5" align={left ? 'start' : 'end'}>
          {sections &&
            sections.length > 0 &&
            sections.map((section, index) => (
              <motion.div
                key={section.id || index}
                style={{
                  cursor: section !== activeSection ? 'pointer' : 'auto',
                }}
                onClick={() => {
                  onClick(index)
                }}
                onHoverStart={() => onClick(index)}
                animate={{
                  opacity: section === activeSection ? 1 : 0.3,
                }}
                transition={{ duration: animationDuration ? animationDuration : 0.5 }}
              >
                <Flex align="center">
                  <Heading align={left ? 'left' : 'right'} as="h1">
                    {section.label}
                  </Heading>
                </Flex>
              </motion.div>
            ))}
        </Flex>
      </aside>
    </Flex>
  )
}
