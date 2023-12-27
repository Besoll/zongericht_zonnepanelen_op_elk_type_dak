"use client"

import { formUrlQuery } from '@/sanity/utils';
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation';

const links = ['all', 'Next 13', 'frontend', 'backend', 'fullstack']
const Filters = () => {
    const [active, setActive] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleFilter = (link: string) => {
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
    
  return (
    <ul className='text-primary body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto flex-wrap py-12 2xs:py-4 xs:py-6 xs:gap-2  justify-center'>
        {links.map((link) => (
            <button
                key={link}
                onClick={() => handleFilter(link)}
                className={` ${
                    active === link ? 
                    'gradient_green-orange text-white ' : ''
                } whitespace-nowrap  bg-grey-100/30 shadow-lg rounded-lg px-8 py-2.5 capitalize`}
            >  
                {link}
            </button>
        ))}
    </ul>
  )
}

export default Filters