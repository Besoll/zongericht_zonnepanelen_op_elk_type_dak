"use client"

import { formUrlQuery } from '@/sanity/utils';
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation';

const links = ['Elk type dak', 'schuin bitumen dak', 'schuin pvc dak', 'schuin epdm dak', 'golfplaten dak', 'zinken dak', 'leistenen dak', 'dakkapellen', 'plat dak', 'dakpannen']
const Filters = () => {
    const [active, setActive] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleFilter = (link: string ) => {
        let newUrl = '';  
        
        if(active === link) {
            setActive('');

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['category'],
              })
        } else {
            setActive(link);

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: link.toLowerCase(),
            })
        }

        router.push(newUrl, { scroll:false });
    }

    const scrollToSection = (link: string) => {
        handleFilter(link);
    
        const section = document.getElementById(link);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };


    
  return (
    <ul className='text-primary body-text flex no-scrollbar w-full max-w-full gap-2 overflow-auto flex-wrap py-12 
                    justify-center       
                    xs:py-4 xs:gap-2 
                    xxs:py-2 xxs:gap-1 
                    '>
        {links.map((link) => (
            <button
                key={link}
                onClick={() => handleFilter(link)}
                className={` ${
                    active === link ? 
                    'gradient_green-orange text-white ' : ''
                     } 
                     whitespace-nowrap bg-white border shadow-inner rounded-lg px-8 py-2.5 capitalize
                     justify-center
                     sm:text-base
                     xs:text-sm
                    xxs:px-4 xxs:py-1  xxs:text-xs
                `}
            >  
                {link}
            </button>
        ))}
    </ul>
  )
}

export default Filters