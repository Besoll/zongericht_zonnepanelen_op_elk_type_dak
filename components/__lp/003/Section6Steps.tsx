import dynamic from 'next/dynamic'
const Cards6Steps = dynamic(() => import('@/components/__lp/003/ui/Cards6Steps'))
const RoofTag = dynamic(() => import('@/components/__lp/003/ui/RoofTag'))

const Section6Steps = () => {
  return (
    <div className='w-full max-w-[1440px] h-auto flex flex-col justify-center items-center gap-4 md:gap-12 px-4 py-4 md:py-12 '>
        <RoofTag />
        <h2 className='heading3 md:heading2'>
            Waarom kiezen voor Zongericht voor uw zonnepanelen installatie?       
        </h2>
        <Cards6Steps />
    </div>
  )
}

export default Section6Steps