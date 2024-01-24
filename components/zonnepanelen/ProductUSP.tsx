"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";


import dynamic from 'next/dynamic'
const CheckedFillColored = dynamic(() => import('@/components/icons/CheckedFillColored'))



const ProductUSP = () => {

    // States for each popover
    const [openPopover, setOpenPopover] = React.useState(null);

    useEffect(() => {
        if (openPopover !== null) {
            // Set a timer to close the currently open popover after 2 seconds
            const timer = setTimeout(() => setOpenPopover(null), 1000);
            return () => clearTimeout(timer); // Clear the timer on cleanup
        }
    }, [openPopover]);

    const handlePopoverOpen = (popoverId: any) => {
        setOpenPopover(openPopover === popoverId ? null : popoverId);
    };

    // Function to check if a popover is open
    const isPopoverOpen = (popoverId: any) => openPopover === popoverId;
    
  return (
    <div className='flex w-full justify-center items-center flex-col max-w-[1200px]'>
        <div className='flex mt-6 mb-2 justify-center'>
            <h2 className='text-white heading3 xs:heading2 xl:heading1 text-center'>
                Glas glas zonnepanelen
                <br></br>                
            </h2>
        </div>
        <div className='w-full flex flex-col justify-center items-center md:flex-row gap-4 md:gap-32'>
            <div className='w-fit h-auto flex justify-center items-center flex-col'>
                <Popover placement="right" isOpen={isPopoverOpen(1)} onOpenChange={() => handlePopoverOpen(1)}>
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/1.webp'
                            alt='zonnepanelen scheme 1st part'
                            width={300}
                            height={40}
                            className="w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer z-[7] active:opacity-25"
                        /> 
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="-ml-24 mt-8 md:-ml-16 md:mt-16 px-3 py-2 bg-black-100/50 rounded-xl text-white">
                            <div className="text-small font-bold">Aluminium Frame</div>
                            <div className="text-tiny"></div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="right" isOpen={isPopoverOpen(2)} onOpenChange={() => handlePopoverOpen(2)}>
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/2.webp'
                            alt='zonnepanelen scheme 2nd part'
                            width={300}
                            height={40}
                            className="-mt-36 md:-mt-44 w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer z-[6] active:opacity-25"
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="-ml-24 mt-8 md:-ml-16 md:mt-16 px-3 py-2 bg-black-100/50 rounded-xl text-white">
                            <div className="text-small font-bold">Voorzijde Glas</div>
                            <div className="text-tiny"></div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="right" isOpen={isPopoverOpen(3)} onOpenChange={() => handlePopoverOpen(3)}>
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/3.webp'
                            alt='zonnepanelen scheme 3rd part'
                            width={300}
                            height={40}
                            className="-mt-36 md:-mt-44 w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer z-[5] active:opacity-25"
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="-ml-24 mt-8 md:-ml-16 md:mt-16 px-3 py-2 bg-black-100/50 rounded-xl text-white">
                            <div className="text-small font-bold">EVA Folie</div>
                            <div className="text-tiny"></div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="right" isOpen={isPopoverOpen(4)} onOpenChange={() => handlePopoverOpen(4)}>
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/4.webp'
                            alt='zonnepanelen scheme 4th part'
                            width={300}
                            height={40}
                            className="-mt-36 md:-mt-44 w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer z-[4] active:opacity-25"
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="-ml-24 mt-8 md:-ml-16 md:mt-16 px-3 py-2 bg-black-100/50 rounded-xl text-white">
                            <div className="text-small font-bold">Zonnecellen</div>
                            <div className="text-tiny"></div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="right" isOpen={isPopoverOpen(5)} onOpenChange={() => handlePopoverOpen(5)}>
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/5.webp'
                            alt='zonnepanelen scheme 5th part'
                            width={300}
                            height={40}
                            className="-mt-36 md:-mt-44 w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer z-[3] active:opacity-25"
                        />  
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="-ml-24 mt-8 md:-ml-16 md:mt-16 px-3 py-2 bg-black-100/50 rounded-xl text-white">
                            <div className="text-small font-bold">EVA Folie</div>
                            <div className="text-tiny"></div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="right" isOpen={isPopoverOpen(6)} onOpenChange={() => handlePopoverOpen(6)}>
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/6.webp'
                            alt='zonnepanelen scheme 6th part'
                            width={300}
                            height={40}
                            className="-mt-36 md:-mt-44 w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer z-[2] active:opacity-25"
                        />    
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="-ml-24 mt-8 md:-ml-16 md:mt-16 px-3 py-2 bg-black-100/50 rounded-xl text-white">
                            <div className="text-small font-bold">Achterzijde Glas</div>
                            <div className="text-tiny"></div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="right" isOpen={isPopoverOpen(7)} onOpenChange={() => handlePopoverOpen(7)}>
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/7.webp'
                            alt='zonnepanelen scheme 7th part'
                            width={300}
                            height={40}
                            className="-mt-36 md:-mt-44 w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer opacity-80 hover:opacity-40 z-[1] active:opacity-25"
                        />   
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="-ml-24 mt-8 md:-ml-16 md:mt-16 px-3 py-2 bg-black-100/50 rounded-xl text-white">
                            <div className="text-small font-bold">Transparent</div>
                            <div className="text-tiny">Achterplaat</div>
                        </div>
                    </PopoverContent>
                </Popover> 
            </div>
            <div className='w-[320px] h-auto flex flex-col'>
                <div className='flex flex-row w-full md:gap-3 mb-4'>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row justify-start items-start gap-1 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer active:opacity-25'  onClick={() => handlePopoverOpen(1)}>
                            <CheckedFillColored />
                            Aluminium Frame
                        </div>
                        <div className='flex flex-row justify-start items-start gap-1 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer active:opacity-25' onClick={() => handlePopoverOpen(2)}>
                            <CheckedFillColored />
                            EVA Folie
                        </div>
                        <div className='flex flex-row justify-start items-start gap-1 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer active:opacity-25' onClick={() => handlePopoverOpen(3)}>
                            <CheckedFillColored />
                            Voorzijde Glas
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row justify-start items-start gap-1 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer active:opacity-25' onClick={() => handlePopoverOpen(4)}>
                            <CheckedFillColored />
                            Zonnecellen
                        </div>
                        <div className='flex flex-row justify-start items-start gap-1 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer active:opacity-25' onClick={() => handlePopoverOpen(5)}>
                            <CheckedFillColored />
                            EVA Folie
                        </div>
                        <div className='flex flex-row justify-start items-start gap-1 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer active:opacity-25' onClick={() => handlePopoverOpen(6)}>
                            <CheckedFillColored />
                            Achterzijde Glas 
                        </div>
                        <div className='flex flex-row justify-start items-start gap-1 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer active:opacity-25' onClick={() => handlePopoverOpen(7)}>
                            <CheckedFillColored />
                            Achterplaat 
                        </div>
                    </div>

                </div>

                <h3 className='heading3 text-white rounded-md border-2 py-1 px-2 -ml-2 bg-black-100/80 text-center md:text-left md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer active:opacity-25'>
                    Duurzaam en betrouwbaar
                </h3>

                <p className='py-6 text-center md:text-left'>
                    Opzoek naar hoogwaardige zonnepanelen? Glas-glas zonnepanelen zijn de meest betrouwbare keuze. Vanwege de langere levensduur vergeleken met andere glasfolie panelen, is dit de meest duurzame keuze. Ook zijn glas-glas panelen beter bestand tegen weersinvloeden en behouden ze langer hun vermogen om zonne-energie om te zetten in elektriciteit.
                </p>
                
            </div>

        </div>
    </div>
  )
}

export default ProductUSP