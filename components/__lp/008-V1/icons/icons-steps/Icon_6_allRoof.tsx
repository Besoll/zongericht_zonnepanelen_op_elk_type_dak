import Image from 'next/image'
import icon_6 from '@/public/lp/icons/stepsIcons/6-allRoof-Night-Blue.svg'

const Icon_6_allRoof = () => (
  <Image 
    src={icon_6} 
    alt='all roof icon'
    width={60}
    height={60}
    loading='lazy'
    className='w-[40px] lg:w-[60px] md:w-[90px] h-auto'
  />
);

export default Icon_6_allRoof;
