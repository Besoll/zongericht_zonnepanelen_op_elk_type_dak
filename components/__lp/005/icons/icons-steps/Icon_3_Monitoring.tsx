import Image from 'next/image'
import icon_3 from '@/public/lp/icons/stepsIcons/3-monitoring-Light-Orange.svg'

const Icon_3_Monitoring = () => (
  <Image 
    src={icon_3} 
    alt='monitoring icon'
    width={60}
    height={60}
    loading='lazy'
    className='w-[60px] md:w-[90px] h-auto'
  />
);

export default Icon_3_Monitoring;
