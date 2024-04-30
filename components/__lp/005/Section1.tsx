import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/005/ctaButtons/CtaButton2'))
const CompanyTag = dynamic(() => import('@/components/__lp/005/ui/CompanyTag'))
const RoofTag = dynamic(() => import('@/components/__lp/005/ui/RoofTag'))
const SectionHand = dynamic(() => import('@/components/__lp/005/SectionHand'))



const Section1 = () => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    gap-4 md:gap-20 px-4 md:px-8 py-16 md:py-32'>
        <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center md:jsutify-start md:items-start'>
            <div className='flex flex-col relative justify-center items-center w-full lg:w-1/4 md:min-w-[300px] 
            lg:min-w-[450px]'>
                <Image 
                    src='/lp/005/1-big.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-full lg:flex hidden"
                />
                <Image 
                    src='/lp/005/1.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-full md:flex lg:hidden hidden"
                />
                <Image 
                    src='/lp/005/1-small.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-full md:hidden flex"
                />
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-6'> 

                <RoofTag />        
                <h2 className='w-full h-auto text-3xl md:text-4xl lg:text-6xl font-extrabold md:text-left text-center'>
                    Deskundige installatie van zonnepanelen op uw golfplaten dak  
                </h2> 
                <p className='text-xl md:text-left text-center'>
                    We zijn experts in het installeren van zonnepanelen op verschillende daktypes, en daar zijn we trots op. Ons team beschikt over de juiste kennis en ervaring, en helpt u daarom graag bij het installeren van zonnepanelen op uw golfplaten dak.
                </p>
                <SectionHand />
                <CtaButton />
            </div> 
        </div>  
    </div>
  )
}

export default Section1