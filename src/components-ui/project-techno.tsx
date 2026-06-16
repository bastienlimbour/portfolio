import { DynamicIcon } from '@/components-ui/dynamic-icon'

import type { Techno } from '@/types/sanity-models/techno'

type ProjectTechnoProps = {
  techno: Techno
}

export const ProjectTechno = ({ techno }: ProjectTechnoProps) => {
  return (
    <div className='flex items-center gap-2 rounded-full border border-zinc-100 bg-zinc-50 px-2 py-1 shadow-sm dark:border-zinc-600 dark:bg-zinc-700'>
      <DynamicIcon iconName={techno.iconName} label={`Logo ${techno.title}`} className='h-4 w-4' />
      <p className='text-xs font-normal'>{techno.title}</p>
    </div>
  )
}
