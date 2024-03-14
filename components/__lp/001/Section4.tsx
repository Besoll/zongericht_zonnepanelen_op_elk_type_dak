import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton6 = dynamic(() => import('@/components/__lp/001/ctaButtons/CtaButton4'))




const Section4 = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row w-full justify-center items-center max-w-[1440px] 
    px-4 md:px-8 my-16 py-12  md:py-16 gap-12'>        
        <div className='flex flex-col w-full justify-center items-center md:justify-start md:items-start text-center md:text-left gap-6'>
            <h2 className='heading3 md:heading2 font-semibold '>
                Zongericht: De leverancier van kwaliteit zonnepanelen
            </h2>
            <p className='text-base'>
                Bij Zongericht streven we voortdurend naar het leveren van kwaliteitsinstallaties die niet alleen duurzaam zijn, maar ook optimaal presteren op de lange termijn. We begrijpen dat de basis van elke hoogwaardige zonne-energieoplossing ligt in het gebruik van superieure producten. Daarom kiezen we bewust voor glas-op-glas zonnepanelen boven de traditionele glas-folie panelen. Deze keuze is fundamenteel voor onze belofte aan u: het leveren van de best mogelijke waarde en prestatie. 
                <br></br><br></br>
                Onze glas-op-glas zonnepanelen zijn samengesteld uit twee lagen hoogwaardig glas met daartussen de zonnecellen. Deze constructie biedt een aantal significante voordelen ten opzichte van de traditionele glas-folie panelen, waarbij de zonnecellen tussen een glasplaat en een achterkant van folie worden geplaatst.
            </p>
            <div className='flex flex-col gap-2 px-2 justify-start items-start'>
                <p className='font-semibold'>
                    Onze glas-op-glas zonnepanelen bieden meerdere voordelen:
                </p>
                <div className='flex flex-row justify-start items-start gap-2'>
                    <p>
                        1.
                    </p>
                    <p className='text-left'>
                        Glas-glas zonnepanelen bieden superieure duurzaamheid met minstens 30 jaar garantie, verhogen het rendement, en verzekeren een kortere terugverdientijd en langere winstgevendheid dan glas-folie panelen;
                    </p>
                </div>
                <div className='flex flex-row justify-start items-start gap-2'>
                    <p>
                        1.
                    </p>
                    <p className='text-left'>
                        Glas-glas zonnepanelen bieden superieure duurzaamheid met minstens 30 jaar garantie, verhogen het rendement, en verzekeren een kortere terugverdientijd en langere winstgevendheid dan glas-folie panelen;
                    </p>
                </div>
                <div className='flex flex-row justify-start items-start gap-2'>
                    <p>
                        3.
                    </p>
                    <p className='text-left'>
                        Zijn beter bestand tegen microcracks en vochtproblemen door hun robuuste structuur en gelijkmatige temperatuurrespons;
                    </p>
                </div>
                <div className='flex flex-row justify-start items-start gap-2'>
                    <p>
                        4.
                    </p>
                    <p className='text-left'>
                        Vochtproblemen, vaak een oorzaak van defecten in zonnepanelen, zijn bij glas-glas panelen vrijwel uitgesloten. Hun homogene reactie op temperatuurs chommelingen houdt de verlijming intact, in tegenstelling tot de verschillende reacties van glas en folie in glas-folie panelen;
                    </p>
                </div>
                <div className='flex flex-row justify-start items-start gap-2'>
                    <p>
                        5.
                    </p>
                    <p className='text-left'>
                        Europese garantievoorwaarden die werkelijk claim-baar zijn.
                    </p>
                </div>

            </div>                
            <CtaButton6 />
        </div>
        <div className='flex flex-col justify-center items-center w-[75%] md:min-w-[300px] 
            lg:min-w-[450px]'>
            <div className='flex w-full h-auto '>
                <Image 
                    src='/lp/001/5-big.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={510}
                    height={700}
                    className="w-full h-auto rounded-[500px] xl:flex hidden"
                />
                <Image 
                    src='/lp/001/5.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={510}
                    height={700}
                    className="w-full h-auto rounded-[500px] md:flex xl:hidden hidden"
                />
                <Image 
                    src='/lp/001/5-small.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={510}
                    height={700}
                    className="w-full h-auto rounded-[500px] md:hidden flex"
                />
            </div>
            <div className=' w-[55%] h-auto items-center justify-center 
            -mt-52 -ml-[18rem]  md:flex hidden
            md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
            md:cursor-pointer md:hover:rotate-2
            
            '>
                <Image 
                    src='/lp/001/5-2-big.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={510}
                    height={700}
                    className="w-full h-auto xl:flex hidden"
                />
                <Image 
                    src='/lp/001/5-2.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={510}
                    height={700}
                    className="w-full h-auto md:flex xl:hidden hidden"
                />              
            </div>
            <div className=' w-[55%] h-auto items-center justify-center 
            sm:-mt-[25rem] xs:-mt-[15rem] xxs:-mt-[10rem] xs:-ml-[18rem] xxs:-ml-[10rem]  md:hidden flex         
            '>
                <Image 
                    src='/lp/001/5-2-small.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={510}
                    height={700}
                    className="w-full h-auto"
                />                  
            </div>
        </div>
    </div>
  )
}

export default Section4