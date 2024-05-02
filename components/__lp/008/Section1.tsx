import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/007/ctaButtons/CtaButton2'))
const RoofTag = dynamic(() => import('@/components/__lp/007/ui/RoofTag'))
const SectionHand = dynamic(() => import('@/components/__lp/007/SectionHand'))



const Section1 = () => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    gap-4 md:gap-20 px-4 md:px-8 py-16 md:py-32'>
        <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center md:jsutify-start md:items-start'>
            <div className='flex flex-col relative justify-center items-center w-full lg:w-1/4 md:min-w-[300px] 
            lg:min-w-[450px] bg-qoqu_Grey/20 pr-7 py-7'>
                {/* 3 size image - mobile-tablet-desktop */}
                <Image 
                    src='/lp/007/2-big.webp'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0]
                                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:flex hidden
                                "
                />
                <Image 
                    src='/lp/007/2.webp'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0]
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
                />
                <Image 
                    src='/lp/007/2-small.webp'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full shadow-lg rounded-[0] flex md:hidden"
                />
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-6'> 

                <RoofTag />        
                <h2 className='w-full h-auto text-3xl md:text-4xl lg:text-6xl font-extrabold md:text-left text-center'>
                    Deskundige installatie van zonnepanelen op uw stalen dak  
                </h2> 
                <p className='text-xl md:text-left text-center'>
                    We zijn experts in het installeren van zonnepanelen op verschillende daktypes, en daar zijn we trots op. Ons team beschikt over de juiste kennis en ervaring, en helpen u daarom graag bij het installeren van zonnepanelen op uw stalen dak.
                </p>
                <SectionHand />
                <CtaButton />
            </div> 
        </div>  
    </div>
  )
}

export default Section1