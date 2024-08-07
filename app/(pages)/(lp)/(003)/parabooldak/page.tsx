import dynamic from 'next/dynamic'
const Hero = dynamic(() => import("@/components/__lp/003/Hero"))
const Form = dynamic(() => import("@/components/__lp/003/Form"))
const Section1 = dynamic(() => import("@/components/__lp/003/Section1"))
const SectionCards = dynamic(() => import("@/components/__lp/003/SectionCards"))
const Section2 = dynamic(() => import("@/components/__lp/003/Section2"))
const Section3 = dynamic(() => import("@/components/__lp/003/Section3"))
const SectionCTA = dynamic(() => import("@/components/__lp/003/SectionCTA"))
const Section6Steps = dynamic(() => import("@/components/__lp/003/Section6Steps"))
const Partners6Logos = dynamic(() => import("@/components/__lp/003/Partners6Logos"))
const RoofTag = dynamic(() => import("@/components/__lp/003/ui/RoofTag"))
const FAQ = dynamic(() => import("@/components/__lp/003/FAQ"))
const TestimonialsSmall = dynamic(() => import("@/components/__lp/003/TestimonialsSmall"))
const TestimonialsBig = dynamic(() => import("@/components/__lp/003/TestimonialsBig"))



// lp: page 002 - schuin pvc dak

const page = () => {
  return (
    <main className='mx-auto w-full flex flex-col justify-center items-center text-black snap-y'>
      <header className='w-full h-auto  flex justify-center items-center -mt-20 bg-black text-white'>
          <Hero />
      </header>

      <section className='flex justify-center items-center w-full flex-col h-auto py-6 md:py-12 bg-qoqu_Grey/10' id='sectionCTA' >
        <SectionCards />        
      </section>

      <section className='flex justify-center items-center w-full flex-col h-auto bg-qoqu_Orange/10 py-6 text-white' id='sectionCTA' >
        <div className='w-[95%] rounded-lg py-6 md:py-16 px-4 md:px-8 flex flex-col 
          justify-center items-center md:justify-start md:items-start max-w-[1440px] gap-3 md:gap-8 scroll-mt-4
          md:scroll-mt-24 snap-start scroll-smooth md:scroll-auto' id="schouwingForm">
            <p className='text-black text-3xl font-semibold'>
              Vraag een woninginspectie aan
            </p>
            <Form />
        </div>       
      </section>

      <section className='flex justify-center items-center w-full flex-col xs:h-auto scroll-mt-16 snap-start text-black scroll-smooth md:scroll-auto ' id='sections' >
        <Section1 />        
      </section>

      <section className='flex justify-center items-center w-full flex-col xs:h-auto scroll-mt-16 snap-start bg-qoqu_Orange/10 text-black scroll-smooth md:scroll-auto' id='section2' >
        <Section6Steps />  
      </section>

      <section className='flex justify-center items-center w-full flex-col h-auto py-6 md:py-20 text-white' id='sectionCTA' >
        <SectionCTA />        
      </section>

      <section className='flex justify-center items-center w-full flex-col xs:h-auto scroll-mt-16 snap-start bg-qoqu_Orange/10 text-black scroll-smooth md:scroll-auto' id='section2' >        
        <Section2 />        
      </section>


      <section 
        className='flex justify-center items-center w-full flex-col h-auto py-6 text-black' 
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
     

      <section className='flex justify-center items-center w-full flex-col h-auto bg-qoqu_Orange/10 py-6 text-black' id='section3' >
        <Section3 />        
      </section>



      <section className='w-full max-w-[1440px] h-auto flex flex-col justify-center items-center 
                          gap-8 md:gap-12 py-8 md:py-12     
                          px-4 md:px-6
                          scroll-mt-16 snap-start scroll-smooth md:scroll-auto' id='faq'>   
        <div className='flex flex-col justify-center items-center gap-6 md:gap-8 px-4 lg:px-6 scroll-mt-4 snap-start my-12 pt-4 md:pt-12 ' id="accordionstart">
          <RoofTag />
          <h2 className='heading3 md:heading2 font-semibold text-center md:text-left'>
            Veel gestelde vragen van klanten
          </h2>  
        </div>  
        <FAQ />
      </section>

      <section className='flex justify-center items-center w-full flex-col h-auto py-6 md:py-20 text-white' id='sectionCTA' >
        <SectionCTA />        
      </section>

      <section className='flex flex-col justify-center items-center scroll-mt-24 snap-start scroll-smooth md:scroll-auto h-auto pb-6 md:pb-20' id='partnersLogos' >
        <div className='flex flex-col justify-center items-center gap-6 md:gap-8 px-4 lg:px-6 scroll-mt-4 snap-start  pt-4 md:pt-12 ' id="accordionstart">
          <RoofTag />
          <h2 className='heading3 md:heading2 font-semibold text-center md:text-left'>
          Werkt samen met de volgende bedrijven en Merken
          </h2>  
        </div> 
        <Partners6Logos />
      </section>

    </main>
  )
}

export default page