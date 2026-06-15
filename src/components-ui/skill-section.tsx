import { SkillTechno } from '@/components-ui/skill-techno'
import { cn } from '@/lib/utils/classname'

import type { Skill } from '@/types/sanity-models/skill'
import { Wrapper } from './wrapper'

type SkillSectionProps = {
  skill: Skill
}

export const SkillSection = ({ skill }: SkillSectionProps) => {
  return (
    <div className={cn('border-b border-zinc-100 dark:border-zinc-700 min-[810px]:odd:border-r')}>
      <Wrapper>
        <h3 className={cn('page-subtitle')}>{skill.title}</h3>
        <div className={cn('mb-5 flex flex-wrap gap-2')}>
          {skill.technos &&
            skill.technos?.map(
              (techno) => techno && <SkillTechno key={techno._id} techno={techno} />,
            )}
        </div>
      </Wrapper>
    </div>
  )
}
