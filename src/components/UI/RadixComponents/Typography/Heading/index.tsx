import { Heading as RadixHeading, HeadingProps } from '@radix-ui/themes'

export const Heading: React.FC<{ removeColor?: boolean } & HeadingProps> = ({
  removeColor = false,
  as = 'h2',
  ...props
}) => {
  const { weight, wrap, size: sizeFromProps } = props

  const headingStyles = {
    h1: { size: { initial: '8', md: '9' } },
    h2: { size: { initial: '7', md: '8' } },
    h3: { size: { initial: '6', md: '7' } },
    h4: { size: { initial: '5', md: '6' } },
    h5: { size: { initial: '4', md: '5' } },
    h6: { size: { initial: '3', md: '4' } },
  }

  const { size } = headingStyles[as]

  return (
    <RadixHeading
      as={as}
      weight={weight ? weight : 'medium'}
      wrap={wrap ? wrap : 'pretty'}
      style={{ color: removeColor ? undefined : 'var(--accent-12)' }}
      size={sizeFromProps ? sizeFromProps : (size as HeadingProps['size'])}
      {...props}
    />
  )
}
