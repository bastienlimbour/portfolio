import '@/assets/styles/globals.css'
import { Poppins } from 'next/font/google'

import { Providers } from '@/components-providers/providers'
import { BackgroundParticlesLoader } from '@/components-ui/background-particles-loader'
import { Banner } from '@/components/banner'
import { Navbar } from '@/components/navbar'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { cn } from '@/lib/utils/classname'

import type { PageDetails } from '@/types/sanity-models/page-details'
import type { PropsWithChildren } from 'react'

export const metadata = {
  title: 'Portfolio Bastien Limbour | Développeur Full Stack',
  description:
    'Portfolio de Bastien Limbour. Développeur Full Stack spécialisé dans la création de sites web en Javascript, TypeScript, React et Node.js.',
  creator: 'Bastien Limbour',
  openGraph: {
    locale: 'fr-FR',
    title: 'Portfolio Bastien Limbour | Développeur Full Stack',
    description:
      'Portfolio de Bastien Limbour. Développeur Full Stack spécialisé dans la création de sites web en Javascript, TypeScript, React et Node.js.',
    url: 'https://bastienlimbour.com',
    siteName: 'Portfolio Bastien Limbour | Développeur Full Stack',
    images: [
      {
        url: 'https://bastienlimbour.com/og.jpg',
        width: 1200,
        height: 600,
        alt: 'Portfolio Bastien Limbour | Développeur Full Stack',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
}

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const revalidate = 604800

const HomeLayout = async ({ children }: PropsWithChildren) => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)

  return (
    <Providers>
      <div
        className={cn(
          'relative z-0 h-full w-full',
          'flex items-center justify-center',
          'text-color-base font-poppins',
          'bg-zinc-100 dark:bg-zinc-900',
          poppins.className,
        )}
      >
        <BackgroundParticlesLoader />
        <div className='relative flex h-full w-full max-w-[68rem] flex-col items-center justify-start gap-3 p-4 md:static md:p-8'>
          <Banner pageDetails={pageDetails} />
          <div className='relative z-10 flex w-full grow flex-col overflow-hidden rounded-md border border-zinc-100 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800 lg:h-full'>
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </Providers>
  )
}

export default HomeLayout
