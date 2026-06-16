import '@/assets/styles/globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head />
      <body className='h-screen w-screen'>{children}</body>
    </html>
  )
}

export default RootLayout
