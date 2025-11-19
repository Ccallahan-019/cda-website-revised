import { Flex, FlexProps } from '@radix-ui/themes'
import * as React from 'react'

export const Width: React.FC<
  {
    children: React.ReactNode
    width?: number | string
  } & FlexProps
> = ({ children, width, ...props }) => {
  return (
    <Flex direction="column" gap="1" maxWidth={width ? `${width}%` : undefined} {...props}>
      {children}
    </Flex>
  )
}
