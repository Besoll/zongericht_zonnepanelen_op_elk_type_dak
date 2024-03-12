import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton2 = dynamic(() => import('@/components/__lp/001/ctaButtons/CtaButton2'))
const HandPointerBlue = dynamic(() => import('@/components/__lp/001/icons/HandPointerBlue'))
const ForwardBlue = dynamic(() => import('@/components/__lp/001/icons/ForwardBlue'))



const Section3 = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center max-w-[1440px] 
    px-4 md:px-8 my-16 text-center'>
        <h2 className='heading3 md:heading2 font-semibold'>
            Ook benieuwd wat wij voor uw PVC dak kunnen betekenen? <br/>
            Nodig ons uit en een van onze adviseurs zal het u komen uitleggen. 
        </h2>
        
    </div>
  )
}

export default Section3