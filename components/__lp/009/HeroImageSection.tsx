import Image from 'next/image'

const HeroImageSection = () => {
  return (
    <div className='flex w-full h-full object-cover'>
            {/* 3 size image - mobile-tablet-desktop */}
            <Image 
                src='/lp/009/1-big.webp'
                alt='glas glas zonnepanelen op schuin bitumen dak 1'
                width={400}
                height={600}
                className="w-full h-auto rounded-[0] lg:flex hidden md:min-h-[700px] object-cover
                            "
            />
            <Image 
                src='/lp/009/1.webp'
                alt='glas glas zonnepanelen op schuin bitumen dak 1'
                width={400}
                height={600}
                className="h-full rounded-[0] lg:hidden hidden md:flex"
            />
            <Image 
                src='/lp/009/1-small.webp'
                alt='glas glas zonnepanelen op schuin bitumen dak 1'
                width={400}
                height={600}
                className="object-cover h-auto w-full shadow-lg rounded-[0] flex md:hidden"
            />
    </div>

  )
}

export default HeroImageSection




{/* <Image 
    src='/lp/009/1-big.webp'
    alt='glas glas zonnepanelen op schuin bitumen dak 1'
    width={400}
    height={600}
    className="h-auto w-full rounded-[0]
                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:flex hidden
                "
/> */}


