import { Blockquote as RadixBlockquote, BlockquoteProps } from '@radix-ui/themes'
import { Quote } from '../Quote'

export const Blockquote: React.FC<BlockquoteProps> = (props) => {
  const { size, weight, wrap, children } = props

  return (
    <RadixBlockquote
      weight={weight ? weight : 'regular'}
      wrap={wrap ? wrap : 'pretty'}
      size={size ? size : { initial: '2', xs: '3' }}
      {...props}
    >
      <Quote>{children}</Quote>
    </RadixBlockquote>
  )
}
