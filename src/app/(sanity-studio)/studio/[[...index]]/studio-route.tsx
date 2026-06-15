'use client'

import { NextStudio } from 'next-sanity/studio'

import config from '@/root/sanity.config'

export const StudioRoute = () => {
  return <NextStudio config={config} />
}
