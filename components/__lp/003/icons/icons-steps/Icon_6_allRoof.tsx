import Image from 'next/image'
import icon_6 from '@/public/lp/icons/stepsIcons/6-allRoof-Orange.svg'

const Icon_6_allRoof = () => (
  <Image 
    src={icon_6} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[30px] h-auto'
  />
);

export default Icon_6_allRoof;
