import Image from 'next/image'
import dynamic from 'next/dynamic'
const CompanyTag = dynamic(() => import('@/components/__lp/003/ui/CompanyTag'))


const Section3 = () => {
  return (
    <div  className='w-full h-auto flex flex-col justify-center items-center max-w-[1440px] 
    px-4 md:px-8 py-12 md:py-20 gap-4 md:gap-8'>
        
        <div className='w-full flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-2'>
            <div className='w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start'>
                <CompanyTag />              
                <h2 className='w-full heading3 md:heading2 lg:heading1 md:text-left text-center line-clamp-4'>
                    Meer over ons   
                </h2> 
            </div>
            <div className='w-full  flex flex-col gap-4 py-4'>
                <p className='md:text-left text-center'>
                    Bij Zongericht combineren we topkwaliteit producten met persoonlijke service. Ons aanbod is nu uitgebreid met geavanceerde thuisbatterijen, naast onze hoogwaardige zonnepanelen. Dit maakt het mogelijk om een compleet zonne-energiesysteem aan te bieden, afgestemd op de specifieke energiebehoeften van onze klanten.
                </p>
                <p className='md:text-left text-center'>
                    Vanaf het eerste contact leggen we de nadruk op een persoonlijke benadering, waarbij we luisteren naar de wensen van onze klanten en adviseren over de optimale combinatie van zonnepanelen en thuisbatterijen. Zo kunnen onze klanten niet alleen overdag van zonne-energie genieten, maar ook energie opslaan voor later gebruik.
                </p>
                <p className='md:text-left text-center'>
                    Onze betrokkenheid eindigt niet na installatie; we bieden voortdurende ondersteuning om onze klanten te helpen hun energieonafhankelijkheid te maximaliseren en bij te dragen aan een groenere toekomst.
                </p>
            </div>
        </div> 

        <div className='flex flex-col relative justify-center items-center w-full md:min-w-[300px] 
            lg:min-w-[450px]'>
            <div className='flex w-full h-auto '>
                <Image 
                    src='/lp/003/3-big.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={551}
                    className="w-full h-auto rounded-lg lg:flex hidden"
                />
                <Image 
                    src='/lp/003/3.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={551}
                    className="w-full h-auto rounded-lg md:flex lg:hidden hidden"
                />
                <Image 
                    src='/lp/003/3-small.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={551}
                    className="w-full h-auto rounded-lg md:hidden flex"
                />
            </div>
        </div>
    </div>
  )
}

export default Section3


