import Link from 'next/link'

import dynamic from 'next/dynamic'
const CtaButton002 = dynamic(() => import('@/components/home/DaktypesSectioned/CtaButtons/CtaButton002'))



const Section1 = () => {
  return (
    <Link href="/plat-dak" className='w-full h-auto flex justify-center items-center text-white
                    smSP:bg-[url("/lp/002/1-small.webp")] 
                    mdSP:bg-[url("/lp/002/1.webp")] 
                    lgSP:bg-[url("/lp/002/1-big.webp")] bg-no-repeat bg-cover bg-center rounded-2xl
                    hover:cursor-pointer hover:-rotate-1 hover:shadow-xl transition duration-300 ease-in-out'>
      <div className='w-full h-auto flex flex-col md:flex-row justify-center items-center bg-black/40 px-4 py-32 md:py-44 gap-6 rounded-2xl transition duration-300 ease-in-out hover:bg-black/10'>
        <h2 className='heading3 font-semibold text-center md:text-left text_black'>
          Plat dak
        </h2> 
        <CtaButton002 />             
      </div>
    </Link>
  )
}

export default Section1