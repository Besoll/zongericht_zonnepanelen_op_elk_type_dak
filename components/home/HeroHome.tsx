import React from 'react'
import Image from 'next/image'
import Checked from "@/public/icons/Checked.svg"
import Arrow from "@/public/icons/arrow_white.svg"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const HeroHome = () => {
  return (
    <section className='flex pt-[40px] md:pt-[98px] w-full flex-col text-base text-black'>
      {/* top side of the hero */}
      <div className='w-full flex flex-col-reverse lg:flex-row justify-between'>
         {/* left side */}
        <div className='flex-col justify-start w-full'>
          <p className='font-medium text-gradient_orange'>Zongericht:</p>
          <h1 className='heading4 mb-6 text-brand_original_main pr-5
                          
                          xs:heading2
                          xl:heading1'
                          >
                          Waar een dak is, schijnt de zon! <br></br>
                          Met Onze kennis transformeren we elk dak in een zonne-energiebron
          </h1>
          <div className='w-full md:w-[70%]'>
            Bij Zongericht zijn we niet zomaar een zonnepaneleninstallateur:
            <p className='flex flex-row pt-4'>
                <Image 
                    src={Checked} 
                    className="text-white animate-pulse mr-2 hover:animate-none" 
                    width={25} 
                    height={25}
                    alt='Hand Index Icon'
                    loading='lazy'
                />
                Wij zijn dé specialist in het plaatsen van zonnepanelen op niet-gebruikelijke dakconstructies.
            </p>
            <p className='flex flex-row pt-4'>
                <Image 
                    src={Checked} 
                    className="text-white animate-pulse mr-2 hover:animate-none" 
                    width={25} 
                    height={25}
                    alt='Hand Index Icon'
                    loading='lazy'
                />
                Van historische panden met leistenen daken tot moderne huizen met unieke architectonische structuren, wij hebben de expertise om elk project met precisie aan te pakken.
            </p>
            <p className='flex flex-row pt-4'>
                <Image 
                    src={Checked} 
                    className="text-white animate-pulse mr-2 hover:animate-none" 
                    width={25} 
                    height={25}
                    alt='Hand Index Icon'
                    loading='lazy'
                />
                Waar anderen terughoudend zijn, zien wij kansen en oplossingen.
            </p>
            <p className='flex flex-row pt-4'>
                <Image 
                    src={Checked} 
                    className="text-white animate-pulse mr-2 hover:animate-none" 
                    width={25} 
                    height={25}
                    alt='Hand Index Icon'
                    loading='lazy'
                />
                Met onze jarenlange ervaring, innovatieve technieken en oog voor esthetiek, veranderen we elke uitdaging in een succesverhaal.
            </p>
          </div>
        </div>

         {/* right side */}
        <div className='lg:flex-col justify-start w-full lg:w-[45%]  '>
          <div className='flex flex-row justify-between pb-2'>
            <Image 
                src='/DSC6310.webp'
                alt='glas glas zonnepanelen op elk type dak testimonial'
                width={280}
                height={250}
                className="object-cover min-h-[100px] h-auto w-[35%] rounded-xl pr-2"
            />   
            <Image 
                src='/dakkapel.webp'
                alt='glas glas zonnepanelen op elk type dak op dakkapel'
                width={280}
                height={250}
                className="object-cover min-h-[100px] h-auto w-[65%] rounded-xl"
            />   
          </div>
                  <Image 
                      src='/DJI_0613.webp'
                      alt='glas glas zonnepanelen op elk type dak project'
                      width={280}
                      height={250}
                      className="object-cover min-h-[100px] h-auto  w-full flex-col rounded-xl
        "
                  />     
        </div>
      </div>

      {/* bottom side of the hero */}
      <div className='w-full flex flex-row justify-between '>
        {/* left side */}
        <div className='w-full md:w-[50%] h-auto lg:w-full lg:-mt-24 md:-mt-12 md:hidden sm:flex lg:flex
                        '>
          <Image 
                src='/map.svg'
                alt='glas glas zonnepanelen in Holand'
                width={200}
                height={250}
                className=" w-full h-auto rounded-xl pr-2 md:mt-24"
            /> 
        </div>

        {/* right side */}
        <div className='flex flex-row justify-end lg:justify-start w-full 
                        mt-24 mr-0
                        md:-mt-44 md:mr-1 
                        2xl:mt-0 2xl:mr-0
        '>
            <Image 
                src='/person/1.webp'
                alt='glas glas zonnepanelen op elk type dak'
                width={100}
                height={250}
                className="w-auto h-auto rounded-xl"
            /> 
            <Button asChild className='-mt-16 -ml-12 md:-mt-20 md:-ml-24 gradient_green text-white shadow-2xl px-6 py-8 animate-bounce hover:animate-none'>
                <Link 
                    href="/schouwing" 
                    className="!text-xl"
                >
                    Meer info
                    <Image 
                        src={Arrow}
                        className="text-white ml-2 " 
                        width={20} 
                        height={20}
                        alt='arrow'
                    />
                </Link>
            </Button>
        </div>


      </div>
    </section>
  )
}

export default HeroHome