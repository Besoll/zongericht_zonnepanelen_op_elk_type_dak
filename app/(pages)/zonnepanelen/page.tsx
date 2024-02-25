import Hero from '@/components/zonnepanelen/Hero'
import Link from 'next/link'
import Image from 'next/image'

import dynamic from 'next/dynamic'
const PartnersLogos = dynamic(() => import("@/components/zonnepanelen/PartnersLogos"))
const ProductUSP = dynamic(() => import("@/components/zonnepanelen/ProductUSP"))
const QualityFirst = dynamic(() => import("@/components/zonnepanelen/QualityFirst"))
const AccordionProduct = dynamic(() => import('@/components/home/AccordionProduct')) 


const page = () => {
  return (
    <main className='flex-center mx-auto w-full flex-col text-white snap-y gap-2'>
      <header className='w-full  flex-center gradient_special_Hero2 flex h-[100vh] xs:h-[95vh]'>
        <Hero />
      </header>

      <section className='-mt-24'>
          <Link href='#partnersLogos'>
            <Image 
                  src='/icons/arrowDown.svg'
                  alt='arrow down svg'
                  width={80}
                  height={80}
                  className="object-cover text-white-400 w-[50px] xs:w-[80px] h-auto px-2 animate-bounce animate-duration-[1600ms] animate-ease-linear"
              />               
          </Link>
      </section>
      <section className='max-w-screen-3xl  scroll-mt-24 snap-start scroll-smooth md:scroll-auto' id='partnersLogos' >
        <PartnersLogos />
      </section>

      <section className='w-full flex-center gradient_special_Hero3_mob md:gradient_special_Hero3 flex flex-col min-h-[100vh] pb-32 md:pb-2 xs:h-[95vh] scroll-mt-16 snap-start' id='productUSP scroll-smooth md:scroll-auto' >
        <ProductUSP />        
      </section>
      <section className='-mt-28 md:-mt-40'>
          <Link href='#qualityFirst'>
            <Image 
                  src='/icons/arrowDown.svg'
                  alt='arrow down svg'
                  width={80}
                  height={80}
                  className="object-cover text-white-400 w-[50px] xs:w-[80px] h-auto px-2 animate-bounce animate-duration-[1600ms] animate-ease-linear"
              />               
          </Link>
      </section>

      <section className='w-full flex-center flex-col flex min-h-[100vh] pb-32 md:pb-2 xs:h-[95vh] scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto lg:mt-40 xl:mt-24 mt-12' id='qualityFirst' >
        <QualityFirst />
        <AccordionProduct />
      </section>

    </main>
  )
}

export default page