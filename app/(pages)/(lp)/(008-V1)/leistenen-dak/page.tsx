
import dynamic from 'next/dynamic'
const Hero = dynamic(() => import("@/components/__lp/008-V1/Hero"))
const Form = dynamic(() => import("@/components/__lp/008-V1/Form"))
const Section1 = dynamic(() => import("@/components/__lp/008-V1/Section1"))
// const StatisticsCards = dynamic(() => import("@/components/__lp/008-V1/StatisticsCards"))
const Section2 = dynamic(() => import("@/components/__lp/008-V1/Section2"))
const Section3 = dynamic(() => import("@/components/__lp/008-V1/Section3"))
const Section4 = dynamic(() => import("@/components/__lp/008-V1/Section4"))
const Section5 = dynamic(() => import("@/components/__lp/008-V1/Section5"))
const SectionCTA = dynamic(() => import("@/components/__lp/008-V1/SectionCTA"))
// const Section6Steps = dynamic(() => import("@/components/__lp/008-V1/Section6Steps"))
// const Partners6Logos = dynamic(() => import("@/components/__lp/008-V1/Partners6Logos"))
const RoofTag = dynamic(() => import("@/components/__lp/008-V1/ui/RoofTag"))
const FAQ = dynamic(() => import("@/components/__lp/008-V1/FAQ"))
const TestimonialsSmall = dynamic(() => import("@/components/__lp/008-V1/TestimonialsSmall"))
const TestimonialsBig = dynamic(() => import("@/components/__lp/008-V1/TestimonialsBig"))
const CtaButton2 = dynamic(() => import('@/components/__lp/008-V1/ctaButtons/CtaButton2'))




// lp: page 008-V1 - Leistenen Dak

const page = () => {
  return (
    <main className='mx-auto w-full flex flex-col justify-center items-center bg-white text-black snap-y scroll-smooth md:scroll-auto scroll-mt-4 snap-start'>
      <header className='w-full h-auto flex justify-center items-center -mt-20'>
        <Hero />
      </header>

      <section className='flex justify-center items-center w-full flex-col h-auto py-6' id='sectionform' >
        <div className='w-[95%] py-6 md:py-16 px-4 md:px-8 flex flex-col 
          justify-center items-center max-w-[1440px] gap-3 md:gap-4 scroll-mt-4
          md:scroll-mt-24 snap-start scroll-smooth md:scroll-auto' id="schouwingForm">
            <RoofTag />
            <p className='w-fit text-black text-4xl font-semibold text-center pb-4 md:pb-8 '>
              Vraag een woninginspectie aan
            </p>
            <Form />
        </div>       
      </section>


      <section className='w-full h-auto flex justify-center items-center py-16 md:py-32 text-black' id='section1' >
          <Section1 />
      </section>

      <section className='w-full h-auto flex justify-center items-center py-16 md:py-32 text-black' id='section2' >
          <Section2 />
      </section>


      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-white 
                          smSP:bg-[url("/lp/008-V1/bg-2-small.webp")] mdSP:bg-[url("/lp/008-V1/bg-2.webp")] lgSP:bg-[url("/lp/008-V1/bg-2-big.webp")] bg-no-repeat bg-cover bg-center
                          ' id='SectionCTA' >
        <div className='w-full h-auto flex justify-center items-center bg-gradient-to-t md:bg-gradient-to-l from-transparent to-black/80 py-16 md:py-32 '>
          <SectionCTA />     
        </div>
      </section>

      <section className='w-full h-auto flex justify-center items-center text-black py-16 md:py-32' id='section3' >
          <Section3 />
      </section>


      <section className='w-full h-auto flex justify-center items-center text-black py-16 md:py-32' id='section4' >
          <Section4 />
      </section>


      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-white 
                          smSP:bg-[url("/lp/008-V1/bg-3-small.webp")] mdSP:bg-[url("/lp/008-V1/bg-3.webp")] lgSP:bg-[url("/lp/008-V1/bg-3-big.webp")] bg-no-repeat bg-cover bg-center
                          ' id='SectionCTA' >
        <div className='w-full h-auto flex justify-center items-center bg-gradient-to-t md:bg-gradient-to-l from-transparent to-black/80 py-16 md:py-32 '>
          <SectionCTA />     
        </div>
      </section>

      <section 
        className='w-full flex justify-center items-centerflex-col h-auto py-16 md:py-32 bg-qoqu_Orange/10 text-black' 
        id='testimonialsSmall' 
      >
        <TestimonialsSmall />        
      </section>

      <section 
        className='w-full flex justify-center items-center flex-col h-auto py-6 text-black' 
        id='testimonialsBig' 
      >
        <TestimonialsBig />        
      </section>

      <section className='w-full h-auto flex justify-center items-center flex-col bg-qoqu_Orange/10' id='Section6Steps' >
        <Section5 />        
      </section>

      <section className='w-full max-w-[1440px] h-auto flex flex-col md:flex-row justify-center items-center 
                          gap-8 md:gap-12 py-8 md:py-12     
                          px-4 md:px-6 pb-16 md:pb-32
                          scroll-mt-16 snap-start scroll-smooth md:scroll-auto' id='faq'>   
        <div className='flex flex-col justify-center items-center md:items-start gap-6 md:gap-8 px-4 lg:px-6 scroll-mt-4 snap-start my-12 pt-4 md:pt-12' id="accordionstart">
          <RoofTag />
          <h2 className='heading3 md:heading2 font-semibold text-center md:text-left text_black text-black'>
            Veelgestelde vragen:
          </h2> 
          <CtaButton2 /> 
        </div>  
        <FAQ />
      </section>
     

    </main>
  )
}

export default page