import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/008-V1/ctaButtons/CtaButton2'))
const StatisticsCards = dynamic(() => import('@/components/__lp/008-V1/StatisticsCards'))
const KlantenGuarante = dynamic(() => import('@/components/__lp/008-V1/icons/KlantenGuarante'))
const Tag = dynamic(() => import("@/components/__lp/008-V1/ui/RoofTag"))


const Hero = () => {
  return (
    <div className='w-full max-w-[1440px] flex flex-col justify-center items-center
                    mt-24 md:mt-36 px-4 md:px-8 gap-8 md:gap-4  text-center py-8 '>

      <div className='w-full max-w-[1400px] h-auto flex flex-col justify-center items-center gap-4'>
        <Tag />
        <h1 className='w-full text-4xl md:text-6xl lg:text-7xl font-extrabold letters'>
          Zonnepanelen op uw          
          <span className='  font-extrabold'> leistenen dak    </span>                          
        </h1> 

        {/* texts container */}
        <div className='w-full md:w-[95%] max-w-[900px]'>
            <p className='text-center text-xl font-normal py-4 md:py-6 mb-4'>
              Bij Zongericht beschikken wij over de kennis en ervaring die nodig zijn voor het installeren van zonnepanelen op uw leistenen dak.
            </p>
        </div>        
        <CtaButton />
        <KlantenGuarante />
      </div>
      <div className='w-full h-auto flex justify-center md:justify-end items-center md:items-end'>
        <StatisticsCards />
      </div>                           
    </div>
  )
}

export default Hero