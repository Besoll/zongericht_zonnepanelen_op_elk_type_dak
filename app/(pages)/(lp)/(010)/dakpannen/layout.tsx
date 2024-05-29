import React from 'react'
import Footer from '@/components/__lp/010/Footer'
import Navbar from '@/components/__lp/010/Navbar'

import type { Metadata, Viewport } from 'next'

const titleZG = 'Zongericht - Dakpannen';
const colorZG = '#03A9F3'; // Light Blue
const urlZG = 'https://zonnepanelen.zongericht.nl/dakpannen';
const imageZG = 'https://zonnepanelen.zongericht.nl/_next/image?url=%2Flp%2F010%2F1-1-big.webp&w=828&q=75';
const descriptionZG = 'Duitse zonnepanelen Op uw pannendak. Voor een hoogwaardige opwekking van zonne-energie kiest u voor zonnepanelen op uw pannendak. Vraag vandaag nog kosteloos en geheel vrijblijvend een woninginspectie aan voor een offerte op maat.';

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