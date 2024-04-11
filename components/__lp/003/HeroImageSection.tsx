import Image from 'next/image'

const HeroImageSection = () => {
  return (
    <div className='flex flex-row justify-start w-full lg:w-full max-w-[490px] gap-4'>
        <div className='flex flex-col justify-between pb-2 gap-4'>
            <Image 
                src='/lp/003/1-1-big.webp'
                alt='glas glas zonnepanelen op elk type dak testimonial'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl"
            />   
            <Image 
                src='/lp/003/1-3-big.webp'
                alt='glas glas zonnepanelen op elk type dak op dakkapel'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl"
            />   
        </div>
        <div className='flex flex-col justify-between pb-2 gap-4'>
            <Image 
                src='/lp/003/1-2-big.webp'
                alt='glas glas zonnepanelen op elk type dak testimonial'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl"
            />   
            <Image 
                src='/lp/003/1-4-big.webp'
                alt='glas glas zonnepanelen op elk type dak op dakkapel'
                width={140}
                height={125}
                className="object-cover h-auto w-full rounded-xl"
            />   
        </div>   
    </div>
  )
}

export default HeroImageSection