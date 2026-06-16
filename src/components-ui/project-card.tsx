import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsGlobe2 } from 'react-icons/bs'

import { ProjectTechno } from '@/components-ui/project-techno'
import { cn } from '@/lib/utils/classname'

import type { Project } from '@/types/sanity-models/project'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const projectYear = new Date(project.publishedAt.toString()).getFullYear()

  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-[5px] shadow-sm',
        'border border-zinc-100 bg-white dark:border-zinc-700 dark:bg-zinc-800',
      )}
    >
      <Image
        className={cn('w-full border-b border-zinc-50 object-contain dark:border-zinc-700')}
        src={project.mainImage.url}
        alt={`Capture d'écran du projet ${project.title}`}
        quality={100}
        sizes={`100vw, (min-width: 540px) 50vw, (min-width: 800px) 33vw`}
        width={project.mainImage.metadata.dimensions.width}
        height={project.mainImage.metadata.dimensions.height}
      />

      <div className={cn('flex grow flex-col justify-start p-4 pt-3')}>
        <h3 className={cn('text-color-emerald mb-1 font-semibold lg:text-lg')}>{project.title}</h3>

        {(project.projectType || Number.isFinite(projectYear)) && (
          <p className={cn('mb-3 text-xs font-normal text-zinc-500 dark:text-zinc-400')}>
            {project.projectType}
            {project.projectType && Number.isFinite(projectYear) && ' · '}
            {Number.isFinite(projectYear) && projectYear}
          </p>
        )}

        <div className={cn('prose-projects mb-4')}>
          <PortableText value={project.description} />
        </div>

        <div className={cn('flex flex-wrap items-start justify-start gap-2')}>
          {project.technos &&
            project.technos.map(
              (techno) => techno && <ProjectTechno key={techno._id} techno={techno} />,
            )}
        </div>
      </div>

      <div
        className={cn(
          'relative bottom-0 left-0 right-0 flex divide-x border-t border-zinc-100 dark:border-zinc-700',
        )}
      >
        {project.githubLink && (
          <Link
            href={project.githubLink ?? ''}
            target={'_blank'}
            className={cn(
              'flex w-full items-center justify-center gap-2 px-4 py-3 text-sm',
              'hover:text-color-emerald transition-all-color hover:bg-zinc-50 hover:dark:bg-zinc-900',
              'border-zinc-100 dark:border-zinc-700',
            )}
          >
            <span>Github</span>
            <BsGithub className={cn('-mt-[1px] h-5 w-5')} />
          </Link>
        )}

        {project.websiteLink && (
          <Link
            href={project.websiteLink ?? ''}
            target={'_blank'}
            className={cn(
              'flex w-full items-center justify-center gap-2 px-4 py-3 text-sm',
              'hover:text-color-emerald transition-all-color hover:bg-zinc-50 hover:dark:bg-zinc-900',
              'border-zinc-100 dark:border-zinc-700',
            )}
          >
            <span>Site</span>
            <BsGlobe2 className={cn('-mt-[1px] h-5 w-5')} />
          </Link>
        )}
      </div>
    </div>
  )
}
