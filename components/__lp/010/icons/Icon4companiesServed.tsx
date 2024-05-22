import Image from 'next/image'
import icon4companiesServed from '@/public/lp/icons/icon4companiesServed-Black.svg'

const Icon4companiesServed = () => (
  <Image 
    src={icon4companiesServed} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[50px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out 
    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'
  />
);

export default Icon4companiesServed;
