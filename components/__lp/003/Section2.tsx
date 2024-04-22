import dynamic from 'next/dynamic'
// const CtaButton5 = dynamic(() => import('@/components/__lp/003/ctaButtons/CtaButton5'))
const RoofTag = dynamic(() => import('@/components/__lp/003/ui/RoofTag'))
const StatisticsCards = dynamic(() => import("@/components/__lp/003/StatisticsCards"))




const Section2 = () => {
  return (
    <div  className='w-full flex flex-col md:flex-row justify-center items-center max-w-[1440px] 
    gap-4 md:gap-20 px-4 md:px-8 py-16'>  
        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>
            <RoofTag />           
            <h2 className='w-full heading3 md:heading2 lg:heading1 md:text-left text-center line-clamp-4'>
             Onze prestaties: Hoe wij bouwen aan ons succes!    
            </h2> 

            <div className='w-full md:w-[95%] flex flex-col gap-4 py-4'>
                <p className='md:text-left text-center'>
                    Zongericht is een expert met zonnepanelen en alles eromheen, voor elk dak! Van platte daken tot daken met leisteen, wij hebben de kennis om overal zonnepanelen te plaatsen. We staan bekend om onze top service aan klanten en vinden altijd een zonne-energieoplossing die past bij jouw huis. Onze klanten zijn zo blij met ons werk en de besparing op hun energierekening, dat ze het aan iedereen vertellen. Dat heeft ons echt geholpen te groeien.
                </p>
                <p className='md:text-left text-center'>
                    Nu bieden we ook onder andere thuisbatterijen aan. Hiermee kun je de zonne-energie die je overdag opwekt, opslaan en gebruiken wanneer je wilt. Dit betekent nog meer besparen op energiekosten en minder afhankelijk zijn van het energienet. Met Zongericht en onze thuisbatterijen ben je klaar voor een groene toekomst, makkelijk en simpel.
                </p>
            </div>

            {/* <CtaButton5 />      */}

        </div> 
        <StatisticsCards />   
    </div>
  )
}

export default Section2

