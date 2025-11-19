import { SideBarBlock } from '@/payload-types'
import { Flex } from '@radix-ui/themes'
import { motion } from 'framer-motion'
import React, { Dispatch, SetStateAction } from 'react'
import { Heading } from '../UI/RadixComponents/Typography/Heading'

type Props = {
  sections: SideBarBlock['sections']
  alignment: SideBarBlock['alignment']
  activeSection?: SideBarBlock['sections'][number]
  onClick: Dispatch<SetStateAction<SideBarBlock['sections'][number] | undefined>>
}

export const SideBar: React.FC<Props> = (props) => {
  const { sections, alignment, activeSection, onClick } = props

  const left = alignment === 'left'
  const translate = left ? 5 : -5

  return (
    <Flex asChild height="100%" direction="column" justify="center">
      <aside>
        <Flex
          direction="column"
          gap="8"
          align={left ? 'end' : 'start'}
          style={{ textAlign: left ? 'right' : 'left' }}
        >
          {sections &&
            sections.length > 0 &&
            sections.map((section, index) => (
              <motion.div
                key={section.id || index}
                style={{
                  paddingRight: left ? 'var(--space-8)' : 0,
                  paddingLeft: left ? 0 : 'var(--space-8)',
                  cursor: section !== activeSection ? 'pointer' : 'auto',
                }}
                onClick={() => {
                  onClick(section)
                }}
                animate={{
                  opacity: section === activeSection ? 1 : 0.7,
                  scale: section === activeSection ? 1.1 : 1,
                  translateX: section === activeSection ? translate : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <Flex align="center">
                  <Heading size="7">{section.label}</Heading>
                </Flex>
              </motion.div>
            ))}
        </Flex>
      </aside>
    </Flex>
  )
}
