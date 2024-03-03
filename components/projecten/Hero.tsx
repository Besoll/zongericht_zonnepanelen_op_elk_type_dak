import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex w-full justify-center items-center flex-col max-w-[1200px] px-4 gap-0 md:gap-3 mb-16'>
      <div className='flex mt-3 md:mt-20 mb-2 justify-center w-full px-6 md:px-0 md:w-[85%] '>
            <Image 
                src='/overOns/contact-2-beso-dave.webp'
                alt='projecten - dave - happy clients'
                width={480}
                height={480}
                className="w-full md:w-[80%] h-auto md:hover:rotate-1 md:hover:skew-3 
                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
            />      
      </div>
      <div className='w-full flex flex-col justify-end items-end gap-3'>
        <div className='flex flex-col items-end -mt-12 md:-mt-20 mb-2 justify-end'>
              <p className='text-brand_original_secondary'><span className='text-primary'>Project</span>en</p>
              <h1 className='text-black heading3 xs:heading2 xl:heading1 text-right'>
              Uitgelichte zonnepanelen projecten van Zongericht             
              </h1>
        </div>

        {/* texts container */}
        <div>
          <p className='text-left mb-6'>
            Bij Zongericht zijn we trots op het werk dat we leveren. Elke installatie van zonnepanelen is een stukje bijdrage aan een duurzamere toekomst en een tevreden klant. Hier presenteren we een selectie van enkele van onze meest opmerkelijke projecten, waarmee we onze expertise en toewijding aan kwaliteit willen demonstreren. Deze projecten vertegenwoordigen slechts een fractie van het vele werk dat we hebben verricht, maar geven een goed beeld van wat we kunnen bereiken samen met onze klanten.
          </p>
            
        </div>
      </div>   
  </div>
  )
}

export default Hero