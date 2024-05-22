import Image from 'next/image'
import handPointer from '@/public/lp/icons/handPointerLightBlue.svg'

const HandPointer = () => (
  <Image 
    src={handPointer} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[25px] h-auto'
  />
);

export default HandPointer;
