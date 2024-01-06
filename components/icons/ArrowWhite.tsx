import Image from 'next/image'
import arrowWhite from '@/public/icons/arrowWhite.svg'

const ArrowWhite = () => (
  <Image 
    src={arrowWhite} 
    alt='arrow icon'
    width={20}
    height={20}
    loading='lazy'
    className='text-white ml-2'
  />
);

export default ArrowWhite;

