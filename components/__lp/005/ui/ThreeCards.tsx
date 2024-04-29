import dynamic from 'next/dynamic'
const Icon_2_freeInspection = dynamic(() => import('@/components/__lp/004/icons/icons-steps/Icon_2_freeInspection'))
const Icon1satisfiedHomeowners = dynamic(() => import('@/components/__lp/004/icons/Icon1satisfiedHomeowners'))
const Payment = dynamic(() => import('@/components/__lp/004/icons/icons-steps/Payment'))
const IconGuarantee = dynamic(() => import('@/components/__lp/004/icons/IconGuarantee'))

const ThreeCards = () => {
  return (
    <div className='w-full h-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8'>
      <div className='w-full min-w-[280px] h-auto min-h-[400px] flex flex-col justify-start items-start gap-4 md:gap-6 bg-white shadow-lg rounded-3xl px-4 py-4
        md:hover:scale-105 md:transition md:duration-300 md:ease-in-out 
        md:cursor-pointer md:hover:rotate-2'>
          <div className='w-full h-auto flex flex-row justify-between items-center px-4'>
           <Icon_2_freeInspection />
           <IconGuarantee />
          </div>
          <p className='text-2xl text-left'>
            Ontvang een kosteloze huisinspectie
          </p>
          <p className='text-base text-left'>
            Wij stellen u in de gelegenheid om gebruik te maken van een kosteloze en geheel vrijblijvende huisinspectie. Een van onze deskundige adviseurs zal bij u thuis komen voor een persoonlijk bezoek, waarbij ruim de tijd wordt genomen om al uw vragen te beantwoorden. Na een grondige inspectie wordt er speciaal voor u een op maat gemaakte offerte opgesteld.
          </p>
      </div>

      <div className='w-full min-w-[280px] h-auto min-h-[400px] flex flex-col justify-start items-start gap-4 md:gap-6 bg-white shadow-lg rounded-3xl px-4 py-4
        md:hover:scale-105 md:transition md:duration-300 md:ease-in-out 
        md:cursor-pointer md:hover:rotate-2'>
          <div className='w-full h-auto flex flex-row justify-between items-center px-4'>
           <Icon1satisfiedHomeowners />
           <IconGuarantee />
          </div>
          <p className='text-2xl text-left'>
            Installatieproces
          </p>
          <p className='text-base text-left'>
            Indien u instemt met de persoonlijk samengestelde offerte, zal onze planningsteam contact met u opnemen voor het inplannen van een installatieafspraak. Wij garanderen een installatie binnen vier weken na uw bevestiging. De installatiewerkzaamheden zijn doorgaans binnen één dag voltooid.
          </p>
      </div>

      <div className='w-full min-w-[280px] h-auto min-h-[400px] flex flex-col justify-start items-start gap-4 md:gap-6 bg-white shadow-lg rounded-3xl px-4 py-4
        md:hover:scale-105 md:transition md:duration-300 md:ease-in-out 
        md:cursor-pointer md:hover:rotate-2'>
          <div className='w-full h-auto flex flex-row justify-between items-center px-4'>
           <Payment />
           <IconGuarantee />
          </div>
          <p className='text-2xl text-left'>
            Betalingsopties
          </p>
          <p className='text-base text-left'>
            Na een succesvolle installatie en het operationeel maken van de zonnepanelen op uw dak, versturen wij u een factuur voor de betaling. U wordt niet gevraagd om ter plekke te betalen; de betaling kan eenvoudig verricht worden na afronding van de installatie.
          </p>
      </div>
      

    </div>
  )
}

export default ThreeCards