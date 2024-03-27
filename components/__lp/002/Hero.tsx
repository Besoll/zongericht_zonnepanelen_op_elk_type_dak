import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton2 = dynamic(() => import('@/components/__lp/002/ctaButtons/CtaButton2'))
const KlantenGuarante = dynamic(() => import('@/components/__lp/002/icons/KlantenGuarante'))

const Hero = () => {
  return (
    <div className='w-full max-w-[1200px] flex flex-col justify-center items-center 
                    px-4 md:px-8 gap-2 md:gap-4 mb-16 text-center'>                              
            <h1 className='w-full heading3 md:heading1 lg:heading1 line-clamp-4'>
                Zonnepanelen op uw 
                <br />
                <span className='text-qoqu_Blue font-black heading1'>platte dak</span>                    
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
  )
}

export default Hero