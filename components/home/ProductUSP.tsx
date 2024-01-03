import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ProductUSP = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>Superieure Kwaliteit en Duurzaamheid</AccordionTrigger>
        <AccordionContent>
          Glas op glas zonnepanelen hebben bewezen minder snel te degraderen, wat betekent dat ze langer meegaan en gedurende hun levensduur dichter bij hun oorspronkelijke prestaties blijven.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Veiligheid voorop</AccordionTrigger>
        <AccordionContent>
          Deze panelen bieden een hogere mate van brandveiligheid dan traditionele panelen, waardoor u en uw omgeving beschermd blijven. Hun stevige constructie zorgt ook voor een betere bescherming tegen externe schade.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Esthetisch Plezier</AccordionTrigger>
        <AccordionContent>
          Glas op glas zonnepanelen behouden hun esthetische uitstraling jarenlang, ongeacht de weersinvloeden. Dit betekent dat uw dak er niet alleen goed uitziet wanneer de panelen nieuw zijn, maar ook in de vele jaren die volgen.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Milieubewustzijn</AccordionTrigger>
        <AccordionContent>
          Met een langere levensduur en efficiëntere energieproductie zijn glas op glas zonnepanelen een milieuvriendelijkere keuze. Ze helpen niet alleen om uw CO2-voetafdruk te verminderen, maar door hun duurzaamheid wordt ook het afval van vervangen panelen verminderd.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Hoger Rendement</AccordionTrigger>
        <AccordionContent>
          Door hun constructie en kwaliteit kunnen glas op glas zonnepanelen een hoger rendement bieden, wat leidt tot meer energieproductie en uiteindelijk meer besparingen voor u.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

  )
}

export default ProductUSP