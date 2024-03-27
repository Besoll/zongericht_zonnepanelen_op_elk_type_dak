// import Hero from '@/components/__lp/002/Hero'

import dynamic from 'next/dynamic'
const Hero = dynamic(() => import("@/components/__lp/002/Hero"))
const Form = dynamic(() => import("@/components/__lp/002/Form"))
const Partners6Logos = dynamic(() => import("@/components/__lp/002/Partners6Logos"))
const ProductUSP = dynamic(() => import("@/components/zonnepanelen/ProductUSP"))
const Section1 = dynamic(() => import("@/components/__lp/002/Section1"))
const Section2 = dynamic(() => import("@/components/__lp/002/Section2"))
const SectionCTA = dynamic(() => import("@/components/__lp/002/SectionCTA"))
const Section3 = dynamic(() => import("@/components/__lp/002/Section3"))
const Section4 = dynamic(() => import("@/components/__lp/002/Section4"))
const FAQ = dynamic(() => import("@/components/__lp/002/FAQ"))
const TestimonialsSmall = dynamic(() => import("@/components/__lp/002/TestimonialsSmall"))
const TestimonialsBig = dynamic(() => import("@/components/__lp/002/TestimonialsBig"))


// lp: page 002 - schuin pvc dak

const page = () => {
  return (
    <main className='mx-auto w-full flex-col text-black snap-y gap-2'>
      <header className='w-full h-auto -mt-20 
      bg-[url("/lp/002/bg-1.webp")] bg-no-repeat bg-cover bg-top'>
        <div className='w-full h-auto flex flex-col justify-center items-center
        bg-black/60 text-white pb-16 md:pb-20 pt-28 md:pt-40 '>
          <Hero />
          <div className='bg-white shadow-xl w-[95%] rounded-lg py-6 px-4 md:px-8 flex flex-col 
          justify-center items-center md:justify-start md:items-start max-w-[1440px] gap-3 scroll-mt-4
          md:scroll-mt-24 snap-start scroll-smooth md:scroll-auto' id="schouwingForm">
            <p className='text-black text-3xl font-semibold'>
              Vraag een woninginspectie aan
            </p>
            <Form />
          </div>
        </div>
      </header>

      {/* <section className='flex justify-center items-center scroll-mt-24 snap-start scroll-smooth md:scroll-auto h-auto' id='partnersLogos' >
        <Partners6Logos />
      </section> */}

      {/* <section className='w-full bg-qoqu_Blue/20 md:gradient_special_Hero3 flex flex-col min-h-[100vh]  pb-32 md:pb-2 xs:h-auto scroll-mt-16 snap-start scroll-smooth md:scroll-auto' id='productUSP' >
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

      <section className='flex justify-center items-center w-full flex-col min-h-[100vh] xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto ' id='sections' >
        <Section1 />        
      </section>

      <section className='flex justify-center items-center w-full flex-col min-h-[100vh] xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto' id='section2' >
        <Section2 />        
      </section>

      <section className='flex justify-center items-center w-full flex-col h-auto bg-qoqu_Blue/10 py-6 text-black' id='sectionCTA' >
        <SectionCTA />        
      </section>

      <section className='flex justify-center items-center w-full flex-col h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto text-center' id='section3' >
        <h2 className='w-full heading3 md:heading2 font-semibold py-12 md:py-16 px-4 md:px-6'>
            Ook benieuwd wat wij voor uw PVC dak kunnen betekenen? <br/>
            Nodig ons uit en een van onze adviseurs zal het u komen uitleggen. 
        </h2>
        <div className="w-full lg: h-[400px] bg-[url('/lp/002/4-big.webp')] bg-no-repeat bg-cover bg-top xl:flex hidden"></div> 
        <div className="w-full lg: h-[400px] bg-[url('/lp/002/4.webp')] bg-no-repeat bg-cover bg-top md:flex xl:hidden hidden"></div>
        <div className="w-full h-[350px] bg-[url('/lp/002/4-small.webp')] bg-no-repeat bg-cover bg-top md:hidden flex"></div>
        <Section3 />        
      </section>

      <section 
        className='flex justify-center items-center w-full flex-col h-auto bg-qoqu_Blue/10 py-6 text-black' 
        id='testimonialsSmall' 
      >
        <TestimonialsSmall />        
      </section>

      <section 
        className='flex justify-center items-center w-full flex-col h-auto py-6 text-black' 
        id='testimonialsBig' 
      >
        <TestimonialsBig />        
      </section>


      <section className='flex justify-center items-center w-full flex-col h-auto bg-qoqu_Blue/10 py-6 text-black' id='sectionCTA2' >
        <SectionCTA />        
      </section>

      <section className='flex justify-center items-center w-full mb-16 flex-col h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto' id='faq'>
        <Section4 /> 
        <div className='flex flex-col gap-4 px-4 lg:px-6 scroll-mt-4 snap-start' id="accordionstart">
          <h2 className='heading3 md:heading2 font-semibold text-center'>
            Veel gestelde vragen
          </h2>
          <FAQ />      
        </div>  
      </section>

    </main>
  )
}

export default page