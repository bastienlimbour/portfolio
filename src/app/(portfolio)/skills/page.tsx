import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import { skillsQuery } from '@/lib/sanity/queries/skill'
import { SkillSection } from '@/components-ui/skill-section'

import type { PageDetails } from '@/types/sanity-models/page-details'
import type { Skill } from '@/types/sanity-models/skill'
import { PageLayout } from '@/components-ui/page-layout'

const SkillsPage = async () => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)
  const skills = await sanityClientFetch<Skill[]>(skillsQuery)

  skills.sort((a, b) => {
    return a.priority - b.priority
  })

  return (
    <PageLayout title={pageDetails.skillsTitle}>
      <div className='grid grid-cols-1 min-[810px]:grid-cols-2'>
        {skills && skills.map((skill) => skill && <SkillSection key={skill._id} skill={skill} />)}
      </div>
    </PageLayout>
  )
}

export default SkillsPage
