"use client"
import Image from 'next/image'
import { useState } from 'react';


import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/008-V1/ctaButtons/CtaButton4'))
const Tag = dynamic(() => import('@/components/__lp/008-V1/ui/RoofTag'))
const Section6Steps = dynamic(() => import('@/components/__lp/008-V1/Section6Steps'))




const Section2 = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabIndex:any) => {
      setActiveTab(tabIndex);
    };

    
  return (
    <div className='w-full flex flex-col justify-center items-center max-w-[1440px] gap-4 px-4'>

        <Tag />
        <p className='w-fit text-black text-4xl font-semibold text-center pb-4 md:pb-8 '>
            Onze werkwijze
        </p>

        <div role="tablist" className="w-full tabs tabs-bordered flex justify-center items-center gap-1">
            
            {/* Tab 1 */}
            <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                id="tab1"
                className={`w-full md:w-fit tab px-2 md:px-12 md:py-4 md:pb-10 text-md md:text-xl lg:text-2xl ${activeTab === 1 ? 'bg-qoqu_Orange text-white' : 'hover:bg-qoqu_Orange/20 hover:scale-105 bg-qoqu_Orange/10 text-black/80'}
                transition duration-300 ease-in-out cursor-pointer 
                `}
                aria-label="Gratis woninginspectie"
                checked={activeTab === 1}
                onChange={() => handleTabChange(1)}
            />

            {/* Tab 2 */}
            <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                id="tab2"
                className={`w-full md:w-fit tab md:px-12 md:py-4 md:pb-10 text-md md:text-xl lg:text-2xl ${activeTab === 2 ? 'bg-qoqu_Orange text-white' : 'hover:bg-qoqu_Orange/20 hover:scale-105 bg-qoqu_Orange/10 text-black/80'}
                transition duration-300 ease-in-out cursor-pointer
                `}
                aria-label="Installatie"
                checked={activeTab === 2}
                onChange={() => handleTabChange(2)}
            />

            {/* Tab 3 */}
            <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                id="tab3"
                className={`w-full md:w-fit tab md:px-12 md:py-4 md:pb-10 text-md md:text-xl lg:text-2xl ${activeTab === 3 ? 'bg-qoqu_Orange text-white' : 'hover:bg-qoqu_Orange/20 hover:scale-105 bg-qoqu_Orange/10 text-black/80'}
                transition duration-300 ease-in-out cursor-pointer 
                `}
                aria-label="Betaling"
                checked={activeTab === 3}
                onChange={() => handleTabChange(3)}
            />
        </div>

        <div role="tabpanel" className={`tab-content ${activeTab === 1 ? 'flex' : 'hidden'}`}>
             <div className='w-full h-auto flex flex-col-reverse md:flex-row justify-center items-center px-4 py-4 gap-4 md:gap-6'>
                <div className='w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start gap-0 md:gap-8'>
                    <p className='text-base font-normal pb-8 md:pb-4'>
                        Wij bieden een gratis en vrijblijvende woninginspectie aan. Onze adviseur komt persoonlijk bij u langs, neemt alle tijd om uw vragen te beantwoorden, en stelt na een zorgvuldige inspectie een persoonlijke offerte op maat voor u op.
                    </p>
                    <CtaButton />
                </div>

                {/* 3 size image - mobile-tablet-desktop */}
                <Image 
                    src='/lp/008-V1/2-big.webp'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0]
                                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 lg:flex hidden
                                "
                />
                <Image 
                    src='/lp/008-V1/2.webp'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0]
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2 lg:hidden hidden md:flex"
                />
                <Image 
                    src='/lp/008-V1/2-small.webp'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0] flex md:hidden"
                />

             </div>
        </div>
        <div role="tabpanel" className={`tab-content ${activeTab === 2 ? 'flex' : 'hidden'}`}>
             <div className='w-full h-auto flex flex-col-reverse md:flex-row justify-center items-center px-4 py-4 gap-4 md:gap-6'>
                <div className='w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start gap-0 md:gap-8'>
                    <p className='text-base font-normal pb-8 md:pb-4'>
                        Als u akkoord gaat met de offerte die onze adviseur bij u thuis heeft opgesteld, zal onze planner contact met u opnemen om een afspraak te plannen. We zorgen ervoor dat we binnen 4 weken na uw bestelling beginnen met de installatie van uw zonnepanelen. Deze installatie is meestal binnen één dag afgerond.
                    </p>
                    <CtaButton />
                </div>

                {/* 3 size image - mobile-tablet-desktop */}
                <Image 
                    src='/lp/008-V1/2-2.png'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0]
                                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 lg:flex hidden
                                "
                />
                <Image 
                    src='/lp/008-V1/2-2.png'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0]
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2 lg:hidden hidden md:flex"
                />
                <Image 
                    src='/lp/008-V1/2-2.png'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0] flex md:hidden"
                />

             </div>
        </div>
        <div role="tabpanel" className={`tab-content ${activeTab === 3 ? 'flex' : 'hidden'}`}>
             <div className='w-full h-auto flex flex-col-reverse md:flex-row justify-center items-center px-4 py-4 gap-4 md:gap-6'>
                <div className='w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start gap-0 md:gap-8'>
                    <p className='text-base font-normal pb-8 md:pb-4'>
                        Na de succesvolle en werkende installatie van uw zonnepanelen op uw leistenen dak ontvangt u een factuur voor de betaling achteraf. U hoeft niet direct aan de deur te betalen; u kunt de betaling gemakkelijk regelen na voltooiing van de installatie.
                    </p>
                    <CtaButton />
                </div>

                {/* 3 size image - mobile-tablet-desktop */}
                <Image 
                    src='/lp/008-V1/2-3.png'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0]
                                md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 lg:flex hidden
                                "
                />
                <Image 
                    src='/lp/008-V1/2-3.png'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0]
                            md:hover:scale-110  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2 lg:hidden hidden md:flex"
                />
                <Image 
                    src='/lp/008-V1/2-3.png'
                    alt='glas glas zonnepanelen op parabool dak 1'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-[0] flex md:hidden"
                />

             </div>
        </div>

    </div>
  )
}

export default Section2

