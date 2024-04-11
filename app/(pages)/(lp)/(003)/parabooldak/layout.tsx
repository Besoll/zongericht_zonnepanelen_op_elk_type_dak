import React from 'react'
import Footer from '@/components/__lp/003/Footer'
import Navbar from '@/components/__lp/003/Navbar'

import type { Metadata, Viewport } from 'next'

const titleZG = 'Zongericht - Parabooldak';
const colorZG = '#F87C2D'; // Orange
const urlZG = 'https://zonnepanelen.zongericht.nl/parabooldak';
const imageZG = 'https://zonnepanelen.zongericht.nl/_next/image?url=%2Flp%2F002%2F1-big.webp&w=828&q=75';
const descriptionZG = 'Heeft u een prachtig parabolisch dak en overweegt u om zonnepanelen te installeren? Bij Zongericht is dit volledig mogelijk. We beschikken over ruime ervaring in het installeren van zonnepanelen op parabolische daken';

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