import dynamic from 'next/dynamic'
const CtaButton6 = dynamic(() => import('@/components/__lp/003/ctaButtons/CtaButton6'))
const Icon1satisfiedHomeowners = dynamic(() => import('@/components/__lp/003/icons/Icon1satisfiedHomeowners'))
const Icon2yarsOfExperiance = dynamic(() => import('@/components/__lp/003/icons/Icon2yarsOfExperiance'))
const Icon3successfullInstalation = dynamic(() => import('@/components/__lp/003/icons/Icon3successfullInstalation'))
const Icon4companiesServed = dynamic(() => import('@/components/__lp/003/icons/Icon4companiesServed'))



const StatisticsCards = () => {
  return (
    <div className='w-full max-w-[1440px] flex flex-col justify-center items-center 
    px-4 md:px-8 my-4 md:my-16 py-4 md:py-16 gap-6'>


        <div className='w-full flex flex-row justify-center items-center gap-6'>
            <div className='w-full max-w-[380px] min-h-[280px] h-auto flex flex-col justify-start items-center bg-white
            gap-4 rounded-lg px-4 md:px-12 py-12 '>
                <div className='w-[100px] h-[100px] flex p-6 bg-qoqu_Orange/10 rounded-lg  
                md:hover:scale-105 md:hover:skew-y-2 md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                    <Icon1satisfiedHomeowners />
                </div>
                <div className='text-center'>
                    <h2 className='heading3 md:heading2 font-semibold '>
                        4K<span className='font-extrabold text-qoqu_Orange'>+</span>
                    </h2>
                    <h2 className='taxt-base'>
                        Tevreden klanten
                    </h2>
                </div>
            </div>

            {/* <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr> */}
            <div className='w-full max-w-[380px] min-h-[280px] h-auto flex flex-col justify-start items-center bg-white
            gap-4 rounded-lg px-4 md:px-12 py-12 '>
                <div className='w-[100px] h-[100px] flex p-6 bg-qoqu_Orange/10 rounded-lg  
                md:hover:scale-105 md:hover:skew-y-2 md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                    <Icon2yarsOfExperiance />
                </div>
                <div className='text-center'>
                    <h2 className='heading3 md:heading2 font-semibold '>
                        5<span className='font-extrabold text-qoqu_Orange'>+</span>
                    </h2>
                    <h2 className='taxt-base'>
                        Jaren ervaring
                    </h2>
                </div>
            </div>
        </div>

        <div className='w-full flex flex-row justify-center items-center gap-6'>
            {/* <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr> */}
            <div className='w-full max-w-[380px] min-h-[280px] h-auto flex flex-col justify-start items-center bg-white 
            gap-4 rounded-lg px-4 md:px-12 py-12 '>
                <div className='w-[100px] h-[100px] flex p-6 bg-qoqu_Orange/10 rounded-lg  
                md:hover:scale-105 md:hover:skew-y-2 md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                    <Icon3successfullInstalation />
                </div>
                <div className='text-center'>
                    <h2 className='heading3 md:heading2 font-semibold '>
                        40K<span className='font-extrabold text-qoqu_Orange'>+</span>
                    </h2>
                    <h2 className='taxt-base'>
                        Succesvolle installaties
                    </h2>
                </div>
            </div>

            {/* <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr> */}
            <div className='w-full max-w-[380px] min-h-[280px] h-auto flex flex-col justify-start items-center bg-white
            gap-4 rounded-lg px-4 md:px-12 py-12 '>
                <div className='w-[100px] h-[100px] flex p-6 bg-qoqu_Orange/10 rounded-lg  
                md:hover:scale-105 md:hover:skew-y-2 md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                    <Icon4companiesServed />
                </div>
                <div className='text-center'>
                    <h2 className='heading3 md:heading2 font-semibold '>
                        30<span className='font-extrabold text-qoqu_Orange'>+</span>
                    </h2>
                    <h2 className='taxt-base'>
                        Bedrijven bediend
                    </h2>
                </div>
            </div>            
        </div>

    </div>
  )
}

export default StatisticsCards