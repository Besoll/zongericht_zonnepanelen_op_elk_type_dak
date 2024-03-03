import Image from "next/image"
const Section2 = () => {
  return (
    <div className='flex flex-col gap-4 max-w-[1200px]'>
        {/* Top section */}
        <div className='flex justify-between flex-col md:flex-row gap-4 w-full px-4 md:px-2'>
            {/* card 1 */}
            <div className='flex flex-col gap-2 text-center md:text-left w-full md:w-[33%] border-b-2 mb-4 justify-center items-center'>
                <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] gradient_white_orange shadow-lg rounded flex justify-center items-center">
                   <Image 
                    src='/icons/overOns/adviser.svg'
                    alt='over ons - Adviseurs'
                    width={480}
                    height={480}
                    className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] md:hover:rotate-1 md:hover:skew-3 
                    md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
                   />    
                </div>
                
                <h4 className='heading4 text-gradient_green'>
                    Adviseurs
                </h4>
                <p className="mb-4">
                    Wij komen altijd vrijblijvend langs voor een technische inspectie aan huis en brengen ter plekke met uw aan tafel een offerte op maat inclusief het rendement plan en legplan.
                </p>
            </div>
            {/* card 2 */}
            <div className='flex flex-col gap-2 text-center md:text-left w-full md:w-[33%] border-b-2 mb-4 justify-center items-center'>
                <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] gradient_white_orange shadow-lg rounded flex justify-center items-center">
                    <Image 
                        src='/icons/overOns/zonnepanelenInstalation.svg'
                        alt='over ons - Adviseurs'
                        width={480}
                        height={480}
                        className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] md:hover:rotate-1 md:hover:skew-3 
                        md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
                    />
                </div>   
                <h4 className='heading4 text-gradient_green'>
                    Zonnepanelen installatie
                </h4>
                <p className="mb-4">
                    Na goedkeuring offerte leveren wij altijd gegarandeerd binnen 4 weken de zonnepanelen installatie werken op, de installatie duurt tussen 1 a 2 dagen aan de hand van de complexiteit van het project.
                </p>
            </div>
            {/* card 3 */}
            <div className='flex flex-col gap-2 text-center md:text-left w-full md:w-[33%] border-b-2 mb-4 justify-center items-center'>
                <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] gradient_white_orange shadow-lg rounded flex justify-center items-center">
                    <Image 
                        src='/icons/overOns/betalingAchteraf.svg'
                        alt='over ons - Adviseurs'
                        width={480}
                        height={480}
                        className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] md:hover:rotate-1 md:hover:skew-3 
                        md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
                    />
                </div>   
                <h4 className='heading4 text-gradient_green'>
                    Betaling achteraf
                </h4>
                <p className="mb-4">
                    Uw betaald pas achteraf op basis van een factuur en pas nadat de zonnepanelen installatie werkend is opgeleverd.
                </p>
            </div>
        </div>
        {/* Below section */}
        <div className='flex justify-between flex-col md:flex-row gap-4 w-full px-4 md:px-2'>
            {/* card 4 */}
            <div className='flex flex-col gap-2 text-center md:text-left w-full md:w-[33%] border-b-2 mb-4 justify-center items-center'>
                <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] gradient_white_orange shadow-lg rounded flex justify-center items-center">
                   <Image 
                    src='/icons/overOns/storing.svg'
                    alt='over ons - Storing'
                    width={480}
                    height={480}
                    className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] md:hover:rotate-1 md:hover:skew-3 
                    md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
                   />    
                </div>
                
                <h4 className='heading4 text-gradient_green'>
                    Storing
                </h4>
                <p className="mb-4">
                    Mocht uw storing of een defect hebben komen wij altijd kosteloos bij u langs als service zodat uw ook nadat de zonnepanelen opgeleverd zijn uw energie kunt blijven opwekken.
                </p>
            </div>
            {/* card 5 */}
            <div className='flex flex-col gap-2 text-center md:text-left w-full md:w-[33%] border-b-2 mb-4 justify-center items-center'>
                <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] gradient_white_orange shadow-lg rounded flex justify-center items-center">
                    <Image 
                        src='/icons/overOns/support.svg'
                        alt='over ons - Support'
                        width={480}
                        height={480}
                        className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] md:hover:rotate-1 md:hover:skew-3 
                        md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
                    />
                </div>   
                <h4 className='heading4 text-gradient_green'>
                    Support
                </h4>
                <p className="mb-4">
                    U kunt ons altijd bereiken per email op telefoon, wij vinden het belangrijk om zo goed mogelijk bereikbaar te zijn zonnepanelen installateur.
                </p>
            </div>
            {/* card 6 */}
            <div className='flex flex-col gap-2 text-center md:text-left w-full md:w-[33%] border-b-2 mb-4 justify-center items-center'>
                <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] gradient_white_orange shadow-lg rounded flex justify-center items-center">
                    <Image 
                        src='/icons/overOns/saving.svg'
                        alt='over ons - Rendement'
                        width={480}
                        height={480}
                        className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] md:hover:rotate-1 md:hover:skew-3 
                        md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
                    />
                </div>   
                <h4 className='heading4 text-gradient_green'>
                    Rendement
                </h4>
                <p className="mb-4">
                    Als een van de weinige zonnepanelen installateurs komen wij altijd aan huis voor een inspectie en offerte op maat voor het kunnen behalen van meer rendement, het is mogelijk om betere rendement te behalen bij een offerte op maat dan op een offerte op afstand.
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default Section2