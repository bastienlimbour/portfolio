import Link from 'next/link'

import { DynamicIcon } from '@/components-ui/dynamic-icon'
import { cn } from '@/lib/utils/classname'

import type { Social } from '@/types/sanity-models/social'

type BannerSocialsProps = {
  className?: string
  socials?: Array<Social>
}

export const BannerSocials = ({ className, socials }: BannerSocialsProps) => {
  const sortedSocials = socials ? [...socials].sort((a, b) => a.priority - b.priority) : []

  return (
    <div
      className={cn(
        className,
        'text-color-light flex items-center justify-center gap-4 md:justify-start md:pl-8',
      )}
    >
      {sortedSocials?.map((social) => (
        <Link
          key={social._id}
          href={social.url}
          className={cn('hover:text-color-emerald transition-text-color p-1')}
          target='_blank'
          rel='noreferrer'
          aria-label={`Accéder à mon ${social.title}`}
        >
          <DynamicIcon iconName={social.iconName} className='h-6 w-6' />
        </Link>
      ))}
    </div>
  )
}
