import dynamic from 'next/dynamic'
const CtaButton6 = dynamic(() => import('@/components/__lp/002/ctaButtons/CtaButton6'))
const Icon1satisfiedHomeowners = dynamic(() => import('@/components/__lp/002/icons/Icon1satisfiedHomeowners'))
const Icon2yarsOfExperiance = dynamic(() => import('@/components/__lp/002/icons/Icon2yarsOfExperiance'))
const Icon3successfullInstalation = dynamic(() => import('@/components/__lp/002/icons/Icon3successfullInstalation'))
const Icon4companiesServed = dynamic(() => import('@/components/__lp/002/icons/Icon4companiesServed'))



const StatisticsCards = () => {
  return (
    <div className='w-full max-w-[1600px] flex flex-col md:flex-row justify-center items-center 
    px-4 md:px-8 my-16 py-12 md:py-16 gap-6'>


        <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-6'>
            <div className='w-full max-w-[380px] h-auto flex flex-row justify-start items-center bg-qoqu_Blue/10 
            gap-4 rounded-lg px-12 py-12 '>
                <div className='w-[100px] h-[100px] flex p-6 bg-white rounded-lg  
                md:hover:scale-105 md:hover:skew-y-2 md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                    <Icon1satisfiedHomeowners />
                </div>
                <div>
                    <h2 className='heading3 md:heading2 font-semibold '>
                        4K+
                    </h2>
                    <h2 className='taxt-base text-left '>
                        Tevreden klanten
                    </h2>
                </div>
            </div>

            {/* <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr> */}
            <div className='w-full max-w-[380px] h-auto flex flex-row justify-start items-center bg-qoqu_Blue/10 
            gap-4 rounded-lg px-12 py-12 '>
                <div className='w-[100px] h-[100px] flex p-6 bg-white rounded-lg  
                md:hover:scale-105 md:hover:skew-y-2 md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                    <Icon2yarsOfExperiance />
                </div>
                <div>
                    <h2 className='heading3 md:heading2 font-semibold '>
                        5+
                    </h2>
                    <h2 className='taxt-base text-left '>
                        Jaren ervaring
                    </h2>
                </div>
            </div>
        </div>

        <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-6'>
            {/* <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr> */}
            <div className='w-full max-w-[380px] h-auto flex flex-row justify-start items-center bg-qoqu_Blue/10 
            gap-4 rounded-lg px-12 py-12 '>
                <div className='w-[100px] h-[100px] flex p-6 bg-white rounded-lg  
                md:hover:scale-105 md:hover:skew-y-2 md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                    <Icon3successfullInstalation />
                </div>
                <div>
                    <h2 className='heading3 md:heading2 font-semibold '>
                        40K+
                    </h2>
                    <h2 className='taxt-base text-left '>
                        Succesvolle installaties
                    </h2>
                </div>
            </div>

            {/* <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr> */}
            <div className='w-full max-w-[380px] h-auto flex flex-row justify-start items-center bg-qoqu_Blue/10 
            gap-4 rounded-lg px-12 py-12 '>
                <div className='w-[100px] h-[100px] flex p-6 bg-white rounded-lg  
                md:hover:scale-105 md:hover:skew-y-2 md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                    <Icon4companiesServed />
                </div>
                <div>
                    <h2 className='heading3 md:heading2 font-semibold '>
                        30+
                    </h2>
                    <h2 className='taxt-base text-left '>
                        Bedrijven bediend
                    </h2>
                </div>
            </div>            
        </div>

    </div>
  )
}

export default StatisticsCards