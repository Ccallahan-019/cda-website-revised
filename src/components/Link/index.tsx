import React from 'react'
import { Button, ButtonProps, Flex, LinkProps } from '@radix-ui/themes'
import { Link } from '../UI/RadixComponents/Typography/Link'
import { Text } from '../UI/RadixComponents/Typography/Text'

import type { Page, Charity, Event, Fundraiser, Project, Court, Media } from '@/payload-types'
import { ExternalLinkIcon } from 'lucide-react'

type CMSLinkType = {
  appearance?: 'default' | 'solid' | 'soft' | 'outline' | 'ghost' | 'destructive' | null
  color?: 'primary' | 'secondary'
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'charities' | 'events' | 'fundraisers' | 'projects' | 'courts' | 'media'
    value: Page | Charity | Event | Fundraiser | Project | Court | Media | string | number
  } | null
  type?: 'custom' | 'reference' | null
  url?: string | null
  size?: ButtonProps['size']
  weight?: LinkProps['weight']
  linkColor?: LinkProps['color']
  disabled?: boolean
  onClick?: () => void
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    color = 'primary',
    children,
    className,
    label,
    newTab,
    reference,
    url,
    size = '2',
    weight = 'regular',
    disabled = false,
    onClick,
  } = props

  const colors = {
    primary: 'purple',
    secondary: 'amber',
  }

  let href: string | null | undefined = undefined

  if (type === 'reference' && typeof reference?.value === 'object') {
    if ('slug' in reference.value && reference?.value.slug) {
      href = `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
        reference.value.slug
      }`
    } else if ('url' in reference?.value && reference?.value.url) {
      href = `${reference?.value.url}`
    } else {
      href = url
    }
  } else {
    href = url
  }

  if (!href) return null

  const InnerLink: React.FC = () => {
    if (disabled) {
      return (
        <Text weight={weight} style={{ color: 'inherit' }}>
          <Flex align="center" gap="2">
            {label && label}
            {children && children}
          </Flex>
        </Text>
      )
    }

    return (
      <Flex asChild align="center" gap="2">
        <Link
          weight={weight}
          style={{ color: 'inherit' }}
          href={href || url || ''}
          newTab={newTab ?? false}
        >
          {label && label}
          {children && children}
          {newTab && <ExternalLinkIcon size={15} />}
        </Link>
      </Flex>
    )
  }

  if (!appearance || appearance === 'inline') {
    return (
      <Button
        className={className}
        size={size}
        color={colors[color] as ButtonProps['color']}
        variant="ghost"
        onClick={onClick}
      >
        <InnerLink />
      </Button>
    )
  }

  if (appearance === 'default') {
    return (
      <Button
        className={className}
        size={size}
        color={colors[color] as ButtonProps['color']}
        variant="surface"
        onClick={onClick}
        style={{ flexGrow: 1 }}
      >
        <InnerLink />
      </Button>
    )
  }

  if (appearance === 'destructive') {
    return (
      <Button className={className} size={size} variant="outline" color="red" onClick={onClick}>
        <InnerLink />
      </Button>
    )
  }

  return (
    <Button
      className={className}
      size={size}
      color={colors[color] as ButtonProps['color']}
      variant={appearance}
      onClick={onClick}
    >
      <InnerLink />
    </Button>
  )
}
