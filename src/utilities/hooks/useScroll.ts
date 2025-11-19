import { useEffect, useState } from 'react'
import canUseDOM from '../canUseDOM'

type ScrollState = {
  x: number
  y: number
  direction: 'up' | 'down' | null
}

export const useScroll = () => {
  const [scroll, setScroll] = useState<ScrollState>({
    x: canUseDOM ? window.scrollX : 0,
    y: canUseDOM ? window.scrollY : 0,
    direction: null,
  })

  useEffect(() => {
    let lastY = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY
      setScroll({
        x: window.scrollX,
        y: currentY,
        direction: currentY > lastY ? 'down' : currentY < lastY ? 'up' : null,
      })
      lastY = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scroll
}
