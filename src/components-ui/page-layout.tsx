import { PageTransition } from '@/components-ui/page-transition'
import type { PropsWithChildren } from 'react'
import { Wrapper } from './wrapper'

type PageLayoutProps = PropsWithChildren<{
  title: string
}>

export const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <div className='scrollbar-custom overflow-y-scroll'>
      <PageTransition>
        <div className='border-b border-zinc-100 dark:border-zinc-700'>
          <Wrapper>
            <h3 className='text-color-base py-3 text-center text-base font-semibold lg:text-lg'>
              {title}
            </h3>
          </Wrapper>
        </div>
        {children}
      </PageTransition>
    </div>
  )
}
