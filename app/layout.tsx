import type { Metadata, Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'


const titleZG = 'Zongericht';
const colorZG = '#FF7C29'; // orange
const urlZG = 'https://zongericht.owlweb.nl';
const imageZG = 'https://zongericht.owlweb.nl/_next/image?url=%2FheroImages%2Fdakkapel.webp&w=384&q=75';
const descriptionZG = 'Zonnepanelen op elk type dak - Waar een dak is, schijnt de zon! Met Onze kennis transformeren we elk dak in een zonne-energiebron';

const creatorZG = "B. Kavzharadze - QOQU BV";



export const metadata: Metadata = {

  manifest: "/manifest.json",
  applicationName: "Landing Page",
  authors: [{ name: "OwlWeb", url: "https://owlweb.nl/" }],
  generator: "Next.js",
  title: titleZG,
  description: descriptionZG,
  themeColor: colorZG,
  creator: creatorZG,
  publisher: "Vercel",
  robots: "index, follow",
  alternates: { canonical: urlZG },

  openGraph: {
    type: "website",
    url: urlZG,
    title: titleZG,
    description: descriptionZG,
    siteName: titleZG,
    images: [{ url: imageZG, }],
  },
  

  other: {
    "color-scheme": "dark only",
    "twitter:card": imageZG,
    "twitter:site": urlZG,
    "twitter:creator": creatorZG,
    "twitter:title": titleZG,
    "twitter:description": descriptionZG,
    "twitter:image": imageZG,
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": titleZG,
  }
}


export const viewport: Viewport = {
  themeColor: colorZG,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <GoogleTagManager gtmId="GTM-5TDL8DP8" />
      <body className='min-h-screen bg-white font-poppins'>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
