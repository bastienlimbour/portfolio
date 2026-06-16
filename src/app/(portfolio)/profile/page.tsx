import { PortableText } from '@portabletext/react'

import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import { sanityClientFetch } from '@/lib/sanity/sanity.client'

import { PageLayout } from '@/components-ui/page-layout'
import { ProfilePic } from '@/components-ui/profile-pic'
import { Wrapper } from '@/components-ui/wrapper'
import type { PageDetails } from '@/types/sanity-models/page-details'

const ProfilePage = async () => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)

  return (
    <PageLayout title={pageDetails.profileTitle}>
      <Wrapper>
        <div className='mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 lg:mt-4'>
          <ProfilePic
            className='transition-image relative mt-4 h-52 w-52 shrink-0 overflow-hidden rounded-full border-white shadow-md dark:border-zinc-700'
            profilePic={pageDetails.profilePic}
          />
          <div className='prose-profile shrink grow basis-80'>
            <PortableText value={pageDetails.bio} />
          </div>
        </div>
      </Wrapper>
    </PageLayout>
  )
}

export default ProfilePage
