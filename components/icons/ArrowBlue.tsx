import Image from 'next/image'
import arrowBlueSVG from '@/public/icons/arrow-blue.svg'

const ArrowBlue = () => (
  <Image 
    src={arrowBlueSVG} 
    alt='arrow icon'
    width={12}
    height={10}
    loading='lazy'
    className='h-auto'
  />
);

export default ArrowBlue;
