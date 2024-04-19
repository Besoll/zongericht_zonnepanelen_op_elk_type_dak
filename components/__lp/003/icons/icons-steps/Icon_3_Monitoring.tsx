import Image from 'next/image'
import icon_3 from '@/public/lp/icons/stepsIcons/3-monitoring-Orange.svg'

const Icon_3_Monitoring = () => (
  <Image 
    src={icon_3} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[30px] h-auto'
  />
);

export default Icon_3_Monitoring;
