import dynamic from 'next/dynamic'
const RoofTag = dynamic(() => import('@/components/__lp/003/ui/RoofTag'))
const CtaButton5 = dynamic(() => import('@/components/__lp/003/ctaButtons/CtaButton5'))

const SectionCTA = () => { 
  return (
    <div className='w-[95%] max-w-[1440px] flex justify-center items-center flex-col md:flex-row bg-black rounded-lg gap-8 py-12 md:py-20 my-6 px-6 md:px-20 text-center md:text-left'>
     
     <div className='w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start '>
     <RoofTag />
      <h2 className='text-[2.50rem] font-semibold'>
        Vraag een vrijblijvende huis inspectie aan en <br className='hidden md:flex'></br>ontvang een persoonlijke offerte op maat!            
      </h2>
     </div>      
      <CtaButton5 />     
    </div>
    )
  }

export default SectionCTA