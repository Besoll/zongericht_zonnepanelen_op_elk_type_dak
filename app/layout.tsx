import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Zongericht',
  description: 'Zonnepanelen op elk type dak - Waar een dak is, schijnt de zon! Met Onze kennis transformeren we elk dak in een zonne-energiebron',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 font-poppins'>{children}</body>
    </html>
  )
}
