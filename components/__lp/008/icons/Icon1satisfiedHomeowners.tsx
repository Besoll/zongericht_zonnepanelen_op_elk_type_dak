import Image from 'next/image'
import icon1satisfiedHomeowners from '@/public/lp/icons/icon1satisfiedHomeowners-Night-Blue.svg'

const Icon1satisfiedHomeowners = () => (
  <Image 
    src={icon1satisfiedHomeowners} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[50px] h-auto'
  />
);

export default Icon1satisfiedHomeowners;
