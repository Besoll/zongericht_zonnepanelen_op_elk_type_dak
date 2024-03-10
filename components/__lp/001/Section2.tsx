import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton2 = dynamic(() => import('@/components/__lp/001/ctaButtons/CtaButton2'))
const HandPointerBlue = dynamic(() => import('@/components/__lp/001/icons/HandPointerBlue'))

const Section1 = () => {
  return (
    <div className='flex w-full justify-center items-center md:justify-start md:items-start max-w-[1200px] 
    px-4 md:px-8 gap-0 md:gap-20 mb-16 flex-col md:flex-row ml-4'>      
        <div className='flex flex-col relative justify-center items-center w-[55%] md:min-w-[300px] 
        lg:min-w-[450px]'>
            <div className='flex w-full h-[550px] '>
                <Image 
                    src='/lp/001/3.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={510}
                    height={700}
                    className="w-full h-auto  rounded-[500px] bg-repeat-x bg-center"
                />
            </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>
            <div className='w-full flex flex-col items-start mb-2 justify-start'>              
                <h2 className='w-full heading3 md:heading2 lg:heading1 md:text-left text-center line-clamp-4'>
                    Zorgeloze installatie van zonnepanelen op uw PVC dak    
                </h2> 
            </div>

            {/* texts container */}
            <div className='w-full md:w-[80%]'>
                <p className='md:text-left text-center mb-4'>
                Ontdek nu onze veelzijdigheid in zonnepaneleninstallaties! Ons bekwaam team staat met de nodige expertise klaar voor elke uitdaging en installeert moeiteloos zonnepalen op verschillende daktypes, inclusief PVC daken!
                </p>
            </div>

            {/* Text 1 */}
            <div className='flex flex-row gap-4 justify-start items-start'>
                <HandPointerBlue />
                <div className='flex flex-col gap-1'>
                    <h4 className='text-black font-bold heading4'>
                        Maatwerk:
                    </h4>                    
                    <p className='text-base'>
                         Bij Zongericht benaderen we elk dak als een uniek project. We begrijpen dat elke dakconstructie en elke woning zijn eigen specifieke uitdagingen en aandachtspunten heeft. Dit is precies de reden waarom wij niet geloven in het opstellen van offertes zonder eerst de situatie ter plaatse grondig te hebben bekeken. Het is simpelweg onmogelijk om de specifieke uitdagingen van een dak op afstand correct in te schatten, en al helemaal niet om een installatieplan te maken dat hier perfect op aansluit. 
                         <br />
                         Om ervoor te zorgen dat u niet onaangenaam verrast wordt door onvoorziene werkzaamheden of problemen tijdens de installatie, kiezen wij voor een persoonlijke aanpak. Als uw zonnepanelen installateur nemen we de tijd om bij u langs te komen voor een grondige en geheel kosteloze inspectie van uw dak. Op basis van deze inspectie stellen wij vervolgens een offerte op maat samen. Zo bent u volledig op de hoogte van wat u kunt verwachten en komt u niet voor onverwachte verrassingen te staan.
                         <br />
                         Ons doel is om u een helder en transparant voorstel te bieden, waarbij alle aspecten van de installatie vooraf duidelijk zijn. Met Zongericht kiest u voor zekerheid en kwaliteit, zodat u zonder zorgen kunt genieten van uw nieuwe zonnepanelen.
                    </p>
                </div>
            </div>

            {/* Text 2 */}
            <div className='flex flex-row gap-4 justify-start items-start'>
                <HandPointerBlue />
                <div className='flex flex-col gap-1'>
                    <h4 className='text-black font-bold heading4'>
                        Technische installatie
                    </h4>                    
                    <p className='text-base'>
                         Bij Zongericht beschikken we over een team van ervaren monteurs en specialisten in zonnepanelen, ondersteund door een groep van bouwkundigen en dakexperts. Deze combinatie van expertise zorgt ervoor dat elke installatie, met een bijzondere focus op PVC daken, zowel aan de elektrotechnische veiligheidsnormen als aan de bouwkundige vereisten voldoet.
                         <br />
                         Ons team begrijpt de unieke uitdagingen die PVC daken met zich meebrengen en biedt daarom op maat gemaakte oplossingen aan. Dit zorgt ervoor dat de installatie van zonnepanelen niet alleen tijdens, maar ook na het plaatsen, volledig geoptimaliseerd is voor uw specifieke situatie
                         <br />
                         Onze brede expertise en aandacht voor detail maken Zongericht uniek in het vermogen om op alle soorten daken zonnepanelen te installeren, met een speciale nadruk op de kwaliteit en veiligheid van het werk op PVC daken. Door te kiezen voor Zongericht kiest u voor een zorgeloze ervaring, waarbij u verzekerd bent van een installatie die aan alle technische en bouwkundige eisen voldoet.
                    </p>
                </div>
            </div>

            {/* Text 3 */}
            <div className='flex flex-row gap-4 justify-start items-start mb-4'>
                <HandPointerBlue />
                <div className='flex flex-col gap-1'>
                    <h4 className='text-black font-bold heading4'>
                        Controle en service
                    </h4>                    
                    <p className='text-base'>
                         Het installeren van zonnepanelen op uw PVC dak vereist precisie en vakmanschap. Wij zorgen ervoor dat uw installatie aan alle recente normen voldoet. Voor elk project krijgt u een eigen projectleider toegewezen, die op afstand uw directe aanspreekpunt is. Deze projectleider gebruikt onze software om de installatie op afstand te monitoren en goed te keuren, waardoor eventuele fouten direct worden opgespoord en aangepakt.
                         <br />
                         Na installatie wordt het project door onze hoofdmonteur officieel aan u opgeleverd met een opleverformulier. Samen met de hoofdmonteur meldt u de installatie aan, zodat u meteen kunt beginnen met genieten van uw zonnepanelen en het bijbehorende rendement.
                         <br />
                         Onze aanpak verzekert u van een naadloze installatie en biedt gemoedsrust, wetende dat alles van begin tot eind goed wordt geregeld. Uw tevredenheid en het rendement van uw investering zijn onze prioriteit.
                    </p>
                </div>
            </div>
            <CtaButton2 />
        </div>   
      
    </div>
  )
}

export default Section1