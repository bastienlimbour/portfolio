import type { PropsWithChildren } from 'react'

export const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className='px-4 lg:px-8'>{children}</div>
}
