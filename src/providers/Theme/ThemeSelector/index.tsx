'use client'

import { useTheme } from '..'

import { IconButton, IconButtonProps } from '@radix-ui/themes'
import { MoonStarIcon, SunIcon } from 'lucide-react'

export const ThemeToggle: React.FC<IconButtonProps> = (props) => {
  const { variant } = props

  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <IconButton variant={variant ? variant : 'ghost'} onClick={toggleTheme} {...props}>
      {theme === 'light' ? <SunIcon size={20} /> : <MoonStarIcon size={20} />}
    </IconButton>
  )
}
