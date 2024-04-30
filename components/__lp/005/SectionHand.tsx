
import dynamic from 'next/dynamic'
const HandPointer = dynamic(() => import('@/components/__lp/005/icons/HandPointer'))

const SectionHand = () => {
  return (

    <div className='w-full md:w-[85%] h-auto flex flex-col gap-4'>
        <div className='flex flex-row gap-4 justify-start items-start'>
            <HandPointer />
            <div className='flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Maatwerk
                </p>                    
                <p className='text-sm text-left'>
                    Zoals bij elk daktype, heeft ook een golfplaten dak zijn eigen uitdagingen. Golfplaten komen we veelal tegen op gebouwen rondom het woonhuis, zoals een tuinhuis of een garage. Dat heeft invloed op de installatie en de aansluiting op uw stroomnetwerk. Wij begrijpen wat er nodig is, hebben de kennis en kunde die nodig zijn bij het installeren van zonnepanelen op een golfplaten dak.
                </p>                    
            </div>
        </div>

        {/* Text 2 */}
        <div className='flex flex-row gap-4 justify-start items-start'>
            <HandPointer />
            <div className='flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Technische expertise
                </p>                    
                <p className='text-sm text-left'>
                    Om zonnepanelen te kunnen installeren moet er technische achtergrondkennis zijn van het type dak. Bij een golfplaten dak bepalen we het type golfplaat en de constructie waarop de golfplaten vast liggen. Afhankelijk daarvan maken wij een plan en een passende offerte
                </p>
            </div>
        </div>

        {/* Text 3 */}
        <div className='flex flex-row gap-4 justify-start items-start mb-4'>
            <HandPointer />
            <div className='flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Service:
                </p>                    
                <p className='text-sm text-left'>
                    Wanneer de zonnepanelen zijn geplaatst, helpt de hoofdmonteur u met de installatie van de gekozen software, en het aanmelden van uw zonnesysteem bij Energieleveren.nl. Zo kunt u niet gebruikte energie meteen terug leveren aan het stroomnet en maakt u direct optimaal gebruik van de stroom
                </p>
            </div>
        </div>
    </div>
  )
}

export default SectionHand