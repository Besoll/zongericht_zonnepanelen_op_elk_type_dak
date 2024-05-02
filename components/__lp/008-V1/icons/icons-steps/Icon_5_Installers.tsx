import Image from 'next/image'
import icon_5 from '@/public/lp/icons/stepsIcons/5-installers-Night-Blue.svg'

const Icon_5_Installers = () => (
  <Image 
    src={icon_5} 
    alt='installers icon'
    width={60}
    height={60}
    loading='lazy'
    className='w-[40px] lg:w-[60px] md:w-[90px] h-auto'
  />
);

export default Icon_5_Installers;
