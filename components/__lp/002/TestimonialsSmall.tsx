

import dynamic from 'next/dynamic'
const SwiperSmall = dynamic(() => import("@/components/__lp/002/ui/SwiperSmall"))


const TestimonialsSmall = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center px-4 max-w-[1440px] gap-2 py-12 md:py-16'>
      <p className='text-base font-semibold text-qoqu_Blue'>
        Plat Dak
      </p>
      <h2 className='heading3 md:heading2 font-semibold text-center mb-8'>
        Verhalen van tevreden klanten
      </h2>
      <SwiperSmall />
    </div>
  )
}

export default TestimonialsSmall