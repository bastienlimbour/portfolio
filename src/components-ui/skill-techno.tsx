import { DynamicIcon } from '@/components-ui/dynamic-icon'
import { cn } from '@/lib/utils/classname'

import type { Techno } from '@/types/sanity-models/techno'

type SkillTechnoProps = {
  techno: Techno
}

export const SkillTechno = ({ techno }: SkillTechnoProps) => {
  return (
    <div
      className={cn(
        'w-full rounded-[5px] px-4 py-3 shadow-sm',
        'flex flex-col items-center justify-center gap-2 md:gap-3',
        'border border-grey-50 bg-white dark:border-grey-700 dark:bg-grey-700',
      )}
    >
      <div className={cn('relative h-8 w-8 lg:h-9 lg:w-9')}>
        <DynamicIcon
          iconName={techno.iconName}
          label={`Logo ${techno.title}`}
          className='h-full w-full'
        />
      </div>
      <p className={cn('text-color-light -mb-[3px] text-xs font-medium lg:text-sm')}>
        {techno.title}
      </p>
    </div>
  )
}
