import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/007/ctaButtons/CtaButton2'))
const Tag = dynamic(() => import('@/components/__lp/007/ui/RoofTag'))



const Section4 = () => {
  return (
    <div  className='w-full flex flex-col justify-center items-center max-w-[1440px] 
                    px-4'>
        <div className='w-full md:flex flex-row justify-center items-center hidden gap-3 lg:gap-6'>
            {/* 1st image - tablet-desktop */}
            <div className='w-1/3 h-auto flex justify-center items-center'>
                <Image 
                        src='/lp/008-V1/4-1-big.webp'
                        alt='glas glas zonnepanelen op Leistenen dak'
                        width={400}
                        height={600}
                        className="h-auto w-full rounded-[0]
                                    md:hover:scale-105  md:transition md:duration-300 md:ease-in-out 
                                    md:cursor-pointer md:hover:rotate-1 shadow-md md:hover:shadow-xl lg:flex hidden
                                    "
                />
                <Image 
                    src='/lp/008-V1/4-1.webp'
                    alt='glas glas zonnepanelen op Leistenen dak'
                    width={400}
                    height={600}
                    className="h-auto w-full rounded-[0]
                            md:hover:scale-105  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
                />
            </div>
            <div className='w-1/3 h-auto flex flex-col justify-center items-center gap-3 lg:gap-7'>
                {/* 2nd image - tablet-desktop */}
                <Image 
                        src='/lp/008-V1/4-2-big.webp'
                        alt='glas glas zonnepanelen op Leistenen dak'
                        width={400}
                        height={600}
                        className="h-auto w-full rounded-[0]
                                    md:hover:scale-105  md:transition md:duration-300 md:ease-in-out 
                                    md:cursor-pointer md:hover:rotate-1 shadow-md md:hover:shadow-xl lg:flex hidden
                                    "
                />
                <Image 
                    src='/lp/008-V1/4-2.webp'
                    alt='glas glas zonnepanelen op Leistenen dak'
                    width={400}
                    height={600}
                    className="h-auto w-full rounded-[0]
                            md:hover:scale-105  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
                />
                {/* 3rd image - tablet-desktop */} 
                <Image 
                        src='/lp/008-V1/4-3-big.webp'
                        alt='glas glas zonnepanelen op Leistenen dak'
                        width={400}
                        height={600}
                        className="h-auto w-full rounded-[0]
                                    md:hover:scale-105  md:transition md:duration-300 md:ease-in-out 
                                    md:cursor-pointer md:hover:rotate-1 shadow-md md:hover:shadow-xl lg:flex hidden
                                    "
                />
                <Image 
                    src='/lp/008-V1/4-3.webp'
                    alt='glas glas zonnepanelen op Leistenen dak'
                    width={400}
                    height={600}
                    className="h-auto w-full rounded-[0]
                            md:hover:scale-105  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
                />
            </div>
            {/* 3rd image - tablet-desktop */}
            <div className='w-1/3 h-auto flex justify-center items-center'>
                <Image 
                        src='/lp/008-V1/4-4-big.webp'
                        alt='glas glas zonnepanelen op Leistenen dak'
                        width={400}
                        height={600}
                        className="h-auto w-full rounded-[0]
                                    md:hover:scale-105  md:transition md:duration-300 md:ease-in-out 
                                    md:cursor-pointer md:hover:rotate-1 shadow-md md:hover:shadow-xl lg:flex hidden
                                    "
                />
                <Image 
                    src='/lp/008-V1/4-4.webp'
                    alt='glas glas zonnepanelen op Leistenen dak'
                    width={400}
                    height={600}
                    className="h-auto w-full rounded-[0]
                            md:hover:scale-105  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-1 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
                />
            </div>
        </div>
        <div className='w-full md:hidden flex flex-col justify-center items-center gap-3'>
            <Image 
                src='/lp/008-V1/4-2-small.webp'
                alt='glas glas zonnepanelen op Leistenen dak'
                width={400}
                height={600}
                className="h-auto w-full shadow-lg rounded-[0] flex md:hidden"
            />
            <div className='w-full flex flex-row justify-center items-center gap-3'>
                <Image 
                    src='/lp/008-V1/4-1-small.webp'
                    alt='glas glas zonnepanelen op Leistenen dak'
                    width={400}
                    height={600}
                    className="h-auto w-full shadow-lg rounded-[0] flex md:hidden"
                />
                <Image 
                    src='/lp/008-V1/4-4-small.webp'
                    alt='glas glas zonnepanelen op Leistenen dak'
                    width={400}
                    height={600}
                    className="h-auto w-full shadow-lg rounded-[0] flex md:hidden"
                />
            </div>
            <Image 
                src='/lp/008-V1/4-3-small.webp'
                alt='glas glas zonnepanelen op Leistenen dak'
                width={400}
                height={600}
                className="h-auto w-full shadow-lg rounded-[0] flex md:hidden"
            />
        </div>        
    </div>
  )
}

export default Section4