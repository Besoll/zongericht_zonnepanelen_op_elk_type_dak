import Image from 'next/image'
import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/010/ctaButtons/CtaButton2'))




const Section2Part3 = () => {
  return (    
    <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center'>
        <div className='flex flex-col relative justify-center items-center w-full md:min-w-[300px] 
        lg:min-w-[450px]'>
            <Image 
                src='/lp/010/5-big.webp'
                alt='zonnepanelen op schuin pvc dak'
                width={400}
                height={250}
                className="w-full h-auto rounded-none lg:flex hidden hover:scale-105 hover:cursor-pointer hover:rotate-2 transition duration-300 ease-in-out shadow-lg"
            />
            <Image 
                src='/lp/010/5.webp'
                alt='zonnepanelen op schuin pvc dak'
                width={400}
                height={250}
                className="w-full h-auto rounded-none md:flex lg:hidden hidden hover:scale-105 hover:cursor-pointer hover:rotate-2 transition duration-300 ease-in-out shadow-lg"
            />
            <Image 
                src='/lp/010/5-small.webp'
                alt='zonnepanelen op schuin pvc dak'
                width={400}
                height={250}
                className="w-full h-auto rounded-none md:hidden flex"
            />
        </div>

        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>       
            <h2 className='w-full text-2xl md:text-3xl lg:text-4xl font-extrabold md:text-left text-center'>
                Betaling na installatie op factuur
            </h2> 
            <p className='md:text-left text-center  pb-2 md:pb-8'>
                We werken met een betaling die plaatsvindt nadat de dienst is geleverd. Na de plaatsing en aansluiting van de zonnepanelen zorgt de installatiemonteur persoonlijk voor een correcte ingebruikname van de installatie en stelt uw monitoring software in. Samen met u loopt hij vervolgens nog eens door het volledige systeem tijdens een eindcontrole. U kunt daarbij meteen ook al uw resterende vragen kwijt over de werking van uw installatie. Na afloop verzenden wij een factuur, en kunt u deze op uw gemak overmaken.
            </p>
            <CtaButton />

        </div> 
    </div>  
  )
}

export default Section2Part3

