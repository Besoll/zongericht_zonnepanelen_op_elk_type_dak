import Image from 'next/image'
import icon2yarsOfExperiance from '@/public/lp/icons/icon2yarsOfExperiance-White.svg'

const Icon2yarsOfExperiance = () => (
  <Image 
    src={icon2yarsOfExperiance} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[50px] h-auto'
  />
);

export default Icon2yarsOfExperiance;
