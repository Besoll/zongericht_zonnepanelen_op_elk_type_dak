

import dynamic from 'next/dynamic'
const SwiperBig = dynamic(() => import("@/components/__lp/001/ui/SwiperBig"))

const TestimonialsBig = () => {
  return (
    <div className='flex w-full flex-col justify-center items-center px-4 max-w-[1440px] gap-6 py-12 md:py-16'>
      <h2 className='w-full heading3 md:heading2 font-semibold text-center'>
        Het verhaal achter onze installaties
      </h2>
      <p className='w-full text-center'>
        Voor ons is een installatie meer dan gewoon een project; het is een verhaal van precisie, toewijding en streven naar perfectie. Neem hier een kijkje achter de schermen hoe we platte daken transformeren in duurzame energiebronnen.
      </p>
      <SwiperBig />
    </div>
  )
}

export default TestimonialsBig