import { StudioRoute } from './studio-route'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

const StudioPage = () => {
  return <StudioRoute />
}

export default StudioPage
