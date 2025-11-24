import React from 'react'
import { ButtonProps, Flex, LinkProps } from '@radix-ui/themes'
import { Link } from '@/components/UI/RadixComponents/Typography/Links'
import { Text } from '@/components/UI/RadixComponents/Typography/Text'
import { Button } from '@/components/UI/RadixComponents/Buttons'

import type { Page, Charity, Event, Fundraiser, Project, Court, Media } from '@/payload-types'
import { ExternalLinkIcon } from 'lucide-react'
import { DestructiveButton, SecondaryButton } from '@/components/UI/RadixComponents/Buttons'

type CMSLinkType = {
  appearance?: 'inline' | 'default' | 'solid' | 'soft' | 'outline' | 'ghost' | 'destructive' | null
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

const resolveHref = (options: {
  type?: CMSLinkType['type']
  reference?: CMSLinkType['reference']
  url?: string | null
}): string | null => {
  const { type, reference, url } = options

  if (type === 'reference' && reference && typeof reference.value === 'object') {
    if ('slug' in reference.value && reference.value.slug) {
      const base = reference.relationTo !== 'pages' ? `/${reference.relationTo}` : ''
      return `${base}/${reference.value.slug}`
    }

    if ('url' in reference.value && reference.value.url) {
      return reference.value.url
    }

    return url ?? null
  }

  return url ?? null
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
    size,
    weight,
    disabled = false,
    onClick,
  } = props

  const href = resolveHref({ type, reference, url })

  if (!href) return null

  const content = (
    <Flex align="center" gap="2">
      {label && label}
      {children}
      {!disabled && newTab && <ExternalLinkIcon size={15} />}
    </Flex>
  )

  const InnerLink: React.FC = () => {
    if (disabled) {
      return (
        <Text weight={weight} style={{ color: 'inherit' }}>
          <Flex align="center" gap="2">
            {label && label}
            {children}
            {!disabled && newTab && <ExternalLinkIcon size={15} />}
          </Flex>
        </Text>
      )
    }

    return (
      <Link weight={weight} style={{ color: 'inherit' }} href={href} newTab={newTab ?? false}>
        {content}
      </Link>
    )
  }

  const isInline = !appearance || appearance === 'inline'
  const isDefaultAppearance = appearance === 'default'
  const isDestructive = appearance === 'destructive'
  const isSecondary = color === 'secondary' && !isDestructive

  type Variant = NonNullable<ButtonProps['variant']>

  const baseVariant: Variant = isInline
    ? 'ghost'
    : isDefaultAppearance
      ? 'surface'
      : (appearance as Variant)

  const ButtonComponent = isDestructive ? DestructiveButton : isSecondary ? SecondaryButton : Button

  const finalVariant: Variant = isDestructive ? 'outline' : baseVariant

  return (
    <ButtonComponent className={className} size={size} variant={finalVariant} onClick={onClick}>
      <InnerLink />
    </ButtonComponent>
  )
}
