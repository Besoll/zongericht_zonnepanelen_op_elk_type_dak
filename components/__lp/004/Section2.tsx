import Image from 'next/image'
import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/004/ctaButtons/CtaButton2'))
const RoofTag = dynamic(() => import('@/components/__lp/004/ui/RoofTag'))
const ThreeCards = dynamic(() => import("@/components/__lp/004/ui/ThreeCards"))




const Section2 = () => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    gap-4 md:gap-20 px-4 md:px-8 py-16 md:py-32'>
        <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center md:jsutify-start md:items-start'>
            <div className='flex flex-col relative justify-center items-center w-full md:min-w-[300px] 
            lg:min-w-[450px]'>
                <Image 
                    src='/lp/004/1-big.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-xl lg:flex hidden"
                />
                <Image 
                    src='/lp/004/1.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-xl md:flex lg:hidden hidden"
                />
                <Image 
                    src='/lp/004/1-small.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-xl md:hidden flex"
                />
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3  text-qoqu_Light_Orange'>
                <RoofTag />           
                <h2 className='w-full heading3 md:heading2 lg:heading1 md:text-left text-center line-clamp-4 text-black'>
                    Hoe werkt het?  
                </h2> 
                <p className='md:text-left text-center text-black pb-2 md:pb-8'>
                    Bij zongericht kunt u de volgende drie hoofdstappen verwachten:
                </p>
                <CtaButton />

            </div> 
        </div>  
        <ThreeCards />   
    </div>
  )
}

export default Section2

