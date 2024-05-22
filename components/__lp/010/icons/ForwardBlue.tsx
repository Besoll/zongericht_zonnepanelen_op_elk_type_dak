import Image from 'next/image'
import forwardBlue from '@/public/lp/icons/forward-Night-Blue.svg'

const ForwardBlue = () => (
  <Image 
    src={forwardBlue} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[15px] h-auto'
  />
);

export default ForwardBlue;
