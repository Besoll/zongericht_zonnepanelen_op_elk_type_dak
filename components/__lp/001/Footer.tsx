import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"


import dynamic from 'next/dynamic'
const HandIndex = dynamic(() => import('@/components/icons/HandIndex'))
const MapLocationWhite = dynamic(() => import('@/components/icons/MapLocationWhite'))


const Footer = () => {
  return (
    <footer className="bg-black shadow-lg text-gray-200 text-base capitalize mt-20 md:mt-5">
        <hr className="my-6 border-gray-400 md:mx-auto lg:my-8" />

        <div className="flex flex-col justify-center mx-6 ml-5
                        md:flex-row md:justify-between
                        md:mx-4 md:ml-10
                        2xl:mx-48
                        ">
            <div className='!-mt-20 gradient_special mb-2 rounded justify-center mx-auto items-center
                            md:-mt-10 md:mb-6 max-w-[300px] min-w-[200px] max-h-[350px] shadow-xl
                            md:justify-center md:mx-0'>
                <div className='flex flex-col justify-center items-center'>
                    <Link href="#schouwingForm">
                        <Image 
                            src='/zongericht-logo.svg'
                            alt='Logo Zongericht'
                            width={200} 
                            height={50} 
                            loading="lazy"
                            className="hover:scale-105 transition duration-300 ease-in-out w-[80%] h-auto p-2 md:p-5 mt-2 mx-auto"
                        />
                    </Link>
                    <p className='text-center px-6 mt-0 mb-2 md:mt-4 md:mb-4 text-gray-500'> Vraag bij u thuis een vrijblijvende inspectie en rendementsplan aan voor een op maat gemaakte offerte</p>
                
                    <Button asChild className='gradient_green text-white shadow-xl scale-105 py-4 mb-5
                                        hover:scale-110 transition duration-300 ease-in-out
                                        '>
                            <Link 
                                href="#schouwingForm" 
                                className="font-semibold"
                            >
                                Vraag een schouwing aan
                                <span className='ml-2 w-[35px]'><HandIndex /></span>
                            </Link>
                    </Button> 
                    
                </div>
            </div>
            <ul className='mt-8 mb-2 ml-0 md:ml-5 md:mt-2 md:mb-6'>
                <li className="font-semibold uppercase">
                    Pagina
                    <hr className="my-2 border-gray-400 md:mx-auto"/>
                </li>
                <li className="mb-2">
                    <Link 
                        href="#overOns" 
                        className='nav-links cursor-pointer  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Over ons                      
                    </Link>
                </li>
                <li className="mb-2">
                    <Link 
                        href="#installatie" 
                        className='nav-links cursor-pointer  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Installatie                       
                    </Link>
                </li>
                <li className="mb-2">
                    <Link 
                        href="#onzeWerkwijze" 
                        className='nav-links cursor-pointer  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Onze werkwijze                        
                    </Link>
                </li>
                <li className="mb-2">
                    <Link 
                        href="/overOns" 
                        className='nav-links cursor-pointer  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Getuigenissen                       
                    </Link>
                </li>
                <li className="mb-2">
                    <Link 
                        href="#schouwingForm" 
                        className='nav-links cursor-pointer  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Oferte aanvragen                       
                    </Link>
                </li>
            </ul>
            <ul className='mt-4 mb-2 ml-0 md:ml-3 md:mt-2 md:mb-6'>
                <li className="mb-2 font-semibold uppercase">
                    Voorwaarden & Privacy
                    <hr className="my-2 border-gray-400 md:mx-auto"/>
                </li>
                <li className='mb-2'>
                    <Link 
                        href='https://zongericht.nl/algemene-voorwaarden/' 
                        className='nav-links cursor-pointer  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Algemene voorwaarden                        
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link 
                        href='https://zongericht.nl/cookie-policy-eu/' 
                        className='nav-links cursor-pointer  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Cookie policy (EU)                       
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link 
                        href='https://zongericht.nl/disclaimer/' 
                        className='nav-links cursor-pointer  
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                    >
                        Disclaimer                       
                    </Link>
                </li>
                <li className='mb-2'>
                    <Link 
                        href='https://zongericht.nl/privacy-statement-eu/' 
                        className='nav-links cursor-pointer
                                md:hover:scale-105 md:hover:text-orange md:duration-300'
                                target='_blank'
                    >
                        Privacy verklaring                       
                    </Link>
                </li>                
            </ul>               
            <ul className='mt-8 mb-2 ml-0 md:ml-3 md:mt-2 md:mb-6'>
                
                <li className='mb-2 '>
                    <div className='flex flex-col md:flex-row gap-2 justify-start items-start md:justify-center md:items-center'>
                        <div className='flex flex-row gap-3 items-center justify-center'>
                            <Image 
                                src='/icons/KlantenVertelenOriginal.svg'
                                alt='KlantenVertellen - Kwaliteit gegarandeerd'
                                width={32}
                                height={32}
                                className="w-[45px] h-auto md:hover:rotate-1 md:hover:skew-3 
                                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
                            />
                            <div className='flex flex-col'>
                                <div className='text-gray-100 text-xs font-medium'>
                                    Klanten<span className='font-semibold'>Vertellen</span>
                                </div>
                                <div className='text-white-300 text-xs '>
                                    Kwaliteit gegarandeerd
                                </div>
                            </div>
                        </div>
                        <hr className='hidden md:flex rotate-90 w-[15px]'></hr>
                        <div className='flex flex-row gap-3 items-center justify-center'>
                            <Image 
                                src='/icons/Guarantee10Years-Big.svg'
                                alt='Guarantee 10 years - Beoordelingen'
                                width={32}
                                height={32}
                                className="w-[45px] h-auto md:hover:rotate-1 md:hover:skew-3 
                                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
                            />
                            <div className='flex flex-col'>
                                <div className='text-gray-100 text-xs font-medium'>
                                    10 jaar installatiegarantie
                                </div>
                                <div className='text-white-300 text-xs '>
                                    Kwaliteit gegarandeerd
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className="mt-6 my-2 border-gray-400 md:mx-auto"/>
                </li>                   
            </ul>             
        </div>
        <hr className="hidden md:flex my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <div className="flex justify-center text-center flex-wrap pb-6 flex-col">
            <ul className='flex flex-col justify-center text-center flex-wrap sm:flex-row'>
                
                <li className='mb-2 ml-1 sm:ml-5'>
                    <Link 
                        href='https://www.google.com/maps/place/Industriestraat+32,+4715+RL+Rucphen/@51.5351787,4.5734938,17z/data=!3m1!4b1!4m5!3m4!1s0x47c4190b8ac43c0b:0xb3377e1836ff7b8f!8m2!3d51.5351754!4d4.5760687?entry=ttu' target='_blank' 
                        className='flex justify-center items-center hover:scale-105 hover:text-orange duration-300'
                    >
                        <MapLocationWhite />                        
                        <span className="ml-2" >Industriestraat 32, 4715 RL Rucphen</span> 
                    </Link>
                </li>
            </ul>
            <ul className='text-sm text-gray-400'>
                <li>
                    Auteursrecht © 2018-2024. Alle rechten voorbehouden.
                </li>
                <li>
                    Ontwerp & Copyright door QOQU B.V.
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer