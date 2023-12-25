import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12 max-md:flex-col'>
        <p>© 2023-2024 QOQU BV | All rights reserved</p>
        <p>Malachiet 590 3316 LD Dordrecht</p>

        <div className='flex gap-x-9'>
            <Link href='/disclaimer'>Disclaimer</Link>
        </div>
        <div className='flex gap-x-9'>
            <Link href='/privacy-verklaring'>Privacy verklaring</Link>
        </div>
        <div className='flex gap-x-9'>
            <Link href='/voorwaarden-condities'>Voorwaarden Condities</Link>
        </div>
        <div className='flex gap-x-9'>
            <Link href='/cookies'>Cookies</Link>
        </div>
    </footer>
  )
}

export default Footer