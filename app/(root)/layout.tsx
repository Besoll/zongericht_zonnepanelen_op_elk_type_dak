import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar />
       
        <Footer />
    </>
  )
}

export default layout