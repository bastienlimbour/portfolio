'use client'
import { useEffect } from 'react'

type ErrorProps = {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error({ error })
  }, [error])

  return (
    <div className='z-50 mt-4 text-center'>
      <p className='mb-4 text-xl font-medium text-red-800 opacity-100 dark:text-red-300'>
        Une erreur est survenue !
      </p>
      <button
        className='rounded-lg bg-red-900 px-4 py-2 text-white shadow-lg'
        onClick={() => reset()}
      >
        Réessayer
      </button>
    </div>
  )
}

export default Error
