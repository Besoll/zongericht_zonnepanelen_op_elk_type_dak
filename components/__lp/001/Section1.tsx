import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton2 = dynamic(() => import('@/components/__lp/001/ctaButtons/CtaButton2'))

const IsntalationSolarBlue = dynamic(() => import('@/components/__lp/001/icons/IsntalationSolarBlue'))
const PaymentBlue = dynamic(() => import('@/components/__lp/001/icons/PaymentBlue'))
const CustomerSupportBlue = dynamic(() => import('@/components/__lp/001/icons/CustomerSupportBlue'))

const Section1 = () => {
  return (
    <div  className='flex w-full justify-center items-center max-w-[1440px] 
    px-4 md:px-8 flex-col mb-16 py-16 md:mb-24 md:py-24'>
        <div className='flex w-full justify-center items-center md:justify-start md:items-start
        gap-6 md:gap-20 flex-col md:flex-row ml-4'>      
            <div className='flex flex-col relative justify-center items-center w-[75%] md:min-w-[300px] 
            lg:min-w-[450px] md:aspect-[1/1.8] aspect-[2.90381125/4]'>
                <div className='flex w-full h-auto '>
                    <Image 
                        src='/lp/001/2.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        className="absolute top-0 w-full h-auto rounded-[500px] xl:flex hidden"
                    />
                    <Image 
                        src='/lp/001/2.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        className="absolute top-0 w-full h-auto rounded-[500px] md:flex xl:hidden hidden"
                    />
                    <Image 
                        src='/lp/001/2-small.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        className="absolute top-0 w-full h-auto rounded-[500px] md:hidden flex"
                    />
                </div>
                <div className=' w-[45%] h-auto items-center justify-center 
                mt-[10rem] -mr-[10rem] md:-mr-[18rem] xl:-mr-[25rem]  md:flex hidden
                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2
                
                '>
                    <Image 
                        src='/lp/001/2-2.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        className="w-3/4 z-10 h-auto rounded-full shadow-xl"
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

        <div className='flex flex-col gap-8'>
            <hr className='mt-16 h-[2px] bg-gray-300'></hr>
            <h2 className='heading2 text-center font-semibold'>
                Onze werkwijze
            </h2>
            <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex flex-col w-full md:w-1/3 gap-4 bg-white rounded-lg px-4 md:px-6 py-4 md:py-8 shadow-lg text-center justify-start items-center md:min-h-[350px]
                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                    <div className='p-6 rounded-lg bg-qoqu_Blue/10'>
                        <CustomerSupportBlue />
                    </div>
                    <p className='text-xl font-semibold'>
                        Gratis huis inspectie
                    </p>
                    <p className='text-center'>
                        Wij bieden een gratis en vrijblijvende huisinspectie, waarbij onze adviseur uw vragen beantwoordt en een persoonlijke offerte op maat opstelt na zorgvuldige inspectie.
                    </p>
                </div>
                <div className='flex flex-col w-full md:w-1/3 gap-4 bg-white rounded-lg px-4 md:px-6 py-4 md:py-8 shadow-lg text-center justify-start items-center md:min-h-[350px]
                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl '>
                    <div className='p-6 rounded-lg bg-qoqu_Blue/10'>
                        <IsntalationSolarBlue />
                    </div>
                    <p className='text-xl font-semibold'>
                        Installatie
                    </p>
                    <p className='text-center'>
                        Als u instemt met de offerte van onze adviseur die bij u thuis is geweest, regelt onze planner een afspraak met u. We beloven binnen 4 weken na uw bestelling te starten met de installatie van uw zonnepanelen, die meestal binnen één dag voltooid is.
                    </p>
                </div>
                <div className='flex flex-col w-full md:w-1/3 gap-4 bg-white rounded-lg px-4 md:px-6 py-4 md:py-8 shadow-lg text-center justify-start items-center md:min-h-[350px]
                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                    <div className='p-6 rounded-lg bg-qoqu_Blue/10'>
                        <PaymentBlue />
                    </div>
                    <p className='text-xl font-semibold'>
                        Betaling
                    </p>
                    <p className='text-center'>
                        Na de succesvolle en werkende installatie van uw zonnepanelen op uw pvc dak, ontvangt u een factuur voor de betaling achteraf. U hoeft niet direct aan de deur te betalen; u kunt de betaling gemakkelijk regelen na voltooiing van de installatie.
                    </p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Section1