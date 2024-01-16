import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-center w-full paddings max-w-screen-3xl flex-col-reverse xs:flex-col md:flex-row'>
        <div className='flex flex-col w-full'>
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
    </div>
  )
}

export default Hero