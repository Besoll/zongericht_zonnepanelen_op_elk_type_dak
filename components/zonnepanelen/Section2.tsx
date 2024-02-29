
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'



import dynamic from 'next/dynamic'
const CheckedFillColored = dynamic(() => import('@/components/icons/CheckedFillColored'))

const Section2 = () => {
  

return (
  <div className='flex w-full justify-center items-center flex-col max-w-[1200px] gap-3'>
    <div className='flex flex-col items-center justify-center text-center gap-3'>
          <h2 className='text-black heading4 xs:heading4 xl:heading3'>
              Technische eigenschappen van goede <br></br> glas op glas
              <span className='text-brand_original_secondary'> zonne<span className='text-primary'>panelen</span></span>.
              <br></br>                
          </h2>

          <p>Langere levensduur: Glas op Glas zonnepanelen hebben vaak een langere levensverwachting dan hun traditionele tegenhangers. Dit betekent dat ze over hun hele levensduur meer elektriciteit zullen produceren.</p>
    </div>

    <div className='flex w-full justify-center items-center flex-col md:flex-row '>

      {/* left/bottom part */}  
      <div className='w-full flex flex-col justify-end items-end gap-2'>  
        <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
          <p className='text-center md:text-left'>
              <span className='heading4'>Beter rendement </span><br></br>
              Glas glas leveren langer een hoog rendement op
          </p>
        </div>
        <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
          <p className='text-center md:text-left'>
              <span className='heading4'>Beter rendement </span><br></br>
              Glas glas leveren langer een hoog rendement op
          </p>
        </div>
        <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
          <p className='text-center md:text-left'>
              <span className='heading4'>Beter rendement </span><br></br>
              Glas glas leveren langer een hoog rendement op
          </p>
        </div>
      </div>

      {/* middle part */}   
      <div className='flex mt-6 mb-2 justify-center w-[55%] '>
            <Image 
                src='/zonnepanelen/dave-solar-3.webp'
                alt='over ons - zonnepnalen dave'
                width={480}
                height={480}
                className="w-full h-auto md:sepia md:hover:sepia-0 md:hover:rotate-1 md:hover:skew-3 
                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
            />      
      </div>

      {/* right/bottom part */}   
      <div className='w-full flex flex-col justify-end items-end gap-2'>
        <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
          <p className='text-center md:text-left'>
              <span className='heading4'>Beter rendement </span><br></br>
              Glas glas leveren langer een hoog rendement op
          </p>
        </div>

        <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
          <p className='text-center md:text-left'>
              <span className='heading4'>Beter rendement </span><br></br>
              Glas glas leveren langer een hoog rendement op
          </p>
        </div>

        <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
          <p className='text-center md:text-left'>
              <span className='heading4'>Beter rendement </span><br></br>
              Glas glas leveren langer een hoog rendement op
          </p>
        </div>

      </div>
    </div>
    
  </div>
  )
}

export default Section2