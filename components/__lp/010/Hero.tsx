import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/010/ctaButtons/CtaButton2'))
const HeroImageSection = dynamic(() => import('@/components/__lp/010/HeroImageSection'))
const KlantenGuarante = dynamic(() => import('@/components/__lp/010/icons/KlantenGuarante'))
const Tag = dynamic(() => import("@/components/__lp/010/ui/RoofTag"))
const ArrowDrawing = dynamic(() => import('@/components/__lp/010/icons/ArrowDrawing'))


const Hero = () => {
  return (
    <div className='w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center
                    mt-12 px-4 md:px-8 gap-8 md:gap-4  text-center py-8 '>

      <div className='w-full max-w-[1400px] h-auto flex flex-col justify-center items-center md:justify-start md:items-start pr-0 lg:pr-6 xl:pr-2 gap-4 text-black'>
        <Tag />
        <h1 className='w-full text-4xl md:text-6xl lg:text-7xl font-extrabold letters text-center md:text-left'>
          Duitse zonnepanelen op uw <br></br>         
          <span className=' text-qoqu_Light_Blue underline underline-offset-2  font-extrabold'> Dakpannen   </span>                          
        </h1> 

        {/* texts container */}
        <div className='w-full md:w-[95%] max-w-[900px] flex flex-col justify-center items-center md:justify-start md:items-start'>
            <p className='text-center md:text-left text-xl font-normal py-4 md:py-6 -mb-12 '>
              Voor een hoogwaardige opwekking van zonne-energie kiest u voor zonnepanelen op uw pannendak. Vraag vandaag nog kosteloos en geheel vrijblijvend een woninginspectie aan voor een offerte op maat.
            </p>
            <ArrowDrawing />
        </div>        
        <CtaButton />
        <KlantenGuarante />
      </div>
      <div className='w-full h-auto flex justify-center md:justify-end items-center md:items-end'>
        <HeroImageSection />
      </div>                           
    </div>
  )
}

export default Hero