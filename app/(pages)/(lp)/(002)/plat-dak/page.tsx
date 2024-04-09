// import Hero from '@/components/__lp/002/Hero'

import dynamic from 'next/dynamic'
const Hero = dynamic(() => import("@/components/__lp/002/Hero"))
const Form = dynamic(() => import("@/components/__lp/002/Form"))
const Section1 = dynamic(() => import("@/components/__lp/002/Section1"))
const SectionCards = dynamic(() => import("@/components/__lp/002/SectionCards"))
const Section2 = dynamic(() => import("@/components/__lp/002/Section2"))
const Section3 = dynamic(() => import("@/components/__lp/002/Section3"))
const SectionCTA = dynamic(() => import("@/components/__lp/002/SectionCTA"))
const StatisticsCards = dynamic(() => import("@/components/__lp/002/StatisticsCards"))
const FAQ = dynamic(() => import("@/components/__lp/002/FAQ"))
const TestimonialsSmall = dynamic(() => import("@/components/__lp/002/TestimonialsSmall"))
const TestimonialsBig = dynamic(() => import("@/components/__lp/002/TestimonialsBig"))
const CtaButton5 = dynamic(() => import('@/components/__lp/002/ctaButtons/CtaButton5'))


// lp: page 002 - schuin pvc dak

const page = () => {
  return (
    <main className='mx-auto w-full flex flex-col justify-center items-center text-black snap-y gap-2'>
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

      <section className='flex justify-center items-center w-full flex-col xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto ' id='sections' >
        <Section1 />        
      </section>

      <section className='flex justify-center items-center w-full flex-col h-auto bg-black py-6 text-white' id='sectionCTA' >
        <SectionCards />        
      </section>

      <section className='flex justify-center items-center w-full flex-col xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto' id='section2' >
        <StatisticsCards /> 
        <Section2 />        
      </section>

      <section className='flex justify-center items-center w-full flex-col h-auto bg-black py-6 text-white' id='sectionCTA' >
        <SectionCTA />        
      </section>

      <section 
        className='flex justify-center items-center w-full flex-col h-auto py-6 text-black' 
        id='testimonialsSmall' 
      >
        <TestimonialsSmall />        
      </section>

      <section className='flex justify-center items-center w-full flex-col h-auto bg-black py-6 text-white' id='sectionCTA' >
        <SectionCTA />        
      </section>

      <section 
        className='flex justify-center items-center w-full flex-col h-auto py-6 text-black' 
        id='testimonialsBig' 
      >
        <TestimonialsBig />        
      </section>

      <section className='flex justify-center items-center w-full flex-col h-auto bg-qoqu_Blue/10 py-6 text-black' id='Section3' >
        <Section3 />        
      </section>


      <section className='w-full max-w-[1440px] h-auto flex flex-col md:flex-row justify-center items-center 
                          gap-8 md:gap-20 py-8 md:py-12     
                          px-4 md:px-6
                          scroll-mt-16 snap-start scroll-smooth md:scroll-auto' id='faq'>   

        <div className='flex flex-col justify-center items-center md:justify-start md:items-start gap-6 md:gap-8 px-4 lg:px-6 scroll-mt-4 snap-start my-12 md:my-24' id="accordionstart">
          <p className='text-qoqu_Blue font-semibold text-xl'>
             Plat dak
          </p>  
          <h2 className='heading3 md:heading2 font-semibold text-center md:text-left'>
            FAQ: veel gestelde vragen
          </h2>
          <CtaButton5 />    
        </div>  
        
        <FAQ />

      </section>

    </main>
  )
}

export default page