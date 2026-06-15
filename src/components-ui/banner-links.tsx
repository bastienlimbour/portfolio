import Link from 'next/link'
import { HiOutlineArrowDownOnSquare, HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'

import { cn } from '@/lib/utils/classname'

import type { FileAsset } from 'sanity'

type BannerLinksProps = {
  className?: string
  resume: FileAsset
}

export const BannerLinks = ({ className, resume }: BannerLinksProps) => {
  return (
    <div
      className={cn(
        className,
        'align-center text-color-light flex w-full flex-col sm:flex-row md:flex-col md:pr-8',
      )}
    >
      <Link
        className={cn([
          'flex w-full items-center justify-center gap-3 rounded-bl-md border-t py-4 sm:border-r md:border-r-0',
          'border-zinc-200 dark:border-zinc-700',
          'hover:bg-zinc-50 hover:dark:bg-zinc-900',
          'hover:text-color-emerald transition-all-color',
          'md:justify-end md:border-0 md:hover:bg-white md:hover:dark:bg-zinc-800',
        ])}
        href={resume.url}
        download='CV_Bastien_PRUVOST_Developpeur_Web'
        target='_blank'
      >
        <span className={cn('text-sm font-medium')}>Télécharger mon CV</span>
        <HiOutlineArrowDownOnSquare
          preserveAspectRatio={'xMidYMid slice'}
          className={cn('h-6 w-4')}
        />
      </Link>

      <Link
        className={cn([
          'flex w-full items-center justify-center gap-3 rounded-br-md border-t px-6 py-4',
          'border-zinc-200 dark:border-zinc-700',
          'hover:bg-zinc-50 hover:dark:bg-zinc-900',
          'hover:text-color-emerald transition-all-color',
          'md:hidden',
        ])}
        href='/contact'
      >
        <span className={cn('text-sm font-medium')}>Me contacter</span>
        <HiOutlineChatBubbleOvalLeftEllipsis
          preserveAspectRatio={'xMidYMid slice'}
          className={cn('h-6 w-5')}
        />
      </Link>
    </div>
  )
}
