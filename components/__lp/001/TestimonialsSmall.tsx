

import dynamic from 'next/dynamic'
const SwiperSmall = dynamic(() => import("@/components/__lp/001/ui/SwiperSmall"))


const TestimonialsSmall = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4 max-w-[1440px] gap-6 py-12 md:py-16'>
      <h2 className='heading3 md:heading2 font-semibold text-center'>
        Verhalen van tevreden klanten
      </h2>
      <SwiperSmall />
    </div>
  )
}

export default TestimonialsSmall