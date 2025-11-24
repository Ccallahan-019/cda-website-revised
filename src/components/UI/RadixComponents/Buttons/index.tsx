import { Button as RadixButton, ButtonProps } from '@radix-ui/themes'
import React from 'react'

export const Button: React.FC<ButtonProps> = ({ size, ...props }) => {
  return <RadixButton size={size ? size : { initial: '2', xs: '3' }} {...props} />
}

export const SecondaryButton: React.FC<Omit<ButtonProps, 'color'>> = (props) => {
  return <Button color="amber" {...props} />
}

export const DestructiveButton: React.FC<Omit<ButtonProps, 'color'>> = (props) => {
  return <Button color="red" {...props} />
}
