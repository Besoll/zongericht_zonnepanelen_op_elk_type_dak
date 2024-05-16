'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const FAQBox = dynamic(() => import('@/components/__lp/009/ui/FAQBox'));




export default function FAQ() {
  const [open, setOpen] = useState<number>(1)
  
  const accordionInput = [
    {
      title: 'Hoe worden zonnepanelen op een schuin bitumen dak gemonteerd?',
      subTitle: 'Bitumen, vaak gebruikt als dakbedekking materiaal, staat bekend om zijn duurzaamheid en waterdichtheid. De installatie van zonnepanelen op een schuin bitumen dak vereist echter specifieke bevestigingsmethoden om zowel de integriteit van het dak te behouden als een veilige bevestiging van de zonnepanelen te garanderen.',
      subTitle2: 'Gebruik van Montagesystemen: Voor schuine bitumen daken worden specifieke montagesystemen gebruikt die ontworpen zijn om de dakbedekking niet te beschadigen.',
      subTitle3: 'Deze systemen kunnen bestaan uit dakhaakbevestigingen die aan de dakconstructie onder de bitumen laag worden bevestigd, of speciale klemmen die geschikt zijn voor de structuur van het bitumen dak. Waterdichtheid Behouden: Het is cruciaal dat de installatie van de montagesystemen de waterdichtheid van het bitumen dak niet aantast.',
      subTitle4: 'Gebruik maken van afdichtingsmiddelen of specifieke doorvoeringen die compatibel zijn met bitumen kan noodzakelijk zijn om lekkages te voorkomen.',
      id: 1,
      divId: 'accordion1'
    },
    {
      title: 'Hoe zit het met garantie op zonnepanelen?',
      subTitle: 'Zongericht werkt alleen met de hoogwaardige glas-glas zonnepanelen van de beste Leveranciers. Voorwaardelijk is dat onze leveranciers een product- en rendement garantie bieden van minimaal 30 jaar en voldoen aan de Europese garantiewaarden. Een van onze leveranciers is het Duitse topmerk Sonnenstromfabrik. Deze producent is al 30 jaar marktleider en levert effectieve product- en rendementsgaranties van 30 jaar. Na die tijd behalen deze panelen nog steeds een indrukwekkende 85% van het oorspronkelijke rendement. De uiteindelijke levensduur bedraagt minimaal 50 jaar en Sonnenstromfabrik ontvangt amper schadeclaims. Als Premium Partner kunnen wij u deze glas-glas zonnepanelen bovendien standaard aanbieden met een 10-jarige All-Risk verzekering van ERGO.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 2,
      divId: 'accordion2'
    },
    {
      title: 'Waar letten jullie op tijdens een woninginspectie?',
      subTitle: 'Om het reële rendement van uw zonne-installatie te bepalen let onze adviseur onder andere op de volgende elementen:',
      subTitle2: 'Locatie en omgeving. De hoeveelheid licht die uw zonnepanelen vangen hangt in grote mate af van uw locatie en omgeving. Waar vangt uw gebouw het zonlicht? Wat is de oriëntatie van uw dak? Zijn er schaduwplekken of ontnemen bomen of gebouwen uw licht? Zijn er obstakels die de zonne- installatie moet zien te overbruggen? Al deze elementen beïnvloeden de samenstelling van uw zonnesysteem en de opstelling van de zonnepanelen, in het bijzonder de hellingsgraad.',
      subTitle3: 'Meterkast. Om aan de keuring van een zonne-installatie te voldoen, moet het systeem aan heel wat technische eisen en veiligheidswetten voldoen. De meeste parameters kunnen wij daarbij zelf controleren. De norm schrijft voor dat er bij ingrijpende veranderingen, zoals de plaatsing van een nieuwe zonne-installatie, ook een bijpassende groepenkast moet komen. Wij geven advies wat voor u van toepassing is.',
      subTitle4: 'Bekabeling. Het is belangrijk dat de bekabeling efficiënt, veilig en netjes wordt aangebracht. De inspecteur bekijkt de beste plek voor de bekabeling en hoe de bekabeling correct kan worden beschermd en verstopt. Ook wordt tijdens de inspectie de benodigde kabellengte inzichtelijk, op basis waarvan we dan weer de juist kabeldikte kunnen bepalen. Omvormer. We beoordelen welke omvormer bij uw situatie past en hoe de plaatsing ervan kan anticiperen op eventuele toekomstplannen. De adviseur bekijkt ook of er een werkschakelaar bij de omvormer moet worden geplaatst, waarbij brandveiligheid en ventilatie cruciaal zijn. Daktype en onderconstructie. Een grondige inspectie van het dak is nodig om een offerte op maat te kunnen maken. We zijn de specialist in het plaatsen van glas-glas zonnepanelen op elk daktype. Hier wordt gekeken wat ervoor nodig is om de zonnepanelen op een goede wijze op uw dak te kunnen monteren. Veiligheid, toelichting en advies. Tijdens de inspectie krijgen we een goed beeld van wat er moet gebeuren om de zonnepanelen veilig te installeren. Bijvoorbeeld, is het mogelijk om een dakrandbeveiliging te plaatsen? Is dit geen optie, dan dragen de installateurs valbescherming. Een andere inschatting die gemaakt kan worden, is of er een hoogwerker gebruikt kan worden om de zonnepanelen naar het dak te transporteren. Naast het inspecteren van de woning is dit ook een moment waarop u terecht kunt bij onze adviseur met alle vragen die u hebt',
      id: 3,
      divId: 'accordion3'
    },
    // {
    //   title: '',
    //   subTitle: '',
    //   subTitle2: '',
    //   subTitle3: '',
    //   subTitle4: '',
    //   id: 8,
    //   divId: 'accordion8'
    // },
  ]

  return (
    <div className="flex w-full justify-center items-center  flex-col space-y-2 px-4 md:px-0">
      {accordionInput.map(({ title, subTitle, subTitle2, subTitle3, subTitle4, id, divId })  => (
        <FAQBox 
          key={id}
          title={title}
          subTitle={subTitle}
          subTitle2={subTitle2}
          subTitle3={subTitle3}
          subTitle4={subTitle4}
          divId={divId}
          i={id}
          isOpen={open}
          setIsOpen={setOpen}
        />
      ))}
    </div>
  )
}