import { DynamicIcon } from '@/components-ui/dynamic-icon'

import type { Techno } from '@/types/sanity-models/techno'

type SkillTechnoProps = {
  techno: Techno
}

export const SkillTechno = ({ techno }: SkillTechnoProps) => {
  return (
    <div className='inline-flex items-center gap-2 rounded-full border border-zinc-100 bg-zinc-50 px-3 py-1.5 shadow-sm dark:border-zinc-600 dark:bg-zinc-700'>
      <DynamicIcon iconName={techno.iconName} label={`Logo ${techno.title}`} className='size-5' />
      <p className='text-xs font-medium text-zinc-700 dark:text-zinc-200'>{techno.title}</p>
    </div>
  )
}
