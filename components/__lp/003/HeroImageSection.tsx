import Image from 'next/image'

const HeroImageSection = () => {
  return (
    <div className='w-full max-w-[500px] flex flex-row gap-4'>
        <div className='w-1/2 flex flex-col justify-between gap-4'>
            <Image 
                src='/lp/003/1-1-big.webp'
                alt='glas glas zonnepanelen op elk type dak testimonial'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                            md:cursor-pointer md:hover:rotate-2
                            "
            />   
            <Image 
                src='/lp/003/1-3-big.webp'
                alt='glas glas zonnepanelen op elk type dak op dakkapel'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                            md:cursor-pointer md:hover:rotate-2
                            "
            />   
        </div>
        <div className='w-1/2 flex flex-col justify-between gap-4'>
            <Image 
                src='/lp/003/1-2-big.webp'
                alt='glas glas zonnepanelen op elk type dak testimonial'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                            md:cursor-pointer md:hover:rotate-2
                            "
            />   
            <Image 
                src='/lp/003/1-4-big.webp'
                alt='glas glas zonnepanelen op elk type dak op dakkapel'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                            md:cursor-pointer md:hover:rotate-2
                            "
            />   
        </div>   

    </div>


  )
}

export default HeroImageSection


