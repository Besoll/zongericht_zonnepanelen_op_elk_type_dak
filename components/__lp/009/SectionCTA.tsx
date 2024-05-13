import dynamic from 'next/dynamic'
const Tag = dynamic(() => import('@/components/__lp/008-V1/ui/RoofTag'))
const CtaButton = dynamic(() => import('@/components/__lp/008-V1/ctaButtons/CtaButton2'))

const SectionCTA = () => { 
  return (
    <div className='w-[95%] max-w-[1440px] flex justify-center items-center flex-col rounded-none gap-8 px-16 md:px-20'>
     
        <div className='w-full h-auto flex flex-col justify-center items-center gap-4'>
          <Tag />
          <p className='w-full max-w-3/4 text-4xl md:text-5xl font-semibold text-white text-center'>
            Wilt u ook zonnepanelen op uw leistenen dak?          
          </p>
        </div>      
        <CtaButton />

    </div>
    )
  }

export default SectionCTA