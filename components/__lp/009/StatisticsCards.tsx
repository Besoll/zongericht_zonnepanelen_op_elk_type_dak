import dynamic from 'next/dynamic'
// const CtaButton = dynamic(() => import('@/components/__lp/009/ctaButtons/CtaButton3'))
const Icon1satisfiedHomeowners = dynamic(() => import('@/components/__lp/009/icons/Icon1satisfiedHomeowners'))
const Icon2yarsOfExperiance = dynamic(() => import('@/components/__lp/009/icons/Icon2yarsOfExperiance'))
const Icon3successfullInstalation = dynamic(() => import('@/components/__lp/009/icons/Icon3successfullInstalation'))
const Icon4companiesServed = dynamic(() => import('@/components/__lp/009/icons/Icon4companiesServed'))
// const Tag = dynamic(() => import("@/components/__lp/009/ui/RoofTag"))



const StatisticsCards = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center px-4'>
        {/* <div className='w-full flex flex-col justify-center items-center gap-2 md:gap-4 px-4 lg:px-6'>
            <Tag />
            <h2 className='heading3 md:heading2 font-semibold text-center md:text-left'>
                Wij staan voor ervaring en expertise
            </h2>  
        </div>  */}
        <div className='w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center 
        px-4 md:px-8'>

            <div className='w-full flex flex-col md:flex-row justify-center items-center'>
                <div className='w-full max-w-[380px] min-h-[200px] h-auto flex flex-row justify-start md:justify-center items-center pl-12 md:pl-0 
                gap-4 px-4 md:px-8 py-4 rounded-[0] bg-qoqu_Dark_Grey text-white'>
                    <div className='flex justify-center items-center px-4 py-3'>
                        <Icon1satisfiedHomeowners />
                    </div>
                    <div className='text-left'>
                        <h2 className='heading3 md:heading2 font-semibold'>
                            4K<span className=' font-extrabold'>+</span>
                        </h2>
                        <h2 className='taxt-base'>
                            Tevreden klanten
                        </h2>
                    </div>
                </div>

                {/* <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr> */}
                <div className='w-full max-w-[380px] min-h-[200px] h-auto flex flex-row justify-start md:justify-center items-center pl-12 md:pl-0 
                gap-4 px-4 md:px-8 py-4 rounded-[0] bg-qoqu_Dark_Grey/30'>
                    <div className='flex justify-center items-center px-4 py-3 
                    '>
                        <Icon2yarsOfExperiance />
                    </div>
                    <div className='text-left'>
                        <h2 className='heading3 md:heading2 font-semibold'>
                            5<span className=' font-extrabold'>+</span>
                        </h2>
                        <h2 className='taxt-base'>
                            Jaren ervaring
                        </h2>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-center items-center'>
                {/* <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr> */}
                <div className='w-full max-w-[380px] min-h-[200px] h-auto flex flex-row justify-start md:justify-center items-center pl-12 md:pl-0  
                gap-4 px-4 md:px-8 py-4 rounded-[0] bg-qoqu_Dark_Grey text-white'>
                    <div className='flex justify-center items-center px-4 py-3 
                    '>
                        <Icon3successfullInstalation />
                    </div>
                    <div className='text-left'>
                        <h2 className='heading3 md:heading2 font-semibold'>
                            40K<span className=' font-extrabold'>+</span>
                        </h2>
                        <h2 className='taxt-base'>
                            Succesvolle installaties
                        </h2>
                    </div>
                </div>

                {/* <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr> */}
                <div className='w-full max-w-[380px] min-h-[200px] h-auto flex flex-row justify-start md:justify-center items-center pl-12 md:pl-0 
                gap-4 px-4 md:px-8 py-4 rounded-[0] bg-qoqu_Dark_Grey/30'>
                    <div className='flex justify-center items-center px-4 py-3 
                    '>
                        <Icon4companiesServed />
                    </div>
                    <div className='text-left'>
                        <h2 className='heading3 md:heading2 font-semibold'>
                            30<span className=' font-extrabold'>+</span>
                        </h2>
                        <h2 className='taxt-base'>
                            Bedrijven bediend
                        </h2>
                    </div>
                </div>            
            </div>
        </div>
    </div>
  )
}

export default StatisticsCards