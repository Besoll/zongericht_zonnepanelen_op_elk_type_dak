import Image from 'next/image'
import icon_2 from '@/public/lp/icons/stepsIcons/2-freeInspection-Orange.svg'

const Icon_2_freeInspection = () => (
  <Image 
    src={icon_2} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[30px] h-auto'
  />
);

export default Icon_2_freeInspection;
