import dynamic from 'next/dynamic'
const TimelineSchouwing = dynamic(() => import('@/components/ui/TimelineSchouwing'))
const ZohoForm = dynamic(() => import('@/components/ZohoForm'))

import Image from 'next/image'

const page = () => {
  return (
    <main className='flex-center mx-auto w-full flex-col'>
      <header className='w-full gradient_green flex-center flex paddings max-w-screen-3xl text-white flex-col-reverse xs:flex-col md:flex-row'>
        <div className='flex flex-col w-full max-w-full'>
          <h1 className='heading4 mb-2 md:mb-6 md:pr-5 mt-3 xs:mt-16  md:mt-24
                            xs:heading2
                            xl:heading1'>
          Geïnteresseerd in een offerte?
          </h1>
          <div className=' w-full lg:max-w-[90%] text-base'>
            
              Vraag gerust een vrijblijvende schouwing aan voor een inspectie op locatie aan voor een offerte die perfect bij u past. Binnen een termijn van maximaal 2 weken komt onze adviseur graag bij u thuis langs.
              <br></br>
              Tijdens de inspectie kunt u samen met de adviseur met behulp van ons intekenprogramma direct de zonnepanelen in kaart brengen. Zo kunt u gezamenlijk bepalen hoe de panelen esthetisch het mooist geplaatst kunnen worden.
            
          </div>
        </div>
        <div className='flex mt-12 xs:mt-4 md:mt-8 w-[35%] h-auto'>
          <Image 
              src='/person/7.webp' 
              alt={'dd'}
              width='200'
              height='550'          
          />

        </div>
      </header>
      <section className='max-w-screen-3xl my-8 md:my-10'>
        <TimelineSchouwing />
      </section>
      <section className='flex justify-center items-center w-full gradient_green min-h-full flex-row' id="zohoForm">
        <div className='mt-20 mb-28'>
          <div className='absolute sm:-ml-56 xs:-ml-40 xs:w-[400px] h-auto w-[100px] -ml-12 mt-4 xs:mt-0 overflow-hidden'>
            <Image 
              src='/person/4.webp' 
              alt={'dd'}
              width='250'
              height='700'          
            />
          </div>
          <div>
            <ZohoForm />
          </div>
        </div>
      </section>
    </main>
  )
}

export default page