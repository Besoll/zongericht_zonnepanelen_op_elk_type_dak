import Image from 'next/image'
import icon_5 from '@/public/lp/icons/stepsIcons/5-installers-Orange.svg'

const Icon_5_Installers = () => (
  <Image 
    src={icon_5} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[30px] h-auto'
  />
);

export default Icon_5_Installers;
