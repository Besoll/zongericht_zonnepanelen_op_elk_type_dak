import dynamic from 'next/dynamic'
const Icon_1_Instalation = dynamic(() => import('@/components/__lp/005/icons/icons-steps/Icon_1_Instalation'))
const Icon_2_freeInspection = dynamic(() => import('@/components/__lp/005/icons/icons-steps/Icon_2_freeInspection'))
const Icon_3_Monitoring = dynamic(() => import('@/components/__lp/005/icons/icons-steps/Icon_3_Monitoring'))
const Icon_4_Customers = dynamic(() => import('@/components/__lp/005/icons/icons-steps/Icon_4_Customers'))
const Icon_5_Installers = dynamic(() => import('@/components/__lp/005/icons/icons-steps/Icon_5_Installers'))
const Icon_6_allRoof = dynamic(() => import('@/components/__lp/005/icons/icons-steps/Icon_6_allRoof'))

const Cards6Steps = () => {
  return (
    <div className='w-full h-auto flex flex-col px-2 md:px-3 py-4 md:py-6 gap-4 md:gap-6'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
            <div className='w-full h-auto flex flex-col justify-start items-center gap-4 bg-white rounded-3xl py-6 md:py-12 px-4'>
                <div className='w-fit p-8 rounded-full bg-qoqu_Red/10
                    md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                    '>
                    <Icon_1_Instalation />
                </div>
                <p className='text-xl font-semibold'>
                    Installatie binnen 14 dagen
                </p>
            </div>
            <div className='w-full h-auto flex flex-col justify-start items-center gap-4 bg-white rounded-3xl py-6 md:py-12 px-4'>
                <div className='w-fit p-8 rounded-full bg-qoqu_Red/10
                    md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                    '>
                    <Icon_2_freeInspection />
                </div>
                <p className='text-xl font-semibold'>
                    Gratis woninginspectie
                </p>
            </div>
            <div className='w-full h-auto flex flex-col justify-start items-center gap-4 bg-white rounded-3xl py-6 md:py-12 px-4'>
                <div className='w-fit p-8 rounded-full bg-qoqu_Red/10
                    md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                    '>
                    <Icon_3_Monitoring />
                </div>
                <p className='text-xl font-semibold'>
                    Monitorring systeem
                </p>
            </div>              
        </div>
        <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
            <div className='w-full h-auto flex flex-col justify-start items-center gap-4 bg-white rounded-3xl py-6 md:py-12 px-4'>
                <div className='w-fit p-8 rounded-full bg-qoqu_Red/10
                    md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                    '>
                    <Icon_4_Customers />
                </div>
                <p className='text-xl font-semibold'>
                    Hoge klantentevredenheid
                </p>
            </div>
            <div className='w-full h-auto flex flex-col justify-start items-center gap-4 bg-white rounded-3xl py-6 md:py-12 px-4'>
                <div className='w-fit p-8 rounded-full bg-qoqu_Red/10
                    md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                    '>
                    <Icon_5_Installers  />
                </div>
                <p className='text-xl font-semibold'>
                Betrouwbare en ervaren installateurs
                </p>
            </div>
            <div className='w-full h-auto flex flex-col justify-start items-center gap-4 bg-white rounded-3xl py-6 md:py-12 px-4'>
                <div className='w-fit p-8 rounded-full bg-qoqu_Red/10
                    md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                    '>
                    <Icon_6_allRoof />
                </div>
                <p className='text-xl font-semibold'>
                    Expertise in alle daken
                </p>
            </div>               
        </div>
    </div>
  )
}

export default Cards6Steps