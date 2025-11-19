import { Em as RadixEm, EmProps } from '@radix-ui/themes'

export const Em: React.FC<EmProps> = (props) => {
  const { wrap, style } = props

  const customFont =
    typeof style === 'object' && style.fontFamily ? style.fontFamily : 'var(--default-font-family)'

  return (
    <RadixEm
      style={{ fontFamily: customFont, ...style }}
      wrap={wrap ? wrap : 'pretty'}
      {...props}
    />
  )
}
