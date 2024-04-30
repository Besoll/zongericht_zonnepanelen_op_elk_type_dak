import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/005/ctaButtons/CtaButton2'))
const CompanyTag = dynamic(() => import('@/components/__lp/005/ui/CompanyTag'))
const Tag = dynamic(() => import('@/components/__lp/005/ui/CompanyTag'))
const SectionHand = dynamic(() => import('@/components/__lp/005/SectionHand'))



const Section3 = () => {
  return (
    <div  className='w-full flex flex-col justify-center items-center max-w-[1440px] 
    gap-4 md:gap-20 px-4 md:px-8 py-16 md:py-32'>
        <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center'>
            <div className='flex flex-col relative justify-center items-center w-full lg:w-1/4 md:min-w-[300px] 
            lg:min-w-[450px]'>
                <Image 
                    src='/lp/005/5-big.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-full lg:flex hidden"
                />
                <Image 
                    src='/lp/005/5.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-full md:flex lg:hidden hidden"
                />
                <Image 
                    src='/lp/005/5-small.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-full md:hidden flex"
                />
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-6'> 

                <Tag />        
                <h2 className='w-full h-auto text-3xl md:text-4xl lg:text-6xl font-extrabold md:text-left text-center'>
                    Meer Over Ons 
                </h2> 
                <p className='text-xl md:text-left text-center'>
                    Bij Zongericht streven we naar de perfecte balans tussen topkwaliteit producten en persoonlijke service. Ons geloof is stevig verankerd in het leveren van de best mogelijke zonnesystemen, nauwkeurig berekend voor maximaal rendement, afgestemd op de unieke energiebehoeften van onze klanten. Vanaf het eerste telefoongesprek met een geïnteresseerde klant, leggen we de nadruk op een persoonlijke benadering. Onze betrokkenheid stopt niet na een adviesgesprek of een huisbezoek. Integendeel, we blijven onze klanten ondersteunen met service en aandacht, zelfs na de installatie
                </p>
                <CtaButton />
            </div> 
        </div>  
    </div>
  )
}

export default Section3