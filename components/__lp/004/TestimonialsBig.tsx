

import dynamic from 'next/dynamic'
const SwiperBig = dynamic(() => import("@/components/__lp/004/ui/SwiperBig"))
const CtaButton = dynamic(() => import('@/components/__lp/004/ctaButtons/CtaButton5'))
const CompanyTag = dynamic(() => import('@/components/__lp/004/ui/CompanyTag'))

const TestimonialsBig = () => {
  return (
    <div className='flex w-full flex-col justify-center items-center px-4 max-w-[1440px] gap-2 py-16 md:py-32 text-qoqu_Light_Orange'>
      <CompanyTag />   
      <h2 className='w-full heading3 md:heading2 font-semibold text-center text-black pb-8 md:pb-16'>
        Het verhaal van onze klanten
      </h2>
      <SwiperBig />
      <CtaButton />     
    </div>
  )
}

export default TestimonialsBig