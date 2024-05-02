import dynamic from 'next/dynamic'
const IconCustomerSupport = dynamic(() => import('@/components/__lp/007/icons/IconCustomerSupport'))
const IconInstallation = dynamic(() => import('@/components/__lp/007/icons/IconInstallation'))
const IconPayment = dynamic(() => import('@/components/__lp/007/icons/IconPayment'))
const Icon_4_Customers = dynamic(() => import('@/components/__lp/007/icons/icons-steps/Icon_4_Customers'))
const Icon_5_Installers = dynamic(() => import('@/components/__lp/007/icons/icons-steps/Icon_5_Installers'))
const Icon_6_allRoof = dynamic(() => import('@/components/__lp/007/icons/icons-steps/Icon_6_allRoof'))

const Cards6Steps = () => {
  return (
    <div className='w-full h-auto flex flex-col px-2 md:px-3 py-4 gap-4'>
        <div className='w-full h-auto flex flex-row justify-start items-center gap-4 bg-white rounded-none py-8 px-6'>
            <div className='w-fit p-4 bg-qoqu_Grey/20 rounded-none
                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                '>
                <IconCustomerSupport />
            </div>
            <div className='w-full h-auto flex flex-col justify-start items-start'>
                <p className='text-lg xl:text-xl font-semibold'>
                    Installatie binnen 4 weken
                </p>
                <p className='text-base font-normal'>
                    Plan uw vrijblijvende woon bezichtiging en vraag uw gratis offerte aan
                </p>
            </div>
        </div>
        <div className='w-full h-auto flex flex-row justify-start items-center gap-4 bg-white rounded-none py-8 px-6'>
            <div className='w-fit p-4 bg-qoqu_Grey/20 rounded-none 
                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                '>
                <IconInstallation />
            </div>
            <div className='w-full h-auto flex flex-col justify-start items-start'>
                <p className='text-lg xl:text-xl font-semibold'>
                    Installatie binnen 4 weken
                </p>
                <p className='text-base font-normal'>
                    Gegarandeerde installatie binnen 4 weken na bestelling
                </p>
            </div>
        </div> 
        <div className='w-full h-auto flex flex-row justify-start items-center gap-4 bg-white rounded-none py-8 px-6'>
            <div className='w-fit p-4 bg-qoqu_Grey/20 rounded-none
                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                '>
                <IconPayment />
            </div>
            <div className='w-full h-auto flex flex-col justify-start items-start'>
                <p className='text-lg xl:text-xl font-semibold'>
                    Betalen na plaatsing van de zonnepanelen
                </p>
                <p className='text-base font-normal'>
                    U betaalt pas nadat de zonnepanelen zijn geplaatst en de installatie werkt
                </p>
            </div>
        </div>
    </div>
  )
}

export default Cards6Steps