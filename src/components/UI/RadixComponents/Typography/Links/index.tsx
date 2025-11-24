import NextLink from 'next/link'
import { Link as RadixLink, LinkProps } from '@radix-ui/themes'

export const Link: React.FC<{ newTab?: boolean } & LinkProps> = ({
  newTab,
  href,
  children,
  size,
  ...props
}) => {
  const { underline, weight } = props

  return (
    <RadixLink
      weight={weight ? weight : 'regular'}
      underline={underline ? underline : 'none'}
      size={size ? size : { initial: '2', xs: '3' }}
      asChild
      {...props}
    >
      <NextLink
        target={newTab ? '_blank' : undefined}
        href={href ?? '#'}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {children}
      </NextLink>
    </RadixLink>
  )
}

export const SecondaryLink: React.FC<{ newTab?: boolean } & Omit<LinkProps, 'color'>> = (props) => {
  return <Link color="amber" {...props} />
}
