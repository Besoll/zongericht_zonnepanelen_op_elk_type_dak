import dynamic from 'next/dynamic'
const CtaButton4 = dynamic(() => import('@/components/__lp/001/ctaButtons/CtaButton4'))

const SectionCTA = () => { 
  return (
    <div className='flex w-full justify-center items-center flex-col md:flex-row max-w-[1440px] gap-8     
    py-12 my-6 px-4 text-center md:text-left'>
     
      <h2 className='heading3'>
        Vraag een vrijblijvende huis inspectie aan en krijg een persoonlijke offerte               
      </h2>
      <CtaButton4 />     
    </div>
    )
  }

export default SectionCTA