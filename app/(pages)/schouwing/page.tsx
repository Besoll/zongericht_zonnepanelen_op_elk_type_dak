import Hero from '@/components/schouwing/Hero'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const TimelineSchouwing = dynamic(() => import('@/components/ui/TimelineSchouwing'))
const LeadForm = dynamic(() => import('@/components/ui/ZohoForm'))

import Image from 'next/image'

const page = () => {
  return (
    <main className='flex-center mx-auto w-full flex-col text-white snap-y'>
      <header className='w-full  flex-center gradient_special_Hero flex h-[100vh] xs:h-[95vh]'>        
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
        <TimelineSchouwing />
      </section>

      <section className='flex justify-center items-center w-full gradient_green min-h-full flex-row scroll-mt-12 snap-start'  id="zohoForm">
        <div className='mt-24 xs:mb-28 mb-4'>
          <div className='absolute hidden sm:flex -ml-56 sm:w-[300px] h-auto w-[100px]  mt-2 xs:-mt- overflow-hidden z-8'>
            <Image 
              src='/person/4.webp' 
              alt={'dd'}
              width='250'
              height='700'
              className='h-auto'       
            />
          </div> 
          <div className='min-w-[300px] h-[500px] sm:ml-8 xl:-mr-12 xs:mt-8 -mt-8 z-10'>
            {/* <ZohoForm /> */}
            <LeadForm />
          </div>
          <div className='sm:hidden w-[100px] h-auto -mt-20 overflow-hidden'>
            <Image 
              src='/person/1.webp' 
              alt={'dd'}
              width='250'
              height='700'
              className='h-auto'       
            />
          </div>
        </div>
      </section>

    </main>
  )
}

export default page