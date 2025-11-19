import { Box, BoxProps } from '@radix-ui/themes'
import React from 'react'

export const Article: React.FC<BoxProps> = (props) => {
  const { children } = props

  return (
    <Box asChild {...props}>
      <article>{children}</article>
    </Box>
  )
}
