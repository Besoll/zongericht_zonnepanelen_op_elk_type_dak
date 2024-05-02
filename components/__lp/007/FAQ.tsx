'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const FAQBox = dynamic(() => import('@/components/__lp/007/ui/FAQBox'));




export default function FAQ() {
  const [open, setOpen] = useState<number>(1)
  
  const accordionInput = [
    {
      title: 'Is een stalen dak geschikt voor zonnepanelen?',
      subTitle: 'Onze installateurs zijn gespecialiseerd in het plaatsen van zonnepanelen op elk daktype, dus ook op een stalen dak. Belangrijk bij een stalen dak, is dat er voor de juiste montagewijze wordt gekozen. Een stalen dak is gevoeliger dan andere daken voor lekkages. Hier komt onze ervaring en expertise goed van pas: tijdens de wooninspectie kan een adviseur de juiste wijze van monteren in kaart brengen.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 1,
      divId: 'accordion1'
    },
    {
      title: 'Kan de plaatsing van zonnepanelen mijn stalen dak beschadigen?',
      subTitle: 'Op een stalen dak kunnen zonnepanelen op verschillende manieren geplaatst worden. Tijdens de wooninspectie bekijkt onze adviseur welke methode op uw dak van toepassing kan zijn. Om een voorbeeld te geven, een van de methodes die wij veel toepassen is het plaatsen van zonnepanelen met behulp van aluminium strips. Deze zijn speciaal ontworpen voor het plaatsen van portret- of landschap opstellingen op hellende daken. Om de strips te bevestigen op de stalen plaat gebruiken we smelt schroeven. Zo\'n schroef is voorzien van een waterdichte afsluiting, die we combineren met een EPDM-afdichting. Deze combinatie laat toe om panelen waterdicht en weerbestendig te monteren op de stalen plaat, die eerder gevoelig is voor lekken. Voor minimale impact op uw stalen dak, leiden we de stroom niet eerst naar een omvormer, maar rechtstreeks naar de meterkast. Zo hoeven we geen extra boorgaten maken in het staal om deze kabels in te leiden.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 2,
      divId: 'accordion2'
    },
    {
      title: 'Wat is het rendement van zonnepanelen?',
      subTitle: 'Het rendement van uw zonnepanelen wordt vooral bepaald door de duurzaamheid van de installatie. Een lange levensduur staat u toe om de terugverdientijd te overschrijden en te genieten van een maximaal aantal winstjaren. Wij werken met hoogwaardige en zeer kwalitatieve glas-glas zonnepanelen van onder andere Sonnenstromfabrik, welke een product- en rendementsgarantie bieden van 30 jaar. Deze termijn bestaat, gemiddeld, uit 8 terugverdien-jaren en 22 winstjaren. Voor goedkopere varianten, waaronder meestal glas-folie panelen geldt dat de terugverdientijd een tweetal jaren korter is (gemiddeld 6 jaar); maar de gemiddelde levensduur is minder dan de helft (12 versus 30 jaar). Daarom werken wij alleen met glas-glas panelen: ze laten u veel langer genieten van de rendementsperiode die er echt toe doet.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 3,
      divId: 'accordion3'
    },
    {
      title: 'Wat zijn veiligheidsrisico’s van zonnepanelen?',
      subTitle: 'Een erkend installateur van zonnepanelen weet wat hij doet en is bekend met de veiligheidsrisico\'s. We zullen er tijdens de installatie dan ook voor zorgen dat uw zonnesysteem voldoet aan alle veiligheidsnormen. Denkt u bij risico’s niet alleen aan de zonne-installatie zelf, maar ook de dakconstructie. Wat bent u met goede zonnepanelen op een lekkend dak? Met zonnepanelen die loskomen bij de eerste de beste storm? Met een onaangepaste meterkast? Een Zongericht installateur zorgt ervoor dat deze risico\'s geen realiteit worden.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 4,
      divId: 'accordion4'
    },
    {
      title: 'Hoe zit het met garantie op zonnepanelen?',
      subTitle: 'Zongericht werkt alleen met de hoogwaardige glas-glas zonnepanelen van de beste leveranciers. Voorwaardelijk is dat onze leveranciers een product- en rendement garantie bieden van minimaal 30 jaar en voldoen aan de Europese garantiewaarden. Een van onze leveranciers is het Duitse topmerk Sonnenstromfabrik. Deze producent is al 30 jaar marktleider en levert effectieve product- en rendementsgaranties van 30 jaar. Na die tijd behalen deze panelen nog steeds een indrukwekkende 85% van het oorspronkelijke rendement. De uiteindelijke levensduur bedraagt minimaal 50 jaar en Sonnenstromfabrik ontvangt amper schadeclaims. Als Premium Partner kunnen wij u deze glas-glas zonnepanelen bovendien standaard aanbieden met een 10-jarige All- Risk verzekering van ERGO.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 5,
      divId: 'accordion5'
    },
    {
      title: 'Geven mijn zonnepanelen ook stroom in de winter?',
      subTitle: 'Zonnepanelen wekken minder energie op in de winter dan in de zomer. In deze periode is de stralingsintensiteit minder sterk, maar niet afwezig. Ook onder dit soort omstandigheden wekt het systeem nog altijd energie op. Bovendien heeft een slim zonnesysteem tijdens de beste maanden over geproduceerd. Met een thuisbatterij of via de salderingsregeling kunt u deze overschotten opsparen voor de mindere maanden. Zo zult u het gehele jaar een constante energieproductie krijgen. <br><br>En dan is er die ene winterperiode waarin er sneeuw valt op uw zonnepaneel: dan zal uw paneel inderdaad geen energie produceren. Het zonlicht kan de zonnecellen immers op geen enkele manier bereiken. Een slimme montage met de juiste hellingshoek zorgt ervoor dat sneeuw en andere bevuilingen sneller op natuurlijk wijze worden afgevoerd.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 6,
      divId: 'accordion6'
    },
    {
      title: 'Waar letten jullie op tijdens een wooninspectie?',
      subTitle: 'Om het reële rendement van uw zonne-installatie te bepalen let onze adviseur op de volgende elementen:',
      subTitle2: 'Locatie en omgeving. De hoeveelheid licht die uw zonnepanelen vangen hangt in grote mate af van uw locatie en omgeving. Waar vangt uw gebouw het zonlicht? Wat is de oriëntatie van uw dak? Zijn er schaduwplekken of ontnemen bomen of gebouwen uw licht? Zijn er obstakels die de zonne-installatie moet zien te overbruggen? Al deze elementen beïnvloeden de samenstelling van uw zonnesysteem en de opstelling van de zonnepanelen, in het bijzonder de hellingsgraad.',
      subTitle3: 'Meterkast. Om aan de keuring van een zonne-installatie te voldoen, moet het systeem aan heel wat technische eisen en veiligheidswetten voldoen. De meeste parameters kunnen wij daarbij zelf controleren. De norm schrijft voor dat er bij ingrijpende veranderingen, zoals de plaatsing van een nieuwe zonne-installatie, ook een bijpassende groepenkast moet komen. Wij geven advies wat voor u van toepassing is.',
      subTitle4: 'Bekabeling. Het is belangrijk dat de bekabeling efficiënt, veilig en netjes wordt aangebracht. De inspecteur bekijkt de beste plek voor de bekabeling en hoe de bekabeling correct kan worden beschermd en verstopt. Ook wordt tijdens de inspectie de benodigde kabellengte inzichtelijk, op basis waarvan we dan weer de juist kabeldikte kunnen bepalen. Omvormer. We beoordelen welke omvormer bij uw situatie past en hoe de plaatsing ervan kan anticiperen op eventuele toekomstplannen. De adviseur bekijkt ook of er een werkschakelaar bij de omvormer moet worden geplaatst, waarbij brandveiligheid en ventilatie cruciaal zijn.  Daktype en onderconstructie. Een grondige inspectie van het dak is nodig om een offerte op maat te kunnen maken. We zijn de specialist in het plaatsen van glas-glas zonnepanelen op elk daktype.  Veiligheid, toelichting en advies. Tijdens de inspectie krijgen we een goed beeld van wat er moet gebeuren om de zonnepanelen veilig te installeren. Bijvoorbeeld, is het mogelijk om een dakrandbeveiliging te plaatsen? Is dit geen optie, dan dragen de installateurs valbescherming. Een andere inschatting die gemaakt kan worden, is of er een hoogwerker gebruikt kan worden om de zonnepanelen naar het dak te transporteren. Naast het inspecteren van de woning is dit ook een moment waarop u terecht kunt bij onze adviseur met alle vragen die u hebt.',
      id: 7,
      divId: 'accordion7'
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