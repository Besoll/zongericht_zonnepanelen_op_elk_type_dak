import Image from 'next/image'

const KlantenGuarante = () => {
  return (
    <div className='flex flex-row gap-2 justify-start items-start md:justify-center md:items-center my-2 md:my-4'>
                        <div className='flex flex-row gap-3 items-center justify-center'>
                            <Image 
                                src='/icons/KlantenVertelenOriginal.svg'
                                alt='KlantenVertellen - Kwaliteit gegarandeerd'
                                width={32}
                                height={32}
                                className="w-[45px] h-auto md:hover:rotate-1 md:hover:skew-3 
                                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
                            />
                            <div className='flex flex-col'>
                                <div className='text-black text-xs font-medium'>
                                    Klanten<span className='font-semibold'>Vertellen</span>
                                </div>
                                <div className='text-white-300 text-xs '>
                                    Kwaliteit gegarandeerd
                                </div>
                            </div>
                        </div>
                        <hr className='hidden md:flex rotate-90 w-[15px]'></hr>
                        <div className='flex flex-row gap-3 items-center justify-center'>
                            <Image 
                                src='/icons/Guarantee10Years-Big.svg'
                                alt='Guarantee 10 years - Beoordelingen'
                                width={32}
                                height={32}
                                className="w-[45px] h-auto md:hover:rotate-1 md:hover:skew-3 
                                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
                            />
                            <div className='flex flex-col'>
                                <div className='text-black text-xs font-medium'>
                                    10 jaar installatiegarantie
                                </div>
                                <div className='text-white-300 text-xs '>
                                    Kwaliteit gegarandeerd
                                </div>
                            </div>
                        </div>

                    </div>
  )
}

export default KlantenGuarante