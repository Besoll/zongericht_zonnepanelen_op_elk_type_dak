import Image from 'next/image'
import checked from '@/public/icons/checked.svg'

const CheckedMarked = () => (
  <Image 
    src={checked} 
    alt="Download Icon" 
    width={20} 
    height={20} 
    className='h-auto min-h-[20px]'
  />
);

export default CheckedMarked;