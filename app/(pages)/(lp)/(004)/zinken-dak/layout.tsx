import React from 'react'
import Footer from '@/components/__lp/004/Footer'
import Navbar from '@/components/__lp/004/Navbar'

import type { Metadata, Viewport } from 'next'

const titleZG = 'Zongericht - Zinken dak';
const colorZG = '#FF691D'; // Light Orange
const urlZG = 'https://zongericht.owlweb.nl/zinken-dak';
const imageZG = 'https://zongericht.owlweb.nl/_next/image?url=%2Flp%2F004%2F1-big.webp&w=828&q=75';
const descriptionZG = 'Bij Zongericht beschikken wij over de kennis en ervaring die nodig zijn voor het installeren van zonnepanelen op uw zinken dak.';

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