

import dynamic from 'next/dynamic'
const SwiperBig = dynamic(() => import("@/components/__lp/005/ui/SwiperBig"))
const CtaButton = dynamic(() => import('@/components/__lp/005/ctaButtons/CtaButton3'))
const CompanyTag = dynamic(() => import('@/components/__lp/005/ui/CompanyTag'))

const TestimonialsBig = () => {
  return (
    <div className='flex w-full flex-col justify-center items-center px-4 max-w-[1440px] gap-4 py-16 md:py-32 text-qoqu_Red'>
      <CompanyTag />   
      <h2 className='w-full heading3 md:heading2 font-semibold text-center uppercase text-black pb-8 md:pb-16'>
        HET VERHAAL VAN ONZE KLANTEN 
      </h2>
      <SwiperBig />
      <CtaButton />     
    </div>
  )
}

export default TestimonialsBig