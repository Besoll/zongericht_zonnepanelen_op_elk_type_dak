import dynamic from 'next/dynamic'
const HandPointer = dynamic(() => import('@/components/__lp/009/icons/HandPointer'))

const SectionHand = () => {
  return (

    <div className='w-full h-auto flex flex-col text-white rounded-xl'>
        <div className='w-full  h-auto flex flex-col gap-4 relative'>
        <div className='w-full h-full bg-qoqu_Dark_Grey rounded-xl absolute top-2 left-2' />
            <div className='flex flex-row gap-2 justify-start items-center bg-black rounded-xl px-4 py-4 relative'>
                <p className='text-6xl'>
                    01
                </p> 
                <div className='w-full flex flex-col justify-start items-start'>
                    <p className='text-xl'>
                        Gratis woninginspectie
                    </p>
                    <p className='text-base'>
                        Wij bieden een gratis en vrijblijvende woninginspectie aan. Onze adviseur komt persoonlijk bij u langs, neemt alle tijd om uw vragen te beantwoorden, en stelt  a een zorgvuldige inspectie van uw bitumen dak een persoonlijke offerte op maat voor u op.
                    </p>    
                </div> 
            </div>
            

        </div>       

    </div>
  )
}

export default SectionHand