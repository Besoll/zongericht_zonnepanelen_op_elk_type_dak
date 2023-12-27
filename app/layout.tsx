import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Zongericht',
  description: 'Zonnepanelen op elk type dak - Waar een dak is, schijnt de zon! Met Onze kennis transformeren we elk dak in een zonne-energiebron',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "zongericht.nl",
    "og:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className='min-h-screen bg-white font-poppins'>{children}</body>
    </html>
  )
}
