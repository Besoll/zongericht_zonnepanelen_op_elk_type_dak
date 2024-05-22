import Image from 'next/image'

const HeroImageSection = () => {
  return (
    <div className='w-full h-full flex object-cover relative'>
            <div className='w-full h-full text-qoqu_Dark_Grey outline outline-2 rounded-none absolute bottom-2 md:bottom-6 right-2 md:right-6 z-0' />
            {/* 3 size image - mobile-tablet-desktop */}
            <Image 
                src='/lp/010/1-1-big.webp'
                alt='glas glas zonnepanelen op dakpannen 1'
                width={400}
                height={600}
                className="w-full h-auto rounded-[0] 
                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl
                lg:flex hidden md:min-h-[700px] object-cover z-10
                            "
            />
            <Image 
                src='/lp/010/1-1.webp'
                alt='glas glas zonnepanelen op dakpannen 1'
                width={400}
                height={600}
                className="h-full rounded-[0] 
                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl
                lg:hidden hidden md:flex z-10"
            />
            <Image 
                src='/lp/010/1-1-small.webp'
                alt='glas glas zonnepanelen op dakpannen 1'
                width={400}
                height={600}
                className="object-cover h-auto w-full shadow-lg rounded-[0] 
                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-xl
                flex md:hidden z-10"
            />


            <Image 
                src='/lp/010/1-2-big.webp'
                alt='glas glas zonnepanelen op dakpannen 2'
                width={250}
                height={200}
                className="w-[45%] h-auto rounded-[0] absolute -bottom-4 -left-10
                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 shadow-xl
                lg:flex hidden object-cover z-10
                            "
            />
            <Image 
                src='/lp/010/1-2.webp'
                alt='glas glas zonnepanelen op dakpannen 2'
                width={400}
                height={600}
                className="w-[45%] h-auto rounded-[0] absolute -bottom-4 -left-10 
                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 shadow-xl md:hover:shadow-xl
                lg:hidden hidden md:flex z-10"
            />
            <Image 
                src='/lp/010/1-2-small.webp'
                alt='glas glas zonnepanelen op dakpannen 2'
                width={400}
                height={600}
                className="object-cover w-[45%] h-auto rounded-[0] absolute -bottom-4 left-0 md:-left-10 shadow-xl
                flex md:hidden z-10"
            />
    </div>

  )
}

export default HeroImageSection




{/* <Image 
    src='/lp/010/1-1-big.webp'
    alt='glas glas zonnepanelen op dakpannen 1'
    width={400}
    height={600}
    className="h-auto w-full rounded-[0]
                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:flex hidden
                "
/> */}


