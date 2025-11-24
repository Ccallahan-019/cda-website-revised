import { IconButton as RadixIconButton, IconButtonProps } from '@radix-ui/themes'

export const IconButton: React.FC<IconButtonProps> = ({ size, ...props }) => {
  return <RadixIconButton size={size ? size : { initial: '2', xs: '3' }} {...props} />
}

export const SecondaryIconButton: React.FC<Omit<IconButtonProps, 'color'>> = (props) => {
  return <IconButton color="amber" {...props} />
}
