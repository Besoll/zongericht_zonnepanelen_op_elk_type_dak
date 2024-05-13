

import dynamic from 'next/dynamic'
const SwiperSmall = dynamic(() => import("@/components/__lp/008-V1/ui/SwiperSmall"))
const Tag = dynamic(() => import('@/components/__lp/008-V1/ui/CompanyTag'))
const SwiperButtonNext = dynamic(() => import("@/components/__lp/008-V1/icons/SwiperButtonNext"))
const SwiperButtonPrev = dynamic(() => import("@/components/__lp/008-V1/icons/SwiperButtonPrev"))


const TestimonialsSmall = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center px-4 max-w-[1440px] gap-2 py-12 md:py-16'>

      <div className='w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start gap-2'>
        <Tag />   
        <h2 className='heading3 md:heading2 font-semibold text-center md:text-left mb-8 text-black'>
          Klanten waarderen de Persoonlijke aanpak van Zongericht
        </h2>

        {/* arrows fot smallswiper */}
        <div className='w-fit hidden md:flex flex-row-reverse justify-center items-center gap-4'>
            <div className='swiper-button-next-small bg-qoqu_Orange rounded-none pl-3 pr-5 py-6 text-center shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
              <SwiperButtonNext />
            </div>
            <div className='swiper-button-prev-small bg-qoqu_Orange rounded-none pl-3 pr-5 py-6 text-ceter shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
              <SwiperButtonPrev />
            </div>
          </div>
      </div>

      <SwiperSmall />
    </div>
  )
}

export default TestimonialsSmall