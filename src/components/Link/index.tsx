import React from 'react'
import { Button, ButtonProps, Flex, LinkProps } from '@radix-ui/themes'
import { Link } from '../UI/RadixComponents/Typography/Link'

import type { Page, Charity, Event, Fundraiser, Project, Court } from '@/payload-types'

type CMSLinkType = {
  appearance?: 'default' | 'solid' | 'soft' | 'outline' | 'ghost' | 'destructive' | null
  color?: 'primary' | 'secondary'
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'charities' | 'events' | 'fundraisers' | 'projects' | 'courts'
    value: Page | Charity | Event | Fundraiser | Project | Court | string | number
  } | null
  type?: 'custom' | 'reference' | null
  url?: string | null
  size?: ButtonProps['size']
  weight?: LinkProps['weight']
  linkColor?: LinkProps['color']
  onClick?: () => void
}

const getHrefFromProps = (
  props: Pick<CMSLinkType, 'type' | 'reference' | 'url'>,
): string | null => {
  const { type, reference, url } = props

  if (type === 'custom') return url ?? null

  if (type === 'reference' && reference?.value && typeof reference.value === 'object') {
    const { relationTo, value } = reference

    // pages use nested docs breadcrumbs URL
    if (relationTo === 'pages') {
      const page = value as Page

      const lastCrumb = page.breadcrumbs?.[page.breadcrumbs.length - 1]

      if (lastCrumb?.url) {
        return lastCrumb.url
      }

      // if no breadcrumbs, at least use slug
      if (page.slug) {
        return page.slug === 'home' ? '/' : `/${page.slug}`
      }

      return null
    }

    // Non-page collections
    const docWithSlug = value as { slug?: string }

    if (docWithSlug.slug) {
      return `/${relationTo}/${docWithSlug.slug}`
    }

    return null
  }

  // Fallback to URL
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
    size = '3',
    weight = 'regular',
    linkColor,
    onClick,
  } = props

  const colors = {
    primary: 'purple',
    secondary: 'amber',
  }

  const href = getHrefFromProps({ type, reference, url })

  if (!href) return null

  if (!appearance || appearance === 'inline') {
    return (
      <Link
        color={linkColor}
        weight={weight}
        underline="hover"
        newTab={newTab ?? false}
        href={href || url || ''}
        onClick={onClick}
      >
        <Flex align="center" gap="2">
          {label && label}
          {children && children}
        </Flex>
      </Link>
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
        <Link style={{ color: 'inherit' }} href={href || url || ''} newTab={newTab ?? false}>
          <Flex align="center" gap="2">
            {label && label}
            {children && children}
          </Flex>
        </Link>
      </Button>
    )
  }

  if (appearance === 'destructive') {
    return (
      <Button className={className} size={size} variant="outline" color="red" onClick={onClick}>
        <Link style={{ color: 'inherit' }} href={href || url || ''} newTab={newTab ?? false}>
          <Flex align="center" gap="2">
            {label && label}
            {children && children}
          </Flex>
        </Link>
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
      <Link style={{ color: 'inherit' }} href={href || url || ''} newTab={newTab ?? false}>
        <Flex align="center" gap="2">
          {label && label}
          {children && children}
        </Flex>
      </Link>
    </Button>
  )
}
