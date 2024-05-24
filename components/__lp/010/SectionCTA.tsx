import dynamic from 'next/dynamic'
// const Tag = dynamic(() => import('@/components/__lp/010/ui/RoofTag'))
const CtaButton = dynamic(() => import('@/components/__lp/010/ctaButtons/CtaButton2'))

const SectionCTA = () => { 
  return (
    <div className='w-[95%] max-w-[1440px] flex justify-center items-center flex-col md:flex-row rounded-none gap-8 px-16 md:px-20'>
     
        <div className='w-full h-auto flex flex-col justify-center items-center gap-4'>
          <p className='w-full max-w-3/4 text-3xl md:text-4xl font-semibold text-white text-center md:text-left'>
            Vraag vandaag nog een gratis en vrijblijvende wooninspectie en Offerte aan     
          </p>
          {/* <p className='w-full max-w-3/4 text-3xl md:text-4xl text-white text-center'>
            Vul het formulier in en ons adviseur komt u uitleggen hoe.       
          </p> */}
        </div>      
        <CtaButton />

    </div>
    )
  }

export default SectionCTA