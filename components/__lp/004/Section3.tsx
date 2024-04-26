import Image from 'next/image'
import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/004/ctaButtons/CtaButton4'))
const RoofTag = dynamic(() => import('@/components/__lp/004/ui/RoofTag'))
const CheckHexagon = dynamic(() => import('@/components/__lp/004/icons/CheckHexagon'))


const Section3 = () => {
  return (
    <div className='w-full max-w-[1440px] h-auto flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center md:jsutify-start md:items-start px-4 py-16 md:py-32'>
            <div className='w-full flex flex-col justify-center items-center outline outline-2 outline-offset-[12px]  rounded-3xl'>
                <Image 
                    src='/lp/004/2-big.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-3xl lg:flex hidden"
                />
                <Image 
                    src='/lp/004/2.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-3xl md:flex lg:hidden hidden"
                />
                <Image 
                    src='/lp/004/2-small.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-3xl md:hidden flex"
                />
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3  text-qoqu_Light_Orange'>
                <RoofTag />           
                <h2 className='w-full heading3 md:heading2 lg:heading1 md:text-left text-center line-clamp-4 text-black'>
                    Wat kunt u verwachten?
                </h2> 
                <p className='md:text-left text-center text-black pb-2 md:pb-8'>
                    Bij Zongericht hebben we de expertise en ervaring om zonnepanelen vakkundig op uw zinken dak te installeren. Ons team bestaat uit gecertificeerde professionals die diepgaande kennis hebben op het gebied van zonnepanelen, dakconstructies, en elektrotechnische installaties.
                    <br></br><br></br>
                    U kunt erop vertrouwen dat Zongericht uw zonnepanelensysteem installeert met de precisie en zorg die u verwacht van een deskundige installateur. 
                    <br></br><br></br>
                    Tijdens het installatieproces wijzen wij u een persoonlijke projectleider toe. Deze projectleider fungeert als uw aanspreekpunt en is verantwoordelijk voor zowel de technische als esthetische aspecten van de installatie. Uw projectleider zal op afstand toezien op het werk van de monteurs, om te garanderen dat de installatie voldoet aan onze hoge standaarden.
                </p>
                <CtaButton />

                <div className='w-full h-auto flex flex-col justify-start items-start pt-8'>
                    <div className='w-full h-auto flex flex-row justify-start items-center gap-2 -mt-3'>
                        <CheckHexagon />
                        <p className='text-xl pb-3 text-black'>
                            Maatwerk oplossingen
                        </p>
                    </div>
                    <div className='w-full h-auto flex flex-row justify-start items-center gap-2 -mt-3'>
                        <CheckHexagon />
                        <p className='text-xl pb-3 text-black'>
                            Technische expertise
                        </p>
                    </div>
                    <div className='w-full h-auto flex flex-row justify-start items-center gap-2 -mt-3'>
                        <CheckHexagon />
                        <p className='text-xl pb-3 text-black'>
                            Professionele installatie
                        </p>
                    </div>
                    <div className='w-full h-auto flex flex-row justify-start items-center gap-2 -mt-3'>
                        <CheckHexagon />
                        <p className='text-xl pb-3 text-black'>
                            Hoge veiligheid
                        </p>
                    </div>
                </div>

            </div> 
        </div>  
  )
}

export default Section3


