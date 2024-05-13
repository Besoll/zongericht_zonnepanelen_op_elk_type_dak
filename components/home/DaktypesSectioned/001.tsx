import Link from 'next/link'

import dynamic from 'next/dynamic'
const CtaButton001 = dynamic(() => import('@/components/home/DaktypesSectioned/CtaButtons/CtaButton001'))



const Section1 = () => {
  return (
    <Link href="/schuin-pvc-dak" className='w-full h-auto flex justify-center items-center text-white
                    smSP:bg-[url("/lp/001/2-wide-small.webp")] 
                    mdSP:bg-[url("/lp/001/2-wide.webp")] 
                    lgSP:bg-[url("/lp/001/2-wide.webp")] bg-no-repeat bg-cover bg-center rounded-2xl
                    hover:cursor-pointer hover:rotate-1 hover:shadow-xl transition duration-300 ease-in-out'>
        <div className='w-full h-auto flex flex-col md:flex-row justify-center items-center bg-black/40 px-4 py-32 md:py-44 gap-6 rounded-2xl transition duration-300 ease-in-out hover:bg-black/10'>
        <h2 className='heading3 font-semibold text-center md:text-left text_black'>
            Schuin pvc dak
        </h2> 
        <CtaButton001 />             
        </div>
    </Link>
  )
}

export default Section1