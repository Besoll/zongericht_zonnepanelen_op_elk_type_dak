import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton2 = dynamic(() => import('@/components/__lp/003/ctaButtons/CtaButton2'))
const HeroImageSection = dynamic(() => import('@/components/__lp/003/HeroImageSection'))
const KlantenGuarante = dynamic(() => import('@/components/__lp/003/icons/KlantenGuarante'))

const Hero = () => {
  return (
    <div className='w-full max-w-[1440px] flex flex-col-reverse md:flex-row justify-center items-center 
                    mt-32 px-4 md:px-8 gap-2 md:gap-4 mb-16 text-center md:text-left'>

      <div className='w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start gap-4'>
        <h1 className='w-full heading3 md:heading1 lg:heading1  '>
            Zonnepanelen op uw 
            <br />
            <span className='text-qoqu_Orange font-black heading1'>Parabool dak</span>                    
        </h1> 

        {/* texts container */}
        <div className='w-full md:w-[45%]'>
            <p className='text-center text-xl py-4 md:py-6 mb-4'>
              Laat de zon maar schijnen op uw platte dak: zongericht, uw expert in zonnepaneleninstallaties staat voor u klaar
            </p>
        </div>
        <CtaButton2 />
        <KlantenGuarante />
      </div>
      <div className='w-full h-auto '>
        <HeroImageSection />
      </div>                           
    </div>
  )
}

export default Hero