import Hero from '@/components/schouwing/Hero'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const TimelineSchouwing = dynamic(() => import('@/components/ui/TimelineSchouwing'))
const LeadForm = dynamic(() => import('@/components/ui/LeadForm'))

import Image from 'next/image'

const page = () => {
  return (
    <main className='flex-center mx-auto w-full flex-col text-white'>
      <header className='w-full  flex-center gradient_special_Hero flex min-h-[100vh]'>        
        <Hero />
      </header>

      <section className='-mt-12'>
          <Link href='#timelineSection'>
            <Image 
                  src='/icons/arrowDown.svg'
                  alt='arrow down svg'
                  width={80}
                  height={80}
                  className="object-cover text-white  h-auto px-2 animate-bounce animate-duration-[1600ms] animate-ease-linear hover:animate-none hover:scale-105"
              />               
          </Link>
      </section>

      <section className='max-w-screen-3xl my-8 md:my-10' id='timelineSection'>
        <TimelineSchouwing />
      </section>

      <section className='flex justify-center items-center w-full gradient_green min-h-full flex-row' id="zohoForm">
        <div className='mt-20 mb-28'>
          <div className='absolute sm:-ml-56 xs:-ml-40 xs:w-[400px] h-auto w-[100px] -ml-12 mt-4 xs:mt-0 overflow-hidden'>
            <Image 
              src='/person/4.webp' 
              alt={'dd'}
              width='250'
              height='700'
              className='h-auto'       
            />
          </div>
          <div className='w-[320px] h-[540px]'>
            {/* <ZohoForm /> */}
            <LeadForm />
          </div>
        </div>
      </section>

    </main>
  )
}

export default page