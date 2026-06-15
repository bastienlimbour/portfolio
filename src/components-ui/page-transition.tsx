import { cn } from '@/lib/utils/classname'

import type { PropsWithChildren } from 'react'

type PageTransitionProps = PropsWithChildren<{
  className?: string
}>

export const PageTransition = ({ children, className }: PageTransitionProps) => {
  return <div className={cn('page-transition relative', className)}>{children}</div>
}
