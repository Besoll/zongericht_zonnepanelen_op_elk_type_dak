import Image from 'next/image'

const HeroImageSection = () => {
  return (
    <div className='w-full max-w-[500px] flex flex-row gap-4'>
        <div className='w-1/2 flex flex-col justify-between gap-4'>
            {/* 3 size image - mobile-tablet-desktop */}
            <Image 
                src='/lp/003/1-1.webp'
                alt='glas glas zonnepanelen op parabool dak 1'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                            md:cursor-pointer md:hover:rotate-2 lg:flex hidden
                            "
            />
            <Image 
                src='/lp/003/1-1-big.webp'
                alt='glas glas zonnepanelen op parabool dak 1'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl lg:hidden hidden md:flex"
            />
            <Image 
                src='/lp/003/1-1-big.webp'
                alt='glas glas zonnepanelen op parabool dak 1'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl flex md:hidden"
            />

            {/* 3 size image - mobile-tablet-desktop */}
            <Image 
                src='/lp/003/1-3-big.webp'
                alt='glas glas zonnepanelen op parabool dak 3'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                            md:cursor-pointer md:hover:rotate-2 lg:flex hidden
                            "
            />
            <Image 
                src='/lp/003/1-3.webp'
                alt='glas glas zonnepanelen op parabool dak 3'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl lg:hidden hidden md:flex"
            />  
            <Image 
                src='/lp/003/1-3-small.webp'
                alt='glas glas zonnepanelen op parabool dak 3'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl flex md:hidden"
            />     
        </div>
        <div className='w-1/2 flex flex-col justify-between gap-4'>

            {/* 3 size image - mobile-tablet-desktop */}
            <Image 
                src='/lp/003/1-2-big.webp'
                alt='glas glas zonnepanelen op parabool dak 2'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                            md:cursor-pointer md:hover:rotate-2 lg:flex hidden
                            "
            />
            <Image 
                src='/lp/003/1-2.webp'
                alt='glas glas zonnepanelen op parabool dak 2'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl lg:hidden hidden md:flex"
            />
            <Image 
                src='/lp/003/1-2-small.webp'
                alt='glas glas zonnepanelen op parabool dak 2'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl flex md:hidden"
            />

            {/* 3 size image - mobile-tablet-desktop */}   
            <Image 
                src='/lp/003/1-4-big.webp'
                alt='glas glas zonnepanelen op parabool dak 4'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                            md:cursor-pointer md:hover:rotate-2 lg:flex hidden
                            "
            />
            <Image 
                src='/lp/003/1-4.webp'
                alt='glas glas zonnepanelen op parabool dak 4'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl lg:hidden hidden md:flex"
            />
            <Image 
                src='/lp/003/1-4-small.webp'
                alt='glas glas zonnepanelen op parabool dak 4'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl flex md:hidden"
            />         
        </div>   

    </div>


  )
}

export default HeroImageSection


