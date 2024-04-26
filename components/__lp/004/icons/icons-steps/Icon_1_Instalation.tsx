import Image from 'next/image'
import icon_1 from '@/public/lp/icons/stepsIcons/1-instalation-Light-Orange.svg'

const Icon_1_Instalation = () => (
  <Image 
    src={icon_1} 
    alt='instalation icon'
    width={60}
    height={60}
    loading='lazy'
    className='w-[60px] md:w-[90px] h-auto'
  />
);

export default Icon_1_Instalation;
