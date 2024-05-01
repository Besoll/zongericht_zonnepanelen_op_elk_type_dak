import Image from 'next/image'

const HeroImageSection = () => {
  return (
    <div className='w-full max-w-[500px] flex flex-row gap-4 bg-qoqu_Grey/20 pr-7 py-7'>
            {/* 3 size image - mobile-tablet-desktop */}
            <Image 
                src='/lp/007/1-big.webp'
                alt='glas glas zonnepanelen op parabool dak 1'
                width={400}
                height={600}
                className="object-cover h-auto w-full rounded-[0]
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                            md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:flex hidden
                            "
            />
            <Image 
                src='/lp/007/1.webp'
                alt='glas glas zonnepanelen op parabool dak 1'
                width={400}
                height={600}
                className="object-cover h-auto w-full rounded-[0]
                          md:hover:scale-110  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
            />
            <Image 
                src='/lp/007/1-small.webp'
                alt='glas glas zonnepanelen op parabool dak 1'
                width={400}
                height={600}
                className="object-cover h-auto w-full shadow-lg rounded-[0] flex md:hidden"
            />
    </div>

  )
}

export default HeroImageSection


