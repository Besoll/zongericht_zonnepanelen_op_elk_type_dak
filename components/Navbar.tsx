"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import HandIndex from "@/public/icons/HandIndex.svg"
import HamburgerMenu from "@/public/icons/HamburgerMenu.svg"
import HamburgerMenuOpen from "@/public/icons/HamburgerMenuOpen.svg"

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Zonnepanelen",
    },
    {
      id: 2,
      link: "Projecten",
    },
    {
      id: 3,
      link: "Over ons",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-primary bg-white shadow-lg fixed nav z-10">
      <div>                
            <Link href="/">
                <Image 
                    src='/zongericht-logo.svg'
                    alt='Logo Zongericht'
                    width={200} 
                    height={50} 
                    layout="responsive"
                    loading="lazy"
                    className="hover:scale-105 transition duration-300 ease-in-out"
                />
            </Link>
      </div>

      <ul className="hidden md:flex md:flex-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-2 cursor-pointer capitalize text-base font-semibold text-gray-500 hover:scale-105 hover:text-orange duration-300 link-underline
            xl:px-6
            lg:px-4
            md:px-1
            "
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
        <Button asChild className='ml-5 gradient_orange text-white shadow-xl px-4 py-4 
                                    hover:scale-105 transition duration-300 ease-in-out
                                    '>
                <Link 
                    href="/schouwing" 
                    className="text-base font-semibold"
                >
                    Schouwing aanvragen
                    <Image 
                        src={HandIndex} 
                        className="text-white animate-pulse ml-1 hover:animate-none" 
                        width={20} 
                        height={20}
                        alt='Hand Index Icon'
                        loading='lazy'
                    />
                </Link>
        </Button>  
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? 
          <Image 
              src={HamburgerMenuOpen} 
              className="text-white animate-bounce" 
              width={30} 
              height={30}
              alt='Hamburger Menu open Icon'
              loading='lazy'
          />  
         : 
         <Image 
            src={HamburgerMenu} 
            className="text-primary" 
            width={30} 
            height={30}
            alt='Hamburger Menu Icon'
            loading='lazy'
          />  
          }
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
                        bg-gradient-to-b gradient_green to-orange text-white           
                        ">                            
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl"
            >
              <Link onClick={() => setNav(!nav)} href={link} >
                {link}
              </Link>
            </li>

          ))}
            <Button asChild className='mt-5 gradient_orange text-white shadow-2xl px-6 py-8'>
                 <Link 
                    href="/schouwing" 
                    className="!text-xl"
                >
                        Schouwing aanvragen
                        <Image 
                            src={HandIndex} 
                            className="text-white ml-2 animate-pulse" 
                            width={30} 
                            height={30}
                            alt='Hand Index Icon'
                            loading='lazy'
                        />
                 </Link>
            </Button> 

            <Link href="/" className="absolute bottom-10">
                <Image 
                    src='/zongericht-logo.svg'
                    alt='Logo Zongericht'
                    width={100} 
                    height={50} 
                    loading="lazy"
                    layout="responsive"
                    className="hover:scale-105 transition duration-300 ease-in-out"
                />
            </Link>   
        </ul>
      )}
    </div>
  );
};

export default Navbar;