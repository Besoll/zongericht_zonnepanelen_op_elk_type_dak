

import dynamic from 'next/dynamic'
const SwiperBig = dynamic(() => import("@/components/__lp/002/ui/SwiperBig"))
const CtaButton5 = dynamic(() => import('@/components/__lp/002/ctaButtons/CtaButton5'))

const TestimonialsBig = () => {
  return (
    <div className='flex w-full flex-col justify-center items-center px-4 max-w-[1440px] gap-6 py-12 md:py-16'>
      <p className='text-qoqu_Blue font-semibold text-xl'>
        Plat Dak
      </p>
      <h2 className='w-full heading3 md:heading2 font-semibold text-center'>
        Ons succesverhaal: hoe wij zonnepanelen installeren op platte daken
      </h2>
      <SwiperBig />
      <CtaButton5 />     
    </div>
  )
}

export default TestimonialsBig