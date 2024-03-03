import Image from 'next/image'

const Section1 = () => {
  return (
    <div className='flex w-full justify-center items-center flex-col md:flex-row max-w-[1200px] px-3 md:px-0 gap-0 md:gap-3 mb-16'>
        <div className='flex mt-6 mb-2 justify-center w-full px-6 md:px-0 items-center text-center md:text-left'>
            <h1 className='heading4 md:heading3'>
                Kies ook voor een betrouwbare partner in zonnepanelen en thuisbatterijen  
            </h1>
        </div>
        <div>   
            <p className=' text-center md:text-left'>
                Zongericht is gespecialiseerd in het plaatsen en leveren van zonnepanelen op particuliere woningen en wij weten als geen ander hoe belangrijk het is om de installatie zo op te leveren dat u als klant tevreden bent over de afwerking wat normaal bij het aanbieden van zonnepanelen bijna nooit meegenomen wordt bij het offerte traject .
            </p>
        </div>

    </div>
  )
}

export default Section1