import React from 'react'
import Footer from '@/components/__lp/001/Footer'
import Navbar from '@/components/__lp/001/Navbar'

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