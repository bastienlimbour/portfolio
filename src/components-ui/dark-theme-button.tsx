'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'

import { cn } from '@/lib/utils/classname'

type DarkThemeButtonProps = {
  className?: string
}

export const DarkThemeButton = ({ className }: DarkThemeButtonProps) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <button
        onClick={toggleTheme}
        className={cn(
          className,
          resolvedTheme === 'dark' ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
        )}
        aria-label='Activer le theme sombre (Mode nuit)'
      >
        <HiOutlineMoon preserveAspectRatio={'xMidYMid slice'} className={cn('h-7 w-7')} />
      </button>

      <button
        onClick={toggleTheme}
        className={cn(
          className,
          'scale-100 opacity-100',
          resolvedTheme === 'light' ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
        )}
        aria-label='Activer le theme clair (Mode jour)'
      >
        <HiOutlineSun preserveAspectRatio={'xMidYMid slice'} className={cn('h-7 w-7')} />
      </button>
    </>
  )
}
