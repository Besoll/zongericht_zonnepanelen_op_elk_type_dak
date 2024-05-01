import dynamic from 'next/dynamic'
const CtaButton2 = dynamic(() => import('@/components/__lp/007/ctaButtons/CtaButton2'))
const HeroImageSection = dynamic(() => import('@/components/__lp/007/HeroImageSection'))
const KlantenGuarante = dynamic(() => import('@/components/__lp/007/icons/KlantenGuarante'))

const Hero = () => {
  return (
    <div className='w-full max-w-[1440px] flex flex-col-reverse md:flex-row justify-center items-center
                    mt-24 md:mt-32 px-4 md:px-8 gap-8 md:gap-4 mb-16 text-center py-8 md:py-32'>

      <div className='w-full max-w-[900px] h-auto flex flex-col justify-center md:justify-start items-center md:items-start gap-4'>
        <h1 className='w-full text-4xl md:text-6xl lg:text-7xl md:text-left font-extrabold letters'>
          Verrijk uw            
          <span className=' text-qoqu_Night_Blue font-extrabold'> stalen dak </span>
          met glas-glas zonnepanelen                    
        </h1> 

        {/* texts container */}
        <div className='w-full md:w-[95%]'>
            <p className='text-center md:text-left text-xl font-normal py-4 md:py-6 mb-4'>
              Sterk en duurzaam: zonnepanelen op een stalen dak. Vraag vandaag nog kosteloos en geheel vrijblijvend een wooninspectie aan voor een offerte op maat.
            </p>
        </div>        
        <CtaButton2 />
        <KlantenGuarante />
      </div>
      <div className='w-full h-auto flex justify-center md:justify-end items-center md:items-end'>
        <HeroImageSection />
      </div>                           
    </div>
  )
}

export default Hero