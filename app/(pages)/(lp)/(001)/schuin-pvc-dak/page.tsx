import Hero from '@/components/__lp/001/Hero'
import Link from 'next/link'
import Image from 'next/image'

import dynamic from 'next/dynamic'
const Form = dynamic(() => import("@/components/__lp/001/Form"))
const Partners6Logos = dynamic(() => import("@/components/__lp/001/Partners6Logos"))
const ProductUSP = dynamic(() => import("@/components/zonnepanelen/ProductUSP"))
const Section1 = dynamic(() => import("@/components/__lp/001/Section1"))
const Section2 = dynamic(() => import("@/components/__lp/001/Section2"))
const SectionCTA = dynamic(() => import("@/components/__lp/001/SectionCTA"))
const Section3 = dynamic(() => import("@/components/__lp/001/Section3"))


// lp: page 001 - schuin pvc dak

const page = () => {
  return (
    <main className='flex-center mx-auto w-full flex-col text-black snap-y gap-2'>
      <header className='w-full flex-center justify-center flex mt-4 md:mt-12 pb-30 xs:h-auto flex-col items-center'>
        <Hero />
          <div className='bg-white shadow-xl w-[95%] rounded-3xl py-6 px-4 md:px-8 flex flex-col 
          justify-center items-center md:justify-start md:items-start max-w-[1440px] gap-3 scroll-mt-4
          md:scroll-mt-24 snap-start scroll-smooth md:scroll-auto' id="schouwingForm">
            <h3 className='text-black heading3'>
              Vraag een huis inspectie aan
            </h3>
            <Form />
          </div>
          
      </header>

      <section className=' scroll-mt-24 snap-start scroll-smooth md:scroll-auto h-auto' id='partnersLogos' >
        <Partners6Logos />
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

      <section className='w-full flex-center flex-col flex min-h-[100vh] xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto bg-qoqu_Blue/10' id='sections' >
        <Section1 />        
      </section>

      <section className='w-full flex-center flex-col flex min-h-[100vh] xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto' id='section2' >
        <Section2 />        
      </section>

      <section className='w-full flex-center flex-col flex h-auto bg-qoqu_Blue/10 py-6 text-black' id='sectionCTA' >
        <SectionCTA />        
      </section>

      <section className='w-full flex-center flex-col flex h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto text-center' id='section3' >
        <h2 className='heading3 md:heading2 font-semibold py-12 px-4 md:px-6'>
            Ook benieuwd wat wij voor uw PVC dak kunnen betekenen? <br/>
            Nodig ons uit en een van onze adviseurs zal het u komen uitleggen. 
        </h2>
        <Image 
            src='/lp/001/4.webp'
            alt='arrow down svg'
            width={80}
            height={80}
            className="w-full h-auto  lg:h-[400px] lg:w-auto hidden md:flex"
        /> 
        <Image 
            src='/lp/001/4-small.webp'
            alt='arrow down svg'
            width={80}
            height={80}
            className="w-full h-auto flex md:hidden"
        /> 
        <Section3 />        
      </section>

    </main>
  )
}

export default page