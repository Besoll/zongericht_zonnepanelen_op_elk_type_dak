'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const FAQBox = dynamic(() => import('@/components/__lp/008-V1/ui/FAQBox'));




export default function FAQ() {
  const [open, setOpen] = useState<number>(1)
  
  const accordionInput = [
    {
      title: 'Hoe wordt een dakhaak op een leistenen dak gemonteerd?',
      subTitle: 'Eens we de juiste haken te pakken hebben, kunnen we ze monteren. Hiervoor tekenen we ze eerst uit waar ze moeten komen. We duiden de plekken aan met krijt. Leihaken schroeven we in het dakbeschot, hetgeen betekent dat er gaten in de bezetting komen. Het afdichten van deze gaten is bijzonder bij leistenen omdat wij hiervoor lood gebruiken, meer bepaald met olie geïmpregneerd lood. Die impregnering is nodig opdat het lood geen vlekken maakt als het beregend wordt.',
      subTitle2: 'Het lood snijden we op maat van de gaten. Zo\'n gat is meestal een 5-tal pannen groot en wordt bedekt met een stuk lood van 25 x 30 centimeter. We plaatsen het lood op het houtwerk en de leihaak op het lood. Zo\'n haak heeft verzonken gaten, waardoor we schroeven in het beschot kunnen draaien. De onderkant wordt ook verlijmd met Tixolphalte. Tixolphalte heeft een enorme kleefkracht en is tegelijk permanent flexibel. Je kunt het zien als een uiterst krachtige kit met een bitumineuze werking. Bovenop de gemonteerde haak leggen we vervolgens nog een laag lood om de constructie waterdicht te maken. Op dit lood leggen we de pannen terug, voorzien van uitsnijdingen waarin de uiteinden van de haken passen. Loden afdichtingen zie je tegenwoordig niet meer zo vaak. Meestal gebruikt men op het leien dak plastic afdichtingen. Plastic gaat echter slechts 10 jaar mee. Het biedt geen lange garantie in afdichtingen van onderconstructies voor zonnepanelen. Lood gaat daarentegen minstens 60 jaar mee.',
      subTitle3: '',
      subTitle4: '',
      id: 1,
      divId: 'accordion1'
    },
    {
      title: 'Wat is een kruis verbindende onderconstructie?',
      subTitle: 'Om de lage drukbelasting van leistenen te counteren gebruiken we een aangepaste onderconstructie voor de zonnepanelen. Slechts een handvol Nederlandse bedrijven gebruikt deze constructie met enige regelmaat, ook zonder dat het om installaties op leistenen daken gaat. Kort gezegd is het een kruisverbinding van rails. We leggen eerst een horizontale reeks rails en plaatsen daar een verticale reeks bovenop. Zo wordt het gewicht van de installatie beter verdeeld: de druk wordt gespreid.',
      subTitle2: 'De kruisverbinding is meteen ook de stevigste onderconstructie voor zonnepanelen die er is. In landen waar men, meer dan in Nederland, te maken krijgt met extra drukbelasting op daken is het daarom vaak de standaard onderconstructie. Duitsland is een goed voorbeeld.',
      subTitle3: '',
      subTitle4: '',
      id: 2,
      divId: 'accordion2'
    },
    {
      title: 'Hoe zit het met garantie op zonnepanelen?',
      subTitle: 'Zongericht werkt alleen met de hoogwaardige glas-glas zonnepanelen van de beste leveranciers. Voorwaardelijk is dat onze leveranciers een product- en rendement garantie bieden van minimaal 30 jaar en voldoen aan de Europese garantiewaarden. Een van onze leveranciers is het Duitse topmerk Sonnenstromfabrik. Deze producent is al 30 jaar marktleider en levert effectieve product- en rendementsgaranties van 30 jaar. Na die tijd behalen deze panelen nog steeds een indrukwekkende 85% van het oorspronkelijke rendement. De uiteindelijke levensduur bedraagt minimaal 50 jaar en Sonnenstromfabrik ontvangt amper schadeclaims. Als Premium Partner kunnen wij u deze glas-glas zonnepanelen bovendien standaard aanbieden met een 10-jarige All-Risk verzekering van ERGO.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 3,
      divId: 'accordion3'
    },
    {
      title: 'Waar letten jullie op tijdens een woninginspectie?',
      subTitle: 'Om het reële rendement van uw zonne-installatie te bepalen let onze adviseur onder andere op de volgende elementen:',
      subTitle2: 'Locatie en omgeving. De hoeveelheid licht die uw zonnepanelen vangen hangt in grote mate af van uw locatie en omgeving. Waar vangt uw gebouw het zonlicht? Wat is de oriëntatie van uw dak? Zijn er schaduwplekken of ontnemen bomen of gebouwen uw licht? Zijn er obstakels die de zonne- installatie moet zien te overbruggen? Al deze elementen beïnvloeden de samenstelling van uw zonnesysteem en de opstelling van de zonnepanelen, in het bijzonder de hellingsgraad.',
      subTitle3: 'Meterkast. Om aan de keuring van een zonne-installatie te voldoen, moet het systeem aan heel wat technische eisen en veiligheidswetten voldoen. De meeste parameters kunnen wij daarbij zelf controleren. De norm schrijft voor dat er bij ingrijpende veranderingen, zoals de plaatsing van een nieuwe zonne-installatie, ook een bijpassende groepenkast moet komen. Wij geven advies wat voor u van toepassing is.',
      subTitle4: 'Bekabeling. Het is belangrijk dat de bekabeling efficiënt, veilig en netjes wordt aangebracht. De inspecteur bekijkt de beste plek voor de bekabeling en hoe de bekabeling correct kan worden beschermd en verstopt. Ook wordt tijdens de inspectie de benodigde kabellengte inzichtelijk, op basis waarvan we dan weer de juist kabeldikte kunnen bepalen. Omvormer. We beoordelen welke omvormer bij uw situatie past en hoe de plaatsing ervan kan anticiperen op eventuele toekomstplannen. De adviseur bekijkt ook of er een werkschakelaar bij de omvormer moet worden geplaatst, waarbij brandveiligheid en ventilatie cruciaal zijn. Daktype en onderconstructie. Een grondige inspectie van het dak is nodig om een offerte op maat te kunnen maken. We zijn de specialist in het plaatsen van glas-glas zonnepanelen op elk daktype. Hier wordt gekeken wat ervoor nodig is om de zonnepanelen op een goede wijze op uw dak te kunnen monteren. Veiligheid, toelichting en advies. Tijdens de inspectie krijgen we een goed beeld van wat er moet gebeuren om de zonnepanelen veilig te installeren. Bijvoorbeeld, is het mogelijk om een dakrandbeveiliging te plaatsen? Is dit geen optie, dan dragen de installateurs valbescherming. Een andere inschatting die gemaakt kan worden, is of er een hoogwerker gebruikt kan worden om de zonnepanelen naar het dak te transporteren. Naast het inspecteren van de woning is dit ook een moment waarop u terecht kunt bij onze adviseur met alle vragen die u hebt',
      id: 4,
      divId: 'accordion4'
    },
    {
      title: 'Geven mijn zonnepanelen ook stroom in de winter?',
      subTitle: 'Zonnepanelen wekken minder energie op in de winter dan in de zomer. In deze periode is de stralingsintensiteit minder sterk, maar niet afwezig. Ook onder dit soort omstandigheden wekt het systeem nog altijd energie op. Bovendien heeft een slim zonnesysteem tijdens de beste maanden over geproduceerd. Met een thuisbatterij of via de salderingsregeling kunt u deze overschotten opsparen voor de mindere maanden. Zo zult u het gehele jaar een constante energieproductie krijgen. <br><br>En dan is er die ene winterperiode waarin er sneeuw valt op uw zonnepaneel: dan zal uw paneel inderdaad geen energie produceren. Het zonlicht kan de zonnecellen immers op geen enkele manier bereiken. Een slimme montage met de juiste hellingshoek zorgt ervoor dat sneeuw en andere bevuilingen sneller op natuurlijk wijze worden afgevoerd.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 5,
      divId: 'accordion5'
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