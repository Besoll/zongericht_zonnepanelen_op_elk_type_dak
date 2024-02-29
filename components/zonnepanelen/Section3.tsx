
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'



import dynamic from 'next/dynamic'
const CheckedFillColored = dynamic(() => import('@/components/icons/CheckedFillColored'))

const Section3 = () => {
  

return (
  <div className='flex w-full justify-center items-center flex-col-reverse md:flex-row max-w-[1200px] gap-3 '>
    <div className='flex flex-col items-center justify-center text-center gap-3'>
      <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
        <p className='text-center md:text-left'>
            <span className='heading4'>35 jaar garantie op product en rendement </span><br></br>
            We betrekken al onze zonnepanelen van Nederlandse leveranciers, wat het proces van garantieaanvragen voor ons vergemakkelijkt.
        </p>
      </div>
      <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
        <p className='text-center md:text-left'>
            <span className='heading4'>Onbrandbaar, waardoor de veiligheid gewaarborgd blijft </span><br></br>
            Dubbele glaslagen: Bij Glas op Glas zonnepanelen zijn zowel de voor- als achterkant gemaakt van glas. Dit maakt ze resistenter tegen externe factoren die brand kunnen veroorzaken, zoals vochtinfiltratie. Geen kunststof achterzijde
        </p>
      </div>
      <div className='w-fit h-auto flex justify-start items-start flex-row gap-3'>
        <p className='text-center md:text-left'>
            <span className='heading4'>Glas op Glas zonnepanelen degraderen minder snel </span><br></br>
            Betere afdichting tegen vocht: Het dubbelglas ontwerp zorgt voor een betere afdichting en biedt een superieure bescherming tegen vochtinfiltratie, wat een veelvoorkomende oorzaak is van degradatie in zonnepanelen.
        </p>
      </div>
    </div>

    <div className='flex w-full justify-center items-center flex-col md:flex-row '>
      <Image 
          src='/zonnepanelen/Dave-waranty-solar-beso-edit-png-2.webp'
          alt='glas glas zonnepnalen Zongericht'
          width={480}
          height={480}
          className="w-full h-auto  md:hover:sepia-0 md:hover:rotate-1 md:hover:skew-3 
          md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
      />  
    </div>
    
  </div>
  )
}

export default Section3