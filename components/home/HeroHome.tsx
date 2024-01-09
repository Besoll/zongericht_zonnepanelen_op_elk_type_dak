import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

import dynamic from 'next/dynamic'
const MapNL = dynamic(() => import('@/components/icons/MapNL'))
const ArrowWhite = dynamic(() => import('@/components/icons/ArrowWhite'))
const CheckedMarked = dynamic(() => import('@/components/icons/CheckedMarked'))

const HeroHome = () => {
  return (
    <section className='flex pt-[40px] md:pt-[98px] w-full flex-col text-base text-black'>
      {/* top side of the hero */}
      <div className='w-full flex flex-col lg:flex-row-reverse justify-between'>
         {/* right side */}
        <div className='lg:flex-col justify-start w-full lg:w-[45%]  '>
            <div className='flex flex-row justify-between pb-2 max-h-[300px]'>
                <Image 
                    src='/heroImages/DSC6310.webp'
                    alt='glas glas zonnepanelen op elk type dak testimonial'
                    width={280}
                    height={250}
                    className="object-cover h-auto w-[35%] rounded-xl pr-2 "
                />   
                <Image 
                    src='/heroImages/dakkapel.webp'
                    alt='glas glas zonnepanelen op elk type dak op dakkapel'
                    width={280}
                    height={250}
                    className="object-cover h-auto w-[65%] rounded-xl"
                />   
            </div>
            <div className='hidden md:flex flex-row-reverse justify-between pb-2'>
                <Image 
                    src='/dakTypes/plat-dak/4.webp'
                    alt='glas glas zonnepanelen op elk type dak testimonial'
                    width={280}
                    height={250}
                    className="object-cover h-auto w-[35%] rounded-xl"
                />   
                <Image 
                    src='/heroImages/DJI_0613.webp'
                    alt='glas glas zonnepanelen op elk type dak op dakkapel'
                    width={280}
                    height={250}
                    className="object-cover h-auto w-[65%] rounded-xl pr-2"
                />   
            </div>   
        </div>
        
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
            <p className='font-medium text-gradient_orange'>
                Bij Zongeschikt zijn we niet zomaar een zonnepaneleninstallateur:
            </p>

            <ul className='w-full md:w-[70%]'>
                <li className='flex flex-row pt-4 items-center'>
                    <CheckedMarked />
                    <span className='ml-2'>
                        Wij zijn dé specialist in het plaatsen van zonnepanelen op niet-gebruikelijke dakconstructies.
                    </span>
                </li>
                <li className='flex flex-row pt-4 items-center'>
                    <CheckedMarked />
                    <span className='ml-2'>
                        Van historische panden met leistenen daken tot moderne huizen met unieke architectonische structuren, wij hebben de expertise om elk project met precisie aan te pakken.
                    </span>
                </li>
                <li className='flex flex-row pt-4 items-center'>
                    <CheckedMarked />
                    <span className='ml-2'>
                        Waar anderen terughoudend zijn, zien wij kansen en oplossingen.
                    </span>
                </li>
                <li className='flex flex-row pt-4 items-center'>                
                    <CheckedMarked />
                    <span className='ml-2'>
                        Met onze jarenlange ervaring, innovatieve technieken en oog voor esthetiek, veranderen we elke uitdaging in een succesverhaal.
                    </span>
                </li>
            </ul>
        </div>

      </div>

      {/* bottom side of the hero */}
      <div className='w-full flex flex-row justify-between '>
        {/* left side */}
        <div className='w-full md:w-[50%] h-auto lg:w-full lg:-mt-24 md:-mt-12 md:hidden sm:flex lg:flex
                        '>
          <MapNL /> 
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
                    <ArrowWhite />
                </Link>
            </Button>
        </div>


      </div>
    </section>
  )
}

export default HeroHome