import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col md:flex-row px-8 md:px-20 py-8 md:py-20 max-w-[1750px]'>
        <div className='w-full flex flex-col text-center md:text-start justify-center md:justify-start items-center md:items-start mb-6 md:mb-0'>
            <h1 className='heading3 mb-3 mt-8  text-white pl-2 uppercase
                        xs:heading2 
                        xl:heading1'>
                <span className=''>
                    Glas op Glas
                </span> 
                <span 
                    className='flex py-2 px-2 -ml-2 scale-70
                                 border-2 border-l-brand_original_secondary border-r-brand_original_secondary
                                text-orange w-fit rounded-3xl
                                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer'>
                        zonnepanelen <br className='flex md:hidden'></br> geproduceerd
                </span> 
                <span className=''>
                    in Duitsland
                </span>
            </h1>

            <div className='md:heading4 flex-col md:flex-row mb-4'>
                <span className='py-2 px-2 -ml-2 
                                text-gradient_special md:text-gradient_special2 md:mr-4'>
                    Hoger rendement
                </span>
                <br className='flex md:hidden'></br>
                <span className='py-2 px-2 -ml-2
                                text-gradient_special md:text-gradient_special2'>
                    Betere bescherming van cellen
                </span>
            </div>
            <p className='hidden md:flex max-w-[1200px] md:pr-12'>
                Ons team van experts staat klaar om uw overgang naar duurzame energie te ondersteunen met onze hoogwaardige glas-glas zonnepanelen. Vul het onderstaande formulier in voor een gratis inspectie. We zullen uw wensen beoordelen, de ideale oplossing berekenen en een concurrerende prijs bieden voor de installatie. In slechts 2 weken kunt u beginnen met het opwekken van duurzame energie met onze betrouwbare service en een indrukwekkende garantie van 30 jaar.
            </p>


        </div>


        <div className='w-full md:w-[45%] '>
        <div className='lg:flex-col justify-start w-full  '>
            <div className='flex flex-row justify-between pb-2 max-h-[500px]'>
                <Image 
                    src='/zonnepanelen/IQ-7X-small.webp'
                    alt='glas glas zonnepanelen op elk type dak testimonial'
                    width={140}
                    height={125}
                    loading='lazy'
                    className=" w-[50%] h-auto pr-2 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
                />   
                <Image 
                    src='/zonnepanelen/MeyerBurger-M-small.webp'
                    alt='glas glas zonnepanelen op elk type dak op dakkapel'
                    width={140}
                    height={125}
                    loading='lazy'
                    className="w-[50%]  h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
                />   
            </div>
            <div className='hidden md:flex flex-row-reverse justify-between pb-2'>
                <Image 
                    src='/zongericht-logo.svg'
                    alt='glas glas zonnepanelen op elk type dak testimonial'
                    width={140}
                    height={125}
                    loading='lazy'
                    className="object-cover h-auto w-[100%] md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
                />  
            </div>   
        </div>


        </div>
        
          
    </div>   
  )
}

export default Hero