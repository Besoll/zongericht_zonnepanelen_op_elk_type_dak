'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const FAQBox = dynamic(() => import('@/components/__lp/001/ui/FAQBox'));




export default function FAQ() {
  const [open, setOpen] = useState<number>(1)
  
  const accordionInput = [
    {
      title: 'Wat is een Oost/west oriëntatie?',
      subTitle: 'Zonnepanelen kunnen op platte daken op diverse manieren worden geïnstalleerd, wat unieke flexibiliteit biedt. Het doel is om zowel het dakoppervlak als de capaciteit van het systeem optimaal te gebruiken. Een effectieve methode is het plaatsen van de panelen in verschillende richtingen, deels naar het oosten en deels naar het westen. Hierdoor lijkt het alsof er een klein puntdak van zonnepanelen op het platte dak staat. Dit zorgt ervoor dat je al vroeg in de ochtend zonne-energie opvangt vanuit het oosten, terwijl het westen van de middag tot de avond (tussen 15.00 uur en 21.45 uur) voor energie zorgt. Deze opstelling is ideaal om het eigen verbruik te verhogen en de energie die terug het net op gaat te verlagen, waardoor zowel het systeem als de investering zo rendabel mogelijk zijn.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 1,
      divId: 'accordion1'
    },
    {
      title: 'Wat is ballast?',
      subTitle: 'Onze installateurs zijn gespecialiseerd in het plaatsen van zonnepanelen op elk daktype. Om de zonnepanelen te plaatsten op uw EPDM-dak moeten we gaten in het dak maken om het systeem waarop de zonnepanelen komen te liggen, vast te maken aan het dakbeschot. Hiervoor maken we gebruik van speciale haken, die door middel van duw- en trekkracht de constructie goed op zijn plaats houden. Voor een geslaagde installatie is het cruciaal om de gaten die nodig zijn om de haken te plaatsen, weer waterdicht achter te laten. Onze installatie monteurs nemen deze taak uiterst serieus. Een methode waarmee we de haken na het plaatsen weer dichten is door gebruik te maken van speciale flexibele verbindingen, die we manchetten noemen. Zo\'n manchet dekt de opening volledig af.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 2,
      divId: 'accordion2'
    },
    {
      title: 'Hoe lang gaat mijn EPDM-dak nog mee na het plaatsen van zonnepanelen?',
      subTitle: 'ballast wordt gebruikt om de constructie van zonnepanelen op daken of op de grond te stabiliseren zonder dat er penetratie van het oppervlak nodig is. Dit is vooral van belang bij platte daken, waar het niet altijd wenselijk of mogelijk is om door de dakbedekking heen te boren om de zonnepanelen te bevestigen.',
      subTitle2: 'De ballast, vaak gemaakt van beton, zandzakken of andere zware materialen, zorgt ervoor dat de zonnepanelen stevig op hun plaats blijven liggen, zelfs bij sterke wind of andere externe invloeden. De hoeveelheid ballast die nodig is, hangt af van verschillende factoren, zoals de locatie, de hoek en hoogte van de installatie, en lokale weersomstandigheden.',
      subTitle3: 'Bij het ontwerpen van een zonnepaneelsysteem met ballast wordt er nauwkeurig berekend hoeveel gewicht nodig is om de panelen veilig op hun plaats te houden zonder schade aan de ondergrond te veroorzaken.',
      subTitle4: 'In sommige gevallen, zoals bij een dakkapel, mag er geen ballast worden geplaatst. Dit komt omdat de dakconstructie door de extra belasting te zwaar belast kan worden, wat kan leiden tot doorhangen of zelfs bezwijken van de constructie. Dakkappellen zijn vaak niet ontworpen om de extra gewichten te dragen die gepaard gaan met het gebruik van ballast voor zonnepanelen. Maar geen zorgen, ook hier heeft Zongericht een oplossing voor dit is namelijk het onbelast dak systeem die het mogelijk maakt de zonnepanelen op dit soort zwakke dakconstructies zonder ballast te plaatsen.',
      id: 3,
      divId: 'accordion3'
    },
    {
      title: 'Wat is een onbelast daksysteem?',
      subTitle: 'Een onbelast daksysteem, is een methode om zonnepanelen op een dak te bevestigen zonder het gebruik van extra gewicht (zoals ballast van grind of steen) om de constructie op zijn plaats te houden.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 4,
      divId: 'accordion4'
    },
    {
      title: 'Hoe het werkt:',
      subTitle: 'Compensatie van Gewicht met Kracht: In plaats van het gebruiken van zware ballastzakken of betonblokken die direct op het dakoppervlak rusten, gebruikt een onbelast daksysteem ankers die de krachten overbrengen naar de constructie van het gebouw zelf. Dit betekent dat de zware last traditioneel geassocieerd met ballast verminderd of geëlimineerd wordt, waardoor het risico op overbelasting van het dak wordt verminderd.',
      subTitle2: 'Gebruik van PV Ankers: Bij een onbelast daksysteem worden speciale montageankers, ook wel PV-ankers genoemd, gebruikt die licht van gewicht zijn maar toch een aanzienlijke trekkracht kunnen weerstaan. Deze ankers worden strategisch geplaatst en bevestigd aan de dakconstructie om de installatie te stabiliseren zonder het dak te belasten.',
      subTitle3: 'Verdeling van de Last: De krachten van de installatie, zoals windbelasting, worden overgedragen naar de montageankers, die op hun beurt de kracht verdelen over de structurele elementen van het gebouw. Dit vermindert de kans op schade aan het dakoppervlak en maakt het mogelijk om zonne-energiesystemen te installeren op daken die anders niet geschikt zouden zijn vanwege gewichtsbeperkingen.',
      subTitle4: 'Aanpassing aan Verschillende Dakbedekkingen: Het systeem is flexibel genoeg om aangepast te worden aan verschillende soorten dakbedekkingen zoals bitumen, EPDM (een soort synthetisch rubber), of PVC. Voor elk van deze materialen worden specifieke ankers en bevestigingstechnieken gebruikt die passen bij de eigenschappen van het dak materiaal.',
      id: 5,
      divId: 'accordion5'
    },
    {
      title: 'Wat is het rendement van zonnepanelen?',
      subTitle: 'Het rendement van uw zonnepanelen wordt vooral bepaald door de duurzaamheid van de installatie. Een lange levensduur staat u toe om de terugverdientijd te overschrijden en te genieten van een maximaal aantal winstjaren. Wij werken met hoogwaardige en zeer kwalitatieve glas-glas zonnepanelen van onder andere Sonnenstromfabrik, welke een product- en rendementsgarantie bieden van 30 jaar. Deze termijn bestaat, gemiddeld, uit 8 terugverdien-jaren en 22 winstjaren. Voor goedkopere varianten, waaronder meestal glas-folie panelen geldt dat de terugverdientijd een tweetal jaren korter is (gemiddeld 6 jaar); maar de gemiddelde levensduur is minder dan de helft (12 versus 30 jaar). Daarom werken wij alleen met glas-glas panelen: ze laten u veel langer genieten van de rendementsperiode die er echt toe doet.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 6,
      divId: 'accordion6'
    },
    {
      title: 'Hoe zit het met garantie op zonnepanelen?',
      subTitle: 'Zongericht werkt alleen met de hoogwaardige glas-glas zonnepanelen van de beste leveranciers. Voorwaardelijk is dat onze leveranciers een product- en rendement garantie bieden van minimaal 30 jaar en voldoen aan de Europese garantiewaarden. Een van onze leveranciers is het Duitse topmerk Sonnenstromfabrik. Deze producent is al 30 jaar marktleider en levert effectieve product- en rendementsgaranties van 30 jaar. Na die tijd behalen deze panelen nog steeds een indrukwekkende 85% van het oorspronkelijke rendement. De uiteindelijke levensduur bedraagt minimaal 50 jaar en Sonnenstromfabrik ontvangt amper schadeclaims. Als Premium Partner kunnen wij u deze glas-glas zonnepanelen bovendien standaard aanbieden met een 10-jarige All-Risk verzekering van ERGO.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 7,
      divId: 'accordion7'
    },
    {
      title: 'Waar letten jullie op tijdens een wooninspectie?',
      subTitle: 'Om het reële rendement van uw zonne-installatie te bepalen let onze adviseur onder andere op de volgende elementen:',
      subTitle2: 'Locatie en omgeving. De hoeveelheid licht die uw zonnepanelen vangen hangt in grote mate af van uw locatie en omgeving. Waar vangt uw gebouw het zonlicht? Wat is de oriëntatie van uw dak? Zijn er schaduwplekken of ontnemen bomen of gebouwen uw licht? Zijn er obstakels die de zonne-installatie moet zien te overbruggen? Al deze elementen beïnvloeden de samenstelling van uw zonnesysteem en de opstelling van de zonnepanelen, in het bijzonder de hellingsgraad.',
      subTitle3: 'Meterkast. Om aan de keuring van een zonne-installatie te voldoen, moet het systeem aan heel wat technische eisen en veiligheidswetten voldoen. De meeste parameters kunnen wij daarbij zelf controleren. De norm schrijft voor dat er bij ingrijpende veranderingen, zoals de plaatsing van een nieuwe zonne-installatie, ook een bijpassende groepenkast moet komen. Wij geven advies wat voor u van toepassing is.',
      subTitle4: 'Bekabeling. Het is belangrijk dat de bekabeling efficiënt, veilig en netjes wordt aangebracht. De inspecteur bekijkt de beste plek voor de bekabeling en hoe de bekabeling correct kan worden beschermd en verstopt. Ook wordt tijdens de inspectie de benodigde kabellengte inzichtelijk, op basis waarvan we dan weer de juist kabeldikte kunnen bepalen. Omvormer. We beoordelen welke omvormer bij uw situatie past en hoe de plaatsing ervan kan anticiperen op eventuele toekomstplannen. De adviseur bekijkt ook of er een werkschakelaar bij de omvormer moet worden geplaatst, waarbij brandveiligheid en ventilatie cruciaal zijn. Daktype en onderconstructie. Een grondige inspectie van het dak is nodig om een offerte op maat te kunnen maken. We zijn de specialist in het plaatsen van glas-glas zonnepanelen op elk daktype. Hier wordt gekeken wat ervoor nodig is om de zonnepanelen op een goede wijze op uw dak te kunnen monteren. Veiligheid, toelichting en advies. Tijdens de inspectie krijgen we een goed beeld van wat er moet gebeuren om de zonnepanelen veilig te installeren. Bijvoorbeeld, is het mogelijk om een dakrandbeveiliging te plaatsen? Is dit geen optie, dan dragen de installateurs valbescherming. Een andere inschatting die gemaakt kan worden, is of er een hoogwerker gebruikt kan worden om de zonnepanelen naar het dak te transporteren. Naast het inspecteren van de woning is dit ook een moment waarop u terecht kunt bij onze adviseur met alle vragen die u hebt.',
      id: 8,
      divId: 'accordion8'
    },
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