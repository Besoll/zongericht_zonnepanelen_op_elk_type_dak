import Image from 'next/image'
import icon2yarsOfExperiance from '@/public/lp/icons/icon2yarsOfExperiance.svg'

const Icon2yarsOfExperiance = () => (
  <Image 
    src={icon2yarsOfExperiance} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[25px] h-auto'
  />
);

export default Icon2yarsOfExperiance;
