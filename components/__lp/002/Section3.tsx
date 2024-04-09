import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton5 = dynamic(() => import('@/components/__lp/002/ctaButtons/CtaButton5'))





const Section1 = () => {
  return (
    <div  className='w-full flex flex-col md:flex-row justify-center items-center max-w-[1440px] 
    gap-6 md:gap-20 ml-4 px-4 md:px-8 py-16'>
     
            <div className='flex flex-col relative justify-center items-center w-[75%] md:min-w-[300px] 
            lg:min-w-[450px] md:aspect-[0.79] aspect-[0.79]'>
                <div className='flex w-full h-auto '>
                    <Image 
                        src='/lp/002/3-big.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        className="w-full h-auto rounded-lg xl:flex hidden"
                    />
                    <Image 
                        src='/lp/002/3.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        className="w-full h-auto rounded-lg md:flex xl:hidden hidden"
                    />
                    <Image 
                        src='/lp/002/3-small.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        className="w-full h-auto rounded-lg md:hidden flex"
                    />
                </div>
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>
                <p className='text-qoqu_Blue font-semibold text-xl'>
                    Plat dak
                </p>             
                <h2 className='w-full heading3 md:heading2 lg:heading1 md:text-left text-center line-clamp-4'>
                    Over ons    
                </h2> 

                <div className='w-full md:w-[80%] flex flex-col gap-4 py-4'>
                    <p className='md:text-left text-center'>
                        Welkom bij Zongericht, waar passie voor kwaliteit en service ons drijft en waar we nooit genoegen nemen met minder dan het allerbeste. Bij ons draait alles om het overtreffen van uw verwachtingen en het realiseren van uw dromen, zelfs als dat betekent dat we de uitdagendste installaties moeten plaatsen die anderen als onmogelijk beschouwen.
                    </p>
                    <p className='md:text-left text-center'>
                        Wij zijn niet bang voor een uitdaging. Sterker nog, we omarmen ze. Want juist in de meest complexe projecten zien wij kansen om onze vaardigheden te tonen en uw vertrouwen te verdienen. Ons team van experts staat klaar om elk obstakel te overwinnen en elke installatie tot in perfectie te realiseren.
                    </p>
                    <p className='md:text-left text-center'>
                        Maar we gaan verder dan alleen vakmanschap. Bij Zongericht draait het ook om zekerheid. We hebben onze organisatie zo ingericht dat we u de garantie kunnen bieden dat elke installatie, elk onderdeel en elke service die wij leveren van de hoogste kwaliteit is. Uw tevredenheid staat bij ons altijd voorop, en we zullen er alles aan doen om die te waarborgen.
                    </p>
                </div>

                <CtaButton5 />     

            </div>   
    </div>
  )
}

export default Section1


