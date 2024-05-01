import React from 'react'
import Footer from '@/components/__lp/007/Footer'
import Navbar from '@/components/__lp/007/Navbar'

import type { Metadata, Viewport } from 'next'

const titleZG = 'Zongericht - Stalen Dak';
const colorZG = '#224C86'; // Night Blue
const urlZG = 'https://zonnepanelen.zongericht.nl/stalen-dak';
const imageZG = 'https://zonnepanelen.zongericht.nl/_next/image?url=%2Flp%2F003%2F1-4-big.webp&w=384&q=75';
const descriptionZG = 'Sterk en duurzaam: zonnepanelen op een stalen dak. Vraag vandaag nog kosteloos en geheel vrijblijvend een wooninspectie aan voor een offerte op maat.';

const creatorZG = "B. Kavzharadze - QOQU BV";



export const metadata: Metadata = {

  manifest: "/manifest.json",
  applicationName: "Landing Page",
  authors: [{ name: "Zongericht", url: "https://zongericht.nl/" }],
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


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default layout