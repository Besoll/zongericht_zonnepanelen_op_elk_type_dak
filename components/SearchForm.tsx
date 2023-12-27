"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { Input } from "@/components/ui/input";
import { formUrlQuery } from '@/sanity/utils';


const SearchForm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [search, setSearch] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let newUrl = '';

            if(search) {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: 'query',
                    value: search
                })
            } else {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ['query']
                })
            }

            router.push(newUrl, { scroll: false });
        }, 300)

        return () => clearTimeout(delayDebounceFn)
    }, [search])

  return (
    <form className='flex-center mx-auto mt-10 w-full xs:-mt-10 xs:w-[90%]  sm:px-4'>
        <label className='flex-center relative w-full max-w-3xl'>
            <Image 
                src='/magnifying-glass.svg'
                alt='Search icon'
                width={20}
                height={20}
                className='absolute left-6 2xs:left-3'
            />
            <Input 
                className='base-regular h-fit border-1 border py-6 pl-20 pr-8 sm:py-4 xs:py-4 2xs:py-4 2xs:pl-10 text-white-400 !ring-0 !ring-offset-0 
                placeholder:text-white-400'
                type='text'
                placeholder='Zoeken'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </label>
    </form>
  )
}

export default SearchForm