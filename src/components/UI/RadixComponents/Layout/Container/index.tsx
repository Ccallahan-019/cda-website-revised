import { Container as RadixContainer } from '@radix-ui/themes'
import { ContainerProps } from '@radix-ui/themes'

export const Container: React.FC<{ children: React.ReactNode } & ContainerProps> = ({
  children,
  ...props
}) => {
  const { px, size } = props

  return (
    <RadixContainer
      size={size ? size : { initial: '1', sm: '2', md: '3', lg: '4' }}
      px={px ? px : { initial: '4', sm: '5' }}
      {...props}
    >
      {children}
    </RadixContainer>
  )
}
