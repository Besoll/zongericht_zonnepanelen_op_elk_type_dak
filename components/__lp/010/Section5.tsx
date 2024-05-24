import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/010/ctaButtons/CtaButton2'))
const Tag = dynamic(() => import('@/components/__lp/010/ui/CompanyTag'))



const Section5 = () => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    px-4 md:px-8'>
        <div className='w-full h-auto flex flex-col md:flex-row-reverse gap-4 md:gap-20 justify-center items-center '>

            <div className='w-full h-auto md:h-fit md:w-auto flex flex-col relative justify-center items-center object-fill'>

                {/* <div className='w-full h-full bg-qoqu_Dark_Grey rounded-none rounded-tr-[100px] rounded-bl-[100px]  absolute  bottom-4 right-4 z-0' /> */}

                {/* 3 size image - mobile-tablet-desktop */}
                <Image 
                    src='/lp/010/7-big.webp'
                    alt='glas glas zonnepanelen op Leistenen dak 5'
                    width={400}
                    height={600}
                    className="h-full w-auto rounded-none  z-10  
                                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:flex hidden
                                "
                />
                <Image 
                    src='/lp/010/7.webp'
                    alt='glas glas zonnepanelen op Leistenen dak 5'
                    width={400}
                    height={600}
                    className="h-full w-auto rounded-none  z-10
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
                />
                <Image 
                    src='/lp/010/7-small.webp'
                    alt='glas glas zonnepanelen op Leistenen dak 5'
                    width={400}
                    height={600}
                    className="h-auto w-full shadow-lg rounded-none  z-10 flex md:hidden"
                />

                <Image 
                    src='/lp/010/6-big.webp'
                    alt='glas glas zonnepanelen op dakpannen 2'
                    width={250}
                    height={200}
                    className="w-[45%] h-auto rounded-[0] absolute -bottom-4 -left-10
                    md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 shadow-xl
                    lg:flex hidden object-cover z-10
                                "
                />
                <Image 
                    src='/lp/010/6.webp'
                    alt='glas glas zonnepanelen op dakpannen 2'
                    width={400}
                    height={600}
                    className="w-[45%] h-auto rounded-[0] absolute -bottom-4 -left-10 
                    md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 shadow-xl md:hover:shadow-xl
                    lg:hidden hidden md:flex z-10"
                />
                <Image 
                    src='/lp/010/6-small.webp'
                    alt='glas glas zonnepanelen op dakpannen 2'
                    width={400}
                    height={600}
                    className="object-cover w-[45%] h-auto rounded-[0] absolute -bottom-4 left-0 md:-left-10 shadow-xl
                    flex md:hidden z-10"
                />

            </div>

            <div className='w-full md:w-[40%] flex flex-col justify-center items-center md:justify-start md:items-start gap-6 py-16 md:py-32'> 

                <Tag />        
                <h2 className='w-full h-auto text-3xl md:text-4xl lg:text-6xl font-extrabold md:text-left text-center'>
                    <span className='text-qoqu_Light_Blue'>Meer</span> over ons 
                </h2> 
                <p className='text-xl md:text-left text-center'>
                    Bij Zongericht streven we naar de perfecte balans tussen topkwaliteit producten en persoonlijke service. Ons geloof is stevig verankerd in het leveren van de best mogelijke zonnesystemen, nauwkeurig berekend voor maximaal rendement, afgestemd op de unieke energiebehoeften van onze klanten. We zijn specialist in het plaatsen van zonnepanelen op elk type dak, en hebben de expertise in huis om voor de meest complexe uitdagingen een oplossing te vinden. Vanaf het eerste telefoongesprek met een geïnteresseerde klant, leggen we de nadruk op een persoonlijke benadering. Onze betrokkenheid stopt niet na een adviesgesprek of een huisbezoek. Integendeel, we blijven onze klanten ondersteunen met service en aandacht, zelfs na de installatie.
                </p>
                <CtaButton />
            </div> 
        </div>  
    </div>
  )
}

export default Section5