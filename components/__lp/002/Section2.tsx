import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton2 = dynamic(() => import('@/components/__lp/002/ctaButtons/CtaButton2'))
const SectionBlueHand = dynamic(() => import('@/components/__lp/002/SectionBlueHand'))



const Section2 = () => {
  return (
    <div  className='flex w-full justify-center items-center md:items-start max-w-[1440px] 
    px-4 md:px-8 flex-col md:flex-row-reverse mb-16 py-16 md:mb-24 md:py-24 gap-4'>
              
        <div className='flex flex-col relative justify-center items-center w-[75%] md:min-w-[300px] 
        lg:min-w-[450px] md:aspect-[0.98] aspect-[0.98]'>
            <div className='flex w-full h-auto '>
                <Image 
                    src='/lp/002/2-big.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={551}
                    className="absolute top-0 w-full h-auto rounded-lg xl:flex hidden"
                />
                <Image 
                    src='/lp/002/2.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={551}
                    className="absolute top-0 w-full h-auto rounded-lg md:flex xl:hidden hidden"
                />
                <Image 
                    src='/lp/002/2-small.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={551}
                    className="absolute top-0 w-full h-auto rounded-lg md:hidden flex"
                />
            </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3 md:text-left text-center'>
            <p className='text-qoqu_Blue font-semibold '>
                Plat dak
            </p>             
            <h2 className='w-full heading3 md:heading2 lg:heading1 line-clamp-4'>
                Feilloze installatie van uw zonnepanelen op elk daktype 
            </h2> 

            <div className='w-full md:w-[80%] flex flex-col gap-4 py-4'>
                <p className=''>
                    Stel je voor: een stralende ochtend, de zon die opkomt en haar warme stralen over je huis laat schijnen. Je geniet van je koffie en realiseert je iets prachtigs: je huis draagt bij aan een duurzame toekomst.
                </p>
                <p className=''>
                    Ons vakmanschap en expertise in het plaatsen van zonnepanelen op elk type dak zorgen ervoor dat we kwaliteit kunnen leveren aan al onze klanten, zelfs op platte daken. Met ons team bent u verzekerd van een perfecte installatie, elke keer weer. Kies voor een groenere toekomst en laat ons uw partner zijn in duurzaam wonen.
                </p>
            </div>
            <SectionBlueHand />
            <CtaButton2 />                
        </div>      
           

    </div>
  )
}

export default Section2