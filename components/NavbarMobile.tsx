"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button"

import dynamic from "next/dynamic";
const HandIndex = dynamic(() => import('@/components/icons/HandIndex'))

const NavbarMobile = () => {
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
    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
                        bg-gradient-to-b gradient_green to-orange text-white           
                        ">                            
          {links.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl"
            >
              <Link onClick={() => setNav(!nav)} href={link} >
                {name}
              </Link>
            </li>

          ))}
            <Button asChild className='mt-5 gradient_orange text-white shadow-2xl px-6 py-8'>
                 <Link 
                    href="/schouwing" 
                    className="!text-xl"
                >
                        Schouwing aanvragen
                        <HandIndex />
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
  )
}

export default NavbarMobile