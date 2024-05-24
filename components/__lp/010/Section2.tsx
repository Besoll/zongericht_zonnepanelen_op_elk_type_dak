// import Image from 'next/image'
import dynamic from 'next/dynamic'
// const CtaButton = dynamic(() => import('@/components/__lp/010/ctaButtons/CtaButton2'))
const RoofTag = dynamic(() => import('@/components/__lp/010/ui/RoofTag'))
const Section2Part1 = dynamic(() => import("@/components/__lp/010/Section2Part1"))
const Section2Part2 = dynamic(() => import("@/components/__lp/010/Section2Part2"))
const Section2Part3 = dynamic(() => import("@/components/__lp/010/Section2Part3"))




const Section2 = () => {
  return (
    <div  className='w-full flex flex-col  justify-center items-center max-w-[1440px] 
    gap-4 md:gap-28 px-4 md:px-8'>
        <div className='w-fit h-auto flex flex-col justify-center items-center gap-4'>
            <RoofTag />           
            <h2 className='w-full heading3 md:heading2 lg:heading1 md:text-left text-center line-clamp-4'>
                Hoe het werkt  
            </h2>
        </div>
        <Section2Part1 />
        <Section2Part2 /> 
        <Section2Part3 />  
        
    </div>
  )
}

export default Section2

