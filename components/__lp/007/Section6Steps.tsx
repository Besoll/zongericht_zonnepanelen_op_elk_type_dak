import dynamic from 'next/dynamic'
const Cards6Steps = dynamic(() => import('@/components/__lp/007/ui/Cards6Steps'))
const RoofTag = dynamic(() => import('@/components/__lp/007/ui/RoofTag'))

const Section6Steps = () => {
  return (
    <div className='w-full max-w-[1440px] h-auto flex flex-col justify-center items-center'>
        {/* <div className='w-full flex flex-col justify-center items-center gap-2 md:gap-4 px-4 lg:px-6'>
            <RoofTag />
            <h2 className='heading3 md:heading2 font-semibold text-center md:text-left'>
              Waarom werken met ons?  
            </h2>  
        </div>  */}
        <Cards6Steps />
    </div>
  )
}

export default Section6Steps