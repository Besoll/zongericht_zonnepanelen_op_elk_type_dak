import Image from 'next/image'
import handPointerBlue from '@/public/lp/icons/handPointerBlue.svg'

const HandPointerBlue = () => (
  <Image 
    src={handPointerBlue} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[25px] h-auto'
  />
);

export default HandPointerBlue;
