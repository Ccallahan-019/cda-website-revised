import { Text as RadixText, TextProps } from '@radix-ui/themes'

export const Text: React.FC<TextProps> = ({ size, wrap, weight, ...props }) => {
  return (
    <RadixText
      wrap={wrap ? wrap : 'pretty'}
      size={size ? size : { initial: '2', xs: '3' }}
      weight={weight ? weight : 'regular'}
      {...props}
    />
  )
}
