'use client'

import { useTheme } from '@/providers/Theme'
import { Theme } from '@radix-ui/themes'
import { useState, useEffect } from 'react'

export const RadixThemeProvider: React.FC<{
  appearance?: 'dark' | 'light'
  children: React.ReactNode
}> = ({ appearance, children }) => {
  const { theme } = useTheme()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  if (!isReady) return null

  const themeAppearance = theme === 'dark' || theme === 'light' ? theme : undefined

  return (
    <Theme
      appearance={appearance ? appearance : themeAppearance}
      accentColor="purple"
      grayColor="slate"
      radius="small"
      panelBackground="solid"
    >
      {children}
    </Theme>
  )
}
