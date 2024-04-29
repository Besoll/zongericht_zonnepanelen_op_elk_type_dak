import Image from 'next/image'
import icon_2 from '@/public/lp/icons/stepsIcons/2-freeInspection-Light-Orange.svg'

const Icon_2_freeInspection = () => (
  <Image 
    src={icon_2} 
    alt='freelancer icon'
    width={60}
    height={60}
    loading='lazy'
    className='w-[60px] md:w-[90px] h-auto'
  />
);

export default Icon_2_freeInspection;
