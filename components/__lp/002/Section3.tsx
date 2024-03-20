import dynamic from 'next/dynamic'
const CtaButton6 = dynamic(() => import('@/components/__lp/001/ctaButtons/CtaButton6'))
const Icon1satisfiedHomeowners = dynamic(() => import('@/components/__lp/001/icons/Icon1satisfiedHomeowners'))
const Icon2yarsOfExperiance = dynamic(() => import('@/components/__lp/001/icons/Icon2yarsOfExperiance'))
const Icon3successfullInstalation = dynamic(() => import('@/components/__lp/001/icons/Icon3successfullInstalation'))
const Icon4companiesServed = dynamic(() => import('@/components/__lp/001/icons/Icon4companiesServed'))



const Section3 = () => {
  return (
    <div className='flex flex-col w-full justify-center md:justify-start items-center md:items-start max-w-[1440px] 
    px-4 md:px-8 my-16 py-12 md:py-16 gap-6'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
            <div className='flex flex-col w-full justify-center items-center md:justify-start md:items-start text-center md:text-left gap-6'>
                <h2 className='heading3 md:heading2 font-semibold '>
                    Onze prestaties: Hoe wij bouwen aan ons succes!
                </h2>
                <p className='text-base'>
                    Zongericht heeft zijn succes te danken aan een combinatie van expertise in het installeren van zonnepanelen op alle soorten daken, inclusief de complexe PVC daken, en een sterke focus op klantenservice. De onderneming onderscheidde zich door haar aanpassingsvermogen, vakmanschap en de toewijding om voor elke unieke situatie een passende zonne-energieoplossing te bieden. Daarnaast heeft de mond-tot-mondreclame, voortkomend uit de tevredenheid van klanten over zowel de kwaliteit van het werk als de impact op hun energierekeningen, aanzienlijk bijgedragen aan het succes en de groei van Zongericht.
                </p>                
            </div>
            <div className='flex flex-col w-full justify-start items-start gap-6'>
                <div className='flex flex-row gap-6 h-[100px] items-center'>
                    <div className='flex flex-start items-start p-6  bg-qoqu_Blue/10 rounded-full  
                 md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                 md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                        <Icon1satisfiedHomeowners />
                    </div>
                    <div className='flex fflex-start items-start w-2/5'>
                        <h2 className='heading3 md:heading2 font-semibold '>
                            4K+
                        </h2>
                    </div>
                    <div className='flex flex-center items-center p-6 w-full'>
                        <h2 className='taxt-base text-left '>
                            Tevreden klanten
                        </h2>
                    </div>
                </div>
                <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr>
                <div className='flex flex-row gap-6 h-[100px] items-center'>
                    <div className='flex flex-start items-start p-6  bg-qoqu_Blue/10 rounded-full  
                 md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                 md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                        <Icon2yarsOfExperiance />
                    </div>
                    <div className='flex fflex-start items-start w-2/5'>
                        <h2 className='heading3 md:heading2 font-semibold '>
                            5+
                        </h2>
                    </div>
                    <div className='flex flex-center items-center p-6 w-full'>
                        <h2 className='taxt-base text-left '>
                            Jaren ervaring
                        </h2>
                    </div>
                </div>
                <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr>
                <div className='flex flex-row gap-6 h-[100px] items-center'>
                    <div className='flex flex-start items-start p-6  bg-qoqu_Blue/10 rounded-full  
                 md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                 md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                        <Icon3successfullInstalation />
                    </div>
                    <div className='flex fflex-start items-start w-2/5'>
                        <h2 className='heading3 md:heading2 font-semibold '>
                            40K+
                        </h2>
                    </div>
                    <div className='flex flex-center items-center p-6 w-full'>
                        <h2 className='taxt-base text-left '>
                            Succesvolle installaties
                        </h2>
                    </div>
                </div>
                <hr className='w-full h-[0.10rem] bg-gray-400 rounded-full'></hr>
                <div className='flex flex-row gap-6 h-[100px] items-center'>
                    <div className='flex flex-start items-start p-6  bg-qoqu_Blue/10 rounded-full  
                 md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                 md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                        <Icon4companiesServed />
                    </div>
                    <div className='flex fflex-start items-start w-2/5'>
                        <h2 className='heading3 md:heading2 font-semibold '>
                            30+
                        </h2>
                    </div>
                    <div className='flex flex-center items-center p-6 w-full'>
                        <h2 className='taxt-base text-left '>
                            Bedrijven bediend
                        </h2>
                    </div>
                </div>
                        
            </div>
        </div>
        <CtaButton6 />
    </div>
  )
}

export default Section3