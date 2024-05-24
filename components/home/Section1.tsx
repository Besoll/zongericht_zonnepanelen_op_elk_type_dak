import Image from 'next/image'

import dynamic from 'next/dynamic'
const Type001 = dynamic(() => import('@/components/home/DaktypesSectioned/001'))
const Type002 = dynamic(() => import('@/components/home/DaktypesSectioned/002'))
const Type003 = dynamic(() => import('@/components/home/DaktypesSectioned/003'))
const Type004 = dynamic(() => import('@/components/home/DaktypesSectioned/004'))
const Type005 = dynamic(() => import('@/components/home/DaktypesSectioned/005'))
const Type007 = dynamic(() => import('@/components/home/DaktypesSectioned/007'))
const Type008V1 = dynamic(() => import('@/components/home/DaktypesSectioned/008-V1'))
const Type009 = dynamic(() => import('@/components/home/DaktypesSectioned/009'))
const Type010 = dynamic(() => import('@/components/home/DaktypesSectioned/010'))



const Section1 = () => {
  return (
    <div  className='w-full flex flex-col justify-center items-center max-w-[1440px] 
    gap-6 md:gap-8 px-4 md:px-8 py-16 md:py-36'>
        <Type001 />
        <Type002 />
        <Type003 />
        <Type004 />
        <Type005 />
        <Type007 />
        <Type008V1 />
        <Type009 />
        <Type010 />
    </div>
  )
}

export default Section1