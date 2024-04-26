import Head from 'next/head';
import type { Metadata, Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css'


const titleZG = 'Zongericht';
const colorZG = '#FF7C29'; // orange
const urlZG = 'https://zonnepanelen.zongericht.nl';
const imageZG = 'https://zonnepanelen.zongericht.nl/_next/image?url=%2Fhero-banner.webp&w=828&q=75';
const descriptionZG = 'Zonnepanelen op elk type dak - Waar een dak is, schijnt de zon! Met Onze kennis transformeren we elk dak in een zonne-energiebron';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <title>{titleZG}</title>
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16457474959"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16457474959');
          `}}>
        </script>
      </Head>
      <body className='min-h-screen bg-white font-poppins'>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
