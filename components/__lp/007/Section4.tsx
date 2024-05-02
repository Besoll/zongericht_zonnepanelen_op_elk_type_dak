import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/007/ctaButtons/CtaButton2'))
const Tag = dynamic(() => import('@/components/__lp/007/ui/RoofTag'))



const Section4 = () => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    gap-4 md:gap-20 px-4 md:px-8 py-16 md:py-32'>
        <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center md:jsutify-start md:items-start'>
            <div className='flex flex-col relative justify-center items-center w-full lg:w-1/4 md:min-w-[300px] 
            lg:min-w-[450px] bg-qoqu_Grey/20 pl-7 py-7'>
                {/* 3 size image - mobile-tablet-desktop */}
                <Image 
                    src='/lp/007/4-big.webp'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="h-auto w-full rounded-[0]
                                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:flex hidden
                                "
                />
                <Image 
                    src='/lp/007/4.webp'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="h-auto w-full rounded-[0]
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
                />
                <Image 
                    src='/lp/007/4-small.webp'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="h-auto w-full shadow-lg rounded-[0] flex md:hidden"
                />
            </div>

            <div className='w-full md:w-[65%] flex flex-col justify-center items-center md:justify-start md:items-start gap-6'> 

                <Tag />        
                <h2 className='w-full h-auto text-3xl md:text-4xl lg:text-6xl font-extrabold md:text-left text-center'>
                Meer over ons
                </h2> 
                <p className='text-xl md:text-left text-center'>
                    Bij Zongericht streven we naar de perfecte balans tussen topkwaliteit producten en persoonlijke service. Ons geloof is stevig verankerd in het leveren van de best mogelijke zonnesystemen, nauwkeurig berekend voor maximaal rendement, afgestemd op de unieke energiebehoeften van onze klanten. Vanaf het eerste telefoongesprek met een geïnteresseerde klant, leggen we de nadruk op een persoonlijke benadering. Onze betrokkenheid stopt niet na een adviesgesprek of een huisbezoek. Integendeel, we blijven onze klanten ondersteunen met service en aandacht, zelfs na de installatie.
                </p>
                <CtaButton />
            </div> 
        </div>  
    </div>
  )
}

export default Section4