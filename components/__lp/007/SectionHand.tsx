
import dynamic from 'next/dynamic'
const ForwardBlue = dynamic(() => import('@/components/__lp/007/icons/ForwardBlue'))

const SectionHand = () => {
  return (

    <div className='w-full md:w-[85%] h-auto flex flex-col gap-4'>
        <div className='flex flex-row gap-4 justify-start items-start bg-qoqu_Grey/20 px-4 py-6'>
            <ForwardBlue />
            <div className='-mt-2 flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Maatwerk
                </p>                    
                <p className='text-sm text-left'>
                    Zoals bij elk daktype, heeft ook een stalen dak zijn eigen uitdagingen. Namelijk, een stalen dak is gevoeliger dan andere daken voor lekkages en beschadigingen. Tijdens de wooninspectie bekijken we wat de juiste montagewijze is voor de zonnepanelen op uw stalen dak. Door een grote hoeveelheid kennis en ervaring begrijpen we wat er nodig is, en kunnen we op maat advies geven
                </p>                    
            </div>
        </div>

        {/* Text 2 */}
        <div className='flex flex-row gap-4 justify-start items-start bg-qoqu_Grey/20 px-4 py-6'>
            <ForwardBlue />
            <div className='-mt-2 flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Technische expertise
                </p>                    
                <p className='text-sm text-left'>
                    Om zonnepanelen te kunnen installeren moet er technische achtergrondkennis zijn van het type dak. Bij een stalen dak is het belangrijk dat er voor de juiste montagewijze wordt gekozen, om lekkages en onnodige schade aan uw dak te voorkomen. Onze installateurs zijn zeer ervaren met stalen daken, en helpen u graag. Stalen daken zijn er in verschillende soorten en maten; zo heb je bijvoorbeeld stalen dakpanplaten, die van een afstandje lijken op dakpannen, maar in werkelijkheid stalen platen zijn
                </p>
            </div>
        </div>

        {/* Text 3 */}
        <div className='flex flex-row gap-4 justify-start items-start bg-qoqu_Grey/20 px-4 py-6 mb-4'>
            <ForwardBlue />
            <div className='-mt-2 flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Service:
                </p>                    
                <p className='text-sm text-left'>
                    Wanneer de zonnepanelen zijn geplaatst, helpen we u met de installatie van de gekozen software, en meldt de hoofdmonteur uw zonnesysteem ter plaatse aan bij Energieleveren.nl. Zo kunt u niet gebruikte energie meteen terug leveren aan het stroomnet en maakt u direct optimaal gebruik van de stroom
                </p>
            </div>
        </div>
    </div>
  )
}

export default SectionHand