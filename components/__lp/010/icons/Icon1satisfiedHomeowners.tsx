import Image from 'next/image'
import icon1satisfiedHomeowners from '@/public/lp/icons/icon1satisfiedHomeowners-White.svg'

const Icon1satisfiedHomeowners = () => (
  <Image 
    src={icon1satisfiedHomeowners} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[50px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out 
    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'
  />
);

export default Icon1satisfiedHomeowners;
