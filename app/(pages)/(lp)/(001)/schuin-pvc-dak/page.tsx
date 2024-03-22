// import Hero from '@/components/__lp/001/Hero'

import dynamic from 'next/dynamic'
const Hero = dynamic(() => import("@/components/__lp/001/Hero"))
const Form = dynamic(() => import("@/components/__lp/001/Form"))
const Partners6Logos = dynamic(() => import("@/components/__lp/001/Partners6Logos"))
const ProductUSP = dynamic(() => import("@/components/zonnepanelen/ProductUSP"))
const Section1 = dynamic(() => import("@/components/__lp/001/Section1"))
const Section2 = dynamic(() => import("@/components/__lp/001/Section2"))
const SectionCTA = dynamic(() => import("@/components/__lp/001/SectionCTA"))
const Section3 = dynamic(() => import("@/components/__lp/001/Section3"))
const Section4 = dynamic(() => import("@/components/__lp/001/Section4"))
const FAQ = dynamic(() => import("@/components/__lp/001/FAQ"))
const TestimonialsSmall = dynamic(() => import("@/components/__lp/001/TestimonialsSmall"))
const TestimonialsBig = dynamic(() => import("@/components/__lp/001/TestimonialsBig"))


// lp: page 001 - schuin pvc dak

const page = () => {
  return (
    <main className='mx-auto w-full flex-col text-black snap-y gap-2'>
      <header className='w-full justify-center items-center flex mt-4 md:mt-12 pb-30 xs:h-auto flex-col min-h-[120vw] xs:min-h-[110vw] sm:min-h-[100vw] md:min-h-[80vw] lg:min-h-[60vw] xl:min-h-[50vw] '>
        <Hero />
          <div className='bg-white shadow-xl w-[95%] rounded-3xl py-6 px-4 md:px-8 flex flex-col 
          justify-center items-center md:justify-start md:items-start max-w-[1440px] gap-3 scroll-mt-4
          md:scroll-mt-24 snap-start scroll-smooth md:scroll-auto' id="schouwingForm">
            <p className='text-black text-3xl font-semibold'>
              Vraag een huis inspectie aan
            </p>
            <Form />
          </div>
          
      </header>

      <section className='flex justify-center items-center scroll-mt-24 snap-start scroll-smooth md:scroll-auto h-auto' id='partnersLogos' >
        <Partners6Logos />
      </section>

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

      <section className='flex justify-center items-center w-full flex-col min-h-[100vh] xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto bg-qoqu_Blue/10' id='sections' >
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
        <div className="w-full lg: h-[400px] bg-[url('/lp/001/4-big.webp')] bg-no-repeat bg-cover bg-top xl:flex hidden"></div> 
        <div className="w-full lg: h-[400px] bg-[url('/lp/001/4.webp')] bg-no-repeat bg-cover bg-top md:flex xl:hidden hidden"></div>
        <div className="w-full h-[350px] bg-[url('/lp/001/4-small.webp')] bg-no-repeat bg-cover bg-top md:hidden flex"></div>
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