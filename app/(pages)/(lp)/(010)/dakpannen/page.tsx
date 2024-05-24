
import dynamic from 'next/dynamic'
const Hero = dynamic(() => import("@/components/__lp/010/Hero"))
const Form = dynamic(() => import("@/components/__lp/010/Form"))
const Section1 = dynamic(() => import("@/components/__lp/010/Section1"))
const SectionForm = dynamic(() => import("@/components/__lp/010/SectionForm"))
const StatisticsCards = dynamic(() => import("@/components/__lp/010/StatisticsCards"))
const Section2 = dynamic(() => import("@/components/__lp/010/Section2"))
// const Section3 = dynamic(() => import("@/components/__lp/010/Section3"))
// const Section4 = dynamic(() => import("@/components/__lp/010/Section4"))
const Section5 = dynamic(() => import("@/components/__lp/010/Section5"))
const SectionCTA = dynamic(() => import("@/components/__lp/010/SectionCTA"))
const Section6Steps = dynamic(() => import("@/components/__lp/010/Section6Steps"))
// const Partners6Logos = dynamic(() => import("@/components/__lp/010/Partners6Logos"))
const RoofTag = dynamic(() => import("@/components/__lp/010/ui/RoofTag"))
const FAQ = dynamic(() => import("@/components/__lp/010/FAQ"))
const TestimonialsSmall = dynamic(() => import("@/components/__lp/010/TestimonialsSmall"))
const TestimonialsBig = dynamic(() => import("@/components/__lp/010/TestimonialsBig"))
const CtaButton2 = dynamic(() => import('@/components/__lp/010/ctaButtons/CtaButton2'))




// lp: page 010 - Schuin Bitumen Dak

const page = () => {
  return (
    <main className='mx-auto w-full flex flex-col justify-center items-center bg-white text-black 
                    snap-y scroll-smooth md:scroll-auto scroll-mt-4 snap-start'>

      <header className='w-full h-auto flex flex-col justify-center items-center bg-qoqu_Light_Blue/10 text-white pb-8 md:pb-16  '>
          <Hero /> 
          <div className='bg-white shadow-xl w-[95%] rounded-xl py-6 px-4 md:px-8 flex flex-col 
          justify-center items-center md:justify-start md:items-start max-w-[1440px] gap-3 scroll-mt-4
          md:scroll-mt-24 snap-start scroll-smooth md:scroll-auto' id="schouwingForm">
            <p className='text-black text-2xl font-semibold'>  
              Plan vandaag nog een wooninspectie voor zonnepanelen op uw pannendak
            </p>
            <Form />
          </div>
      </header>

      {/* <section className='w-full h-auto flex justify-center items-center py-16 md:py-32 text-black' id='statisticsCards' >
          <StatisticsCards />
      </section> */}

      <section className='w-full h-auto flex justify-center items-center py-16 md:py-32 text-black' id='section1' >
          <Section1 />
      </section>


      <section className='w-full h-auto flex justify-center items-center py-16 md:py-32 bg-qoqu_Dark_Blue text-white' >
          <Section6Steps /> 
      </section>


      <section className='w-full h-auto flex justify-center items-center py-16 md:py-32 text-black' id='section2' >
          <Section2 />
      </section>



      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-white 
                          bg-qoqu_Dark_Blue py-16 md:py-32' id='SectionCTA' >
          <SectionCTA /> 
      </section>


      <section 
        className='w-full flex justify-center items-centerflex-col h-auto py-16 md:py-32 bg-qoqu_Light_Blue/10 text-black' 
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

      <section className='w-full h-auto flex justify-center items-center scroll-smooth md:scroll-auto text-white 
                          smSP:bg-[url("/lp/010/bg-small.webp")] mdSP:bg-[url("/lp/010/bg.webp")] lgSP:bg-[url("/lp/010/bg-big.webp")] bg-no-repeat bg-cover bg-center
                          ' id='SectionCTA' >
        <div className='w-full h-auto flex justify-center items-center bg-black/80 py-16 md:py-32 '>
          <StatisticsCards /> 
        </div>
      </section>

      <section className='w-full h-auto flex justify-center items-center flex-col bg-qoqu_Grey/30' id='Section6Steps' >
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