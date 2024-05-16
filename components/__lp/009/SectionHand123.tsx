import dynamic from 'next/dynamic'
const HandPointer = dynamic(() => import('@/components/__lp/009/icons/HandPointer'))

const SectionHand = () => {
  return (

    <div className='w-full h-auto flex flex-col text-white rounded-xl gap-6'>
        <div className='w-full  h-auto flex flex-col gap-4 relative'>
            <div className='w-full h-full bg-qoqu_Dark_Grey/70 rounded-xl absolute top-2 left-2' />
            <div className='flex flex-row gap-3 justify-start items-center bg-black rounded-xl px-4 py-6 relative
            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
            md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl'>
                <p className='text-6xl'>
                    01
                </p> 
                <div className='w-full flex flex-col justify-start items-start'>
                    <p className='text-xl'>
                        Gratis woninginspectie
                    </p>
                    <p className='text-sm'>
                        Wij bieden een gratis en vrijblijvende woninginspectie aan. Onze adviseur komt persoonlijk bij u langs, neemt alle tijd om uw vragen te beantwoorden, en stelt  a een zorgvuldige inspectie van uw bitumen dak een persoonlijke offerte op maat voor u op.
                    </p>    
                </div> 
            </div>
        </div>
        <div className='w-full  h-auto flex flex-col gap-4 relative'>
            <div className='w-full h-full bg-qoqu_Dark_Grey/70 rounded-xl absolute top-2 left-2' />
            <div className='flex flex-row gap-3 justify-start items-center bg-black rounded-xl px-4 py-6 relative
            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
            md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl'>
                <p className='text-6xl'>
                    02
                </p> 
                <div className='w-full flex flex-col justify-start items-start'>
                    <p className='text-xl'>
                        Installatie
                    </p>
                    <p className='text-sm'>
                        Als u akkoord gaat met de offerte die onze adviseur bij u thuis heeft opgesteld, zal onze planner contact met u opnemen om een afspraak te plannen. We zorgen ervoor dat we binnen 4 weken na uw bestelling beginnen met de installatie van uw zonnepanelen op uw schuin bitumen dak. Deze installatie is meestal binnen één dag afgerond.
                    </p>    
                </div> 
            </div>
        </div> 
        <div className='w-full  h-auto flex flex-col gap-4 relative'>
            <div className='w-full h-full bg-qoqu_Dark_Grey/70 rounded-xl absolute top-2 left-2' />
            <div className='flex flex-row gap-3 justify-start items-center bg-black rounded-xl px-4 py-6 relative
            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
            md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl'>
                <p className='text-6xl'>
                    03
                </p> 
                <div className='w-full flex flex-col justify-start items-start'>
                    <p className='text-xl'>
                        Betaling
                    </p>
                    <p className='text-sm'>
                        Na de succesvolle en werkende installatie van uw zonnepanelen op uw schuin bitumen dak ontvangt u een factuur voor de betaling achteraf. U hoeft niet direct aan de deur te betalen; u kunt de betaling gemakkelijk regelen na voltooiing van de installatie.
                    </p>    
                </div> 
            </div>
        </div>           

    </div>
  )
}

export default SectionHand