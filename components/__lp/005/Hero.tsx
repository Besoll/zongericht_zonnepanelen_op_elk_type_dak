import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton2 = dynamic(() => import('@/components/__lp/004/ctaButtons/CtaButton2'))
const HeroImageSection = dynamic(() => import('@/components/__lp/004/HeroImageSection'))
const KlantenGuarante = dynamic(() => import('@/components/__lp/004/icons/KlantenGuarante'))
const RoofTag = dynamic(() => import('@/components/__lp/004/ui/RoofTag'))

const Hero = () => {
  return (
    <div className='w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center
                    mt-32 px-4 md:px-8 gap-8 md:gap-4 mb-16 text-center py-8 md:py-32'>

      <div className='w-full max-w-[900px] h-auto flex flex-col justify-center md:justify-start items-center md:items-start gap-4'>
        <RoofTag /> 
        <h1 className='w-full heading3 md:heading1 lg:heading1 md:text-left'>
            Zonnepanelen op uw 
            
            <span className='w-full h-auto flex justify-center md:justify-start mt-6 text-qoqu_Light_Orange font-black heading1'>Zinken dak</span>                    
        </h1> 

        {/* texts container */}
        <div className='w-full md:w-[95%]'>
            <p className='text-center md:text-left text-xl font-normal py-4 md:py-6 mb-4'>
              Bij Zongericht beschikken wij over de kennis en ervaring die nodig zijn voor het installeren van zonnepanelen op uw zinken dak.
            </p>
        </div>        
        <KlantenGuarante />
        <CtaButton2 />
      </div>
      <div className='w-full h-auto flex justify-center md:justify-end items-center md:items-end'>
        <HeroImageSection />
      </div>                           
    </div>
  )
}

export default Hero