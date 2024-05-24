import dynamic from 'next/dynamic'
const Icon_1_Instalation = dynamic(() => import('@/components/__lp/010/icons/icons-steps/Icon_1_Instalation'))
const Icon_2_freeInspection = dynamic(() => import('@/components/__lp/010/icons/icons-steps/Icon_2_freeInspection'))
const Icon_3_Monitoring = dynamic(() => import('@/components/__lp/010/icons/icons-steps/Icon_3_Monitoring'))
const Icon_4_Customers = dynamic(() => import('@/components/__lp/010/icons/icons-steps/Icon_4_Customers'))
const Icon_5_Installers = dynamic(() => import('@/components/__lp/010/icons/icons-steps/Icon_5_Installers'))
const Icon_6_allRoof = dynamic(() => import('@/components/__lp/010/icons/icons-steps/Icon_6_allRoof'))

const Cards6Steps = () => {
  return (
    <div className='w-full h-auto flex flex-col px-2 md:px-3 py-4 gap-2 md:gap-3'>
        <div className='flex flex-col lg:flex-row gap-2 md:gap-4'>
            <div className='w-full h-auto flex flex-row justify-start items-center gap-4 bg-qoqu_Light_Blue/30 rounded-xl py-2 px-2'>
                <div className='w-fit p-4
                    md:hover:scale-105 md:hover:skew-y-1  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-1
                    '>
                    <Icon_1_Instalation />
                </div>
                <p className='text-lg xl:text-xl font-semibold'>
                    Installatie binnen 4 weken
                </p>
            </div>
            <div className='w-full h-auto flex flex-row justify-start items-center gap-4 bg-qoqu_Light_Blue/30 rounded-xl py-2 px-2'>
                <div className='w-fit p-4
                    md:hover:scale-105 md:hover:skew-y-1  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-1
                    '>
                    <Icon_2_freeInspection />
                </div>
                <p className='text-lg xl:text-xl font-semibold'>
                    Vrijblijvende wooninspectie
                </p>
            </div>            
        </div>
        <div className='flex flex-col lg:flex-row gap-2 md:gap-4'>

            <div className='w-full h-auto flex flex-row justify-start items-center gap-4 bg-qoqu_Light_Blue/30 rounded-xl py-2 px-2'>
                <div className='w-fit p-4
                    md:hover:scale-105 md:hover:skew-y-1  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-1
                    '>
                    <Icon_3_Monitoring />
                </div>
                <p className='text-lg xl:text-xl font-semibold'>
                    Monitorring systeem
                </p>
            </div>     
            <div className='w-full h-auto flex flex-row justify-start items-center gap-4 bg-qoqu_Light_Blue/30 rounded-xl py-2 px-2'>
                <div className='w-fit p-4
                    md:hover:scale-105 md:hover:skew-y-1  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-1
                    '>
                    <Icon_4_Customers />
                </div>
                <p className='text-lg xl:text-xl font-semibold'>
                    Hoge klantentevredenheid
                </p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-2 md:gap-4'>
            <div className='w-full h-auto flex flex-row justify-start items-center gap-4 bg-qoqu_Light_Blue/30 rounded-xl py-2 px-2'>
                <div className='w-fit p-4
                    md:hover:scale-105 md:hover:skew-y-1  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-1
                    '>
                    <Icon_5_Installers  />
                </div>
                <p className='text-lg xl:text-xl font-semibold'>
                    Vertrouwd en ervaren
                </p>
            </div>
            <div className='w-full h-auto flex flex-row justify-start items-center gap-4 bg-qoqu_Light_Blue/30 rounded-xl py-2 px-2'>
                <div className='w-fit p-4
                    md:hover:scale-105 md:hover:skew-y-1  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-1
                    '>
                    <Icon_6_allRoof />
                </div>
                <p className='text-lg xl:text-xl font-semibold'>
                    Expertise in alle daken
                </p>
            </div>               
        </div>
    </div>
  )
}

export default Cards6Steps