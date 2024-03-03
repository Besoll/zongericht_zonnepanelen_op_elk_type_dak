import Image from 'next/image'

const Statistics2 = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4'>        
        <div className='text-black flex flex-col md:flex-row justify-center items-center mb-20'>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[15%]'>
                <h2 className='heading2 2xl:heading1'>500<span className='animate-pulse'> +</span></h2>
                <p className='text-center md:text-left'>Meer dan 500 dakkapellen voorzien van zonnepanelen</p>
            </div>
            <div className='flex'>
                <hr className='w-64 md:w-32 h-[3px] md:h-[6px] my-4 rotate-0 md:rotate-90 bg-gray-200 rounded-sm'></hr>
            </div>
            <div className='flex flex-col sjustify-center items-center md:justify-start md:items-start w-full md:w-[15%]'>
                <h2 className='heading2 2xl:heading1'>16<span className='animate-pulse'> +</span></h2>
                <p className='text-center md:text-left'>Verschillende daktypes voorzien van zonnepanelen</p>
            </div>
            <div className='flex'>
                <hr className='w-64 md:w-32 h-[3px] md:h-[6px] my-4 rotate-0 md:rotate-90 bg-gray-200 rounded-sm'></hr>
            </div>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[15%]'>
                <h2 className='heading2 2xl:heading1'>4000<span className='animate-pulse'> +</span></h2>
                <p className='text-center md:text-left'>Zonnepanelen installaties uitgevoerd op particuliere woningen</p>
            </div>
            <div className='flex'>
                <hr className='w-64 md:w-32 h-[3px] md:h-[6px] my-4 rotate-0 md:rotate-90 bg-gray-200 rounded-sm'></hr>
            </div>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[15%]'>
                <h2 className='heading2 2xl:heading1'>4800<span className='animate-pulse'> +</span></h2>
                <p className='text-center md:text-left'>Glas glas zonnepanelen <br className='hidden md:flex'></br>geplaatst</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics2