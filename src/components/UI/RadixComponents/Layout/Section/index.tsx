import { Section as RadixSection, SectionProps } from '@radix-ui/themes'
import React from 'react'

export const Section: React.FC<SectionProps> = (props) => {
  const { size } = props

  return <RadixSection size={size ? size : { initial: '1', sm: '2' }} {...props} />
}
