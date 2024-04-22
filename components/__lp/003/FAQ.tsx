'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const FAQBox = dynamic(() => import('@/components/__lp/003/ui/FAQBox'));




export default function FAQ() {
  const [open, setOpen] = useState<number>(1)
  
  const accordionInput = [
    {
      title: 'Wat is een parabool dak?',
      subTitle: 'Een parabool dak is een spits dak opgebouwd uit 4 parabolen. Meetkundig is zo\'n parabool een bijzondere verzameling van punten. Elk punt in de verzameling staat er namelijk op dezelfde afstand van het brandpunt en de loodrechte richtlijn die je door het brandpunt kunt trekken. Het resultaat lijkt op de doorsnede van een kegel en wiskundigen spreken daarom ook wel van een kegelsnede. Positieve coördinaten vormen een bergparabool, negatieve coördinaten een dalparabool.',
      subTitle2: 'De 4 parabolische vlakken van het parabool dak lopen geleidelijk naar elkaar toe in de dakspits. De bovendelen van de vlakken zijn daarbij minder steil dan de onderste delen. De vlakken komen zo bol te staan waar ze de knak naar de spits toe maken.',
      subTitle3: '',
      subTitle4: '',
      id: 1,
      divId: 'accordion1'
    },
    {
      title: 'Hoe vindt de inspectie plaats van een parabool dak?',
      subTitle: 'De unieke, gebogen vorm van het parabool dak stelt de zonne-installateur voor een fikse uitdaging. Wij vangen die in eerste instantie op door een tweede technische schouwing te verrichten voor aanvang van de werken. De eerste schouwing verloopt daarbij zoals alle andere schouwingen en levert onze offerte met rendementsplan op. De tweede schouwing vindt plaats eens je ons voorstel aanvaard hebt, voor aanvang van de werken.',
      subTitle2: 'Deze tweede schouwing omhelst een nauwkeurige inspectie van de staat van het dak. Onze deskundige inspecteert meer bepaald de daklatten. Dat gebeurt via een steekproef. Door de flauwe hoek waarin de dakpannen liggen, zijn bolknakdaken gevoeliger voor regen- en sneeuwindringing. Zeker de bovenste rijen timmerwerk hebben het niet onder de markt en blijken meestal aangetast door houtrot. In dat geval moeten we de latten vervangen voor we panelen kunnen plaatsen. De nieuwe latten worden geïmpregneerd onder hoge druk, zodat ze minstens enige decennia hun moeilijke situatie kunnen overleven.',
      subTitle3: '',
      subTitle4: '',
      id: 2,
      divId: 'accordion2'
    },
    {
      title: 'Welke haken gebruiken we bij de zonnepanelen montage van parabool daken?',
      subTitle: 'Ook op parabool daken worden de zonnepanelen bevestigd op profielen. Die profielen worden met haken aan het dak vastgemaakt. Welke haken je nodig hebt hangt af van het type pannen. Heb je vlakke pannen, dan gebruiken we schroefhaken, die in het dakbeschot worden geschroefd. Heb je golvende pannen, dan gebruiken we dakhaken, die achter de daklatten worden vastgehaakt.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 3,
      divId: 'accordion3'
    },
    {
      title: 'Waarom een landscape opstelling?',
      subTitle: 'De bolknak van het bolknakdak, waarbij een flauwe helling afloopt naar een steile helling, laat het niet toe om zonnepanelen verticaal, in portretopstelling, te installeren. Ze moeten horizontaal geplaatst worden, in landschapsopstelling. Dat komt omdat de korte zijde van het zonnepaneel (100 cm) de bolknak beter kan volgen dan de lange zijde (170 cm). Nochtans lijnen we de opstelling wel verticaal uit en plaatsen we de profielen verticaal op de haken.',
      subTitle2: '',
      subTitle3: '',
      subTitle4: '',
      id: 4,
      divId: 'accordion4'
    },
    // {
    //   title: '',
    //   subTitle: '',
    //   subTitle2: '',
    //   subTitle3: '',
    //   subTitle4: '',
    //   id: 5,
    //   divId: 'accordion5'
    // },
    // {
    //   title: '',
    //   subTitle: '',
    //   subTitle2: '',
    //   subTitle3: '',
    //   subTitle4: '',
    //   id: 6,
    //   divId: 'accordion6'
    // },
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