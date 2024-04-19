import Image from 'next/image'
import icon_1 from '@/public/lp/icons/stepsIcons/1-instalation-Orange.svg'

const Icon_1_Instalation = () => (
  <Image 
    src={icon_1} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[30px] h-auto'
  />
);

export default Icon_1_Instalation;
