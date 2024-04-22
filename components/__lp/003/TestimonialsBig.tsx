

import dynamic from 'next/dynamic'
const SwiperBig = dynamic(() => import("@/components/__lp/003/ui/SwiperBig"))
const CtaButton5 = dynamic(() => import('@/components/__lp/003/ctaButtons/CtaButton5'))
const RoofTag = dynamic(() => import('@/components/__lp/003/ui/RoofTag'))

const TestimonialsBig = () => {
  return (
    <div className='flex w-full flex-col justify-center items-center px-4 max-w-[1440px] gap-6 py-12 md:py-16'>
      <RoofTag />   
      <h2 className='w-full heading3 md:heading2 font-semibold text-center'>
        Het verhaal van onze klanten
      </h2>
      <SwiperBig />
      <CtaButton5 />     
    </div>
  )
}

export default TestimonialsBig