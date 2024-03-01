import Image from 'next/image'

const Statistics = () => {
  return (
    <div className='flex flex-col gap-12 md:gap-24 justify-center items-center'>
        <div className='w-[95%] md:w-1/2 h-auto'>
            <Image 
                src='/overOns/Beso_edit-Contact-page-5.webp'
                alt='over ons - zonnepnalen dave - happy clients'
                width={480}
                height={480}
                className="w-full h-auto md:hover:rotate-1 md:hover:skew-3 hidden md:flex
                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
            /> 
            <Image 
                src='/overOns/Beso_edit-Contact-page-5-small.webp'
                alt='over ons - zonnepnalen dave - happy clients'
                width={480}
                height={480}
                className="w-full h-auto md:hover:rotate-1 md:hover:skew-3 flex md:hidden
                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
            /> 
        </div>
        <div className='text-white flex flex-col md:flex-row justify-center items-center'>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[15%]'>
                <h2 className='heading2 md:heading1'>500<span className='animate-pulse'> +</span></h2>
                <p className='text-center md:text-left'>Meer dan 500 dakkapellen voorzien van zonnepanelen</p>
            </div>
            <div className='flex'>
                <hr className='w-64 md:w-32 h-[3px] md:h-[6px] my-4 rotate-0 md:rotate-90 bg-gray-200 rounded-sm'></hr>
            </div>
            <div className='flex flex-col sjustify-center items-center md:justify-start md:items-start w-full md:w-[15%]'>
                <h2 className='heading2 md:heading1'>16<span className='animate-pulse'> +</span></h2>
                <p className='text-center md:text-left'>Verschillende daktypes voorzien van zonnepanelen</p>
            </div>
            <div className='flex'>
                <hr className='w-64 md:w-32 h-[3px] md:h-[6px] my-4 rotate-0 md:rotate-90 bg-gray-200 rounded-sm'></hr>
            </div>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[15%]'>
                <h2 className='heading2 md:heading1'>4000<span className='animate-pulse'> +</span></h2>
                <p className='text-center md:text-left'>Zonnepanelen installaties uitgevoerd op particuliere woningen</p>
            </div>
            <div className='flex'>
                <hr className='w-64 md:w-32 h-[3px] md:h-[6px] my-4 rotate-0 md:rotate-90 bg-gray-200 rounded-sm'></hr>
            </div>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[15%]'>
                <h2 className='heading2 md:heading1'>4800<span className='animate-pulse'> +</span></h2>
                <p className='text-center md:text-left'>Glas glas zonnepanelen <br className='hidden md:flex'></br>geplaatst</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics