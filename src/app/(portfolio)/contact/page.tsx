// import { ContactForm } from '@/components/contact-form'
import { DynamicIcon } from '@/components-ui/dynamic-icon'
import { PageLayout } from '@/components-ui/page-layout'
import { Wrapper } from '@/components-ui/wrapper'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import type { PageDetails } from '@/types/sanity-models/page-details'
// import { RecaptchaProvider } from '@/components-providers/recaptcha-provider'
import Link from 'next/link'

const ContactPage = async () => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)
  const sortedSocials = [...pageDetails.socials].sort((a, b) => a.priority - b.priority)

  return (
    // <RecaptchaProvider>
    <PageLayout title={pageDetails.contactTitle}>
      <Wrapper>
        <div className='my-8'>
          <h4 className='text-lg font-semibold text-emerald-600 dark:text-emerald-400'>
            Pour discuter d&apos;une opportunité professionnelle, d&apos;un projet ou simplement
            échanger, retrouvez-moi sur les réseaux suivants :
          </h4>
          <ul className='mt-8 inline-flex items-center gap-8'>
            {sortedSocials.map((social) => (
              <li key={social._id}>
                <Link
                  href={social.url}
                  className='hover:text-color-emerald transition-text-color flex items-center gap-3'
                  target='_blank'
                  rel='noreferrer'
                  aria-label={`Accéder à mon ${social.title}`}
                >
                  <DynamicIcon iconName={social.iconName} className='h-6 w-6 shrink-0' />
                  <span>{social.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          {/* <ContactForm /> */}
        </div>
      </Wrapper>
    </PageLayout>
    // </RecaptchaProvider>
  )
}

export default ContactPage
