import dynamic from 'next/dynamic'
const IconKlantService = dynamic(() => import('@/components/__lp/010/icons/IconKlantService'))
const IconGuarantee = dynamic(() => import('@/components/__lp/010/icons/IconGuarantee'))

const KlantenGuarante = () => {
  return (
    <div className='flex flex-row gap-2 justify-center items-center my-2 md:my-4 text-left
                     p-4 rounded-lg'>
                        <div className='flex flex-row gap-3 items-center justify-center'>
                            <IconKlantService />
                            <div className='flex flex-col'>
                                <div className='text-black text-xs font-medium'>
                                    Klanten<span className='font-semibold'>Vertellen</span>
                                </div>
                                <div className='text-black-300 text-xs '>
                                    Kwaliteit gegarandeerd
                                </div>
                            </div>
                        </div>
                        <hr className='hidden md:flex rotate-90 w-[15px]'></hr>
                        <div className='flex flex-row gap-3 items-center justify-center'>
                            <IconGuarantee />
                            <div className='flex flex-col'>
                                <div className='text-black text-xs font-medium'>
                                    10 jaar installatiegarantie
                                </div>
                                <div className='text-black-300 text-xs '>
                                    Kwaliteit gegarandeerd
                                </div>
                            </div>
                        </div>

                    </div>
  )
}

export default KlantenGuarante