import Hero from '@/components/zonnepanelen/Hero'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <main className='flex-center mx-auto w-full flex-col text-white snap-y gap-2'>
      <header className='w-full  flex-center gradient_special_Hero2 flex h-[100vh] xs:h-[95vh]'>
        <Hero />
      </header>

      <section className='-mt-10 xs:-mt-20'>
          <Link href='#timelineSection'>
            <Image 
                  src='/icons/arrowDown.svg'
                  alt='arrow down svg'
                  width={80}
                  height={80}
                  className="object-cover text-white-400 w-[50px] xs:w-[80px] h-auto px-2 animate-bounce animate-duration-[1600ms] animate-ease-linear"
              />               
          </Link>
      </section>

      <section className='max-w-screen-3xl my-8 md:my-10  scroll-mt-28 snap-start' id='timelineSection' >
        
      </section>

      <section className='flex justify-center items-center w-full gradient_green min-h-full flex-row scroll-mt-12 snap-start'  id="zohoForm">
       
      </section>

    </main>
  )
}

export default page