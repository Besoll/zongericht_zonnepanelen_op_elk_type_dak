import Image from 'next/image'
import icon3successfullInstalation from '@/public/lp/icons/icon3successfullInstalation-White.svg'

const Icon3successfullInstalation = () => (
  <Image 
    src={icon3successfullInstalation} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[50px] h-auto md:hover:scale-105 md:transition md:duration-300 md:ease-in-out 
    md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'
  />
);

export default Icon3successfullInstalation;
