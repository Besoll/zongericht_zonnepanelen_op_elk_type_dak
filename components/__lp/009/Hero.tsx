import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/009/ctaButtons/CtaButton2'))
const HeroImageSection = dynamic(() => import('@/components/__lp/009/HeroImageSection'))
const KlantenGuarante = dynamic(() => import('@/components/__lp/009/icons/KlantenGuarante'))
// const StatisticsCards = dynamic(() => import('@/components/__lp/009/StatisticsCards'))
// const Tag = dynamic(() => import("@/components/__lp/009/ui/RoofTag"))


const Hero = () => {
  return (
    <div className='w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center md:min-h-[700px]
                    mt-24 md:mt-0 px-4 md:px-8 gap-8 md:gap-4  text-center py-8 md:py-0 '>

      <div className='w-full max-w-[1400px] h-auto flex flex-col justify-center items-center md:justify-start md:items-start gap-4 relative md:pt-24'>
        
        <div className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-qoqu_Grey/50 rounded-full absolute 
        left-3 -top-3 md:-left-5 md:top-20 z-0'/>
        <h1 className='w-full text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal letters text-center md:text-left z-10'>
          Zonnepanelen op uw <br className='hidden lg:flex'></br>         
          <span className=' font-extrabold'> schuin bitumen dak</span>                          
        </h1> 

        {/* texts container */}
        <div className='w-full md:w-[95%] max-w-[700px]'>
            <p className='text-center md:text-left text-xl font-normal py-4 md:py-6 mb-4'>
              Bij Zongericht beschikken wij over de kennis en ervaring die nodig zijn voor het installeren van zonnepanelen op uw leistenen dak.
            </p>
        </div>        
        <CtaButton />
        <KlantenGuarante />
      </div>
      <div className='w-full h-full flex flex-col justify-end items-end'>
        <div className='w-[90px] h-[90px] md:w-[70px] md:h-[70px] bg-qoqu_Grey rounded-full 
        -mb-12 mr-10 md:hidden'/>
        <HeroImageSection />
      </div>

    </div>
  )
}

export default Hero