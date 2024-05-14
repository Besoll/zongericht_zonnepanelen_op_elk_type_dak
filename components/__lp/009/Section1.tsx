import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/009/ctaButtons/CtaButton2'))
// const Tag = dynamic(() => import('@/components/__lp/009/ui/CompanyTag'))
const SectionHand = dynamic(() => import('@/components/__lp/009/SectionHand'))



const Section1 = () => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    gap-4 md:gap-20 px-4 md:px-8'>
        <div className='w-full h-auto flex flex-col md:flex-row-reverse gap-4 md:gap-20 justify-center items-center md:jsutify-start md:items-start'>
            <div className='w-full md:min-w-[300px] lg:min-w-[450px] h-auto
            flex flex-col relative justify-center items-center ml-4 mb-6'>

                <div className='w-full h-full bg-qoqu_Dark_Grey rounded-xl absolute top-4 right-4 z-0' />
                {/* 3 size image - mobile-tablet-desktop */}
                <Image 
                    src='/lp/009/2-big.webp'
                    alt='glas glas zonnepanelen op schuin bitumen dak 2'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-xl z-10
                                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:flex hidden
                                "
                />
                <Image 
                    src='/lp/009/2.webp'
                    alt='glas glas zonnepanelen op schuin bitumen dak 2'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-xl z-10
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
                />
                <Image 
                    src='/lp/009/2-small.webp'
                    alt='glas glas zonnepanelen op schuin bitumen dak 2'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full shadow-lg rounded-xl z-10 flex md:hidden"
                />
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-6'> 
       
                <h2 className='w-full h-auto text-3xl md:text-4xl lg:text-6xl font-extrabold md:text-left text-center'>
                    Schuin bitumen daken Waarom Zongericht?
                </h2> 
                <p className='text-xl md:text-left text-center'>
                    Bij Zongericht zijn we trots op onze service en kwaliteit. We installeren op elk type dak waaronder schuin bitumen daken en bieden 10 jaar garantie op onze installaties. Zo laten we zien hoe zeker we zijn van ons werk. We zorgen ervoor dat je blij en trots bent met je keuze voor duurzame energie. Elk project pakken we met de hoogste standaarden aan, omdat jouw tevredenheid ons doel is.
                </p>
                <SectionHand />
                <CtaButton />
            </div> 
        </div>  
    </div>
  )
}

export default Section1