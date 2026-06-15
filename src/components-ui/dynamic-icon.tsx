'use client'

import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils/classname'

type DynamicIconProps = {
  iconName?: string
  className?: string
  label?: string
}

export const DynamicIcon = ({ iconName, className, label }: DynamicIconProps) => {
  if (!iconName) return null

  return (
    <Icon
      icon={iconName}
      className={cn('inline-block shrink-0', className)}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  )
}
