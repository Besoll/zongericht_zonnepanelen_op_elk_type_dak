import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/007/ctaButtons/CtaButton2'))
const RoofTag = dynamic(() => import('@/components/__lp/007/ui/RoofTag'))
const Section6Steps = dynamic(() => import('@/components/__lp/007/Section6Steps'))




const Section2 = () => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    gap-4 md:gap-20 px-4 md:px-8 py-16 md:py-32'>
        <div className='w-full h-auto flex flex-col md:flex-row-reverse gap-4 md:gap-20 justify-center items-center md:jsutify-start md:items-start'>
            <div className='flex flex-col relative justify-center items-center w-full lg:w-1/4 md:min-w-[300px] 
            lg:min-w-[450px] bg-qoqu_Grey/20 pl-7 py-7'>
                {/* 3 size image - mobile-tablet-desktop */}
                <Image 
                    src='/lp/007/3-big.webp'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0]
                                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:flex hidden
                                "
                />
                <Image 
                    src='/lp/007/3.webp'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0]
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
                />
                <Image 
                    src='/lp/007/3-small.webp'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full shadow-lg rounded-[0] flex md:hidden"
                />
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-6'> 

                <RoofTag />        
                <h2 className='w-full h-auto text-3xl md:text-4xl lg:text-6xl font-extrabold md:text-left text-center'>
                    Zonnepanelen op uw stalen dak: waarom kiezen voor Zongericht?
                </h2> 
                <p className='text-xl md:text-left text-center'>
                    Bij Zongericht zijn we gespecialiseerd in het plaatsen van zonnepanelen op elk daktype. Omdat we elk huis eerst bezoeken voor een technische schouwing, kunnen we een plan maken op maat. We optimaliseren de energieprestaties op basis van uw locatie en daktype en zorgen voor een volledige administratieve afwikkeling. We zijn dan ook trots op onze hoge klanttevredenheid. Komen we binnenkort bij u langs?
                </p>
                <Section6Steps />
                <CtaButton />
            </div> 
        </div>  
    </div>
  )
}

export default Section2

