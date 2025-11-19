import { Code as RadixCode, CodeProps } from '@radix-ui/themes'

export const Code: React.FC<CodeProps> = (props) => {
  const { size, variant } = props

  return (
    <RadixCode
      variant={variant ? variant : 'ghost'}
      size={size ? size : { initial: '2', sm: '3' }}
      {...props}
    />
  )
}
