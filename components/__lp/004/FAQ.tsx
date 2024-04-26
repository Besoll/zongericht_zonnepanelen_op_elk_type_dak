'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const FAQBox = dynamic(() => import('@/components/__lp/003/ui/FAQBox'));




export default function FAQ() {
  const [open, setOpen] = useState<number>(1)
  
  const accordionInput = [
    {
      title: 'Kunt u zonnepanelen installeren op zinken daken?',
      subTitle: 'Hoewel het al even meegaat als dakbedekking, is zink een relatief onbekende ondergrond voor zonne- installateurs. Nochtans ziet men deze zogenaamde felsdaken (weer) vaker verschijnen en maakt zink (weer) opgang als vervanger van traditionelere dakpannen of bitumen, ook op zogeheten (schuinere) roevendaken. Een bekend voorbeeld is het (gerenoveerd) roevendak van het Koninklijk Theater Carré in Amsterdam.',
      subTitle2: 'Kunt u zonnepanelen installeren op zinken daken? Het antwoord is ja, maar met de nodige voorzichtigheid. Met name wanneer het op waterdichtheid en magnetisme aankomt, vraagt het zinken dak een eigen, omzichtige aanpak, die de zonne-installateur voor de nodige uitdagingen stelt. In grote lijnen komt het er op neer dat 2 dingen simpelweg niet mogelijk zijn op zinken daken. Om de (water- )dichting van de dakconstructie te vrijwaren kan er (1) niet geboord worden in het zink. Om ongewenst magnetisme te vermijden kan er (2) niet gewerkt worden met optimizers. Hieronder leggen we uit waarom dat zo is en hoe u dan wel best zonnepanelen installeert op een zinken dak.',
      subTitle3: '',
      subTitle4: '',
      id: 1,
      divId: 'accordion1'
    },
    {
      title: 'Wat is Zink?',
      subTitle: 'Om de uitdagingen van de zonne-installateur te begrijpen is een beter inzicht in zink als materiaal handig. Zink (Zn) is namelijk geen standaard fabrikaat, maar een chemisch element (atoomnummer 30). Het is omzeggen een basisstof van de natuur, teruggevonden in zinkhoudende ertsen zoals de zinblende sfaleriet, het carbonaat smithsoniet, het silicaat calamien en frankliniet. In het periodiek systeem van de elementen (de tabel van Mendelejev) verschijnt zink in het zogenaamde d-blok, bij de overgangsmetalen (transitiemetalen). Men spreekt van een blauw/wit overgangsmetaal',
      subTitle2: 'Het d-blok van de tabel verwijst naar de d-subschil, een onderschil van bepaalde atomen. Men gebruikt deze subschillen om de elektronen te tellen in de zogenaamde elektronische grondtoestand (zeg maar het wezen, de basismanier van zijn) van het atoom. Overgangsmetalen onderscheiden zich daarbij door een geheel of gedeeltelijk gevulde d-schil (met 1 tot 9 elektronen). Die van zink is geheel gevuld en is een zogenaamde 3d-schil. (Daarnaast zijn er ook nog 4, 5 en 6d overgangsmetalen.) Kort gezegd is zink dus een geleider. Als non-ferro metaal is het echter niet magnetisch.',
      subTitle3: 'Zink en vooral zinklegeringen worden al eeuwenlang ingezet. De vroegste zinken objecten (tot 87% zink) vond men in het Palestina van 1400 voor Christus. In het westen is het Andreas Sigismund Marggraf die zink ontdekt in calamien door reductie met houtskool. Dat gebeurt pas in 1746, hoewel zinklegeringen (met name messing of koper en zink) dan al ruime tijd gekend zijn. Zink is echter moeilijk op zich te "maken". Het verdampt relatief snel, bij een temperatuur van iets meer dan 900°. Verhit men het met koolstof, dan ontsnapt het langs de uitlaat. Verhit men zinkertsen en koperertsen, dan verdwijnt zinkdamp in het vloeibare koper.',
      subTitle4: 'Overigens zijn zink en andere overgangsmetalen almaar belangrijk in onze hoogtechnologische tijden. Ze zijn bijvoorbeeld in staat om coördinatieverbindingen te vormen of kunnen als katalysator optreden. Ze zijn echter ook vaak schaars en moeilijker te ontginnen.',
      id: 2,
      divId: 'accordion2'
    },
    {
      title: 'Wat is een Felsdak?',
      subTitle: 'Dat is meteen ook een voorname reden waarom zink in de industrie vooral gebruik wordt in legeringen. Zo zal men bepaalde stoffen bijvoorbeeld "verzinken" om ze te beschermen tegen corrosie. Het dient ook zelf vaak als legeringsmateriaal, bijvoorbeeld in messing, zilvernikkel of soldeertin. Of het is een element in batterijsamenstellingen, zoals in zink-nikkel of zink-lucht batterijen.',
      subTitle2: 'Door de sterke weerstand tegen weerelementen en met name corrosie wordt het dus ook vaak gebruik op en rondom daken: in pijpen, goten en dakbedekkingen. Meestal gebruikt men dan titaanzink. Deze daken zijn zogenaamde felsdaken, verwijzend naar de typische banen -- de felsbanen -- van de zinken plaat. Met zo\'n felssysteem kan een zinken dak waterdicht gemaakt worden door de de felsbanen over elkaar te schuiven. De minimale helling is daarbij 3, maar liefst 7 graden. Voor deze daken wordt een zogeheten dubbele staande fels gebruikt. Vanaf 25 graden wordt dat een enkele fels. Die felsen verklaren de snelheid waarmee men het (moderne) felsdak kan leggen. Ze laten toe om de zinkbanen machinaal te prefabriceren. Bovendien zijn zo ook gebogen (concaaf en convex) of getapte banen mogelijk, zoals bij een roevendak. De prefab platen moeten daarbij wel nog steeds ambachtelijk geplaatst worden (manueel felsen). Naast zink kan ook koper, aluminium of staal worden gebruikt.',
      subTitle3: '',
      subTitle4: '',
      id: 3,
      divId: 'accordion3'
    },
    {
      title: 'Wat zijn Felsen en felsklemmen?',
      subTitle: 'Tussen 2 felsen ontstaat een opstaande naad, die verschillende breedtes en hoogtes kan aannemen op een en hetzelfde dak. Naast de aard van het materiaal is deze felsnaad de voornaamste moeilijkheid voor zonne-installaties op een zinken dak. De felsen bepalen immers welke klemmen er gebruikt moeten worden om de zonnepanelen op het dak te houden. Gelet op de dimensionale variaties is dat niet altijd eenvoudig. Wij achterhalen dit dan ook tijdens onze technische schouwing vooraf',
      subTitle2: 'Aangezien boren niet kan, is de keuze van de juiste felsklem cruciaal voor een geslaagde zonne- installatie op het felsdak. Niets anders houdt hier de zonnepanelen vast. Daarvoor schuiven we de klemmen over de felsnaden om ze aan te draaien met de inbusbout in de klem. Vooraf tekenen we hiervoor uit waar de klemmen moeten komen en worden de naden schoongemaakt. Het aantal felsklemmen wordt bepaald door het aantal zonnepanelen. Een rij van 5 zonnepanelen in portret geplaatst behoeft 2 horizontale rails, elk te bevestigen met 5 klemmen. De zonnepanelen worden dus vastgehouden met 10 felsklemmen. Naast boorgaten is het overigens ook zaak om deuken in zink te vermijden. Dit materiaal is hier bovengemiddeld gevoelig voor. Daarom werken we zoveel als mogelijk met nokladders',
      subTitle3: '',
      subTitle4: '',
      id: 4,
      divId: 'accordion4'
    },
    {
      title: 'Hoe worden de Profielen en adapters geplaatst?',
      subTitle: 'Op de felsklemmen kunnen we nu de profielen aanbrengen. Deze worden voorzien van micro- omvormers, waarna we er ook de zonnepanelen opleggen. Hiervoor maken we gebruik van PhotoVoltaïsche (PV) adapters. Zo\'n adapter heeft een halfrond uiteinde. Het vierkante profiel draait daarin en wordt erin vastgeklikt ("ingesloten"). Profielen en adapter worden verbonden met hamerkopbouten.',
      subTitle2: 'Gelet op de aard van zink als transitiemetaal werken we op zinken daken nooit met micro-optimizers, maar enkel met micro-omvormers. Optimizers kunnen een magnetisch veld opwekken onder de panelen en het zinken dak als het ware onder stroom zetten. Bij micro-omvormers bestaat dat risico niet.',
      subTitle3: '',
      subTitle4: '',
      id: 5,
      divId: 'accordion5'
    },
    {
      title: 'Hoe plaatsen we de bekabeling en afdichting?',
      subTitle: 'We plaatsen de micro-omvormers op de profielen, onder de panelen, en verbinden ze met AC kabels. De eindkabel krijgt een einddop en wordt naar een lasdoos gestuurd. Daarin verbinden we deze kabel met die voor de meterkast. We dichten De doos met hars.',
      subTitle2: 'Omdat we niet boren in zinken daken leiden we de AC kabel hier altijd rechtstreeks naar de meterkast. Dit betekent dus dat er geen omvormer in de woning komt. Ook de weg naar de meterkast zoeken we niet op, maar voorbij het dak, via gevel of kruipruimte. Voor een nette en veilige afwerking lopen de kabels in een PVC of rvs kabelgoot.',
      subTitle3: '',
      subTitle4: '',
      id: 6,
      divId: 'accordion6'
    },
    // {
    //   title: '',
    //   subTitle: '',
    //   subTitle2: '',
    //   subTitle3: '',
    //   subTitle4: '',
    //   id: 7,
    //   divId: 'accordion7'
    // },
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