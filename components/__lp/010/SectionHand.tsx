import dynamic from 'next/dynamic'
const HandPointer = dynamic(() => import('@/components/__lp/010/icons/HandPointer'))

const SectionHand = () => {
  return (

    <div className='w-full h-auto flex flex-col gap-4'>
        <div className='flex flex-row gap-4 justify-start items-start'>
            <HandPointer />
            <div className='flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Maatwerk
                </p>                    
                <p className='text-sm text-left'>
                    Een schuin dak met dakpannen is het daktype dat onze installateurs het meest tegenkomen. Dat gezegd hebbende, is het niet de makkelijkste constructie om zonnepanelen op te plaatsen. Er zijn veel verschillende soorten en maten dakpannen wat betekend dat er ook verschillende dak-haken gebruikt moet worden, en dat wordt vaak over het hoofd gezien door installateurs. Bij Zongericht begrijpen wat er nodig is, en hebben de ervaring, kennis en kunde die nodig is voor de juiste installatie van zonnepanelen op een pannendak.
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
                    Om zonnepanelen te kunnen installeren moet er technische achtergrondkennis zijn van het type dak. Bij een pannendak zijn er veel factoren van belang, zoals de bruikbare dakoppervlakte, het daktype en type dakpan. We zien helaas vaak dat installateurs alleen gebruik maken van de materialen die ze mee hebben, waardoor verkeerde haken worden gebruikt, of de ontlasting van de dakpan wordt vergeten, om te voorkomen dat de pannen breken bij veel wind. Bij Zongericht kijken we tijdens de wooninspectie welke methode en materialen het best voor uw pannendak werkt, zodat de installateur altijd goed voorbereid is. 
                </p>
            </div>
        </div>

        {/* Text 3 */}
        <div className='flex flex-row gap-4 justify-start items-start mb-6'>
            <HandPointer />
            <div className='flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Service en controle
                </p>                    
                <p className='text-sm text-left'>
                    Wanneer de zonnepanelen zijn geplaatst, helpt de hoofdmonteur u met de installatie van de gekozen software, en het aanmelden van uw zonnesysteem bij Energieleveren.nl. Zo kunt u niet gebruikte energie meteen terug leveren aan het stroomnet en maakt u direct optimaal gebruik van de stroom. Ook als er later nog iets mag zijn staat de klantenservice van Zongericht voor u klaar om u te helpen, wij streven ernaar service binnen 1 werkweek te verhelpen.
                </p>
            </div>
        </div>
    </div>
  )
}

export default SectionHand