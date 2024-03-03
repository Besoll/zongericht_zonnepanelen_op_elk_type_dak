import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex w-full justify-center items-center flex-col md:flex-row max-w-[1200px] px-4 gap-0 md:gap-3 mb-16 '>
      <div className='flex mt-6 mb-2 justify-center w-full px-6 md:px-0 md:w-[85%] '>
            <Image 
                src='/overOns/contact-1-beso-dave.webp'
                alt='over ons - zonnepnalen dave - happy clients'
                width={480}
                height={480}
                className="w-full h-auto md:hover:rotate-1 md:hover:skew-3 
                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
            />      
      </div>
      <div className='w-full flex flex-col justify-end items-end gap-3'>
        <div className='flex flex-col items-end -mt-4 md:mt-6 mb-2 justify-end'>
              <p className='text-brand_original_secondary'><span className='text-primary'>Zon</span>Gericht</p>
              <h1 className='text-black heading3 xs:heading2 xl:heading1 text-right'>
                  Over Zongericht Kwaliteit & Persoonlijke Aandacht               
              </h1>
        </div>

        {/* texts container */}
        <div>
          <p className='text-left mb-6'>
            Bij Zongericht streven we naar de perfecte balans tussen topkwaliteit producten en persoonlijke service. Ons geloof is stevig verankerd in het leveren van de best mogelijke zonnesystemen, nauwkeurig berekend voor maximaal rendement, afgestemd op de unieke energiebehoeften van onze klanten.
          </p>
          <p className='text-left mb-6'>
            Vanaf het eerste telefoongesprek met een geïnteresseerde klant, leggen we de nadruk op een persoonlijke benadering. Onze betrokkenheid stopt niet na een adviesgesprek of een huisbezoek. Integendeel, we blijven onze klanten ondersteunen met service en aandacht, zelfs na de installatie.
          </p>
          <p className='text-left mb-6'>
            Waarom kiezen voor Glas op Glas zonnepanelen bij Zongericht? Omdat we staan voor het beste. Onze keuze voor Glas op Glas zonnepanelen en micro-omvormers is er één van overtuiging. Wij bieden enkel producten aan die we zonder aarzeling ook aan onze naaste vrienden of familie zouden aanraden. Met Zongericht kiest u dus niet enkel voor een product, maar voor een filosofie waarbij het beste voor de klant en samenleving centraal staat.
          </p>
            
        </div>
      </div>   
  </div>
  )
}

export default Hero