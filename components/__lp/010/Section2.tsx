import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/009/ctaButtons/CtaButton2'))
// const Tag = dynamic(() => import('@/components/__lp/009/ui/CompanyTag'))
const SectionHand123 = dynamic(() => import('@/components/__lp/009/SectionHand123'))



const Section1 = () => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    gap-4 md:gap-24 px-4 md:px-8'>
        <div className='w-full h-auto flex flex-col md:flex-row-reverse gap-4 md:gap-20 justify-center items-center md:jsutify-start md:items-start'>
            <div className='w-full md:min-w-[300px] lg:min-w-[450px] h-auto
            flex flex-col relative justify-center items-center ml-4 mb-6'>

                <div className='w-full h-full text-qoqu_Dark_Grey outline outline-2 rounded-none rounded-t-full absolute  left-4 z-0' />
                {/* 3 size image - mobile-tablet-desktop */}
                <Image 
                    src='/lp/009/4-big.webp'
                    alt='glas glas zonnepanelen op schuin bitumen dak 2'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-none rounded-t-full z-10
                    md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:flex hidden
                    "
                />
                <Image 
                    src='/lp/009/4.webp'
                    alt='glas glas zonnepanelen op schuin bitumen dak 2'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-none rounded-t-full z-10
                    md:hover:scale-110  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
                />
                <Image 
                    src='/lp/009/4-small.webp'
                    alt='glas glas zonnepanelen op schuin bitumen dak 2'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full shadow-lg rounded-none rounded-t-full z-10 flex md:hidden"
                />
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-6 md:gap-12'> 
       
                <h2 className='w-full h-auto text-3xl md:text-4xl lg:text-6xl font-extrabold md:text-left text-center'>
                    Onze werkwijze
                </h2> 
                <p className='text-base md:text-left text-center'>
                    Bij Zongericht zetten we ons volledig in voor kwaliteit en vakmanschap; we gaan altijd een stap verder dan andere installateurs. Dat is de reden waarom we ons hebben gespecialiseerd in het installeren van onder andere zonnepanelen op schuin bitumen daken. We begrijpen dat elk dak uniek is en vereist dat we onze expertise en zorgvuldigheid toepassen om de beste resultaten te behalen. Kies voor Zongericht, waar we expertise combineren met zorg voor uw dak.
                </p>
                <SectionHand123 />
                <CtaButton />
            </div> 
        </div>  
    </div>
  )
}

export default Section1