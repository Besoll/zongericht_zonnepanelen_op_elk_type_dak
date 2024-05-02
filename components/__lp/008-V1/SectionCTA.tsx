import dynamic from 'next/dynamic'
const Tag = dynamic(() => import('@/components/__lp/007/ui/CompanyTag'))
const CtaButton = dynamic(() => import('@/components/__lp/007/ctaButtons/CtaButton2'))

const SectionCTA = () => { 
  return (
    <div className='w-[95%] max-w-[1440px] flex md:justify-start md:items-start justify-center items-center flex-col rounded-none gap-8 px-16 md:px-20 pb-52 md:pb-0'>
     
        <div className='w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start gap-4'>
          <Tag />
          <p className='w-full max-w-3/4 text-4xl font-semibold text-white text-center md:text-left'>
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