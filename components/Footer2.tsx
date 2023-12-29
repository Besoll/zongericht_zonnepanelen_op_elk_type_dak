import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    

<footer className="bg-white shadow-lg">
    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">             
                  
              <Link href="/">
                <Image 
                    src='/zongericht-logo.svg'
                    alt='Logo Zongericht'
                    width={200} 
                    height={50} 
                    layout="responsive"
                    className="hover:scale-105 transition duration-300 ease-in-out"
                />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <div className="mb-6 text-sm font-semibold text-gray-900 uppercase">Paginas</div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <Link 
                            href="/" 
                            className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                    md:hover:scale-105 md:hover:text-orange md:duration-300'
                        >
                            Zonnepanel                      
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link 
                            href="/" 
                            className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                    md:hover:scale-105 md:hover:text-orange md:duration-300'
                        >
                            Projecten                        
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link 
                            href="/" 
                            className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                    md:hover:scale-105 md:hover:text-orange md:duration-300'
                        >
                            Brochures                        
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link 
                            href="/" 
                            className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                    md:hover:scale-105 md:hover:text-orange md:duration-300'
                        >
                            Over Ons                        
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link 
                            href="/" 
                            className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                    md:hover:scale-105 md:hover:text-orange md:duration-300'
                        >
                            Oferte aanvragen                       
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className="mb-6 text-sm font-semibold text-gray-900 uppercase">Voorwaarden & Privacy</div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className='mb-4'
                    >
                        <Link 
                            href='/' 
                            className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                    md:hover:scale-105 md:hover:text-orange md:duration-300'
                        >
                            Algemene voorwaarden                        
                        </Link>
                    </li>
                    <li className='mb-4'
                    >
                        <Link 
                            href='/' 
                            className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                    md:hover:scale-105 md:hover:text-orange md:duration-300'
                        >
                            Disclaimer                       
                        </Link>
                    </li>
                    <li className='mb-4'
                    >
                        <Link 
                            href='/' 
                            className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                    md:hover:scale-105 md:hover:text-orange md:duration-300'
                        >
                            Imprint                       
                        </Link>
                    </li>
                    <li className='mb-4'
                    >
                        <Link 
                            href='/' 
                            className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                    md:hover:scale-105 md:hover:text-orange md:duration-300'
                        >
                            Cookie Policy (EU)                       
                        </Link>
                    </li>
                    <li className='mb-4'
                    >
                        <Link 
                            href='/' 
                            className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                    md:hover:scale-105 md:hover:text-orange md:duration-300'
                        >
                            Privacy Statement (EU)                        
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href='/'
                            className='nav-links cursor-pointer capitalize text-base text-gray-500  
                                    md:hover:scale-105 md:hover:text-orange md:duration-300'
                        >
                            Terms and Conditions                        
                        </Link>
                    </li>
                </ul>
            <div>
            </div>
            <div>
                <div className="mt-8 mb-2 md:mt-8 md:mb-6 text-sm font-semibold text-gray-900 uppercase">Beoordelingen</div>
                    
                            <Link href="/">
                                <Image 
                                    src='/reviews.png'
                                    alt='Logo Zongericht'
                                    width={200} 
                                    height={50} 
                                    layout="responsive"
                                    className="hover:scale-105 transition duration-300 ease-in-out"
                                />
                            </Link>
                        
                </div>
            </div>
        </div>
      </div>


      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© Alle rechten voorbehouden. 
            Ontwerp & Copyright door QOQU B.V. - 2023-2024
          </span>  
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
           <span> Malachiet 590 3316 LD Dordrecht   </span>    </a>
         </div>
      </div>
    </div>
</footer>


    









  )
}

export default Footer