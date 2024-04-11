import dynamic from 'next/dynamic'
const CtaButton4 = dynamic(() => import('@/components/__lp/001/ctaButtons/CtaButton4'))

const SectionCTA = () => { 
  return (
    <div className='w-full  max-w-[1440px] flex flex-col justify-center items-center gap-8     
    py-12 my-6 px-4 text-center'>
      <p className='text-qoqu_Blue font-semibold text-2xl'>
          Plat dak
      </p>
      <h2 className='heading3 md:heading2'>
          Onze werkwijze          
      </h2>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='w-full md:w-1/3 md:min-h-[350px] flex flex-col justify-start items-center gap-4 bg-white rounded-lg px-4 md:px-6 py-4 md:py-8 shadow-lg text-center
        md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
        md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl text-black'>
            <div className='px-6 py-4 rounded-lg bg-qoqu_Blue text-5xl font-black text-white'>
                    1
            </div>
            <p className='text-xl font-semibold'>
                Gratis huis inspectie
            </p>
            <p>
              Wij komen langs voor een gratis en vrijblijvende huisinspectie. Onze adviseur zal uw vragen beantwoorden en een nauwkeurige inspectie uitvoeren. Na de inspectie stellen wij een persoonlijke offerte op maat voor u op.
            </p>
        </div>
        <div className='w-full md:w-1/3 md:min-h-[350px] flex flex-col justify-start items-center gap-4 bg-white rounded-lg px-4 md:px-6 py-4 md:py-8 shadow-lg text-center
        md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
        md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl text-black'>
            <div className='px-6 py-4 rounded-lg bg-qoqu_Blue text-5xl font-black text-white'>
                2
            </div>
            <p className='text-xl font-semibold'>
                Installatie
            </p>
            <p>
              Indien u akkoord gaat met de offerte die is opgesteld door de adviseur die bij u langs is geweest, zal onze planner een afspraak met u maken. Wij garanderen dat we binnen 4 weken na de bestelling bij u langskomen voor de installatie van uw zonnepanelen. In de meeste gevallen wordt de installatie binnen 1 dag uitgevoerd.
            </p>
        </div>
        <div className='w-full md:w-1/3 md:min-h-[350px] flex flex-col justify-start items-center gap-4 bg-white rounded-lg px-4 md:px-6 py-4 md:py-8 shadow-lg text-center
        md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
        md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl text-black'>
            <div className='px-6 py-4 rounded-lg bg-qoqu_Blue text-5xl font-black text-white'>
                3
            </div>
            <p className='text-xl font-semibold'>
                Betaling
            </p>
            <p>
              De betaling vindt plaats achteraf op factuur, nadat de volledige en werkende installatie op uw platte dak is geplaatst. U hoeft dus niet bij de deur te pinnen; u kunt de betaling op uw gemak regelen nadat de installatie op uw platte dak is voltooid.
            </p>
        </div>

      </div>     
    </div>
    )
  }

export default SectionCTA