import dynamic from 'next/dynamic'
const Cards6Steps = dynamic(() => import('@/components/__lp/010/ui/Cards6Steps'))
const RoofTag = dynamic(() => import("@/components/__lp/010/ui/RoofTag"))
const CtaButton2 = dynamic(() => import('@/components/__lp/010/ctaButtons/CtaButton2'))


const Section6Steps = () => {
  return (
    <div className='w-full max-w-[1440px] h-auto flex flex-col justify-center items-center gap-6'>
        <div className='w-full flex flex-col justify-center items-center gap-2 md:gap-4 px-4 lg:px-6'>
            <RoofTag />
            <h2 className='heading3 md:heading2 font-semibold text-center md:text-left'>
              <span className='text-qoqu_Light_Blue font-semibold'>Waarom</span> werken met Zongericht?  
            </h2>  
        </div> 
        <Cards6Steps />
        <CtaButton2 /> 
    </div>
  )
}

export default Section6Steps