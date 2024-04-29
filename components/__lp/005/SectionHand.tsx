
import dynamic from 'next/dynamic'
const HandPointer = dynamic(() => import('@/components/__lp/003/icons/HandPointer'))

const SectionHand = () => {
  return (

    <div className='w-full md:w-[85%] h-auto flex flex-col gap-4'>
        <div className='flex flex-row gap-4 justify-start items-start'>
            <HandPointer />
            <div className='flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Maatwerk:
                </p>                    
                <p className='text-base text-left'>
                    Bij Zongericht behandelen we de installatie van zonnepanelen op parabolische daken als een uniek project. We begrijpen dat elk huis en elke situatie zijn eigen uitdagingen en vereisten kent. Voor ons is het belangrijk om geen offertes te maken zonder eerst een grondige inspectie op locatie te hebben uitgevoerd. Het correct inschatten van de specifieke behoeften van uw woning en het identificeren van eventuele uitdagingen vanaf een afstand is niet mogelijk, vooral wanneer we streven naar een installatie die perfect aansluit bij uw energiebehoeften en de afwerking aan de binnenzijde van uw woning. 
                    <br></br>
                    Om onverwachte situaties tijdens de installatie te voorkomen, kiezen we voor een persoonlijke benadering. Wij, als uw expert in zonnepanelen, komen persoonlijk bij u langs voor een uitvoerige en geheel kosteloze inspectie van uw huis. Op basis van deze inspectie stellen we een op maat gemaakte offerte samen. Dit proces zorgt ervoor dat u vanaf het begin duidelijk weet wat u kunt verwachten, zonder verrassingen achteraf. 
                    <br></br>
                    Ons doel is om u een helder en transparant voorstel te bieden, waarbij alle aspecten van de installatie op voorhand duidelijk zijn. Door te kiezen voor Zongericht, kiest u voor zekerheid en kwaliteit. Hiermee garanderen we dat u zonder zorgen kunt genieten van uw nieuwe zonnepanelen, optimaal geïnstalleerd op uw unieke parabolische dak.
                </p>                    
            </div>
        </div>

        {/* Text 2 */}
        <div className='flex flex-row gap-4 justify-start items-start'>
            <HandPointer />
            <div className='flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Technische installatie:
                </p>                    
                <p className='text-base text-left'>
                    Bij Zongericht gaat de installatie van zonnepanelen op een parabolisch dak verder dan enkel de technische plaatsing en aansluiting van de panelen. Het is cruciaal dat de locatie waar de panelen geïnstalleerd worden niet alleen logisch is, maar ook dat er rekening wordt gehouden met verschillende factoren die de efficiëntie en effectiviteit van uw zonne-energiesysteem kunnen beïnvloeden. Daarnaast is de afwerking van de bekabeling van groot belang; deze moet uiteraard zo netjes en onopvallend mogelijk worden uitgevoerd. 
                    <br></br>
                    Deze aspecten zijn allemaal onderdeel van de service die Zongericht biedt. We zorgen ervoor dat elk detail van de installatie wordt overwogen, van de optimale positionering op uw unieke parabolische dak tot aan een nette afwerking, zodat het eindresultaat niet alleen functioneel is, maar ook esthetisch aangenaam. Ons doel is om u een zorgeloze ervaring te bieden, met een professioneel geïnstalleerd zonne-energiesysteem dat perfect past bij uw huis en uw energiebehoeften.
                </p>
            </div>
        </div>

        {/* Text 3 */}
        <div className='flex flex-row gap-4 justify-start items-start mb-4'>
            <HandPointer />
            <div className='flex flex-col justify-start items-start gap-1'>
                <p className='text-black font-bold text-xl'>
                    Controle en service:
                </p>                    
                <p className='text-base text-left'>
                    Bij Zongericht is de installatie van zonnepanelen op een parabool dak een proces dat precisie en deskundigheid vereist. We zorgen ervoor dat uw zonnepaneleninstallatie voldoet aan alle recente normen. Voor elk project wijzen wij een persoonlijke projectleider toe, die fungeert als uw directe aanspreekpunt. Deze projectleider maakt gebruik van onze geavanceerde software om de installatie zorgvuldig te monitoren en te keuren op afstand. Dit zorgt ervoor dat eventuele onvolkomenheden direct worden geïdentificeerd en opgelost.
                    <br></br>
                    Na de installatie wordt het project door onze hoofdmonteur officieel aan u overgedragen, inclusief een opleverformulier. Dit document bevestigt de voltooiing van de installatie volgens onze hoge standaarden
                    <br></br>
                    Onze aanpak is ontworpen om u een vlekkeloze installatie te garanderen en u volledige gemoedsrust te bieden. Van het begin tot het eind van het project zorgen wij voor een professioneel beheer. Uw tevredenheid en het rendement van uw investering in zonne-energie zijn onze topprioriteit, waarbij we ervoor zorgen dat uw parabolische dak optimaal wordt benut voor maximale energieopwekking.
                </p>
            </div>
        </div>
    </div>
  )
}

export default SectionHand