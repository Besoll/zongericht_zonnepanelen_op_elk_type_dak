
import dynamic from 'next/dynamic'
const HandPointerBlue = dynamic(() => import('@/components/__lp/002/icons/HandPointerBlue'))

const SectionBlueHand = () => {
  return (

    <div className='w-full md:w-[85%] h-auto flex flex-col gap-4'>
        <div className='flex flex-row gap-4 justify-start items-start'>
                    <HandPointerBlue />
                    <div className='flex flex-col gap-1'>
                        <p className='text-black font-bold text-xl'>
                            Maatwerk:
                        </p>                    
                        <p className='text-base'>
                            Onze monteurs en specialisten zijn al vele jaren vertrouwd met zonnepanelen. Het zijn gecertificeerde en goed opgeleide vakmensen die volledig achter hun werk staan. Bovendien beschikken wij over andere technici, zoals bouwkundigen en dakexperts. Uw zonnepanelen komen doorgaans op uw woning te liggen, bijvoorbeeld op uw platte dak, dus het is essentieel dat de installatie niet alleen elektronisch veilig en volgens de regelgeving wordt uitgevoerd, maar ook bouwkundig voldoet en geschikt is voor uw dak, zowel voor als na de plaatsing van de zonnepanelen. Deze mix van deskundigen stelt ons als Zongericht in staat om op alle soorten daken te installeren, waardoor onze expertise breder is dan die van andere partijen.
                        </p>                    
                    </div>
                </div>

                {/* Text 2 */}
                <div className='flex flex-row gap-4 justify-start items-start'>
                    <HandPointerBlue />
                    <div className='flex flex-col gap-1'>
                        <p className='text-black font-bold text-xl'>
                            Technische expertise 
                        </p>                    
                        <p className='text-base'>
                            Als Zongericht beschouwen wij elk dak als een nieuw project. Elke dakconstructie of woning kent zijn eigen uitdagingen en aandachtspunten. Daarom geloven wij niet in offertes op afstand, aangezien het onmogelijk is om deze uitdagingen correct te beoordelen zonder ter plaatse te zijn, laat staan om de installatie hierop voor te bereiden. Laat u dus niet achteraf verrassen door extra werkzaamheden of problemen tijdens de installatie. Wij, als zonnepanelen installateur, komen graag bij u langs voor een grondige en kosteloze inspectie, zodat wij een offerte op maat kunnen opstellen en u niet voor onverwachte verrassingen komt te staan.
                        </p>
                    </div>
                </div>

                {/* Text 3 */}
                <div className='flex flex-row gap-4 justify-start items-start mb-4'>
                    <HandPointerBlue />
                    <div className='flex flex-col gap-1'>
                        <p className='text-black font-bold text-xl'>
                        Nauwkeurige installatie
                        </p>                    
                        <p className='text-base'>
                            Het installeren op uw platte dak vereist nauwkeurigheid en vakmanschap. U kunt erop vertrouwen dat u als klant een installatie ontvangt die voldoet aan de laatste normen en regelgeving. Om dit realiteit te maken, wordt aan elk project en elke klant een eigen projectleider op afstand toegewezen. Deze projectleider is tijdens de installatie bereikbaar, zodat u snel contact kunt opnemen met iemand waarbij u uw zorgen en opmerkingen kunt uiten. De projectleider zal ook op afstand uw installatie controleren en keuren met behulp van onze speciaal ontwikkelde software, om ervoor te zorgen dat er geen fouten sluipen die mogelijk over het hoofd worden gezien door de monteur vanwege het harde werk onder verschillende weersomstandigheden. Na de installatie op uw platte dak wordt deze door de hoofdmonteur opgeleverd aan de klant middels een opleverformulier. De hoofdmonteur zal de installatie samen met u als klant aanmelden, zodat u direct na vertrek van de monteur klaar bent. En u kunt genieten van uw rendement.
                        </p>
                    </div>
                </div>
    </div>
  )
}

export default SectionBlueHand