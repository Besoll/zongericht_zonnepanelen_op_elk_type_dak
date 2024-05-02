import Image from 'next/image'
import icon3successfullInstalation from '@/public/lp/icons/icon3successfullInstalation-White.svg'

const Icon3successfullInstalation = () => (
  <Image 
    src={icon3successfullInstalation} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[50px] h-auto'
  />
);

export default Icon3successfullInstalation;
