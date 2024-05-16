import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/009/ctaButtons/CtaButton2'))
const Tag = dynamic(() => import('@/components/__lp/009/ui/CompanyTag'))



const Section4 = () => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    px-4 md:px-8'>
        <div className='w-full h-auto flex flex-col md:flex-row-reverse gap-4 md:gap-20 justify-center items-center '>

            <div className='w-full h-auto md:h-fit md:w-auto flex flex-col relative justify-center items-center object-fill'>

                <div className='w-full h-full bg-qoqu_Dark_Grey rounded-none rounded-tr-[100px] rounded-bl-[100px] absolute  bottom-4 right-4 z-0' />
                {/* 3 size image - mobile-tablet-desktop */}
                <Image 
                    src='/lp/009/5-big.webp'
                    alt='glas glas zonnepanelen op Leistenen dak 5'
                    width={400}
                    height={600}
                    className="h-full w-auto rounded-none rounded-tr-[100px] rounded-bl-[100px] z-10  
                                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:flex hidden
                                "
                />
                <Image 
                    src='/lp/009/5.webp'
                    alt='glas glas zonnepanelen op Leistenen dak 5'
                    width={400}
                    height={600}
                    className="h-full w-auto rounded-none rounded-tr-[100px] rounded-bl-[100px] z-10
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
                />
                <Image 
                    src='/lp/009/5-small.webp'
                    alt='glas glas zonnepanelen op Leistenen dak 5'
                    width={400}
                    height={600}
                    className="h-auto w-full shadow-lg rounded-none rounded-tr-[100px] rounded-bl-[100px] z-10 flex md:hidden"
                />
            </div>

            <div className='w-full md:w-[40%] flex flex-col justify-center items-center md:justify-start md:items-start gap-6 py-16 md:py-32'> 

                <Tag />        
                <h2 className='w-full h-auto text-3xl md:text-4xl lg:text-6xl font-extrabold md:text-left text-center'>
                Over ons
                </h2> 
                <p className='text-xl md:text-left text-center'>
                    Als professionele installateur van zonnepanelen beschikken wij over de expertise om op elk type dak zonnepanelen te installeren. Wij zijn toegewijd aan kwaliteit en ondersteunen dit met een 10 jaar durende installatiegarantie. Onze ervaring stelt ons in staat om voor elke situatie een zongerichte oplossing te bieden, zodat u maximaal kunt profiteren van uw investering in zonne-energie. Vertrouw op ons vakmanschap voor een duurzame en efficiënte energieoplossing.
                </p>
                <CtaButton />
            </div> 
        </div>  
    </div>
  )
}

export default Section4