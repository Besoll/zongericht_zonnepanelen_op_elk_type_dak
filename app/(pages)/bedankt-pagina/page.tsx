import Hero from '@/components/bedanktPagina/Hero'
import Link from 'next/link'
import Image from 'next/image'

import dynamic from 'next/dynamic'
const PartnersLogos = dynamic(() => import("@/components/ui/PartnersLogos"))
const Statistics2 = dynamic(() => import("@/components/ui/Statistics2"))
const Section1 = dynamic(() => import("@/components/bedanktPagina/Section1"))
const SectionCTA = dynamic(() => import("@/components/ui/SectionCTA"))

const AccordionProduct = dynamic(() => import('@/components/home/AccordionProduct')) 



const page = () => {
  return (
    <main className='flex-center mx-auto w-full flex-col snap-y gap-2'>
      <header className='w-full flex-center justify-center flex mt-20 md:mt-0 pb-30 xs:h-auto flex-col items-center mb-12 min-h-[100vh]'>
        <Hero />
          <Link href='#sections'>
            <Image
                  src='/icons/arrowDown.svg'
                  alt='arrow down svg'
                  width={80}
                  height={80}
                  className="object-cover gradient_orange rounded-lg shadow-lg text-black w-[80px] h-auto px-2 "
              />               
          </Link>
      </header>


      <section className='w-full flex-center flex-col flex min-h-[100vh] pb-4 md:pb-2 xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto ' id='sections' >
        <Section1 />
        <PartnersLogos />
        <Statistics2 />
      </section>
    </main>
  )
}

export default page