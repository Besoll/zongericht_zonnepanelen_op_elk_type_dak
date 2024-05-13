import dynamic from 'next/dynamic'
const HandPointer = dynamic(() => import('@/components/__lp/008-V1/icons/HandPointer'))

const SectionHand = () => {
  return (

    <div className='w-full  h-auto flex flex-col gap-4'>
        <div className='flex flex-row gap-4 justify-start items-start'>
            <HandPointer />
            <div className='flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Maatwerk:
                </p>                    
                <p className='text-sm text-left'>
                    Bij het installeren van zonnepanelen op leistenen daken komt precisie en vakmanschap kijken. Bij Zongericht weten we dat elk leistenen dak zijn eigen unieke kenmerken heeft. Daarom geloven we niet in het geven van offertes zonder het dak zelf gezien te hebben. Het idee dat installaties op afstand kunnen worden ingeschat, vinden we onrealistisch. Zonder een bezoek aan uw woning, hoe kunnen we de specifieke behoeften en uitdagingen van uw dak begrijpen? 
                    <br></br>
                    Het direct beoordelen van uw dak is essentieel. Dit stelt ons in staat om alles tot in detail te plannen, van de beste manier om de zonnepanelen te plaatsen tot hoe we de kabels netjes kunnen wegwerken. Zo'n grondige inspectie voorkomt verrassingen tijdens de installatie, zoals onvoorziene werkzaamheden die de kosten kunnen opdrijven.
                </p>                    
            </div>
        </div>

        {/* Text 2 */}
        <div className='flex flex-row gap-4 justify-start items-start'>
            <HandPointer />
            <div className='flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Technische expertise:
                </p>                    
                <p className='text-sm text-left'>
                    Bij Zongericht hebben we uitgebreide ervaring met het installeren van zonnepanelen op leistenen daken. Leistenen daken zijn uniek en vereisen een speciale benadering, vooral wanneer het gaat om het bevestigen van de dakhaak die de zonnepanelen ondersteunt. Dit proces is zorgvuldig en vereist nauwkeurigheid en aandacht voor detail. 
                    <br></br>
                    Om een dakhaak stevig te bevestigen, is het soms noodzakelijk om enkele leistenen tijdelijk te verwijderen. Dit maakt het mogelijk om een solide basis te leggen voor de installatie. In bepaalde gevallen houdt dit ook in dat we de onderliggende structuur van het dak moeten versterken om alles goed te kunnen dragen. 
                    <br></br>
                    Na deze belangrijke voorbereidingen plaatsen we de leistenen verzegeld met duurzaam lood terug, met zorg en aandacht voor de oorspronkelijke staat van uw dak. Dit zorgt niet alleen voor een veilige en betrouwbare installatie, maar ook voor een esthetisch aangenaam uitzicht dat naadloos aansluit bij de unieke stijl van uw dak.
                </p>
            </div>
        </div>

        {/* Text 3 */}
        <div className='flex flex-row gap-4 justify-start items-start mb-6'>
            <HandPointer />
            <div className='flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Service en controle:
                </p>                    
                <p className='text-sm text-left'>
                    We zorgen ervoor dat uw installatie voldoet aan de hoogste normen en regelgevingen. Dit vereist nauwkeurige aandacht en om de kwaliteit te garanderen, wijzen we voor elk project een persoonlijke projectleider toe die u gedurende het hele traject begeleidt. Uw projectleider staat altijd klaar om al uw vragen en zorgen te beantwoorden. Met onze speciaal hiervoor ontworpen systemen voeren zij op afstand toezicht uit op uw installatie om er zeker van te zijn dat alles naadloos verloopt en correct wordt geïnstalleerd. Zelfs de meest kundige monteur kan immers soms iets over het hoofd zien. Na afronding van de installatie inspecteert onze hoofdmonteur samen met u alle details, zodat u onmiddellijk kunt genieten van de voordelen van uw zonnepanelen systeem. 
                    <br></br>
                    Daarnaast staan we ook na de installatie voor u klaar. Indien u niet volledig tevreden bent of er onverwachte problemen opduiken, staat ons team direct klaar om een oplossing te bieden.
                </p>
            </div>
        </div>
    </div>
  )
}

export default SectionHand