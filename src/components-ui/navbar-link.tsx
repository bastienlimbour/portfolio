import Link from 'next/link'
import type { IconType } from 'react-icons'

import { cn } from '@/lib/utils/classname'

type NavbarLinkProps = {
  href: string
  label: string
  IconComponent: IconType
  currentRoute: string | null
  ariaLabel: string
}

export const NavbarLink = ({
  href,
  label,
  IconComponent,
  currentRoute,
  ariaLabel,
}: NavbarLinkProps) => {
  const isLinkActive = currentRoute === href

  return (
    <li
      className={cn(
        'shrink grow basis-0 border-x-zinc-50 dark:border-x-zinc-800',
        isLinkActive ? 'text-color-emerald' : 'bg-zinc-50 dark:bg-zinc-900',
        !isLinkActive && 'hover:bg-zinc-50 hover:dark:bg-zinc-900',
        'hover:text-color-emerald transition-text-color',
      )}
    >
      <Link
        href={href}
        className={cn('flex flex-col items-center gap-1 p-4 -outline-offset-1')}
        aria-label={ariaLabel}
      >
        <IconComponent preserveAspectRatio={'xMidYMid slice'} className={cn('h-6 w-6')} />
        <span className={cn('-mb-1 hidden text-sm sm:block')}>{label}</span>
      </Link>
    </li>
  )
}
