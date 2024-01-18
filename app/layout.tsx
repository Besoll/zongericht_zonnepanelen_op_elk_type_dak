import type { Metadata, Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css'


export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: 'Zongericht',
  description: 'Zonnepanelen op elk type dak - Waar een dak is, schijnt de zon! Met Onze kennis transformeren we elk dak in een zonne-energiebron',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://zonnepanelen.zongericht.nl/_next/image?url=%2Fhero-banner.webp&w=828&q=75',
    "twitter:card": "summary_large_image",
    "og:url": "zongericht.nl",
    "og:image": 'https://zonnepanelen.zongericht.nl/_next/image?url=%2Fhero-banner.webp&w=828&q=75',
    "og:type": "website",
  }
}

export const viewport: Viewport = {
  themeColor: '#FF7C29',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className='min-h-screen bg-white font-poppins'>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
