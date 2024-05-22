
import dynamic from 'next/dynamic'
const Hero = dynamic(() => import("@/components/__lp/004/Hero"))
// const Form = dynamic(() => import("@/components/__lp/004/Form"))
const Section1 = dynamic(() => import("@/components/__lp/004/Section1"))
const StatisticsCards = dynamic(() => import("@/components/__lp/004/StatisticsCards"))
const Section2 = dynamic(() => import("@/components/__lp/004/Section2"))
const Section3 = dynamic(() => import("@/components/__lp/004/Section3"))
const Section4 = dynamic(() => import("@/components/__lp/004/Section4"))
// const SectionCTA = dynamic(() => import("@/components/__lp/004/SectionCTA"))
// const Section6Steps = dynamic(() => import("@/components/__lp/004/Section6Steps"))
// const Partners6Logos = dynamic(() => import("@/components/__lp/004/Partners6Logos"))
const RoofTag = dynamic(() => import("@/components/__lp/004/ui/RoofTag"))
const FAQTag = dynamic(() => import("@/components/__lp/004/ui/FAQTag"))
const FAQ = dynamic(() => import("@/components/__lp/004/FAQ"))
const TestimonialsSmall = dynamic(() => import("@/components/__lp/004/TestimonialsSmall"))
const TestimonialsBig = dynamic(() => import("@/components/__lp/004/TestimonialsBig"))
const CtaButton = dynamic(() => import('@/components/__lp/004/ctaButtons/CtaButton7'))


// lp: page 004 - ZInken dak

const page = () => {
  return (
    <main className='mx-auto w-full flex flex-col justify-center items-center text-white snap-y'>
      <header className='w-full h-auto flex justify-center items-center -mt-20 smSP:bg-[url("/lp/004/bg-1-small.webp")] mdSP:bg-[url("/lp/004/bg-1.webp")] lgSP:bg-[url("/lp/004/bg-1-big.webp")] bg-no-repeat bg-cover bg-center'>
        <div className='w-full h-auto flex justify-center items-center bg-black/60 '>
          <Hero />
        </div>
      </header>

      <section className='w-full h-auto flex justify-center items-center flex-col py-6 md:py-12 bg-black' id='sectionCTA' >
        <StatisticsCards />        
      </section>


      <section className='w-full h-auto flex justify-center items-center smSP:bg-[url("/lp/004/bg-2-small.webp")] mdSP:bg-[url("/lp/004/bg-2.webp")] lgSP:bg-[url("/lp/004/bg-2-big.webp")] bg-no-repeat bg-cover bg-center scroll-smooth md:scroll-auto ' id='section1' >
        <div className='w-full h-auto flex justify-center items-center bg-black/60 '>
          <Section1 />        
        </div>
      </section>

      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto bg-qoqu_Grey/20 text-black' id='section2' >
        <Section2 />     
      </section>

      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-qoqu_Light_Orange px-4' id='section3' >
        <Section3 />     
      </section>

      <section 
        className='w-full flex justify-center items-center flex-col h-auto py-6 text-black' 
        id='testimonialsBig' 
      >
        <TestimonialsBig />        
      </section>

      <section 
        className='w-full flex justify-center items-centerflex-col h-auto py-16 md:py-32 bg-qoqu_Grey/20 text-black' 
        id='testimonialsSmall' 
      >
        <TestimonialsSmall />        
      </section>


      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-qoqu_Light_Orange px-4' id='section3' >
        <Section4 />     
      </section>

      <section className='w-full h-auto flex justify-center items-center smSP:bg-[url("/lp/004/bg-3-small.webp")] mdSP:bg-[url("/lp/004/bg-3.webp")] lgSP:bg-[url("/lp/004/bg-3-big.webp")] bg-no-repeat bg-cover bg-center scroll-smooth md:scroll-auto' id='section4'>
        <div className='w-full h-auto flex flex-col justify-center items-center bg-black/60 py-16 md:py-32 '>   
          <div className='w-full flex flex-col justify-center items-center gap-2 md:gap-4 px-4 lg:px-6 pb-8 md:pb-16scroll-mt-4 snap-start my-12 pt-4 md:pt-12 text-qoqu_Orange ' id="accordionstart">
            <RoofTag />
            <h2 className='heading3 md:heading2 font-semibold text-center md:text-left text-white'>
              Veel gestelde vragen van klanten
            </h2>  
          </div>  
          <CtaButton />
        </div>  
      </section>
    


      <section className='w-full max-w-[1440px] h-auto flex flex-col justify-center items-center 
                          gap-8 md:gap-12 py-8 md:py-12     
                          px-4 md:px-6 pb-16 md:pb-32
                          scroll-mt-16 snap-start scroll-smooth md:scroll-auto' id='faq'>   
        <div className='flex flex-col justify-center items-center gap-6 md:gap-8 px-4 lg:px-6 scroll-mt-4 snap-start my-12 pt-4 md:pt-12 text-qoqu_Light_Orange ' id="accordionstart">
          <FAQTag />
          <h2 className='heading3 md:heading2 font-semibold text-center md:text-left text_black text-black'>
            Veel gestelde vragen van klanten
          </h2>  
        </div>  
        <FAQ />
      </section>
     

    </main>
  )
}

export default page