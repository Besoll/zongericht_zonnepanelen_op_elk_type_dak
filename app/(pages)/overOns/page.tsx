import Hero from '@/components/overOns/Hero'
import Link from 'next/link'
import Image from 'next/image'

import dynamic from 'next/dynamic'
const PartnersLogos = dynamic(() => import("@/components/zonnepanelen/PartnersLogos"))



const page = () => {
  return (
    <main className='flex-center mx-auto w-full flex-col snap-y gap-2'>
      <header className='w-full flex-center justify-center flex min-h-[100vh] mt-15 pb-30 xs:h-auto flex-col items-center'>
        <Hero />
          <Link href='#productUSP'>
            <Image
                  src='/icons/arrowDown.svg'
                  alt='arrow down svg'
                  width={80}
                  height={80}
                  className="object-cover text-white-400 w-[50px] xs:w-[80px] h-auto px-2 animate-bounce animate-duration-[1600ms] animate-ease-linear"
              />               
          </Link>
      </header>

      <section className='max-w-screen-3xl  scroll-mt-24 snap-start scroll-smooth md:scroll-auto h-auto' id='partnersLogos' >
        <PartnersLogos />
      </section>

      <section className='w-full flex-center gradient_special_Hero3_mob md:gradient_special_Hero3 flex flex-col min-h-[100vh]  pb-32 md:pb-2 xs:h-auto scroll-mt-16 snap-start scroll-smooth md:scroll-auto' id='productUSP' >
        
        <Link href='#sections'>
            <Image 
                  src='/icons/arrowDown.svg'
                  alt='arrow down svg'
                  width={80}
                  height={80}
                  className="object-cover text-white-400 w-[50px] xs:w-[80px] h-auto px-2 animate-bounce animate-duration-[1600ms] animate-ease-linear"
              />               
        </Link>        
      </section>

      <section className='w-full flex-center flex-col flex min-h-[100vh] pb-32 md:pb-2 xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto lg:mt-40 xl:mt-24 mt-12 mb-4 md:mb-16' id='sections' >
        
      </section>

    </main>
  )
}

export default page