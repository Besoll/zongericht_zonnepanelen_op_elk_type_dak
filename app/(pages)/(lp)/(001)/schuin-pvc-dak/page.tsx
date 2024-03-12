import Hero from '@/components/__lp/001/Hero'
import Link from 'next/link'
import Image from 'next/image'

import dynamic from 'next/dynamic'
const Form = dynamic(() => import("@/components/__lp/001/Form"))
const PartnersLogos = dynamic(() => import("@/components/ui/PartnersLogos"))
const ProductUSP = dynamic(() => import("@/components/zonnepanelen/ProductUSP"))
const Section1 = dynamic(() => import("@/components/__lp/001/Section1"))
const Section2 = dynamic(() => import("@/components/__lp/001/Section2"))
const SectionCTA = dynamic(() => import("@/components/ui/SectionCTA"))


// lp: page 001 - schuin pvc dak

const page = () => {
  return (
    <main className='flex-center mx-auto w-full flex-col text-black snap-y gap-2'>
      <header className='w-full flex-center justify-center flex mt-4 md:mt-12 pb-30 xs:h-auto flex-col items-center'>
        <Hero />
          {/* <Link href='#productUSP' className='flex w-full mr-2 md:mr-6 flex-end items-end'>
            <Image 
                  src='/icons/arrowDown.svg'
                  alt='arrow down svg'
                  width={80}
                  height={80}
                  className="bg-gray-400 w-[50px] xs:w-[80px] h-auto px-2 animate-bounce animate-duration-[1600ms] animate-ease-linear rounded-lg"
              />               
          </Link> */}
          <div className='bg-white shadow-xl w-[95%] rounded-3xl py-6 px-4 md:px-8 flex flex-col 
          justify-center items-center md:justify-start md:items-start max-w-[1440px] gap-3' id="schouwingForm">
            <h3 className='text-black heading3'>
              Vraag een huis inspectie aan
            </h3>
            <Form />
          </div>
          
      </header>

      <section className='max-w-screen-3xl  scroll-mt-24 snap-start scroll-smooth md:scroll-auto h-auto' id='partnersLogos' >
        <PartnersLogos />
      </section>

      {/* <section className='w-full flex-center bg-qoqu_Blue/20 md:gradient_special_Hero3 flex flex-col min-h-[100vh]  pb-32 md:pb-2 xs:h-auto scroll-mt-16 snap-start scroll-smooth md:scroll-auto' id='productUSP' >
        <ProductUSP />
        <Link href='#sections'>
            <Image 
                  src='/icons/arrowDown.svg'
                  alt='arrow down svg'
                  width={80}
                  height={80}
                  className="object-cover text-white-400 w-[50px] xs:w-[80px] h-auto px-2 animate-bounce animate-duration-[1600ms] animate-ease-linear"
              />               
        </Link>        
      </section> */}

      <section className='w-full flex-center flex-col flex min-h-[100vh] xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto mb-4 md:mb-16 bg-qoqu_Blue/10' id='sections' >
        <Section1 />        
      </section>

      <section className='w-full flex-center flex-col flex min-h-[100vh] xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto mb-4 md:mb-16 ' id='section2' >
        <Section2 />        
      </section>

    </main>
  )
}

export default page