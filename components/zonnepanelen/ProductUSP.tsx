import Link from 'next/link'
import Image from 'next/image'

import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";


const ProductUSP = () => {
  return (
    <div className='flex w-full justify-center items-center flex-col'>
        <div className='flex my-10 justify-center'>
            <h2 className='text-white heading3 xs:heading2 xl:heading1'>
                Duurzaam en betrouwbaar
            </h2>
        </div>
        <div className='w-full flex flex-col justify-center items-center md:flex-row'>
            <div className='w-full h-auto flex justify-center items-center flex-col'>
                <Popover placement="right">
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/1.webp'
                            alt='zonnepanelen scheme 1st part'
                            width={300}
                            height={40}
                            className="w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer z-[7]"
                        /> 
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">Aluminium Frame</div>
                            <div className="text-tiny"></div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="right">
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/2.webp'
                            alt='zonnepanelen scheme 2nd part'
                            width={300}
                            height={40}
                            className="-mt-36 md:-mt-44 w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer z-[6]"
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">EVA Folie</div>
                            <div className="text-tiny"></div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="right">
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/3.webp'
                            alt='zonnepanelen scheme 3rd part'
                            width={300}
                            height={40}
                            className="-mt-36 md:-mt-44 w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer z-[5]"
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">Voorzijde Glas</div>
                            <div className="text-tiny"></div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="right">
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/4.webp'
                            alt='zonnepanelen scheme 4th part'
                            width={300}
                            height={40}
                            className="-mt-36 md:-mt-44 w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer z-[4]"
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">Zonnecellen</div>
                            <div className="text-tiny"></div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="right">
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/5.webp'
                            alt='zonnepanelen scheme 5th part'
                            width={300}
                            height={40}
                            className="-mt-36 md:-mt-44 w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer z-[3]"
                        />  
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">Achterzijde Glas</div>
                            <div className="text-tiny"></div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="right">
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/6.webp'
                            alt='zonnepanelen scheme 6th part'
                            width={300}
                            height={40}
                            className="-mt-36 md:-mt-44 w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer z-[2]"
                        />    
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">EVA Folie</div>
                            <div className="text-tiny"></div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover placement="right">
                    <PopoverTrigger>
                        <Image 
                            src='/zonnepanelen/scheme/7.webp'
                            alt='zonnepanelen scheme 7th part'
                            width={300}
                            height={40}
                            className="-mt-36 md:-mt-44 w-[300px] md:w-[400px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer opacity-40 hover:opacity-80 z-[1]"
                        />   
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">Transparant</div>
                            <div className="text-tiny">Achterplaat</div>
                        </div>
                    </PopoverContent>
                </Popover> 
            </div>
            <div className='w-[35%] h-auto'>

            </div>

        </div>
    </div>
  )
}

export default ProductUSP