import dynamic from 'next/dynamic'
const CtaButton4 = dynamic(() => import('@/components/__lp/002/ctaButtons/CtaButton4'))

const SectionCTA = () => { 
  return (
    <div className='flex w-full max-w-[1440px] justify-center items-center flex-col md:flex-row gap-8     
    py-12 my-6 px-4 text-center md:text-left'>
     
     <div className='w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start '>
      <p className='text-qoqu_Blue font-semibold text-2xl'>
        Plat Dak
      </p>
      <h2 className='text-[2.50rem] font-semibold'>
        Vraag een vrijblijvende huis inspectie aan en <br className='hidden md:flex'></br>ontvang een persoonlijke offerte op maat!            
      </h2>
     </div>      
      <CtaButton4 />     
    </div>
    )
  }

export default SectionCTA