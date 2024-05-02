import dynamic from 'next/dynamic'
const CtaButton6 = dynamic(() => import('@/components/__lp/007/ctaButtons/CtaButton6'))
const Icon1satisfiedHomeowners = dynamic(() => import('@/components/__lp/007/icons/Icon1satisfiedHomeowners'))
const Icon2yarsOfExperiance = dynamic(() => import('@/components/__lp/007/icons/Icon2yarsOfExperiance'))
const Icon3successfullInstalation = dynamic(() => import('@/components/__lp/007/icons/Icon3successfullInstalation'))
const Icon4companiesServed = dynamic(() => import('@/components/__lp/007/icons/Icon4companiesServed'))
const Tag = dynamic(() => import("@/components/__lp/007/ui/RoofTag"))



const StatisticsCards = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center px-4 text-black gap-6'>
        <div className='w-full flex flex-col justify-center items-center gap-2 md:gap-4 px-4 lg:px-6'>
            <Tag />
            <h2 className='heading3 md:heading2 font-semibold text-center md:text-left'>
                Wij staan voor ervaring en expertise
            </h2>  
        </div> 
        <div className='w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center 
        px-4 md:px-8 py-4 md:py-8 gap-4 md:gap-6 text-black'>


            <div className='w-full flex flex-row justify-center items-center gap-6'>
                <div className='w-full max-w-[380px] min-h-[200px] h-auto flex flex-col justify-center items-center 
                gap-4 px-4 md:px-8 py-4 bg-qoqu_Grey/20 rounded-[0]'>
                    <div className='w-[50px] h-[50px] flex justify-center items-center  
                    md:hover:scale-105 md:hover:skew-y-2 md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                        <Icon1satisfiedHomeowners />
                    </div>
                    <div className='text-center'>
                        <h2 className='heading3 md:heading2 font-semibold text-qoqu_Night_Blue'>
                            4K<span className='font-extrabold'>+</span>
                        </h2>
                        <h2 className='taxt-base'>
                            Tevreden klanten
                        </h2>
                    </div>
                </div>

                {/* <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr> */}
                <div className='w-full max-w-[380px] min-h-[200px] h-auto flex flex-col justify-center items-center 
                gap-4 px-4 md:px-8 py-4 bg-qoqu_Grey/20 rounded-[0]'>
                    <div className='w-[50px] h-[50px] flex justify-center items-center  
                    md:hover:scale-105 md:hover:skew-y-2 md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                        <Icon2yarsOfExperiance />
                    </div>
                    <div className='text-center'>
                        <h2 className='heading3 md:heading2 font-semibold text-qoqu_Night_Blue'>
                            5<span className='font-extrabold'>+</span>
                        </h2>
                        <h2 className='taxt-base'>
                            Jaren ervaring
                        </h2>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row justify-center items-center gap-6'>
                {/* <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr> */}
                <div className='w-full max-w-[380px] min-h-[200px] h-auto flex flex-col justify-center items-center  
                gap-4 px-4 md:px-8 py-4 bg-qoqu_Grey/20 rounded-[0]'>
                    <div className='w-[50px] h-[50px] flex justify-center items-center  
                    md:hover:scale-105 md:hover:skew-y-2 md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                        <Icon3successfullInstalation />
                    </div>
                    <div className='text-center'>
                        <h2 className='heading3 md:heading2 font-semibold text-qoqu_Night_Blue'>
                            40K<span className='font-extrabold'>+</span>
                        </h2>
                        <h2 className='taxt-base'>
                            Succesvolle installaties
                        </h2>
                    </div>
                </div>

                {/* <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr> */}
                <div className='w-full max-w-[380px] min-h-[200px] h-auto flex flex-col justify-center items-center 
                gap-4 px-4 md:px-8 py-4 bg-qoqu_Grey/20 rounded-[0]'>
                    <div className='w-[50px] h-[50px] flex justify-center items-center  
                    md:hover:scale-105 md:hover:skew-y-2 md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                        <Icon4companiesServed />
                    </div>
                    <div className='text-center'>
                        <h2 className='heading3 md:heading2 font-semibold text-qoqu_Night_Blue'>
                            30<span className='font-extrabold'>+</span>
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