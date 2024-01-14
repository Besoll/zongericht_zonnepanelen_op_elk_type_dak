import React from 'react'

const TimelineSchouwing = () => {
  return (
    <div className='text-black flex flex-col gap-8'>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">Stap 1</time>
                <div className="text-lg font-black">Vraag een schouwing aan</div>
                Vrijblijvend formulier invullen, nadat u van ons een telefoontje heeft ontvangen voor het maken van een afspraak voor de inspectie. Ons uiterst professionele personeel zal de hele procedure uitleggen, al uw vragen beantwoorden en een geschikt tijdstip voor de inspectie afspreken om te zien wat er mogelijk is om op uw dak te installeren.
                </div>
                <hr/>
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10">
                <time className="font-mono italic">Stap 2</time>
                <div className="text-lg font-black">Schouwing</div>
                Op basis van de schouwing stellen we een gedetailleerde offerte op, aangepast aan uw situatie.
                Bij inspectie controleren en verifiëren wij de huidige elektrische situatie in uw huis, kabels, elektriciteitskast, om uw dak te controleren, de meest effectieve plaatsen op uw dak, bespreken we hoeveel zonnepanelen er kunnen worden geïnstalleerd en welk vermogen u wilt leveren. ontvangen.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic">Stap 3</time>
                    <div className="text-lg font-black">Opmaak Offerte</div>
                        Op basis van de schouwing stellen we een gedetailleerde offerte op, aangepast aan uw situatie.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10">
                <time className="font-mono italic">Stap 4</time>
                <div className="text-lg font-black">Bij Opdracht</div>
                U krijgt een projectleider toegewezen die de voorbereidingen treft tot na de installatie.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">Stap 5</time>
                <div className="text-lg font-black">Installatie</div>
                Onze ervaren monteurs installeren de zonnepanelen volgens de afgesproken specificaties.
                </div>
            </li>
        </ul>



        <div className="indicator">
            <span className="indicator-item indicator-start badge badge-secondary"></span>
            <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </div>
        <div className="indicator">
            <span className="indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge badge-secondary"></span> 
            <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </div>
        <div className="indicator">
            <span className="indicator-item indicator-top indicator-start badge badge-secondary">top+start</span>
            <span className="indicator-item indicator-top indicator-center badge badge-secondary">top+center</span>
            <span className="indicator-item indicator-top indicator-end badge badge-secondary">top+end</span>
            <span className="indicator-item indicator-middle indicator-start badge badge-secondary">middle+start</span>
            <span className="indicator-item indicator-middle indicator-center badge badge-secondary">middle+center</span>
            <span className="indicator-item indicator-middle indicator-end badge badge-secondary">middle+end</span>
            <span className="indicator-item indicator-bottom indicator-start badge badge-secondary">bottom+start</span>
            <span className="indicator-item indicator-bottom indicator-center badge badge-secondary">bottom+center</span>
            <span className="indicator-item indicator-bottom indicator-end badge badge-secondary">bottom+end</span>
            <div className="grid w-60 h-32 bg-base-300 place-items-center">content</div>
        </div>
        
    </div>

  )
}

export default TimelineSchouwing






