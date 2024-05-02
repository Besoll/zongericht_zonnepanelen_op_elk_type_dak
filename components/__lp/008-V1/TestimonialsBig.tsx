

import dynamic from 'next/dynamic'
const SwiperBig = dynamic(() => import("@/components/__lp/007/ui/SwiperBig"))
const CtaButton = dynamic(() => import('@/components/__lp/007/ctaButtons/CtaButton3'))
const Tag = dynamic(() => import('@/components/__lp/007/ui/RoofTag'))

const TestimonialsBig = () => {
  return (
    <div className='flex w-full flex-col justify-center items-center px-4 max-w-[1440px] gap-4 py-16 md:py-32 '>
      <Tag />   
      <h2 className='w-full heading3 md:heading2 font-semibold text-center text-black pb-8 md:pb-16'>
        Het verhaal van onze klanten 
      </h2>
      <SwiperBig />
      <CtaButton />     
    </div>
  )
}

export default TestimonialsBig