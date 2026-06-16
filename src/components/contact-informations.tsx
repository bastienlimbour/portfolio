'use client'
import { useEffect, useState } from 'react'

export const ContactInformations = () => {
  const [tel, setTel] = useState<string | null>(null)
  const [telDisplay, setTelDisplay] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const encodedTel = 'KzMzNjE3MzA5MDg4'
    const encodedTelDisplay = 'MDYgMTcgMzAgOTAgODg='
    const encodedEmail = 'Y29udGFjdEBwcnV2b3N0YmFzdGllbi5mcg=='

    setTimeout(() => {
      const decodedTel = Buffer.from(encodedTel, 'base64')
      const decodedTelDisplay = Buffer.from(encodedTelDisplay, 'base64')
      const decodedEmail = Buffer.from(encodedEmail, 'base64')

      setTel(decodedTel.toString('ascii'))
      setTelDisplay(decodedTelDisplay.toString('ascii'))
      setEmail(decodedEmail.toString('ascii'))
    }, 750)
  }, [])

  return (
    <div>
      <div className='mb-3'>
        <span className='text-color-light'>Email : </span>
        {email && (
          <a
            href={`mailto:${email}`}
            className='text-color-emerald animation-entry-confidentials inline-block hover:underline'
          >
            {email}
          </a>
        )}
      </div>
      <div>
        <span className='text-color-light'>Téléphone : </span>
        {telDisplay && tel && (
          <a
            href={`tel:${tel}`}
            className='text-color-emerald animation-entry-confidentials -mb-[2px] inline-block hover:underline'
          >
            {telDisplay}
          </a>
        )}
      </div>
    </div>
  )
}
