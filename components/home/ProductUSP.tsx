'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const AccordionBox = dynamic(() => import('@/components/ui/AccordionBox'));




export default function ProductUSP() {
  const [open, setOpen] = useState<boolean>(false)
  
  const accordionInput = [
    {
      title: 'Superieure Kwaliteit en Duurzaamheid',
      subTitle: 'Glas op glas zonnepanelen hebben bewezen minder snel te degraderen, wat betekent dat ze langer meegaan en gedurende hun levensduur dichter bij hun oorspronkelijke prestaties blijven.',
      id: 1
    },
    {
      title: 'Veiligheid voorop',
      subTitle: 'Deze panelen bieden een hogere mate van brandveiligheid dan traditionele panelen, waardoor u en uw omgeving beschermd blijven. Hun stevige constructie zorgt ook voor een betere bescherming tegen externe schade.',
      id: 2
    },
    {
      title: 'Esthetisch Plezier',
      subTitle: 'Glas op glas zonnepanelen behouden hun esthetische uitstraling jarenlang, ongeacht de weersinvloeden. Dit betekent dat uw dak er niet alleen goed uitziet wanneer de panelen nieuw zijn, maar ook in de vele jaren die volgen.',
      id: 3
    },
    {
      title: 'Milieubewustzijn',
      subTitle: 'Met een langere levensduur en efficiëntere energieproductie zijn glas op glas zonnepanelen een milieuvriendelijkere keuze. Ze helpen niet alleen om uw CO2-voetafdruk te verminderen, maar door hun duurzaamheid wordt ook het afval van vervangen panelen verminderd.',
      id: 4
    },
    {
      title: 'Hoger Rendement',
      subTitle: 'Door hun constructie en kwaliteit kunnen glas op glas zonnepanelen een hoger rendement bieden, wat leidt tot meer energieproductie en uiteindelijk meer besparingen voor u.',
      id: 5
    },
  ]

  return (
    <div className="flex my-12 w-full justify-center items-center  flex-col space-y-2">
      {accordionInput.map(({ title, subTitle, id })  => (
        <AccordionBox 
          key={id}
          title={title}
          subTitle={subTitle}
          i={id}
          isOpen={open}
          setIsOpen={setOpen}
        />
      ))}
    </div>
  )
}