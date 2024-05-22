
import dynamic from 'next/dynamic'
const Hero = dynamic(() => import("@/components/__lp/005/Hero"))
// const Form = dynamic(() => import("@/components/__lp/005/Form"))
const Section1 = dynamic(() => import("@/components/__lp/005/Section1"))
const StatisticsCards = dynamic(() => import("@/components/__lp/005/StatisticsCards"))
const Section2 = dynamic(() => import("@/components/__lp/005/Section2"))
const Section3 = dynamic(() => import("@/components/__lp/005/Section3"))
// const Section4 = dynamic(() => import("@/components/__lp/005/Section4"))
const SectionCTA = dynamic(() => import("@/components/__lp/005/SectionCTA"))
const Section6Steps = dynamic(() => import("@/components/__lp/005/Section6Steps"))
// const Partners6Logos = dynamic(() => import("@/components/__lp/005/Partners6Logos"))
// const RoofTag = dynamic(() => import("@/components/__lp/005/ui/RoofTag"))
const FAQTag = dynamic(() => import("@/components/__lp/005/ui/FAQTag"))
const FAQ = dynamic(() => import("@/components/__lp/005/FAQ"))
const TestimonialsSmall = dynamic(() => import("@/components/__lp/005/TestimonialsSmall"))
const TestimonialsBig = dynamic(() => import("@/components/__lp/005/TestimonialsBig"))
// const CtaButton = dynamic(() => import('@/components/__lp/005/ctaButtons/CtaButton7'))




// lp: page 005 - Golfplaten Dak

const page = () => {
  return (
    <main className='mx-auto w-full flex flex-col justify-center items-center text-white snap-y scroll-smooth md:scroll-auto scroll-mt-4 snap-start'>
      <header className='w-full h-auto flex justify-center items-center -mt-20 smSP:bg-[url("/lp/005/bg-small.webp")] mdSP:bg-[url("/lp/005/bg.webp")] lgSP:bg-[url("/lp/005/bg-big.webp")] bg-no-repeat bg-cover bg-center'>
        <div className='w-full h-auto flex justify-center items-center bg-black/60 '>
          <Hero />
        </div>
      </header>

      <section className='w-full h-auto flex justify-center items-center text-black' id='section1' >
          <Section1 />
      </section>


      <section className='w-full h-auto flex justify-center items-center flex-col py-16 md:py-32 bg-qoqu_Red/10' id='StatisticsCards' >
        <StatisticsCards />        
      </section>


      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto  py-16 md:py-32 text-black ' id='Section2' >
        <Section2 />     
      </section>

      <section className='w-full h-auto flex justify-center items-center flex-col py-16 md:py-32 bg-qoqu_Red/10' id='Section6Steps' >
        <Section6Steps />        
      </section>

      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto  py-16 md:py-32 text-black ' id='SectionCTA' >
        <SectionCTA />     
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



      <section className='w-full h-auto flex justify-center items-center text-black' id='section3' >
          <Section3 />
      </section>


      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto  py-16 md:py-32 text-black ' id='sectionCTA2' >
        <SectionCTA />     
      </section>      
    


      <section className='w-full max-w-[1440px] h-auto flex flex-col justify-center items-center 
                          gap-8 md:gap-12 py-8 md:py-12     
                          px-4 md:px-6 pb-16 md:pb-32
                          scroll-mt-16 snap-start scroll-smooth md:scroll-auto' id='faq'>   
        <div className='flex flex-col justify-center items-center gap-6 md:gap-8 px-4 lg:px-6 scroll-mt-4 snap-start my-12 pt-4 md:pt-12 text-qoqu_Red ' id="accordionstart">
          <FAQTag />
          <h2 className='heading3 md:heading2 font-semibold text-center md:text-left text_black text-black'>
            Veel Gestelde Vragen:
          </h2>  
        </div>  
        <FAQ />
      </section>
     

    </main>
  )
}

export default page