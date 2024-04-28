

import dynamic from 'next/dynamic'
const SwiperSmall = dynamic(() => import("@/components/__lp/004/ui/SwiperSmall"))
const RoofTag = dynamic(() => import('@/components/__lp/004/ui/RoofTag'))


const TestimonialsSmall = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center px-4 max-w-[1440px] gap-2 py-12 md:py-16 text-qoqu_Light_Orange'>
      <RoofTag />   
      <h2 className='heading3 md:heading2 font-semibold text-center mb-8 text-black'>
        Klanten waarderen de persoonlijke aanpak van Zongericht
      </h2>
      <SwiperSmall />
    </div>
  )
}

export default TestimonialsSmall