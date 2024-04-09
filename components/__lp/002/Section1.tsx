import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton2 = dynamic(() => import('@/components/__lp/002/ctaButtons/CtaButton2'))

const Icon_1_Instalation = dynamic(() => import('@/components/__lp/002/icons/icons-steps/Icon_1_Instalation'))
const Icon_2_freeInspection = dynamic(() => import('@/components/__lp/002/icons/icons-steps/Icon_2_freeInspection'))
const Icon_3_Monitoring = dynamic(() => import('@/components/__lp/002/icons/icons-steps/Icon_3_Monitoring'))
const Icon_4_Customers = dynamic(() => import('@/components/__lp/002/icons/icons-steps/Icon_4_Customers'))
const Icon_5_Installers = dynamic(() => import('@/components/__lp/002/icons/icons-steps/Icon_5_Installers'))
const Icon_6_allRoof = dynamic(() => import('@/components/__lp/002/icons/icons-steps/Icon_6_allRoof'))




const Section1 = () => {
  return (
    <div  className='flex w-full justify-center items-center max-w-[1440px] 
    px-4 md:px-8 flex-col mb-16 py-16 md:mb-24 md:py-24'>
        <div className='flex w-full justify-center items-center md:justify-start md:items-start
        gap-6 md:gap-20 flex-col md:flex-row ml-4'>      
            <div className='flex flex-col relative justify-center items-center w-[75%] md:min-w-[300px] 
            lg:min-w-[450px] md:aspect-[0.768] aspect-[0.768]'>
                <div className='flex w-full h-auto '>
                    <Image 
                        src='/lp/002/1-big.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        className="absolute top-0 w-full h-auto rounded-lg xl:flex hidden"
                    />
                    <Image 
                        src='/lp/002/1.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        className="absolute top-0 w-full h-auto rounded-lg md:flex xl:hidden hidden"
                    />
                    <Image 
                        src='/lp/002/1-small.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        className="absolute top-0 w-full h-auto rounded-lg md:hidden flex"
                    />
                </div>
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>
                <p className='text-qoqu_Blue font-semibold text-xl'>
                    Plat dak
                </p>             
                <h2 className='w-full heading3 md:heading2 lg:heading1 md:text-left text-center line-clamp-4'>
                    Waarom zongerichte zonnepanelen voor uw platte dak?    
                </h2> 

                <div className='w-full md:w-[80%] flex flex-col gap-4 py-4'>
                    <p className='md:text-left text-center'>
                        Als Zongericht hebben wij kennis en ervaring met alle typen daken in Nederland, waaronder platte daken. Als gekwalificeerde installateur streven wij bij elke installatie naar de hoogst mogelijke kwaliteit, zodat onze klanten trots kunnen zijn op Zongericht. Daarom durven wij ook 10 jaar installatiegarantie op onze installaties te bieden.
                    </p>
                    <p className='md:text-left text-center'>
                        Als installateur zien wij dat er vaak te simpel en te gemakkelijk wordt gedacht over platte daken, wat leidt tot verkeerd geplaatste installaties. Vaak wordt het ballastplan vergeten en wordt er te weinig of te veel ballast geplaatst. Te weinig ballast kan het risico met zich meebrengen dat de zonnepanelen wegwaaien, terwijl te veel ballast een hoog risico op dakbelasting en het potentieel van doorbuiging van bijvoorbeeld houten daken met zich meebrengt.
                    </p>
                    <p className='md:text-left text-center'>
                        Een veelvoorkomende fout is ook dat installaties op het grind van platte daken worden geplaatst. Door het gewicht van het systeem dat op het grind drukt, in combinatie met de hete temperaturen rond de zomer, kan het grind door de dakbedekking gedrukt worden, wat tot flinke lekkages en schade kan leiden. Kies daarom voor een betrouwbare installateur met kennis van zaken, die uw zonnepanelen op een professionele wijze op uw platte dak installeert.
                    </p>
                </div>


                <div className='w-full h-auto flex flex-col px-2 md:px-3 py-4 md:py-6 gap-4'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='w-full h-auto flex flex-col gap-2'>
                            <div className='w-fit p-4 rounded-lg bg-qoqu_Blue/10
                                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                                '>
                                <Icon_1_Instalation />
                            </div>
                            <p className='text-xl font-semibold'>
                                Installatie binnen 4 weken
                            </p>
                        </div>
                        <div className='w-full h-auto flex flex-col gap-2'>
                            <div className='w-fit p-4 rounded-lg bg-qoqu_Blue/10
                                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                                '>
                                <Icon_2_freeInspection />
                            </div>
                            <p className='text-xl font-semibold'>
                                Gratis woninginspectie
                            </p>
                        </div>
                        <div className='w-full h-auto flex flex-col gap-2'>
                            <div className='w-fit p-4 rounded-lg bg-qoqu_Blue/10
                                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                                '>
                                <Icon_3_Monitoring />
                            </div>
                            <p className='text-xl font-semibold'>
                                Geavanceerde monitorring systeem
                            </p>
                        </div>               
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='w-full h-auto flex flex-col gap-2'>
                            <div className='w-fit p-4 rounded-lg bg-qoqu_Blue/10
                                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                                '>
                                <Icon_4_Customers />
                            </div>
                            <p className='text-xl font-semibold'>
                                Hoge klantentevredenheid
                            </p>
                        </div>
                        <div className='w-full h-auto flex flex-col gap-2'>
                            <div className='w-fit p-4 rounded-lg bg-qoqu_Blue/10
                                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                                '>
                                <Icon_5_Installers  />
                            </div>
                            <p className='text-xl font-semibold'>
                            Betrouwbare en ervaren installateurs
                            </p>
                        </div>
                        <div className='w-full h-auto flex flex-col gap-2'>
                            <div className='w-fit p-4 rounded-lg bg-qoqu_Blue/10
                                md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
                                md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl
                                '>
                                <Icon_6_allRoof />
                            </div>
                            <p className='text-xl font-semibold'>
                                Expertise in alle daken
                            </p>
                        </div>               
                    </div>
                </div>
            </div>   
        </div>

        
           

    </div>
  )
}

export default Section1


