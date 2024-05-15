import dynamic from 'next/dynamic'
const HandPointer = dynamic(() => import('@/components/__lp/009/icons/HandPointer'))

const SectionHand = () => {
  return (

    <div className='w-full h-auto flex flex-col xxs:flex-row gap-4 px-6 py-6  bg-qoqu_Dark_Grey text-white rounded-xl'>
        <div className='w-full  h-auto flex flex-col gap-4'>
            <div className='flex flex-row gap-2 justify-start items-center'>
                <HandPointer />
                <p className='text-base'>
                    Installatie binnen 4 weken
                </p>  
            </div>

            {/* Text 2 */}
            <div className='flex flex-row gap-2 justify-start items-center'>
                <HandPointer />
                <p className='text-base'>
                    Gratis woninginspectie
                </p>
            </div>

            {/* Text 3 */}
            <div className='flex flex-row gap-2 justify-start items-center'>
                <HandPointer />
                <p className='text-base'>
                    Monitorring systee
                </p>
            </div>
        </div>       

    </div>
  )
}

export default SectionHand