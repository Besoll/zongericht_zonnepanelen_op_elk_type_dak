import dynamic from 'next/dynamic'
const Tag = dynamic(() => import('@/components/__lp/005/ui/FAQTag'))
const CtaButton = dynamic(() => import('@/components/__lp/005/ctaButtons/CtaButton2'))

const SectionCTA = () => { 
  return (
    <div className='w-[95%] max-w-[1440px] flex justify-center items-center flex-col md:flex-row bg-black rounded-3xl md:rounded-full gap-8 py-16 md:py-32 px-16 md:px-20 text-center md:text-left'>
     
        <div className='w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start gap-4 '>
          <Tag />
          <p className='text-4xl font-semibold text-white uppercase max-w-3/4'>
            VRAAG VANDAAG NOG EEN GRATIS EN 
            <br className='hidden md:flex'></br>
            VRIJBLIJVENDE WOONINSPECTIE EN OFFERTE AAN            
          </p>
        </div>      
      <CtaButton />

    </div>
    )
  }

export default SectionCTA