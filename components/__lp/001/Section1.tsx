import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton2 = dynamic(() => import('@/components/__lp/001/ctaButtons/CtaButton2'))
const KlantenGuarante = dynamic(() => import('@/components/__lp/001/icons/KlantenGuarante'))

const Section1 = () => {
  return (
    <div className='flex w-full justify-center items-center md:justify-start md:items-start max-w-[1200px] 
    px-4 md:px-8 gap-0 md:gap-20 mb-16 flex-col md:flex-row ml-4'>      
        <div className='flex flex-col relative justify-center items-center w-[55%] md:min-w-[300px] 
        lg:min-w-[450px]'>
            <div className='flex w-full h-[550px] '>
                <Image 
                    src='/lp/001/2.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={510}
                    height={700}
                    className="w-full h-auto  rounded-[500px] bg-repeat-x bg-center"
                />
            </div>
            <div className=' w-[45%] h-auto items-center justify-center 
            -mt-52 -mr-[18rem]
            md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
            md:cursor-pointer md:hover:rotate-2
            
            '>
                <Image 
                    src='/lp/001/2-2.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={480}
                    height={480}
                    className="w-full h-auto rounded-full shadow-xl"
                />                   
            </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>
            <div className='w-full flex flex-col items-start mb-2 justify-start'>              
                <h2 className='w-full heading3 md:heading2 lg:heading1 md:text-left text-center line-clamp-4'>
                    Waarom kiezen voor Zongericht voor zonnepanelen op uw PVC dak?    
                </h2> 
            </div>

            {/* texts container */}
            <div className='w-full md:w-[80%]'>
                <p className='md:text-left text-center mb-4'>
                Bij Zongericht zijn we gepassioneerd door de kracht van de zon en gespecialiseerd
                in het installeren van zonne-energiesystemen op alle typen daken in Nederland,
                inclusief de specifieke kennis en ervaring met PVC daken.
                <br />
                Als erkende installateurs zetten we ons volledig in om onze klanten niet alleen tevreden te stellen, maar hen ook trots te maken op hun keuze voor Zongericht. We streven ernaar elke installatie met de hoogste kwaliteitsstandaarden uit te voeren, ondersteund door onze uitgebreide kennis van PVC daksystemen. Dit commitment aan kwaliteit wordt verder benadrukt door onze 10 jaar lange installatiegarantie, wat ons vertrouwen in ons werk en de duurzaamheid van onze installaties onderstreept.
                <br />
                Kiezen voor Zongericht betekent kiezen voor zekerheid, kwaliteit, en een groene toekomst, één dak tegelijk. Met onze gespecialiseerde kennis van PVC daken en onze toewijding aan topkwaliteit, stapt u met vertrouwen de zonne-energie revolutie binnen
                </p>
            </div>
            <CtaButton2 />
        </div>   
      
    </div>
  )
}

export default Section1