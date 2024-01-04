"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"

import dynamic from 'next/dynamic'
const HandIndex = dynamic(() => import('@/public/icons/HandIndex'))
const HamburgerMenu = dynamic(() => import('@/public/icons/HamburgerMenu'))
const HamburgerMenuOpen = dynamic(() => import('@/public/icons/HamburgerMenuOpen'))
const NavbarMobile = dynamic(() => import('@/components/NavbarMobile'))


const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Zonnepanelen",
      link: "zonnepanelen",
    },
    {
      id: 2,
      name: "Dak Typen",
      link: "dakTypen"
    },
    {
      id: 3,
      name: "Projecten",
      link: "projecten"
    },
    {
      id: 4,
      name: "Over ons",
      link: "overOns"
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
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className="nav-links px-2 cursor-pointer capitalize text-base font-semibold text-gray-500 hover:scale-105 hover:text-orange duration-300 link-underline
            xl:px-6
            lg:px-4
            md:px-1
            "
          >
            <Link href={link}>{name}</Link>
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
                    <HandIndex />
                </Link>
        </Button>  
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? 
          <HamburgerMenuOpen />  
         : 
         <HamburgerMenu />  
          }
      </div>

      {nav && (
        <NavbarMobile />
      )}
    </div>
  );
};

export default Navbar;