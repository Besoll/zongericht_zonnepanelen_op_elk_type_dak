'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const FAQBox = dynamic(() => import('@/components/__lp/001/ui/FAQBox'));




export default function FAQ() {
  const [open, setOpen] = useState<number>(1)
  
  const accordionInput = [
    {
      title: 'Welke montagewijzen zijn er voor pvc daken?',
      subTitle: 'Bij de installatie van PVC-daken hanteren wij geavanceerde montagetechnieken die niet alleen de levensduur van uw dak aanzienlijk verlengen, maar dit ook doen zonder enige schade toe te brengen. Onze aanpak is gericht op het minimaliseren van penetratie, waardoor het risico op lekkages aanzienlijk wordt verminderd en de structurele integriteit van uw dak onaangetast blijft. Wij bieden unieke montagesystemen die een solide bevestiging verzekeren zonder de noodzaak tot ingrijpende aanpassingen.',
      subTitle2: 'Als onderdeel van onze innovatieve oplossingen maken wij gebruik van PV-ankers, die zowel met als zonder dakpenetratie kunnen worden aangebracht. Deze ankers worden afgewerkt met een speciale manchet die naadloos aansluit bij het materiaal van de dakbedekking, waardoor een uniform en veilig resultaat wordt gegarandeerd.',
      subTitle3: 'Door te kiezen voor onze diensten, kiest u voor een toonaangevende partner in de sector die zich toelegt op het leveren van betrouwbare, kostenefficiënte en op maat gemaakte installatieoplossingen. Ons team van experts staat voor u klaar om deskundig advies te verstrekken en een visueel aantrekkelijke installatie te realiseren die volledig aan uw wensen voldoet. Kies voor vooruitgang, duurzaamheid en kwaliteit met onze PVC- dakinstallaties.',
      subTitle4: '',
      id: 1,
      divId: 'accordion1'
    },
    {
      title: 'Hoe worden pv- ankers gemonteerd en waterdicht ingewerkt?',
      subTitle: 'Het correct waterdicht maken van een PVC manchet voor een PV (fotovoltaïsch) anker op een PVC-dak is een precies proces dat essentieel is voor een waterdichte verbinding rond het bevestigingspunt. Deze ankers spelen een cruciale rol bij de montage van zonnepanelen op zowel platte als hellende daken.',
      subTitle2: 'Hier volgt een gestroomlijnde en vereenvoudigde beschrijving van de montageprocedure van de ankers op uw dak: Voordat we de ankers plaatsen, is het cruciaal dat ze zorgvuldig worden gepositioneerd op het dak, gebaseerd op een gedetailleerd plan voor de zonnepaneelopstelling en ankerpunten. De benodigde hoeveelheid ankers is afhankelijk van factoren zoals de helling van het dak en de windbelasting in de omgeving. Ons team zal deze aspecten zorgvuldig berekenen om de optimale plaatsing en veiligheid te garanderen.',
      subTitle3: 'Na deze voorbereidingen wordt de verankering uitgevoerd met de onderliggende dakstructuur. De methode van verankering varieert afhankelijk van het type dakconstructie, waarbij de bevestiging op een houten dak anders is dan die op een dak van gasbeton. Het waterdicht maken is de laatste en een van de meest kritieke stappen. Dit proces begint met het grondig reinigen van de bestaande PVC-dakbedekking. Het is belangrijk om het PVC te \'activeren\', zodat er een optimale hechting ontstaat tussen de te lassen materialen. Vervolgens wordt het PVC met behulp van een heteluchtpistool gelast om een waterdichte afsluiting te creëren.',
      subTitle4: 'Dit zorgvuldige proces zorgt ervoor dat uw dak niet alleen geschikt is voor de installatie van zonnepanelen, maar ook beschermd blijft tegen lekkages, zodat de binnenkant van uw woning droog en comfortabel blijft.',
      id: 2,
      divId: 'accordion2'
    },
    {
      title: 'Hoe lang gaat de PVC dak mee na plaatsing van zonnepanelen?',
      subTitle: 'De installatie van PV-panelen of zonnepanelen op uw PVC-dak heeft geen invloed op de levensduur van het dak, op voorwaarde dat deze correct worden geïnstalleerd door de installateur.',
      subTitle2: 'Bij een PVC-dak is het essentieel dat er gebruikgemaakt wordt van producten die het weekmakermiddel in het PVC niet aantasten.',
      subTitle3: 'Dit weekmakermiddel zorgt ervoor dat het materiaal elastisch en flexibel blijft, waardoor het niet broos wordt en geen scheuren ontwikkelt.',
      subTitle4: '',
      id: 3,
      divId: 'accordion3'
    },
    {
      title: 'Wat is het rendement van zonnepanelen?',
      subTitle: 'Het rendement van uw zonnepanelen wordt vooral bepaald door de duurzaamheid van de installatie. Een lange levensduur staat u toe om de terugverdientijd te overschrijden en te genieten van een maximaal aantal winstjaren. Wij werken met hoogwaardige en zeer kwalitatieve glas-glas zonnepanelen van onder andere Sonnenstromfabrik, welke een product- en rendementsgarantie bieden van 30 jaar. Deze termijn bestaat, gemiddeld, uit 8 terugverdien-jaren en 22 winstjaren. Voor goedkopere varianten, waaronder meestal glas-folie panelen geldt dat de terugverdientijd een tweetal jaren korter is (gemiddeld 6 jaar); maar de gemiddelde levensduur is minder dan de helft (12 versus 30 jaar). Daarom werken wij alleen met glas-glas panelen: ze laten u veel langer genieten van de rendementsperiode die er echt toe doet.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 4,
      divId: 'accordion4'
    },
    {
      title: 'Waar letten jullie op tijdens een woninginspectie?',
      subTitle: 'Om het reële rendement van uw zonne-installatie te bepalen let onze adviseur op de volgende elementen:',
      subTitle2: '|> Locatie en omgeving. De hoeveelheid licht die uw zonnepanelen vangen hangt in grote mate af van uw locatie en omgeving. Waar vangt uw gebouw het zonlicht? Wat is de oriëntatie van uw dak? Zijn er schaduwplekken of ontnemen bomen of gebouwen uw licht? Zijn er obstakels die de zonne-installatie moet zien te overbruggen? Al deze elementen beïnvloeden de samenstelling van uw zonnesysteem en de opstelling van de zonnepanelen, in het bijzonder de hellingsgraad.     |> Meterkast. Om aan de keuring van een zonne-installatie te voldoen, moet het systeem aan heel wat technische eisen en veiligheidswetten voldoen. De meeste parameters kunnen wij daarbij zelf controleren. De norm schrijft voor dat er bij ingrijpende veranderingen, zoals de plaatsing van een nieuwe zonne-installatie, ook een bijpassende groepenkast moet komen. Wij geven advies wat voor u van toepassing is.    |> Bekabeling. Het is belangrijk dat de bekabeling efficiënt, veilig en netjes wordt aangebracht. De inspecteur bekijkt de beste plek voor de bekabeling en hoe de bekabeling correct kan worden beschermd en verstopt. Ook wordt tijdens de inspectie de benodigde kabellengte inzichtelijk, op basis waarvan we dan weer de juist kabeldikte kunnen bepalen.    |> Omvormer. We beoordelen welke omvormer bij uw situatie past en hoe de plaatsing ervan kan anticiperen op eventuele toekomstplannen. De adviseur bekijkt ook of er een werkschakelaar bij de omvormer moet worden geplaatst, waarbij brandveiligheid en ventilatie cruciaal zijn.    |> Daktype en onderconstructie. Een grondige inspectie van het dak is nodig om een offerte op maat te kunnen maken. We zijn de specialist in het plaatsen van glas-glas zonnepanelen op elk daktype.    |> Veiligheid, toelichting en advies. Tijdens de inspectie krijgen we een goed beeld van wat er moet gebeuren om de zonnepanelen veilig te installeren. Bijvoorbeeld, is het mogelijk om een dakrandbeveiliging te plaatsen? Is dit geen optie, dan dragen de installateurs valbescherming. Een andere inschatting die gemaakt kan worden, is of er een hoogwerker gebruikt kan worden om de zonnepanelen naar het dak te transporteren. Naast het inspecteren van de woning is dit ook een moment waarop u terecht kunt bij onze adviseur met alle vragen die u hebt.',
      subTitle3: '',
      subTitle4: '',
      id: 5,
      divId: 'accordion5'
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