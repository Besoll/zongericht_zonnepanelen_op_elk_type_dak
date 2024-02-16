
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'



import dynamic from 'next/dynamic'
const CheckedFillColored = dynamic(() => import('@/components/icons/CheckedFillColored'))

const QualityFirst = () => {
  

return (
  <div className='flex w-full justify-center items-center flex-col max-w-[1200px]'>
      <div className='flex mt-6 mb-2 justify-center'>
            <Image 
                src='/zonnepanelen/dave-solar.webp'
                alt='over ons - zonnepnalen dave'
                width={480}
                height={480}
                className="w-full h-auto rounded-xl md:sepia md:hover:sepia-0 md:hover:rotate-1 md:hover:skew-3
                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
            />      
      </div>
      <div className='w-full flex flex-col justify-center items-center md:flex-row gap-4 md:gap-32'>
          <div className='w-fit h-auto flex justify-center items-center flex-col'>

            <p className='text-brand_original_secondary'><span className='text-primary'>Zon</span>Gericht</p>

            <h3 className='heading3 text-white rounded-md border-2 py-1 px-2 -ml-2 bg-black-100/80 text-center md:text-left md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer'>
                  Meer over ons
            </h3>

            <p className='py-6 text-center md:text-left'>
                Opzoek naar hoogwaardige zonnepanelen? Glas-glas zonnepanelen zijn de meest betrouwbare keuze. Vanwege de langere levensduur vergeleken met andere glasfolie panelen, is dit de meest duurzame keuze. Ook zijn glas-glas panelen beter bestand tegen weersinvloeden en behouden ze langer hun vermogen om zonne-energie om te zetten in elektriciteit.
            </p>
          </div>
          <div className='w-[320px] h-auto flex flex-col'>
              

              
              
          </div>

      </div>
  </div>
  )
}

export default QualityFirst