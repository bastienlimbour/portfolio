'use client'
import { cn } from '@/lib/utils/classname'
import { usePathname } from 'next/navigation'

import {
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineCommandLine,
  HiOutlineIdentification,
  HiOutlineInboxStack,
} from 'react-icons/hi2'

import { NavbarLink } from '@/components-ui/navbar-link'

export const Navbar = () => {
  const currentRoute = usePathname()

  return (
    <nav>
      <ul
        className={cn(
          'flex justify-center divide-x border-b border-b-zinc-100 dark:border-b-zinc-700',
        )}
      >
        <NavbarLink
          href='/profile'
          label='Profil'
          IconComponent={HiOutlineIdentification}
          currentRoute={currentRoute}
          ariaLabel='Accéder au profil'
        />
        <NavbarLink
          href='/skills'
          label='Compétences'
          IconComponent={HiOutlineCommandLine}
          currentRoute={currentRoute}
          ariaLabel='Accéder aux compétences'
        />
        <NavbarLink
          href='/projects'
          label='Projets'
          IconComponent={HiOutlineInboxStack}
          currentRoute={currentRoute}
          ariaLabel='Accéder aux projets'
        />
        <NavbarLink
          href='/contact'
          label='Contact'
          IconComponent={HiOutlineChatBubbleOvalLeftEllipsis}
          currentRoute={currentRoute}
          ariaLabel='Accéder à la page contact'
        />
      </ul>
    </nav>
  )
}
