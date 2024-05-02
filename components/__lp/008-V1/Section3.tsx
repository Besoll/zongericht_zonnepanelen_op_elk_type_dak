import dynamic from 'next/dynamic'
const Cards3Steps = dynamic(() => import('@/components/__lp/007/ui/Cards3Steps'))
const RoofTag = dynamic(() => import("@/components/__lp/007/ui/RoofTag"))
const CtaButton = dynamic(() => import('@/components/__lp/007/ctaButtons/CtaButton2'))

const Section3 = () => {
  return (
    <div className='w-full max-w-[1440px] h-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 px-4'>
        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-6'> 
          <RoofTag />        
          <h2 className='w-full h-auto text-3xl md:text-4xl lg:text-6xl font-extrabold md:text-left text-center'>
            Hoe het werkt
          </h2> 
          <p className='text-xl md:text-left text-center md:pb-8'>
            Benieuwd of glas op glas zonnepanelen een bron van energie voor uw huishouden zouden kunnen zijn? Vraag een gratis offerte aan en plan uw vrijblijvende bezichtiging. Ons team staat voor u klaar om uw woning te inspecteren, een op maat gemaakte offerte uit te schrijven en alle vragen die u heeft te beantwoorden.
          </p>
          <div className='hidden md:flex'>
            <CtaButton />
          </div>
        </div> 
        <Cards3Steps />
        <div className='flex md:hidden'>
            <CtaButton />
        </div>
    </div>
  )
}

export default Section3