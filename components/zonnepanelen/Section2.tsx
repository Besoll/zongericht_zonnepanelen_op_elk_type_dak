import Image from 'next/image'

const Section2 = () => {
  

return (
  <div className='flex w-full justify-center items-center flex-col max-w-[1200px] gap-3 bg-orange/10 md:bg-white'>
    <div className='flex flex-col items-center justify-center text-center gap-3 px-4 md:px-0 py-12'>
          <h2 className='text-black heading3 xs:heading3 xl:heading2 '>
              Technische eigenschappen van goede <br></br> glas op glas
              <span className='text-brand_original_secondary'> zonne<span className='text-primary'>panelen</span></span>
              <br></br>                
          </h2>

          <p>Langere levensduur: Glas op Glas zonnepanelen hebben vaak een langere levensverwachting dan hun traditionele tegenhangers. Dit betekent dat ze over hun hele levensduur meer elektriciteit zullen produceren.</p>
    </div>

    <div className='flex w-full justify-center items-center flex-col md:flex-row px-4 md:px-0 mb-12 '>

      {/* left/bottom part */}  
      <div className='w-full flex flex-col justify-end items-end gap-2'>  
        <div className='w-fit h-auto flex justify-start items-start flex-row gap-3 mb-4'>
          <p className='text-center md:text-left'>
              <span className='heading4'>Superieure Kwaliteit en Duurzaamheid </span><br></br>
              <hr className='flex md:hidden'></hr>
              Glas op glas zonnepanelen hebben bewezen minder snel te degraderen, wat betekent dat ze langer meegaan en gedurende hun levensduur dichter bij hun oorspronkelijke prestaties blijven.
          </p>
        </div>
        <div className='w-fit h-auto flex justify-start items-start flex-row gap-3 mb-4'>
          <p className='text-center md:text-left'>
              <span className='heading4'>Esthetisch Plezier </span><br></br>
              <hr className='flex md:hidden'></hr>
              Glas op glas zonnepanelen behouden hun esthetische uitstraling jarenlang, ongeacht de weersinvloeden. Dit betekent dat uw dak er niet alleen goed uitziet wanneer de panelen nieuw zijn, maar ook in de vele jaren die volgen.
          </p>
        </div>
        <div className='w-fit h-auto flex justify-start items-start flex-row gap-3 mb-4'>
          <p className='text-center md:text-left'>
              <span className='heading4'>Hoger Rendement </span><br></br>
              <hr className='flex md:hidden'></hr>
              Door hun constructie en kwaliteit kunnen glas op glas zonnepanelen een hoger rendement bieden, wat leidt tot meer energieproductie en uiteindelijk meer besparingen voor u.
          </p>
        </div>
      </div>

      {/* middle part */}   
      <div className='flex mt-6 mb-2 justify-center w-[55%] '>
            <Image 
                src='/zonnepanelen/GlasGlasZonnepanelen.webp'
                alt='glas glas zonnepnalen Zongericht'
                width={480}
                height={480}
                className="w-full h-auto md:sepia md:hover:sepia-0 md:hover:rotate-1 md:hover:skew-3 
                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
            />      
      </div>

      {/* right/bottom part */}   
      <div className='w-full flex flex-col justify-end items-end gap-2 md:pl-3'>
        <div className='w-fit h-auto flex justify-start items-start flex-row gap-3 mb-4'>
          <p className='text-center md:text-left'>
              <span className='heading4'>Veiligheid voorop </span><br></br>
              <hr className='flex md:hidden'></hr>
              Deze panelen bieden een hogere mate van brandveiligheid dan traditionele panelen, waardoor u en uw omgeving beschermd blijven. Hun stevige constructie zorgt ook voor een betere bescherming tegen externe schade.
          </p>
        </div>

        <div className='w-fit h-auto flex justify-start items-start flex-row gap-3 mb-4'>
          <p className='text-center md:text-left'>
              <span className='heading4'>Stabiliteit </span><br></br>
              <hr className='flex md:hidden'></hr>
              Extreem sterke en breuk vaste zonnepanelen dankzij de gepatenteerde SmartWire- rasterstructuur.
          </p>
        </div>

        <div className='w-fit h-auto flex justify-start items-start flex-row gap-3 mb-4'>
          <p className='text-center md:text-left'>
              <span className='heading4'>Milieubewustzijn </span><br></br>
              <hr className='flex md:hidden'></hr>
              Met een langere levensduur en efficiëntere energieproductie zijn glas op glas zonnepanelen een milieuvriendelijkere keuze. Ze helpen niet alleen om uw CO2-voetafdruk te verminderen, maar door hun duurzaamheid wordt ook het afval van vervangen panelen verminderd.
          </p>
        </div>

      </div>
    </div>
    
  </div>
  )
}

export default Section2