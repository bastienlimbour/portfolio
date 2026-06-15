'use client'

import { NextStudio } from 'next-sanity/studio'

import config from '../../../../../sanity.config'

export const StudioRoute = () => {
  return <NextStudio config={config} />
}
