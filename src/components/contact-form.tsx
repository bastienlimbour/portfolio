'use client'

import { FormEvent, PropsWithChildren, useState } from 'react'
import { useReCaptcha } from 'next-recaptcha-v3'

import { cn } from '@/lib/utils/classname'
import { adjustTextareaHeight } from '@/lib/utils/text-area'

type MailData = { fullName: string; email: string; message: string }

type DataSent = {
  mailData: MailData
  reCaptchaToken: string
}

const Label = ({ htmlFor, children }: PropsWithChildren<{ htmlFor: string }>) => {
  return (
    <label htmlFor={htmlFor} className={cn('text-color-light mb-1.5 ml-0.5')}>
      {children}
    </label>
  )
}

const inputStyle = 'rounded-[5px] bg-grey-50 px-3 py-2 dark:bg-grey-700 mb-4'

export const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const { executeRecaptcha } = useReCaptcha()

  const retryMessage =
    'Veuillez rafraichir la page et réessayer ou envoyer votre message par mail à contact@pruvostbastien.fr'

  const sendMail = async (data: DataSent) => {
    const res = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({ data }),
    })
    return res.json()
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!executeRecaptcha) {
      console.error('Erreur de reCaptcha Google')
      return
    }

    const form = event.target
    if (!(form instanceof HTMLFormElement)) {
      setErrorMessage(`Une erreur est survenue. ${retryMessage}`)
      return
    }

    const formData: FormData = new FormData(form)
    const mailData = Object.fromEntries(formData) as MailData

    const reCaptchaToken = await executeRecaptcha('form_submit')

    const resData = await sendMail({ mailData, reCaptchaToken })

    // const resData = await sendMail(data)

    if (!resData.success) {
      setErrorMessage(`${resData.message} ${retryMessage}`)
      return
    }
    setErrorMessage('')
    form.reset()
    setSuccessMessage(resData.message)
  }

  return (
    // <RecaptchaProvider>
    <form onSubmit={handleSubmit} className={cn('flex flex-col')}>
      <Label htmlFor='fullname'>Votre nom :</Label>
      <input type='text' name='fullname' id='fullname' className={cn(inputStyle)} required />

      <Label htmlFor='email'>Votre email :</Label>
      <input type='email' name='email' id='email' className={cn(inputStyle)} required />

      <Label htmlFor='message'>Votre message :</Label>
      <textarea
        name='message'
        id='message'
        className={cn(inputStyle, 'h-28 resize-none')}
        required
        onInput={adjustTextareaHeight}
      />

      {errorMessage && <p className={cn('mb-4 text-red-800 dark:text-red-300')}>{errorMessage}</p>}
      {successMessage && <p className={cn('text-color-jade mb-4')}>{successMessage}</p>}

      <button
        className={cn(
          'rounded-[5px] py-2',
          'font-semibold text-grey-50 dark:text-grey-800',
          'transition-bg-color bg-jade-700  hover:bg-jade-600 dark:bg-jade-500 hover:dark:bg-jade-400',
        )}
      >
        Envoyer
      </button>
    </form>
    // </RecaptchaProvider>
  )
}
