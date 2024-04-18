import dynamic from 'next/dynamic'
const RoofTag = dynamic(() => import('@/components/__lp/003/ui/RoofTag'))

const SectionCTA = () => { 
  return (
    <div className='w-full  max-w-[1440px] flex flex-col justify-center items-center gap-8     
    py-12 my-6 px-4 text-center'>
      <RoofTag />
      <h2 className='heading3 md:heading2'>
          Onze werkwijze          
      </h2>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='w-full md:w-1/3 md:min-h-[350px] flex flex-col justify-start items-center gap-4 bg-white rounded-lg px-4 md:px-6 py-4 md:py-8 shadow-xl text-center
        md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
        md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl text-black'>
            <div className='px-6 py-4 rounded-lg text-5xl font-black text-qoqu_Orange outline-double'>
                    1
            </div>
            <p className='text-xl font-semibold'>
                Gratis huis inspectie
            </p>
            <p>
              Wij bieden een gratis en vrijblijvende huisinspectie, waarbij onze adviseur uw vragen beantwoordt en
een persoonlijke offerte op maat opstelt.
            </p>
        </div>
        <div className='w-full md:w-1/3 md:min-h-[350px] flex flex-col justify-start items-center gap-4 bg-white rounded-lg px-4 md:px-6 py-4 md:py-8 shadow-lg text-center
        md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
        md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl text-black'>
            <div className='px-6 py-4 rounded-lg text-5xl font-black text-qoqu_Orange outline-double'>
                2
            </div>
            <p className='text-xl font-semibold'>
                Installatie
            </p>
            <p>
              Als u instemt met de offerte van onze adviseur die bij u thuis is geweest, regelt onze planner een afspraak met u. We beloven binnen 4 weken na uw bestelling te starten met de installatie van uw zonnepanelen, die meestal binnen één dag voltooid is.
            </p>
        </div>
        <div className='w-full md:w-1/3 md:min-h-[350px] flex flex-col justify-start items-center gap-4 bg-white rounded-lg px-4 md:px-6 py-4 md:py-8 shadow-lg text-center
        md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
        md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl text-black'>
            <div className='px-6 py-4 rounded-lg text-5xl font-black text-qoqu_Orange outline-double'>
                3
            </div>
            <p className='text-xl font-semibold'>
                Betaling
            </p>
            <p>
              Na de succesvolle en werkende installatie van uw thuisbatterij of uw zonnepaneleninstallatie ontvangt u een factuur voor de betaling achteraf. U hoeft niet direct aan de deur te betalen; u kunt de betaling gemakkelijk regelen na voltooiing van de installatie.
            </p>
        </div>

      </div>     
    </div>
    )
  }

export default SectionCTA