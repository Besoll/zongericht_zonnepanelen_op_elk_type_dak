import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"


import dynamic from 'next/dynamic'
const HandIndex = dynamic(() => import('@/components/icons/HandIndex'))
const EmailIcon = dynamic(() => import('@/components/icons/EmailIcon'))
const MobileIcon = dynamic(() => import('@/components/icons/MobileIcon'))
const MapLocation = dynamic(() => import('@/components/icons/MapLocation'))
const IframeComponent = dynamic(() => import('@/components/ui/IframeProps'))


const FooterSchouwing = () => {
  return (
    <footer className="bg-white shadow-lg text-gray-500 text-base mt-20 md:mt-5">
        <hr className="my-6 border-gray-200 md:mx-auto lg:my-8" />

        <div className="flex flex-col justify-center mx-6 ml-5
                        md:flex-row md:justify-between
                        md:mx-4 md:ml-10
                        2xl:mx-48
                        ">
            <div className='!-mt-20 gradient_special mb-2 rounded justify-center mx-auto md:h-[230px]
                            md:-mt-10 md:mb-6 max-w-[300px] min-w-[200px] max-h-[350px] shadow-xl
                            md:justify-center md:mx-0'>
                <div className='flex flex-col justify-center '>
                    <Link href="/">
                        <Image 
                            src='/zongericht-logo.svg'
                            alt='Logo Zongericht'
                            width={200} 
                            height={50} 
                            loading="lazy"
                            className="hover:scale-105 transition duration-300 ease-in-out w-[80%] h-auto p-5"
                        />
                    </Link>
                    <p className='text-center px-6 mt-2 mb-2 md:mt-4 md:mb-4'> Vraag bij u thuis een vrijblijvende inspectie en rendementsplan aan voor een op maat gemaakte offerte</p>
                
                    <Button asChild className='gradient_green text-white shadow-xl scale-105 py-4 mb-5
                                        hover:scale-110 transition duration-300 ease-in-out md:hidden
                                        '>
                            <Link 
                                href="#zohoForm" 
                                className="text-base font-semibold scroll-smooth"
                            >
                                Vraag een schouwing aan
                                <span className='ml-2 w-[35px]'><HandIndex /></span>
                            </Link>
                    </Button> 
                    
                </div>
            </div>
            <ul className='mt-8 mb-2 ml-0 md:ml-5 md:mt-2 md:mb-6'>
                <li className="font-semibold text-gray-900 uppercase">
                    Paginas
                    <hr className="my-2 border-gray-200 md:mx-auto"/>
                </li>
                <li className="mb-2">
                    <Link 
                        href="/zonnepanelen" 
                        className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Zonnepanel                      
                    </Link>
                </li>
                <li className="mb-2">
                    <Link 
                        href="/projecten" 
                        className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Projecten                        
                    </Link>
                </li>
                <li className="mb-2">
                    <Link 
                        href="/" 
                        className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Brochures                        
                    </Link>
                </li>
                <li className="mb-2">
                    <Link 
                        href="/overOns" 
                        className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Over Ons                        
                    </Link>
                </li>
                <li className="mb-2">
                    <Link 
                        href="/schouwing" 
                        className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Oferte aanvragen                       
                    </Link>
                </li>
            </ul>
            <ul className='mt-8 mb-2 ml-0 md:ml-3 md:mt-2 md:mb-6'>
                <li className="mb-6 font-semibold text-gray-900 uppercase">
                    Voorwaarden & Privacy
                    <hr className="my-2 border-gray-200 md:mx-auto"/>
                </li>
                <li className='mb-2'>
                    <Link 
                        href='/' 
                        className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Algemene voorwaarden                        
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link 
                        href='/' 
                        className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Disclaimer                       
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link 
                        href='/' 
                        className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Imprint                       
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link 
                        href='/' 
                        className='nav-links cursor-pointer capitalize text-base text-gray-500
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Cookie Policy (EU)                       
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link 
                        href='/' 
                        className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Privacy Statement (EU)                        
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link 
                        href='/'
                        className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Terms and Conditions                        
                    </Link>
                </li>
            </ul>               
            <ul className='mt-8 mb-2 ml-0 md:ml-3 md:mt-2 md:mb-6'>
                <li className="mb-6 font-semibold text-gray-900 uppercase">
                    Beoordelingen
                    <hr className="my-2 border-gray-200 md:mx-auto"/>
                </li>
                <li className='mb-2 '>
                    <div className='flex flex-row gap-3 items-start justify-start'>
                        <div>
                            <Image 
                                src='/icons/Guarantee10Years-Big.svg'
                                alt='Guarantee 10 years - Beoordelingen'
                                width={32}
                                height={32}
                                className="w-[45px] h-auto md:hover:rotate-1 md:hover:skew-3 
                                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-black text-xs font-medium'>
                                10 jaar installatiegarantie
                            </div>
                            <div className='text-white-100 text-xs '>
                                Kwaliteit gegarandeerd
                            </div>
                        </div>
                    </div>
                </li>                     
                <li className='mb-2 max-w-[200px] -ml-2'>
                    <IframeComponent
                        src="https://www.klantenvertellen.nl/retrieve-widget.html?color=white&allowTransparency=false&button=true&lang=nl&tenantId=99&locationId=1066957"
                        width="160"
                        height="120"
                        title='Beoordelingen'
                    />
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex justify-center text-center flex-wrap pb-6 flex-col">
            <ul className='flex flex-col justify-center text-center flex-wrap sm:flex-row'>
                <li className='mb-2 mr-5 sm:mr-5'>
                    <Link href='tel:0031165700130' className='flex justify-center items-center hover:scale-105 hover:text-orange duration-300'>
                        <MobileIcon />
                        <span className="ml-2" >0165 700 130</span>
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link href='mailto:info@zongericht.nl' className='flex justify-center items-center hover:scale-105 hover:text-orange duration-300'>
                        <EmailIcon />
                        <span className="ml-2" >info@zongericht.nl</span> 
                    </Link>
                </li>
                <li className='mb-2 ml-1 sm:ml-5'>
                    <Link 
                        href='https://www.google.com/maps/place/Industriestraat+32,+4715+RL+Rucphen/@51.5351787,4.5734938,17z/data=!3m1!4b1!4m5!3m4!1s0x47c4190b8ac43c0b:0xb3377e1836ff7b8f!8m2!3d51.5351754!4d4.5760687?entry=ttu' target='_blank' 
                        className='flex justify-center items-center hover:scale-105 hover:text-orange duration-300'
                    >
                        <MapLocation />                        
                        <span className="ml-2" >Industriestraat 32, 4715 RL Rucphen</span> 
                    </Link>
                </li>
            </ul>
            <hr className="my-4 mb-2 border-gray-200 sm:mx-auto lg:mb-5 " />
            <ul className='text-sm'>
                <li>
                    2023-2024 © Alle rechten voorbehouden.
                </li>
                <li>
                    Ontwerp & Copyright door QOQU B.V.
                </li>
            </ul>
        </div>
        <div className='text-xs'>
                Developed and continuously maintained by {' '} 

                    <Link 
                    href='https://besok.nl'
                    aria-label='navigate to the developers website'
                    className='nav-links cursor-pointer hover:scale-105 hover:text-[#0f90ae]  text-[#0f67ae] duration-300 ease-in-out'
                >
                    beSok.nl                  
                </Link>
            </div>
    </footer>
  )
}

export default FooterSchouwing