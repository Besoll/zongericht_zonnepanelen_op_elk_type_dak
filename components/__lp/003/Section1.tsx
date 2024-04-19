import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton2 = dynamic(() => import('@/components/__lp/003/ctaButtons/CtaButton5'))
const SectionHand = dynamic(() => import('@/components/__lp/003/SectionHand'))
const RoofTag = dynamic(() => import('@/components/__lp/003/ui/RoofTag'))



const Section1 = () => {
  return (
    <div  className='flex w-full justify-center items-center md:items-start max-w-[1440px] 
    px-4 md:px-8 flex-col md:flex-row mb-16 py-16 md:mb-24 md:py-24 gap-4 md:gap-20'>
              
        <div className='md:w-[75%] flex flex-col relative justify-center items-center w-full md:min-w-[300px] 
        lg:min-w-[450px] md:aspect-[1/0.98] aspect-[1/0.98]'>
            <div className='flex w-full h-auto '>
                <Image 
                    src='/lp/003/2-big.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={551}
                    className="absolute top-0 w-full h-auto rounded-lg xl:flex hidden"
                />
                <Image 
                    src='/lp/003/2.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={551}
                    className="absolute top-0 w-full h-auto rounded-lg md:flex xl:hidden hidden"
                />
                <Image 
                    src='/lp/003/2-small.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={551}
                    className="absolute top-0 w-full h-auto rounded-lg md:hidden flex"
                />
            </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-2 md:text-left text-center'>
            <RoofTag />            
            <h2 className='w-full heading3 md:heading2 lg:heading1 line-clamp-4'>
                Wat kunt u verwachten?
            </h2> 

            <div className='w-full md:w-[80%] flex pb-4 flex-col'>
                <p className='text-xl'>
                    Ontdek nu onze expertise in zonnepanelen installaties op parabool daken! Ons deskundige team, met uitgebreide kennis en ervaring in zonnepanelen installaties, staat klaar om elke uitdaging aan te gaan.
                </p>
            </div>
            <SectionHand />
            <CtaButton2 />                
        </div>      
           

    </div>
  )
}

export default Section1