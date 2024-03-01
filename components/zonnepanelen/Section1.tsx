
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'



import dynamic from 'next/dynamic'
const CheckedFillColored = dynamic(() => import('@/components/icons/CheckedFillColored'))

const Section1 = () => {
  

return (
  <div className='flex w-full justify-center items-center flex-col md:flex-row max-w-[1200px] px-3 md:px-0 gap-0 md:gap-3 mb-16'>
      <div className='flex mt-6 mb-2 justify-center w-full px-6 md:px-0 md:w-[55%] '>
            <Image 
                src='/zonnepanelen/dave-solar-3.webp'
                alt='over ons - zonnepnalen dave'
                width={480}
                height={480}
                className="w-full h-auto md:sepia md:hover:sepia-0 md:hover:rotate-1 md:hover:skew-3 
                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
            />      
      </div>
      <div className='w-full flex flex-col justify-end items-end gap-3'>
          <div className='flex flex-col items-end -mt-4 md:mt-6 mb-2 justify-end'>
                <p className='text-brand_original_secondary'><span className='text-primary'>Zon</span>Gericht</p>
                <h2 className='text-black heading4 xs:heading3 xl:heading2 text-right'>
                    Ga altijd voor glas op glas 
                    <span className='text-brand_original_secondary'> zonne<span className='text-primary'>panelen </span></span>
                    dat op alle vlakken beter is.
                    <br></br>                
                </h2>
          </div>

          {/* texts container */}
          <div className='w-full flex flex-col justify-start items-start pl-1 md:pl-6 gap-3'>
            {/* text 1 */}
            <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
              <h3 className='heading3 text-white rounded-md border-2 p-2 bg-black-100/80 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer'>
                    1
              </h3>
              <p className='text-left'>
                  <span className='heading4'>Beter rendement </span><br></br>
                  Glas glas leveren langer een hoog rendement op
              </p>
            </div>

            {/* text 2 */}
            <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
              <h3 className='heading3 text-white rounded-md border-2 p-2 bg-black-100/80 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer'>
                    2
              </h3>
              <p className='text-left'>
                  <span className='heading4'>Niet brandbaar zoals bij glas op folie panelen </span><br></br>
                  Glas Glas zonnepanelen kunnen niet branden zoals bij glas op folie
              </p>
            </div>   
            {/* text 3 */}
            <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
              <h3 className='heading3 text-white rounded-md border-2 p-2 bg-black-100/80 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer'>
                    3
              </h3>
              <p className='text-left'>
                  <span className='heading4'>Geen kans op vocht </span><br></br>
                  Glas glas zonnepanelen zetten bij warmte niet onevenredig uit waardoor er geen spanning op de gelamineerde laten komen en zo geen kans op vocht kan ontstaan
              </p>
            </div>   
            {/* text 4 */}
            <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
              <h3 className='heading3 text-white rounded-md border-2 p-2 bg-black-100/80 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer'>
                    4
              </h3>
              <p className='text-left'>
                  <span className='heading4'>Geen kans op micro cracks </span><br></br>
                  Twee glasplaten op elkaar zorgt voor een vacuum effect waardoor er geen kans op micro cracks kan ontstaan, mocht dit wel het geval zijn zal er ook altijd zichtbare schade aan het glas te zien zijn
              </p>
            </div>
          </div>

       </div>   
  </div>
  )
}

export default Section1