import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton3 = dynamic(() => import('@/components/__lp/004/ctaButtons/CtaButton3'))
const CompanyTag = dynamic(() => import('@/components/__lp/004/ui/CompanyTag'))
const SwiperCards = dynamic(() => import('@/components/__lp/004/ui/SwiperCards'))



const Section1 = () => {
  return (
    <div  className='w-full flex flex-col justify-center items-center md:items-start max-w-[1440px] 
    px-4 md:px-8 mb-16 py-16 md:mb-24 md:py-32 gap-16 md:gap-20'>
              
        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-4 md:text-left text-center text-qoqu_Light_Orange'>
            <CompanyTag />            
            <h2 className='w-full heading3 md:heading2 lg:heading1 line-clamp-4 text-white'>
                Waarom voor ons kiezen?
            </h2> 
            <div className='w-full md:w-[80%] flex pb-4 flex-col text-white'>
                <p className='text-xl'>
                    Bij Zongericht onderscheiden we ons door onze servicekwaliteit en vakmanschap. Ons aanbod omvat maatwerkinstallaties op alle soorten daken waaronder zinken daken, ondersteund door een uitgebreide garantieperiode van 10 jaar. Deze garantie bevestigt ons vertrouwen in de duurzaamheid en betrouwbaarheid van onze installaties. Ons doel is om te zorgen voor een optimale klanttevredenheid door het leveren van goed doordachte oplossingen voor duurzame energie.
                </p>
            </div>
            <CtaButton3 />   
        </div>

        <div className='w-full flex flex-col justify-center items-center gap-4'>
            <SwiperCards />                
        </div>  
             
           

    </div>
  )
}

export default Section1