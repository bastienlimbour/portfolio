import { DynamicIcon } from '@/components-ui/dynamic-icon'
import { cn } from '@/lib/utils/classname'

import type { Techno } from '@/types/sanity-models/techno'

type ProjectTechnoProps = {
  techno: Techno
}

export const ProjectTechno = ({ techno }: ProjectTechnoProps) => {
  return (
    <div
      className={cn(
        'rounded-full px-2 py-1 shadow-sm',
        'flex items-center gap-2',
        'border border-zinc-100 bg-white dark:border-zinc-600 dark:bg-zinc-700',
      )}
    >
      <DynamicIcon iconName={techno.iconName} label={`Logo ${techno.title}`} className='h-4 w-4' />
      <p className={cn('text-xs font-normal')}>{techno.title}</p>
    </div>
  )
}
