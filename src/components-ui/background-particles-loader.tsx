'use client'

import dynamic from 'next/dynamic'

const BackgroundParticles = dynamic(
  () =>
    import('@/components-ui/background-particles').then((mod) => ({
      default: mod.BackgroundParticles,
    })),
  { ssr: false },
)

export const BackgroundParticlesLoader = () => <BackgroundParticles />
