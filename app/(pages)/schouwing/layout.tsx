import React from 'react'
import FooterSchouwing from '@/components/FooterSchouwing'
import Navbar from '@/components/Navbar'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar />
        {children}
        <FooterSchouwing />
    </>
  )
}

export default layout