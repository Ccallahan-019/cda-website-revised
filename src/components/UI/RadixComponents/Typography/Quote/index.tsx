import { Quote as RadixQuote, QuoteProps } from '@radix-ui/themes'

export const Quote: React.FC<QuoteProps> = (props) => {
  const { wrap, style } = props

  const customFont =
    typeof style === 'object' && style.fontFamily ? style.fontFamily : 'var(--default-font-family)'

  return (
    <RadixQuote
      style={{ fontFamily: customFont, ...style }}
      wrap={wrap ? wrap : 'pretty'}
      {...props}
    />
  )
}
