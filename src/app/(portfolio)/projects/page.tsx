import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { projectsQuery } from '@/lib/sanity/queries/project'
import { ProjectCard } from '@/components-ui/project-card'

import type { Project } from '@/types/sanity-models/project'
import { PageLayout } from '@/components-ui/page-layout'
import type { PageDetails } from '@/types/sanity-models/page-details'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import { Wrapper } from '@/components-ui/wrapper'

const ProjectsPage = async () => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)
  const projects = await sanityClientFetch<Project[]>(projectsQuery)

  projects.sort((a, b) => {
    return b.priority - a.priority
  })

  return (
    <PageLayout title={pageDetails.projectsTitle}>
      <Wrapper>
        <div className='my-4 grid gap-4 min-[540px]:grid-cols-2 min-[800px]:grid-cols-3 lg:my-6 lg:gap-6'>
          {projects &&
            projects.map(
              (project) => project && <ProjectCard key={project._id} project={project} />,
            )}
        </div>
      </Wrapper>
    </PageLayout>
  )
}

export default ProjectsPage
