import Image from 'next/image'
import dynamic from 'next/dynamic'
const Cards6Steps = dynamic(() => import('@/components/__lp/008-V1/ui/Cards6Steps'))
const RoofTag = dynamic(() => import("@/components/__lp/008-V1/ui/RoofTag"))
const CtaButton = dynamic(() => import('@/components/__lp/008-V1/ctaButtons/CtaButton2'))

const Section3 = () => {
  return (
    <div className='w-full max-w-[1440px] h-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 px-4'>

      {/* 3 size image - mobile-tablet-desktop */}
      <Image 
          src='/lp/008-V1/3-big.webp'
          alt='glas glas zonnepanelen op leistenen dak 3'
          width={400}
          height={600}
          className="object-cover h-auto w-full rounded-[0]
                     lg:flex hidden
                      "
      />
      <Image 
          src='/lp/008-V1/3.webp'
          alt='glas glas zonnepanelen op leistenen dak 3'
          width={400}
          height={600}
          className="object-cover h-auto w-full rounded-[0]
                  lg:hidden hidden md:flex"
      />
      <Image 
          src='/lp/008-V1/3-small.webp'
          alt='glas glas zonnepanelen op leistenen dak 3'
          width={400}
          height={600}
          className="object-cover h-auto w-full rounded-[0] flex md:hidden"
      />


      <div className=''>
        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-6'> 
          <RoofTag />        
          <h2 className='w-full h-auto text-3xl md:text-4xl lg:text-6xl font-extrabold md:text-left text-center'>
          Waarom Zongericht?
          </h2> 
          <p className='text-xl md:text-left text-center md:pb-8'>
            Bij Zongericht zijn we trots op onze service en kwaliteit. We installeren op elk type dak en bieden 10 jaar garantie op onze installaties. Zo laten we zien hoe zeker we zijn van ons werk. We zorgen ervoor dat je blij en trots bent met je keuze voor duurzame energie. Elk project pakken we met de hoogste standaarden aan, omdat jouw tevredenheid ons doel is.
          </p>
          <Cards6Steps />
          
          <CtaButton />
        </div> 
      </div>
    </div>
  )
}

export default Section3