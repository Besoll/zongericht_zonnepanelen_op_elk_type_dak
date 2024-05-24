'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const FAQBox = dynamic(() => import('@/components/__lp/009/ui/FAQBox'));




export default function FAQ() {
  const [open, setOpen] = useState<number>(1)
  
  const accordionInput = [
    {
      title: 'Is een pannendak geschikt voor zonnepanelen?',
      subTitle: 'We zijn expert in het plaatsen van zonnepanelen op elk type dak. Een groot deel van de voorbereiding voor het plaatsen van de zonnepanelen wordt gedaan tijdens de wooninspectie. Bij een pannendak, let de adviseur voornamelijk op de spreiding van het gewicht van de zonnepanelen, en de drukverdeling.',
      subTitle2: 'Deze factoren bepalen in grote mate de opstelling van de zonne-installatie, die wordt uitgetekend in een zogenaamd “legplan”. Mede op basis hiervan maken we een inschatting hoeveel haken er nodig zijn om de zonne-installatie veilig te plaatsen. De haken dienen om de profielen waarop de zonnepanelen liggen, vast te houden.',
      subTitle3: 'Op de profielen plaatsen we vervolgens de micro-omvormers, en daarbovenop komen de zonnepanelen te liggen. Ook de windzone waar uw zonne-installatie zich in bevindt heeft invloed op de spreiding van de haken. Om te voorkomen dat wind de haken hard tegen de dakpannen drukt, maken we bij Zongericht gebruik van verstelbare rubberen blokken, die de dakpannen kunnen ontlasten wanneer nodig.',
      subTitle4: 'Een ander element waar tijdens de wooninspectie goed naar gekeken wordt is het soort, en de grootte van de pannen. Hier zijn grote verschillen in, welke vaak over het hoofd worden gezien met in het ergste geval lekkage tot gevolg. Bij Zongericht nemen we elk detail mee om er voor te zorgen dat de zonnepanelen op de juiste manier worden geïnstalleerd op uw pannendak.',
      id: 1,
      divId: 'accordion1'
    },
    {
      title: 'Kan de plaatsing van zonnepanelen mijn pannendak beschadigen?',
      subTitle: 'De zonnepanelen plaatsen we niet direct op de dakpannen, maar op een profiel dat vastzit met haken. Deze haken worden tussen de pannen gemonteerd, of aan een balk die we aan het dakbeschot vastmaken. Voor het plaatsen van de panelen zelf wordt uw pannendak dus niet aangeraakt. De bekabeling leggen we in de meeste gevallen buitenom, waarbij we een route uitstippelen waarde de kabel niet of nauwelijks zichtbaar is. In sommige gevallen moeten we een doorgang maken om de kabels naar binnen te brengen. Dat doen we door zo dicht mogelijk bij de omvormer 2 ronde gaten te boren. Deze gaten hebben een diameter van 30 mm en laten toe om plus- en minkabel apart in te leiden. Na de installatie dichten we deze gaten met PV buizen, wat uw dak weer volledig luchtdicht en veilig afsluit.',
      subTitle2: 'Door gebruik te maken van micro omvormers onder het zonnepaneel, kunnen we bekabeling direct van het dak naar de meterkast laten lopen. Bij dit systeem heeft elk paneel een eigen omvormer. Deze zijn parallel geschakeld, zo voorkomen we gelijkstroom in uw woning, waarbij meer energie verloren gaat dan bij wisselstroom. Omdat de kabels direct naar de meterkast lopen, komt er dus geen kastje in de woning te hangen.',
      subTitle3: 'In de meterkast installeren we een aparte automaat in combinatie met een communicatiekast, om het systeem op afstand uit te kunnen lezen middels een gebruiksvriendelijke app.',
      subTitle4: '',
      id: 2,
      divId: 'accordion2'
    },
    {
      title: 'Wat is het risico van het gebruik van kit, om de gemaakte gaten in het dak te dichten?',
      subTitle: 'Kit droogt uit na ongeveer 5 jaar. Verwarmde huislucht zal dan onder het dakbeschot terechtkomen en daar condenseren, wanneer het in aanraking komt met de koudere buitenlucht onder de dakpannen. De condens tast uiteindelijk de werking van het dampscherm en de isolatiematerialen aan. In extreme gevallen worden zo schimmels en zelfs houtrot gevormd, met alle gevolgen van dien. Bij Zongericht vinden we daarom het gebruik van kit een onveilige en weinig duurzame oplossing. Wij werken als een van de weinige bedrijven met PV-buizen. Dit systeem sluit niet af met kit maar met moeren, die de binnen- en buitenkant als het ware tegen elkaar persen. Het systeem is daardoor volledig luchtdicht én veilig.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 3,
      divId: 'accordion3'
    },
    {
      title: 'Wat is het rendement van zonnepanelen?',
      subTitle: 'Het rendement van uw zonnepanelen wordt vooral bepaald door de duurzaamheid van de installatie. Een lange levensduur staat u toe om de terugverdientijd te overschrijden en te genieten van een maximaal aantal winstjaren. Wij werken onder andere met glas-glas zonnepanelen van Sonnenstromfabrik, welke een product- en rendementsgarantie bieden van 30 jaar. Deze termijn bestaat, gemiddeld, uit 8 terugverdien-jaren en 22 winstjaren. Voor goedkopere varianten, waaronder meestal glas-folie panelen geldt dat de terugverdientijd een tweetal jaren korter is (gemiddeld 6 jaar); maar de gemiddelde levensduur is minder dan de helft (12 versus 30 jaar). Daarom werken wij alleen met glas-glas panelen: ze laten u veel langer genieten van de rendementsperiode die er echt toe doet',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 4,
      divId: 'accordion4'
    },
    {
      title: 'Wat zijn veiligheidsrisico’s van zonnepanelen?',
      subTitle: 'Een erkend installateur van zonnepanelen weet wat hij doet en is bekend met de veiligheidsrisico\'s. We zullen er tijdens de installatie dan ook voor zorgen dat uw zonnesysteem voldoet aan alle veiligheidsnormen. Denkt u bij risico’s niet alleen aan de zonne-installatie zelf, maar ook de dakconstructie. Wat bent u met goede zonnepanelen op een lekkend dak? Met zonnepanelen die loskomen bij de eerste de beste storm? Met een onaangepaste meterkast? Een Zongericht installateur zorgt ervoor dat deze risico\'s geen realiteit worden.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 5,
      divId: 'accordion5'
    },
    {
      title: 'Hoe zit het met garantie op zonnepanelen?',
      subTitle: 'Wij werken met glas-glas zonnepanelen van onder andere het Duitse topmerk Sonnenstromfabrik. Deze producent is al 30 jaar marktleider en levert effectieve product- en rendementsgaranties van 30 jaar. Na die tijd behalen deze panelen nog steeds een indrukwekkende 85% van het oorspronkelijke rendement. De uiteindelijke levensduur bedraagt minimaal 50 jaar en Sonnenstromfabrik ontvangt amper schadeclaims. Als Premium Partner kunnen wij u deze glas-glas zonnepanelen bovendien standaard aanbieden met een 10-jarige All- Risk verzekering van ERGO.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 6,
      divId: 'accordion8'
    },
    {
      title: 'Geven mijn zonnepanelen ook stroom in de winter?',
      subTitle: 'Zonnepanelen wekken minder energie op in de winter dan in de zomer. In deze periode is de stralingsintensiteit minder sterk, maar niet afwezig. Ook onder dit soort omstandigheden wekt het systeem nog altijd energie op. Bovendien heeft een slim zonnesysteem tijdens de beste maanden over geproduceerd. Met een thuisbatterij of via de salderingsregeling kunt u deze overschotten opsparen voor de mindere maanden. Zo zult u het gehele jaar een constante energieproductie krijgen.',
      subTitle2: 'En dan is er die ene winterperiode waarin er sneeuw valt op uw zonnepaneel: dan zal uw paneel inderdaad geen energie produceren. Het zonlicht kan de zonnecellen immers op geen enkele manier bereiken. Een slimme montage met de juiste hellingshoek zorgt ervoor dat sneeuw en andere bevuilingen sneller op natuurlijk wijze worden afgevoerd.',
      subTitle3: '',
      subTitle4: '',
      id: 7,
      divId: 'accordion8'
    },
    {
      title: 'Waar letten jullie op tijdens een wooninspectie?',
      subTitle: 'Om het reële rendement van uw zonne-installatie te bepalen let onze adviseur op de volgende elementen:',
      subTitle2: 'Locatie en omgeving. De hoeveelheid licht die uw zonnepanelen vangen hangt in grote mate af van uw locatie en omgeving. Waar vangt uw gebouw het zonlicht? Wat is de oriëntatie van uw dak? Zijn er schaduwplekken of ontnemen bomen of gebouwen uw licht? Zijn er obstakels die de zonne-installatie moet zien te overbruggen? Al deze elementen beïnvloeden de samenstelling van uw zonnesysteem en de opstelling van de zonnepanelen, in het bijzonder de hellingsgraad Meterkast. Om aan de keuring van een zonne-installatie te voldoen, moet het systeem aan heel wat technische eisen en veiligheidswetten voldoen. De meeste parameters kunnen wij daarbij zelf controleren. De norm schrijft voor dat er bij ingrijpende veranderingen, zoals de plaatsing van een nieuwe zonne-installatie, ook een bijpassende groepenkast moet komen. Wij geven advies wat voor u van toepassing is.',
      subTitle3: 'Bekabeling. Het is belangrijk dat de bekabeling efficiënt, veilig en netjes wordt aangebracht. De inspecteur bekijkt de beste plek voor de bekabeling en hoe de bekabeling correct kan worden beschermd en verstopt. Ook wordt tijdens de inspectie de benodigde kabellengte inzichtelijk, op basis waarvan we dan weer de juist kabeldikte kunnen bepalen. Omvormer. We beoordelen welke omvormer bij uw situatie past en hoe de plaatsing ervan kan anticiperen op eventuele toekomstplannen. De adviseur bekijkt ook of er een werkschakelaar bij de omvormer moet worden geplaatst, waarbij brandveiligheid en ventilatie cruciaal zijn. Daktype en onderconstructie. Een grondige inspectie van het dak is nodig om een offerte op maat te kunnen maken. We zijn de specialist in het plaatsen van glas-glas zonnepanelen op elk daktype.',
      subTitle4: 'Veiligheid, toelichting en advies. Tijdens de inspectie krijgen we een goed beeld van wat er moet gebeuren om de zonnepanelen veilig te installeren. Bijvoorbeeld, is het mogelijk om een dakrandbeveiliging te plaatsen? Is dit geen optie, dan dragen de installateurs valbescherming. Een andere inschatting die gemaakt kan worden, is of er een hoogwerker gebruikt kan worden om de zonnepanelen naar het dak te transporteren. Naast het inspecteren van de woning is dit ook een moment waarop u terecht kunt bij onze adviseur met alle vragen die u hebt.',
      id: 8,
      divId: 'accordion8'
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